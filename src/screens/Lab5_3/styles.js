import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:7,
        justifyContent:'center',
        
    },
    body:{
        flex:1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
       backgroundColor:'white',
        

    },
    footer:{
        height:80,
        backgroundColor:'#00008B',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,

    },
    details:{
        marginRight:40,
        marginTop:-150,

    },
    img:{
        flex:1,
        resizeMode: 'center',
        justifyContent:'center',
        width:'100%',
        height:450,
    },
    text:{
        marginRight:50,
        color:'white',
        fontSize:40,
        marginTop:450,
    },
   
    buttonText:{
        color:'black',
        fontSize:16,
    },
    textStyle:{
        color:'white',
        fontSize:15, 
        paddingBottom:50,
    },
    imgg:{
        width:60,
        height:40,
        marginTop:-35,
        marginLeft:5,
    },
    location:{
        fontSize:30,
        marginLeft:60,
        marginTop:40,
    },
    information:{
        fontSize:25,
        color:'blue',
        marginLeft:25,
        marginTop:40,
        fontWeight:'bold',
    },
    content:{
        marginTop:40,
        marginLeft:20,
        marginRight:20,
        lineHeight:25,
        fontSize:15,
    },
     button:{
       width:100,
       height:50,
       backgroundColor:'white',
       borderRadius:10,
       alignItems:'center',
       justifyContent:'center',  
       marginTop:15,   
       marginLeft:250,
    },
    buttonText:{
        color:'blue',
        fontWeight:'bold',
        fontSize:20,
    },
    price:{
        color:'white',
        fontSize:20,
        marginTop:-35,
        marginLeft:30,
    },
});