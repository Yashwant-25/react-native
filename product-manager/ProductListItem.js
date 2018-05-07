import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons';

const ProductListItem = ({image, title}) => (
<View style={styles.container}>
    <Image source = {{uri: image}} style = {styles.image} resizeMode = "contain"/>
    <Text style = {styles.title}>{title}</Text>
    <Ionicons name="ios-heart" color = "grey" size ={32}/>
</View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    image:{
        width:120,
        height: 120,

    },
    title:{
        color:"grey",
        alignSelf: 'center',
        justifyContent: 'center'
    }
});
export default ProductListItem;