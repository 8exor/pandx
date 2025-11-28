import { createContext } from "react"
import {useQuery} from '@tanstack/react-query'
import axiosInstance from "@utils/axiosInstance";
import { REPORTS } from "@services/panda.api.services";

export const UserInfoContext = createContext(null);

export const UserInfoProivder =()=>{

const {data} = useQuery({
    queryKey : ["userData"],
    queryFn : async()=>{
        const {data} = await axiosInstance.get(REPORTS.userInfo);
        return data;
    }
})


return (
    <UserInfoContext.Provider value={data}>

    </UserInfoContext.Provider>
)

}