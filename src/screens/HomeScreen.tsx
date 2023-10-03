import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
const HomeScreen = () => {
    return (
        <SafeAreaView className='bg-[#121212]'>
            <ScrollView className='w-full h-full p-8'>
                <Header type='HEADER_COMMENT'/>
                <Card type='TWIT'/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen