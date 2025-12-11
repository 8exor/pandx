import { createContext, useState } from "react"
import {useQuery} from '@tanstack/react-query'
import axiosInstance from "@utils/axiosInstance";
import { REPORTS } from "@services/panda.api.services";

export const UserInfoContext = createContext(null);

export const UserInfoProvider =({children})=>{
    const[isLogin, setLogin] = useState("");

const {data:userData, isLoading:userLoading, error:userError, refetch} = useQuery({
    queryKey : ["userData"],
    queryFn : async()=>{
        const {data} = await axiosInstance.get(REPORTS.userInfo);
        return data;
    }
})

// const {data:profileData, isLoading:profileLoading, error:profileError} = useQuery({
//     queryKey : ["profileData"],
//     queryFn : async()=>{
//         const {data} = await axiosInstance.get(REPORTS?.profile);
//         return data;
//     }
// })

// const {data:teamData, isLoading:teamLoading, error:teamError} = useQuery({
//     queryKey: ["teamData"],
//     queryFn : async ()=>{
//         const {data} = await axiosInstance.get(REPORTS?.teamInfo);
//         return data
// ;    }
// })

// console.log("is the user using data : ", userData)
// console.log("wass up ", profileData)
// console.log("let make a team ", teamData)



return (
    <UserInfoContext.Provider value={{userData, userLoading, userError, setLogin, isLogin, refetch}}>
        {children}
    </UserInfoContext.Provider>
)

}