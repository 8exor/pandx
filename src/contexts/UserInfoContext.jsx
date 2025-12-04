import { createContext, useState } from "react"
import {useQuery} from '@tanstack/react-query'
import axiosInstance from "@utils/axiosInstance";
import { REPORTS } from "@services/panda.api.services";

export const UserInfoContext = createContext(null);

export const UserInfoProvider =({children})=>{
    const[isLogin, setLogin] = useState("");

const {data:userData, isLoading, error} = useQuery({
    queryKey : ["userData"],
    queryFn : async()=>{
        const {data} = await axiosInstance.get(REPORTS.userInfo);
        return data;
    }
})
console.log("is the user using data : ", userData)

return (
    <UserInfoContext.Provider value={{userData, isLoading, error, setLogin, isLogin}}>
        {children}
    </UserInfoContext.Provider>
)

}