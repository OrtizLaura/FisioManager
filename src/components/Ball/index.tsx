import React from "react";
import { View, Text } from "react-native";
import {style} from "./styles"

type Props = {
    color: string
}

export function Ball ({ color }:Props){
    return (
        <View style = {[style.ball{borderColor: color || 'gray'}]}/>
    )
}