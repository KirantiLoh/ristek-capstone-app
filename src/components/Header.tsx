import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'

type propsHeader = {
    type: 'HEADER_MAIN' | 'HEADER_TWIT' | 'HEADER_COMMENT'
}
const Header = (props: propsHeader) => {

    return (
        <View className='flex flex-row gap-4 items-center'>
            <Image source={require('../assets/foto.png')} className='h-10 w-10' />
            <View className='flex-grow'>
                <Text className='text-white font-bold'>Arvin</Text>
                <Text className='text-white text-[#8D8D8D]'>Computer Science 2022</Text>
            </View>
            {props.type == 'HEADER_TWIT' ? <></> : <TouchableOpacity onPress={()=> {}}>
                {/* <Image source={require(`../assets/${props.type == 'HEADER_COMMENT' ? 'tipledot.png': 'add'}.png`)} className='h-4 w-4'/>  */}
                {props.type == 'HEADER_MAIN' ? <Image source={require(`../assets/add.png`)} className='h-10 w-10'/>  :           
                <Image source={require(`../assets/tripledot.png`)} className='h-5 w-5'/> 
                }
            </TouchableOpacity> } 
        </View>
    )
}

export default Header