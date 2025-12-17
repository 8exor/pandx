import "./App.css";

import AppRoutes from "./routes";
import { BrowserRouter, HashRouter, Navigate, useNavigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { UserInfoProvider } from "@contexts/UserInfoContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  useAppKitAccount,
  useAppKitProvider,
  useDisconnect,
} from "@reown/appkit/react";
import { getAccessToken } from "@utils/Session";
import { ethers } from "ethers";
import { replace } from "@amcharts/amcharts4/.internal/core/utils/Array";
import WalletAccountListener from "@utils/WalletAccountListener";

// import Header from "./components/ui/Header";

function App() {
  const { disconnect } = useDisconnect();
  const { walletProvider } = useAppKitProvider("eip155");
  const { address, isConnected } = useAppKitAccount();

  // useEffect(() => {
  //   const token = getAccessToken();
  //   if (!token) {
  //     disconnect();
  //   }
  // }, []);




  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <UserInfoProvider>
            <Toaster />
            <HashRouter>
              <WalletAccountListener/>
              <AppRoutes />
            </HashRouter>
            <ReactQueryDevtools initialIsOpen={false} />
          </UserInfoProvider>
        </LocalizationProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
