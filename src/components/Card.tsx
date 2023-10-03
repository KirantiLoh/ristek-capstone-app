import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Header from './Header'


type propsCardHome ={
    type:'COMMENT' | 'TWIT'
}
const Card = (props:propsCardHome) => {
    return (
        <TouchableOpacity className='bg-[#171717] px-5 py-6 rounded-2xl'>
            <View className='gap-3 p-2'>
                {/* IMAGE */}
                <Header type='HEADER_COMMENT'/>
                <Text className='text-[#8D8D8D]'>Jdnya login register, comment, like dislike, sama crud post.</Text>

                { props.type == 'TWIT' ? <View className='flex flex-row gap-1'>
                    <View className='flex flex-row gap-1 items-center'>
                        <TouchableOpacity>
                            <Image 
                                source={require('../assets/comment.png')}
                                className='h-3 w-3'
                                />
                        </TouchableOpacity>
                        <Text className='text-[#8D8D8D]'>12</Text>
                    </View>
                    <View className='flex flex-row gap-1 items-center'>
                        <TouchableOpacity>
                            <Image 
                            source={require('../assets/comment.png')}
                            className='h-3 w-3'
                            />
                        </TouchableOpacity>
                        <Text className='text-[#8D8D8D]'>12</Text>
                    </View>
                </View>: <></>}
            </View>
        </TouchableOpacity>
    )
}

export default Card