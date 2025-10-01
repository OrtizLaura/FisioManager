import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { style } from "./styles";

type Props = {
    color: string;
    caption: string;
};

export function Flag({ ...rest }: Props) {
    return (
        <TouchableOpacity style={[style.container, { backgroundColor: rest?.color }]}>
            <Text style={{ color: '#FFF' }}>{rest.caption}</Text>
        </TouchableOpacity>
    );
}