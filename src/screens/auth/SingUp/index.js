import React, { useState } from "react";
import {styles} from './styles';
import { Pressable, Text, View } from "react-native";
import Input from "../../../components/input";
import Inputx from "../../../components/input2";
import Button5 from "../../../components/button5";
const SigUp = ({navigation})=>{
    const[checked, setChecked]=useState(false);
    return(
    <View style={styles.container}>
         <Text style={styles.titleLogin}> Welcome </Text>
         <Pressable>
                <Text style={styles.footerTextLogin}>Create your account</Text>
            </Pressable>
      <Inputx></Inputx>
      
      <View >      
       <Text style={ styles.bo1}>By registering you are agreeing to our </Text>
       <Text style={styles.bo2}>Terms of use and privacy policy. </Text>

      </View>
      <View>
        <Button5 onPress={()=> navigation.navigate('Login')}></Button5>
        
      </View>
      <View style={styles.footer}>
        <Text >Already have an Account? </Text>
        <Pressable>
                <Text style={styles.bo3} >Login</Text>
            </Pressable>
        </View>

  </View>
     
    
    );
};
export default SigUp;