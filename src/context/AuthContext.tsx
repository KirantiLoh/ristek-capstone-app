import axios, { AxiosError } from "axios";
import { createContext, useState, useEffect, ReactNode, useContext } from "react"
import { ITokens, UnauthenticatedParamList } from "../../typings";
import * as SecureStore from 'expo-secure-store';
import jwt_decode from 'jwt-decode';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import SplashScreen from "../components/SplashScreen";

const AuthContext = createContext<{
    accessToken: string,
    user: {
        username: string,
        email: string,
    },
    login: (username: string, password: string) => void,
    register: (username: string, password: string, email: string) => void,
    logout: () => void,
    refreshToken: () => Promise<void>,
}>({
    accessToken: "",
    user: { username: "", email: "" },
    login: undefined as unknown as (username: string, password: string) => void,
    logout: undefined as unknown as () => void,
    register: undefined as unknown as (username: string, password: string, email: string) => void,
    refreshToken: undefined as unknown as () => Promise<void>,
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [accessToken, setAccessToken] = useState("")
    const [user, setUser] = useState<{ username: string, email: string }>({ username: "", email: "" });
    const [loading, setLoading] = useState(true);

    const navigator = useNavigation<StackNavigationProp<UnauthenticatedParamList>>();

    const login = async (username: string, password: string) => {
        try {
            const res = await axios.post(`http://192.168.0.109:8080/v1/auth/login`, { username, password }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (res.status !== 200) return;
            const data: ITokens = await res.data;
            const user: { username: string, email: string } = jwt_decode(data.access_token);
            setUser({ username: user.username, email: user.email });
            await SecureStore.setItemAsync("refresh_token", data.refresh_token);
            setAccessToken(data.access_token);
        } catch (error) {
            const err = error as AxiosError;
            console.error(err)
        }
        finally {
            setLoading(false);
        }
    }

    const register = async (username: string, password: string, email: string) => {
        const res = await axios.post(`http://192.168.0.109:8080/v1/auth/register`, { username, password, email }, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (res.status !== 200) return;
        navigator.navigate('Login');
        setLoading(false);
    }

    const refreshToken = async () => {
        const refreshToken = await SecureStore.getItemAsync("refresh_token")
        if (!refreshToken) return
        try {
            const res = await axios.post(`http://192.168.0.109:8080/v1/auth/refresh`, { refresh_token: refreshToken }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (res.status !== 200) return;
            const data: ITokens = await res.data;
            const user: { username: string, email: string } = jwt_decode(data.access_token);
            setUser({ username: user.username, email: user.email });
            await SecureStore.setItemAsync("refresh_token", data.refresh_token);
            setAccessToken(data.access_token);
        } catch (error) {
            const err = error as AxiosError;
            console.error(err)
        }
        finally {
            setLoading(false);
        }
    }

    const logout = () => {
        SecureStore.deleteItemAsync("refresh_token");
        setAccessToken("");
    }

    useEffect(() => {
        refreshToken();
    }, [])

    const contextValue = {
        accessToken,
        user,
        login,
        register,
        logout,
        refreshToken,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {!loading ? children : <SplashScreen />}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);