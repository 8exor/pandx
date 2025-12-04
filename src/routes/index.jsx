import path from "path";
import StakingPage from "../layouts/staking/StakingPage";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Report from "../layouts/report/Report";
import StakingHeader from "./StakingHeader";
import Ranking from "../layouts/rank/Ranking";
import LoginPage from "@pages/LoginPage";





export default function AppRoutes (){
    const routes =[
        {
            name : "Home",
            path : "/",
            Component : Home
        },
    ]

    const stakingRoutes =[
          {
            name : "StakingPage",
            path : "/StakingPage",
            Component : StakingPage
        },
        {
            name : "Rank",
            path : "/Ranking",
            Component : Ranking,
        },
          {
            name : "Report",
            path : "/Report",
            Component : Report
        },
        //  {
        //     name : "login",
        //     path : "/login",
        //     Component : LoginPage
        // },
 
    ]

    const Router = routes.map(({name, path, Component},i)=>(
        <Route key={i} path={path} element ={<Component/>} />
    ))

    const stakeRouter = stakingRoutes.map(({name, path, Component},i)=>(
        <Route key={i} path={path} element ={<Component/>}/>
    ))

    return(
        <div>
            <Routes>
                {Router}
                <Route element={<StakingHeader/>}>
                {stakeRouter}
                </Route>
                </Routes>

        </div>
    )
}