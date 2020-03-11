const { Router } = require('express');
const router = Router();
//const admin = require('firebase-admin');
//require("firebase/auth");
const admin = require("firebase");

var firebaseConfig = {
    apiKey: "AIzaSyAOF2HttCETUmZ6FV_91DJfhRZAtg1Ip5k",
    authDomain: "unipay-b85e3.firebaseapp.com",
    databaseURL: "https://unipay-b85e3.firebaseio.com",
    projectId: "unipay-b85e3",
    storageBucket: "unipay-b85e3.appspot.com",
    messagingSenderId: "1042792005691",
    appId: "1:1042792005691:web:4d42bc6afaed0dd1699c1e",
    measurementId: "G-SE4X0M8PFW"
  };
  // Initialize Firebase
  admin.initializeApp(firebaseConfig);
// Initialize Firebase
//admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
//    databaseURL: 'https://unipay-b85e3.firebaseio.com/'
//});

var db = admin.database();


router.get('/', (req, res) => {
    console.log('root page :v');
    admin.auth().signOut().then(function() {
        // Sign-out successful.
      }, function(error) {
          console.log(error);
      });
    admin.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var email = user.email;
          console.log(email);
          // ...
        } else {
          // User is signed out.
          console.log("No user found");
        }
      });

      //res.render('login');
      res.render('index');
});
router.get('/company', (req, res) => {
    console.log('company page :v');
    admin.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var email = user.email;
          console.log(email);
          res.send(email);
          // ...
        } else {
          // User is signed out.
          console.log("No user found company");
          res.send("No user found");
        }
      });
    
});
router.post('/login', (req, res) => {
    console.log(req.body.email);
    admin.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(function() {
        //aca toca meter passport, creo. :v
        console.log("Estoy dentro, trinity");
        //res.redirect('/company');
        res.send("Estoy dentro, trinity");
    })
    .catch(function(error) {
        console.log(error);
        res.send(error.message);
    });
    /*admin.auth().signInWithEmailAndPassword(req.body.email, req.body.password).then(user => {
        // Get the user's ID token as it is needed to exchange for a session cookie.
        return user.getIdToken().then(idToken => {
          // Session login endpoint is queried and the session cookie is set.
          // CSRF protection should be taken into account.
          // ...
          const csrfToken = getCookie('csrfToken')
          return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken);
        });
      }).then(() => {
        // A page redirect would suffice as the persistence is set to NONE.
        return firebase.auth().signOut();
      }).then(() => {
        window.location.assign('/profile');
      });*/
      
});
// Endpoint para crear nueva compania
router.post('/new-company', (req, res) => {
    
    console.log(req.body); //parametros que se pasan al endpoint con los datos de la compania
    const newCompany = {
        cmp_name: req.body.cmp_name,
        cmp_email: req.body.cmp_email,
        cmp_cel: req.body.cmp_cel, 
    };
    
    // Crear nuevo usuario en firebase
    // API nueva
    admin.auth().createUserWithEmailAndPassword(newCompany.cmp_email, req.body.password1)
    .then(function() {
          // si todo sale bien se crea un nuevo valor en la tabla companies
          console.log('Successfully created new user:', newCompany.cmp_email);
          db.ref('companies').push(newCompany);
          res.send('Ok');
      
    })
    .catch(function(error) {
        console.log(error);
        res.statusCode = 400;
        res.send(error.message);
    });
    //API vieja
    /*admin.auth().createUser({
        email: newCompany.cmp_email,
        emailVerified: false,
        phoneNumber: newCompany.cmp_cel,
        password: req.body.password1,
        displayName: newCompany.cmp_name
      })
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          // si todo sale bien se crea un nuevo valor en la tabla companies
          console.log('Successfully created new user:', userRecord.uid);
          db.ref('companies').push(newCompany);
          res.send('Ok');
        })
        .catch(function(error) {
          // Si hay un error se notifica
          //console.log('Error creating new user:', error);
          res.statusCode = 400;
          res.send(error.message);
        });*/
    
});
module.exports = router;
