
import React from "react";
import {styles} from './styles';
import { View, Text, Image, Pressable  } from "react-native";
import Button1 from "../../../components/buton1";
import Button2 from "../../../components/button2";
const Splash = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Image
            resizeMode ="contain"
            style={styles.img}
            source={require('../../../assets/images/wec.png')}
            />
            <Text style={styles.title}> Mudah dalam bertransaksi,dengan Jumot</Text>
            <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
            <Text style={[styles.title, styles.innerTitlee]}>Here!</Text>
            <Button1 onPress={() => navigation.navigate('Login')}></Button1>
            <Button2  onPress={() => navigation.navigate('Signup')}></Button2>
            <Pressable>
                <Text style={styles.footerText}>Continue as guest</Text>
            </Pressable>
        </View>

    );
};
export default Splash;