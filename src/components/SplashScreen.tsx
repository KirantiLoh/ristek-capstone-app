import { View, Text } from 'react-native'
import React from 'react'

const SplashScreen = () => {
    return (
        <View className='flex flex-col items-center justify-center w-full h-screen bg-slate-950'>
            <Text className='font-semibold text-purple-600 text-9xl'>R</Text>
            <Text className='text-3xl font-semibold text-purple-600'>Capstone</Text>
        </View>
    )
}

export default SplashScreen