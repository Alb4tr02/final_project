import React, { Component } from "react";
import { Alert, Button } from 'reactstrap';
import axios from 'axios';

export default class Product extends Component {
    constructor(porps) {
        super(porps)
        this.state = {
            product_name: '',
            product_image: '',
            product_description: ''
        }

    }

    valueToState = (target) => {
        this.setState( () => {
                return { [target.name]: target.value}
        })
    }

    render() {
        return (
            <div>
                <h1> {product_name} </h1>

                <image url={product_image}></image>

                <input name='product_description' type='text' value={product_description}></input>
            </div>
        );
    }

}