import path from "path";
import StakingPage from "../layouts/staking/StakingPage";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";



export default function AppRoutes (){
    const routes =[
        {
            name : "Home",
            path : "/",
            Component : Home
        },

        {
            name : "StakingPage",
            path : "/StakingPage",
            Component : StakingPage
        }
    ]

    const Router = routes.map(({name, path, Component},i)=>(
        <Route key={i} path={path} element ={<Component/>} />
    ))

    return(
        <div>
            <Routes>{Router}</Routes>
        </div>
    )
}