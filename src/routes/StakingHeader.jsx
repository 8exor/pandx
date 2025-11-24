import DashboardHeader from "@components/ui/dashboard/DashboardHeader";
import { Outlet } from "react-router-dom";

export default function StakingHeader(){
    return(
        <>
        <DashboardHeader/>
        <Outlet/>
        </>
    )
}