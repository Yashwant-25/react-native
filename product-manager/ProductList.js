import React, { Component } from "react";
import ProductListItem from "./ProductListItem";
import { ActivityIndicator, View, StyleSheet, ScrollView} from "react-native";

let URI = 'http://172.16.100.127:4000';

class ProductList extends React.Component{
    constructor(props){
        super(props)
        this.state = {products: [], isLoading: false};
    }

    componentDidMount(){
        this.setState({isLoading:true});
        fetch(`${URI}/products`)
        .then(response => response.json())
        .then(data => {this.setState({products: data, isLoading: false})});
    }

    renderProducts(){
        return this.state.products.map(product => (
            <ProductListItem
            key = {product.id}
            title = {product.title}
            image = {`${URI}/images/${product.image}`}
            />
        ));
    }

    render(){
        return(
            <ScrollView>
                {this.state.isLoading ? (<ActivityIndicator size="large" color= "purple"/>) : this.renderProducts()}
            </ScrollView>
        )
    }
}
    const styles = StyleSheet.create({
        loader:{
            flexDirection: 'row',
            justifyContent: 'center',
        }
    })

export default ProductList;