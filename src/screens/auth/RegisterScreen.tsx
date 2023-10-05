import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import { useState } from 'react'
import { Image, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { UnauthenticatedParamList } from '../../../typings';
import { StackNavigationProp } from "@react-navigation/stack"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useAuth } from '../../context/AuthContext';

const RegisterScreen = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigator = useNavigation<StackNavigationProp<UnauthenticatedParamList>>();

  const { register } = useAuth();

  return (
    <KeyboardAwareScrollView className='flex-1 h-screen bg-slate-950' contentContainerStyle={{ flexGrow: 1 }}>
      <View className='px-5'>
        <View className='pt-20 mx-auto'>
          {/* <Image source={require("../../../assets/register.png")} alt="" style={{ width: 250, height: 250 }} /> */}
            <Text className='font-semibold text-purple-600 text-9xl'>R</Text>
        </View>
        <View className='mt-3'>
          <Text className='text-4xl font-semibold text-center text-white'>Welcome!</Text>
          <Text className='text-lg text-center text-white opacity-80'>Join the best social media app</Text>
        </View>
        <View className='flex flex-col gap-6 mt-3'>
          <View>
            <TextInput
              value={username}
              onChangeText={text => setUsername(text)}
              className="p-2 text-lg bg-white rounded-md border-b-transparent"
              placeholder='Username'
              keyboardAppearance='dark'
            />
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              className="p-2 mt-5 text-lg bg-white rounded-md border-b-transparent"
              placeholder='Email'
              keyboardAppearance='dark'
            />
            <View className='flex flex-row items-center w-full mt-5'>
              <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                className="flex-1 p-2 text-lg bg-white border-transparent rounded-l-md"
                secureTextEntry={!showPassword}
                placeholder='Password'
                keyboardAppearance='dark'
                style={{
                  borderWidth: 1,
                }}
              />
              <View className='py-2.5 rounded-r-md border-[2.25px] border-white pr-2 bg-white '>
                <Ionicons onPress={() => setShowPassword(!showPassword)} name={showPassword ? "eye-off" : "eye"} size={20} color="#121212" className='my-auto align-middle' />
              </View>
            </View>
          </View>
          <TouchableOpacity
            className='py-2 mt-3 bg-purple-600 rounded'
            onPress={() => register(username, password, email)}
            disabled={!username || !password}
            style={{
              opacity: !username || !password ? .5 : 1
            }}
          >
            <Text className='text-lg font-medium text-center text-white'>
              Register
            </Text>
          </TouchableOpacity>
          <View className='flex flex-row items-center gap-1 pb-5'>
            <Text className='text-lg text-white'>
              Have an account? Login
            </Text>
            <Text onPress={() => navigator.navigate('Login')} className='text-lg text-white underline underline-offset-4'>
              here
            </Text>
          </View>
        </View>
      </View>
      {/* <View className='flex-1'></View> */}
    </KeyboardAwareScrollView>
  )
}

export default RegisterScreen