import React, { useState } from "react";
import {styles} from './styles';
import { Pressable, Text, View } from "react-native";
import Input from "../../../components/input";
import Button3 from "../../../components/button3";
import GoogleButton from "../../../components/button4";

const Login = ()=>{
    const[checked, setChecked]=useState(false);
    return(
    <View style={styles.container}>
         <Text style={styles.titleLogin}> Welcome </Text>
         <Pressable>
                <Text style={styles.footerTextLogin}>Login to your create account</Text>
            </Pressable>
      <Input></Input>
      <View style={styles.checkRow}>
        {/* <Checkbox checked={checked} onCheck={setChecked}></Checkbox> */}
        <Text style={styles.checkText}>Remember me</Text>
        <Text style={styles.checkText1}>Forget Password ? </Text>

       <Button3></Button3>
      
      
      </View>
      {/* <Button style={styles.button} title="Login"></Button> */}
      <Text style={styles.or}>OR</Text>
      <GoogleButton ></GoogleButton>
      <View style={styles.footer}>
        <Text >Already have an Account? </Text>
        <Pressable>
                <Text style={styles.bo3} >Login</Text>
            </Pressable>
        </View>
  </View>
     
    
    );
};
export default Login;