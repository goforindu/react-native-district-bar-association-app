import React from 'react';
import {View, Text, FlatList, StyleSheet, Linking} from 'react-native';

function ImportantLinksScreen(props) {
    const implinks=[{
        id:1,
        title:"Supreme Court Of India",
        link:""
    },
    {   
        id:2,
        title:"Madhya Pradesh High Court",
        link:""
    },
    {
        id:3,
        title:"Bar Council of India",
        link:""
    },
    {   id:4,
        title:"Law Commission Of India",
        link:""
    },
    {   id:5,
        title:"National Consumer Disputes Redressal Commission",
        link:""
    },
    {   id:6,
        title:"Supreme Court Legal Services Commitee",
        link:""
    },
    {   id:7,
        title:"Debts Recovery Tribunals",
        link:""
    },
    {
        id:8,
        title:"Central Administrative Tribunal",
        link:""
    },
    {
        id:8,
        title:"Central Administrative Tribunal",
        link:""
    }
    ,
    {
        id:8,
        title:"Central Administrative Tribunal",
        link:""
    }
    ,
    {
        id:8,
        title:"Central Administrative Tribunal",
        link:""
    }
    ,
    {
        id:8,
        title:"Central Administrative Tribunal",
        link:""
    }
    ,
    {
        id:8,
        title:"Central Administrative Tribunal",
        link:""
    }

];
const renderItem=({item})=>{
   return <View style={styles.container}>
   <Text style={styles.title}  onPress={() => Linking.openURL('http://google.com')}>{item.title} 

   </Text></View>;
}
    return (
        <View>
           <FlatList data={implinks} renderItem={renderItem}/>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{width:"90%", 
    borderRadius:5,
     backgroundColor:"#000000" , 
     color:"#ffffff",
     marginHorizontal:"auto",
       marginBottom:10,
       padding:10},
    title:{
           fontSize:18,
            color:"red"
    },
   
})

export default ImportantLinksScreen;