// import React, {useState} from "react";
// import { View,SafeAreaView,TextInput,Text, Pressable ,Image} from "react-native";
// import {styles} from "./styles"

// const Input = ({label,placeholder,isPassword}) => {
//   const [isPasswordVisible,setIsPasswordVisible] = useState(false);
//   const onEyePress =()=>{
//     setIsPasswordVisible(!isPasswordVisible);
//   };
  
//   return (
//     <View style={styles.container} >
//       <Text style={styles.label}>{label}</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//              secureTextEntry={isPassword && !isPasswordVisible}
//              placeholder={placeholder}
//              style={styles.input}
//         />
//         {isPassword ? (
//           <Pressable onPress={onEyePress}>
//             <Image
//              style={styles.eye}
//              source={isPasswordVisible
//               ? require('../../assets/Icons/eye.png')
//              }            
//              />
//           </Pressable>
//         ) : null }
//             };
//       </View>
//     </View>
//   );
// };
// export default Input;



import React from "react";
import {styles} from "./styles"
import { View,SafeAreaView,TextInput,Text, Pressable } from "react-native";
const Inputx = () => {
  return (
<SafeAreaView>
      <TextInput
      placeholder="Name"
        style={styles.inputx}
      />
       <TextInput
       placeholder="Email"
        style={styles.inputx}
      />
       <TextInput
       placeholder="Password"
        style={styles.inputx}
      />
      <TextInput
       placeholder="Comfirm Password"
        style={styles.inputx}
      />

    </SafeAreaView>
     );
     };
export default Inputx;