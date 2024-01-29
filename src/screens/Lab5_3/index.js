import React from 'react';
import { ImageBackground, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import { styles } from '../Lab5_3/styles';

const Lab5_3 = () => {
  return (
    <View style = {styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <ImageBackground
               source={require('../../assets/images/hoian.png')}
               style={styles.img}>
                <View style={styles.details}>
                    <Text style={styles.text}> PHỐ CỔ HỘI AN </Text> 
                                  
                </View>        
            </ImageBackground>
    
            <View style={styles.body}>
               <View>
                   <Text style={styles.location}> Quảng Nam</Text>
                   <ImageBackground 
                      style={styles.imgg}
                      source={require('../../assets/images/iconLotication.jpg')}/>
                    <Text style={styles.information}> Thông tin chuyến đi </Text>
                    <Text style={styles.content}> Phố cổ Hội An là một đô thị cổ nằm ở hạ lưu sông Thu Bồn, thuộc vùng đồng bằng ven biển tỉnh Quảng Nam, 
                    Việt Nam, cách thành phố Đà Nẵng khoảng 30 km về phía Nam. 
                    Nhờ những yếu tố địa lý và khí hậu thuận lợi, Hội An từng là một thương cảng quốc tế sầm uất,
                     nơi gặp gỡ của những thuyền buôn Nhật Bản, Trung Quốc và phương Tây trong suốt thế kỷ XVII và XVIII. Trước thời kỳ này, nơi đây cũng từng có những dấu tích của thương cảng...</Text>
                   
                 </View>
            </View>
            
            <View style={styles.footer}>
            <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> Đặt ngay</Text>
             </TouchableOpacity>
             <Text style={styles.price}> $100/ ngày</Text>
            </View>
            
    </View>
    
  );
};



export default Lab5_3;