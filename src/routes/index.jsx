import path from "path";
import StakingPage from "../layouts/staking/StakingPage";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Report from "../layouts/report/Report";
import StakingHeader from "./StakingHeader";
import Ranking from "../layouts/rank/Ranking";
import LoginPage from "@pages/LoginPage";
import TermAndCondition from "@components/TermAndCondition";
import { Component } from "@amcharts/amcharts4/core";
import HomePopup from "@components/HomePopup";
import ProtectedRoute from "./ProtectedRoute";
import PageNotFound from "./PageNotFound";
import HowTo from "@layouts/howto/HowTo";
import TrialBonsuPopUp from "@pages/TrialBonsuPopUp";
import Stats from "@layouts/stats/Stats";

export default function AppRoutes() {
  const routes = [
    {
      name: "Home",
      path: "/",
      Component: Home,
    },
    {
      name: "HomeReferral",
      path: "/referral/:referral_code?",
      Component: Home,
    },

    {
      name: "login",
      path: "/login",
      Component: LoginPage,
    },
    //   {
    //   name: "trialbonus",
    //   path: "/trialbonus",
    //   Component: TrialBonsuPopUp,
    // },
  ];

  const stakingRoutes = [
    {
      name: "StakingPage",
      path: "/StakingPage",
      Component: StakingPage,
    },
    {
      name: "Rank",
      path: "/Ranking",
      Component: Ranking,
    },
    {
      name: "Report",
      path: "/Report",
      Component: Report,
    },
     {
      name: "HowTo",
      path: "/HowTo",
      Component: HowTo,
    },
       {
      name: "Stats",
      path: "/Stats",
      Component: Stats,
    },
  ];

  const Router = routes.map(({ name, path, Component }, i) => (
    <Route key={i} path={path} element={<Component />} />
  ));

  const stakeRouter = stakingRoutes.map(({ name, path, Component }, i) => (
    <Route key={i} path={path} element={<Component />} />
  ));

  return (
    <div>
      <Routes>
        {Router}
        <Route path="/terms-and-conditions" element={<TermAndCondition />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<StakingHeader />}>{stakeRouter}</Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
