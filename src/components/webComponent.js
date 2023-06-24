import React from 'react';

function webComponent(props) {
    return (
        <View style={{flex:1}}>
            <WebView
            source={{uri:""}}
            style={{flex:1}}
            />
        </View>
    );
}

export default webComponent;