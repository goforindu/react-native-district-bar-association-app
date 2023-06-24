import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function IdCardScreen(props) {
    return (
        <View style={{flex:1,backgroundColor:"#ffffff"}}>
            <Text style={{textAlign:"center", fontSize:18}}>
                Id card screen
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end',padding:10, margin:10, borderBottomColor:'#7C007C',borderBottomWidth:3}}>
                <View>
                <Text style={{fontSize:16}}>Advocate</Text>
                <Text style={{fontSize:16, fontWeight:500,}}>Rajeshwari Prasad</Text>
                </View>
                <Image source={require('../../assets/images/profile.png')} style={{width:80,height:100,alignSelf:'center'}}/>
            </View>
            <View>
                <View style={styles.idTextView}>
                    <Text style={styles.idTxtTitle}>Registration Number</Text>
                    <Text>MP/2016/1111</Text>
                </View>
                <View style={styles.idTextView}>
                    <Text style={styles.idTxtTitle}>Registered Address</Text>
                    <View>
                        <Text>Gold 4567 Nikhil Heights</Text>
                        <Text>Hoshangabad Road Bhopal</Text>
                    </View>  
                </View>
                <View style={styles.idTextView}>
                    <Text style={styles.idTxtTitle}>Blood Group</Text>
                    <Text>O+ve</Text>
                </View>
                <View style={styles.idTextView}>
                    <Text style={styles.idTxtTitle}>Member Since</Text>
                    <Text>2017</Text>
                </View>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    idTextView:{
        flexDirection:'row',
        paddingHorizontal:20,
        marginVertical:10,
      justifyContent:'space-between',
      
       
    },
    idTxtTitle:{
        fontWeight:500
    }
})

export default IdCardScreen;