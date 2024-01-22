import React from "react";
import {styles} from './styles'
import { View, Image, Text, FlatList } from "react-native";



const DATA = [
    {
        id: '7',
        title: 'Data Structures',
        imageSource: require('../../assets/images/rua1.jpg'),
    },
    {
        id: '8',
        title: 'Data Structures',
        imageSource: require('../../assets/images/rua2.jpg'),
    },
    {
        id: '7',
        title: 'Data Structures',
        imageSource: require('../../assets/images/rua1.jpg'),
    },
    {
        id: '8',
        title: 'Data Structures',
        imageSource: require('../../assets/images/rua2.jpg'),
    },
    {
        id: '7',
        title: 'Data Structures',
        imageSource: require('../../assets/images/rua1.jpg'),
    },
    {
        id: '8',
        title: 'Data Structures',
        imageSource: require('../../assets/images/rua2.jpg'),
    },
    {
        id: '7',
        title: 'Data Structures',
        imageSource: require('../../assets/images/rua1.jpg'),
    },
    {
        id: '8',
        title: 'Data Structures',
        imageSource: require('../../assets/images/rua2.jpg'),
    },
];

const Item = ({title, imageSource}) => {
    return (
        <View style={styles.item}> 
            <Image source={imageSource} style={styles.avatar}></Image>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const renderItem = ({item}) => (
    <Item imageSource={item.imageSource} title ={item.title}/>
);

const ListCourse = () => {
    return (
        <View style={styles.container}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
    );
};
export default React.memo(ListCourse);