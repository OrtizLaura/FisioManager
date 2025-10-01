import React from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {style} from "./styles"
import { Input } from "../../components/Input";
import {MaterialIcons} from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import { Flag } from "../../components/Flag";
import { themes } from "../../global/themes";

type PropCard = {
    item: number,
    title: string,
    description: string,
    flag: 'Fisio' | 'Pilates'
}

const data:Array<PropCard> = [
    {
        item: 0,
        title:'Fisioterapia Chloe',
        description: 'Braço e coluna',
        flag: 'Fisio'
    },
    {
        item: 1,
        title:'Pilates seu Tony',
        description: 'Fortalecimento coluna',
        flag: 'Pilates'
    },
    {
        item: 2,
        title:'Pilates Cidão',
        description: 'Fortalecimento pélvico',
        flag: 'Pilates'
    },
    {
        item: 3,
        title:'Fisioterapia Laura',
        description: 'Tratar condocondrite',
        flag: 'Fisio'
    }
]


const Ball = ({ color }: { color: string }) => {
    return <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: color }} />;
};

const _renderCard = (item: PropCard) => {
    return (
        <TouchableOpacity style = {style.card}>
            <View style = {style.rowCard}>
                <View style = {style.rowCardLeft}>
                    <Ball color = "gray" />
                    <View>
                        <Text style={style.titleCard}>{item.title}</Text>
                        <Text style={style.descriptionCard}>{item.description}</Text>
                    </View>
                </View>
                <Flag caption="Fisio" color={themes.colors.red}/>
            </View>
        </TouchableOpacity> 
    )
}


export default function List (){
    return (
       <View style = {style.container}>
            <View style = {style.header}>
                <Text style={style.greeting}>Olá Renata!</Text>
                <View style={style.boxInput}>
                    <Input IconLeft = {MaterialIcons}
                    IconLeftName="search"
                    />
                </View>
            
            </View>
            <View style = {style.boxList}>
               <FlatList
               data={data}
               style={{marginTop:40, paddingHorizontal:30}}
               keyExtractor={(item, index) => item.item.toString()}
               renderItem={({item, index}) => _renderCard(item)}
               />

            </View>
       </View>
    )
}