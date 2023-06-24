import React from 'react';
import { View,Image,StyleSheet,Text,TextInput, TouchableOpacity } from 'react-native';
function LoginScreen(props) {
    return (
       <View>
       
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/images/applogo.png')}  style={{width:80,height:80,alignSelf:'center'}}/>
    
            <Text style={styles.logoText}>District Bar Association Bhopal</Text>
            </View>
            <View style={styles.loginContainer}>
                <Text style={{textAlign:'center',fontWeight:'500',fontSize:26}}>Login</Text>
                    <View style={{marginVertical:20}}>
                    <Text style={styles.inputlabel}>Username/Phone Number</Text>
                    <TextInput style={styles.input} placeholder='user@example.com'/>
                    </View>
                    <View>
                    <Text style={styles.inputlabel}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true} value="abcdefghijkl" textContentType='password'/>
                    </View>
                    <TouchableOpacity><View style={styles.loginBtn}><Text style={styles.loginBtnTxt}>Login</Text></View></TouchableOpacity>
                    <Text style={styles.forgotTxt}>Forgot Password ?</Text>
            </View>
    </View>
           
      
    );
}

const styles=StyleSheet.create({
    logoContainer:{
        flexDirection:'column',
        width:'80%',
        justifyContent:'center',
        marginHorizontal:'auto',
        alignItems:'center',
        marginTop:10
       
    },
    logoText:{
        fontFamily:"sans-serif",
        fontWeight:500,
        fontSize:16
    },
    loginContainer:{
       
        marginTop:40,
        width:'90%',
        marginHorizontal:'auto'
    },
    input:{
        borderColor:'#A919EF',
        padding:10,
        borderRadius:5,
        borderWidth:2
    },
    inputlabel:{
        fontSize:16,
        color:'#777777',
        marginHorizontal:5
    },
    loginBtn:{
        backgroundColor:'#7C007C',
        borderColor:'#7C007C',
        padding:10,
        borderRadius:5,
        borderWidth:2,
        marginTop:20,
        width:"50%",
        marginHorizontal:"auto",
       
    },
    loginBtnTxt:{
        color:"#ffffff",
        textAlign:'center'
    },
    forgotTxt:{
        color:"#7C007C",
        textTransform:"uppercase",
        marginVertical:10,
        width:"50%",
        marginHorizontal:"auto",
        textAlign:'center',
        fontSize:12
    }

})

export default LoginScreen;