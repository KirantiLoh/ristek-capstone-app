import { View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import React from 'react'

type propsHeader = {
}
const TextField = () => {

    return (
       <View className='bg-[#171717] py-3 px-5 rounded-full flex flex-row justify-between items-center'>
            <TextInput
                editable
                placeholderTextColor={'#8D8D8D'}
                className='text-[#8D8D8D]'
                placeholder='Berikan komentar anda'
            >

            </TextInput>
            <TouchableOpacity>
                <Image source={require('../assets/tabler_send.png')} className='w-4 h-4' />
            </TouchableOpacity>
       </View>
    )
}

export default TextField