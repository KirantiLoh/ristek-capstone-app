import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from './src/screens/HomeScreen';
import { AuthenticatedParamList, RootRouteList, UnauthenticatedParamList } from './typings';
import { Ionicons } from '@expo/vector-icons';
// import ProfileScreen from './src/screens/ProfileScreen';
// import { AxiosProvider } from './src/context/AxiosContext';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import CommentScreen from './src/screens/CommentScreen';

const Screens = () => {
  const Tab = createBottomTabNavigator<AuthenticatedParamList>();

  const Stack = createStackNavigator<UnauthenticatedParamList>();

  const { accessToken } = useAuth();

  return (
    <>
      {
        accessToken ?
          <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
              headerStyle: {
                backgroundColor: "#121212",
              },
              headerTitleStyle: {
                color: "#eee",
              },
              tabBarStyle: {
                backgroundColor: "#121212",
                borderTopColor: "transparent"
              },
              tabBarIconStyle: {
                color: "#ccc",
              },
              tabBarActiveTintColor: "#39ace7",
              tabBarInactiveTintColor: "#ccc",
              headerShown: false,
            }}
          >
            <Tab.Screen
              name='Home'
              component={HomeScreen}
              options={{
                tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
              }}
            />
            {/* <Tab.Screen
              name='Profile'
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
              }}
            /> */}
          </Tab.Navigator>
          :
          <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
              headerStyle: {
                backgroundColor: "#121212",
                shadowColor: ""
              },
              // headerTitleStyle: {
              //   color: "#eee"
              // },
              headerShown: false,
            }}
          >
            <Stack.Screen
              name='Login'
              component={LoginScreen}
            />
            <Stack.Screen
              name='Register'
              component={RegisterScreen}
            />
          </Stack.Navigator>
      }
    </>
  );
}

export default function App() {
  return (
    // <NavigationContainer>
    //   <AuthProvider>
    //     <Screens />
    //   </AuthProvider>
    // </NavigationContainer>
    // <HomeScreen></HomeScreen>
    <CommentScreen/>
    );
}

