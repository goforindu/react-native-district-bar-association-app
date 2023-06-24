import React from 'react';
import {View, Text, FlatList, ScrollView, SafeAreaView, Button} from 'react-native';
import * as FileSystem from 'expo-file-system';
function AdvocateDirectoryScreen(props) {

    const downloadFromUrl=async()=>{
        const filename="small.mp4";
        const result=FileSystem.downloadAsync(
            'http://techslides.com/demos/sample-videos/small.mp4',
            FileSystem.documentDirectory+filename
        );
        console.log(result);
       
    }

   

    const members=[{
        name:"Shri Dr.P.C. Kothari",
        designation:"Bar President",
        city:"Bhopal",
        mobile:"9826053871"
    },
    {
        name:"Shri Sushil Kumar Shrivastava",
        designation:"Secretary",
        city:"Bhopal",
        mobile:"9165478969"
    },
    {
        name:"Shri Suhag Singh Solanki",
        designation:"Vice President",
        city:"Bhopal",
        mobile:"9826899163"
    },
    {
        name:"Shri Shashi Joshi",
        designation:"Joint Secretary",
        city:"Bhopal",
        mobile:"9893700252"
    },
    {
        name:"Shri Shubham Meena",
        designation:"Treasurer",
        city:"Bhopal",
        mobile:"9893013556"
    },
    {
        name:"Shri Saurabh Sthaphak",
        designation:"Librarian",
        city:"Bhopal",
        mobile:"9977229304"
    },
    

];
const renderItem=({item})=>{
    return(
        <View style={{width:"90%", borderRadius:5, backgroundColor:"#000000" , color:"#ffffff",marginHorizontal:"auto",  marginBottom:10,padding:10}}>
            <Text style={{color:"#ffffff"}}>{item.name}</Text>
            <Text style={{color:"#ffffff"}}>{item.designation}</Text>
            <Text style={{color:"#ffffff"}}>{item.city}</Text>
            <Text style={{color:"#ffffff"}}>{item.mobile}</Text>
            </View>
    )
}
    return (
          <ScrollView>
           <Button title="Download full directory" onPress={console.log("Directory downloaded")}/>
           <FlatList style={{marginVertical:10}} data={members} renderItem={renderItem}/>
           </ScrollView>
    );
}

export default AdvocateDirectoryScreen;