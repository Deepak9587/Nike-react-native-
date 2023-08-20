import React from 'react';
// import { Text, View } from 'react-native';
// import { View as MotiView } from 'moti'
import { MotiView } from '@motify/components';

// const Loading = ({ size }) => {
//     return (
//         <MotiView
//             from={{
//                 width: size,
//                 height:height,
//                 borderRadius:size/2,
//                 borderWidth:0,
//                 shadowOpacity:0.5,
//             }}
//             animate={{
//                 with:size+20,
//                 height:size+20,
//                 borderRadius:(size+20)/2,
//                 borderWidth:size/10,
//                 shadowOpacity:1,
//             }}
//             transition={{
//                 type:'timing',
//                 duration:1000,
//                 loop:true,
//             }}

//         style={{
//             width:size,
//             height:size,
//             borderRadius:size/2,
//             borderWidth:size/10,
//             borderColor:"#fff",
//             shadowColor:'#fff',
//             shadowOffset:{width:0,height:1},
//             shadowOpacity:1,
//             shadowRadius:10,
//         }}
//         />
//     )
// }
const  LoadingIndicator=()=>{
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#010100',
            }}>
                {/* <Loading size={100}/> */}
                <Text style={{color:'white'}}>dfsdfsdfdsf</Text>
        </View>
    )

};

export default LoadingIndicator;