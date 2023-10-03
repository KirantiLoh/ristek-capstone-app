import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import TextField from '../components/TextInput'

const CommentScreen = () => {
    return (
        <SafeAreaView className='bg-[#121212]'>
            <ScrollView className='w-full h-full p-8'>                
                <View style={{gap:12}}>
                    <Card type='COMMENT'/>
                    <Text className='text-center text-[#8D8D8D]'>Comment’s</Text>

                    {/* DI MAP AJA */}
                    <Card type='COMMENT'/>
                    <Card type='COMMENT'/>
                    <TextField/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CommentScreen