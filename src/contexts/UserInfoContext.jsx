import { createContext, useEffect, useState } from "react"
import {useMutation, useQuery} from '@tanstack/react-query'
import axiosInstance from "@utils/axiosInstance";
import { AUTH, REPORTS } from "@services/panda.api.services";
import { getAccessToken, setAccessToken } from "@utils/Session";
import { useDisconnect } from "@reown/appkit/react";

export const UserInfoContext = createContext(null);

export const UserInfoProvider =({children})=>{
    const[isLogin, setLogin] = useState("");
    const [incomeId, setIncomeId] = useState(4);
     const { disconnect } = useDisconnect();

const {data:userData, isLoading:userLoading, error:userError, refetch} = useQuery({
    queryKey : ["userData"],
    queryFn : async()=>{
        const {data} = await axiosInstance.get(REPORTS.userInfo);
        return data;
    }
})

  const { data:incomeReporting, isLoading:incomeLoading, refetch:incomeRefetch } = useQuery({
    queryKey: ["incomeReports", incomeId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `${REPORTS?.incomeReports}?incomeId=${incomeId}`
      );
      return data;
    },
  });

 let token;
  const LoginUser = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosInstance.post(AUTH?.login, formData);
      return data;
    },
    onSuccess: async (data) => {
      toast.success(data?.message);
      // await new Promise((p) => setTimeout(p, 3000));
      setAccessToken(data?.data?.token);
     
       token = await getAccessToken();
      // console.log("what token we accessing or getting tell meeeeee..",token);
      if(token){
         setIsLoggedIn(true);
      navigate("/StakingPage");
      }
    },
    onError: (error) => {
     
        toast.error(error?.message);
        disconnect();
 
    },
  });


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





return (
    <UserInfoContext.Provider value={{userData, userLoading, userError, setLogin, isLogin, refetch, incomeReporting, incomeLoading, incomeRefetch, incomeId,setIncomeId, LoginUser, token}}>
        {children}
    </UserInfoContext.Provider>
)

}