import React from "react";
import { View,Text } from "react-native-animatable";
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
// var heigh1 = Dimensions.get('window').height;
// var width1 = Dimensions.get('window').width;
const CardCustom = (props)=>{
    return(
      
        <Card style={{height: props.h * 0.55,width:props.w, borderRadius: props.r,
    
        margin:props.m}}>
        <Card.Cover
          style={{borderRadius: props.r, height: props.h * 0.55,width:props.w, margin: 0,
           
          }}
          source={{uri: 'https://picsum.photos/700'}}
        />
      </Card>
    )
};
export default CardCustom;