import './App.css'

import AppRoutes from "./routes";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { UserInfoProvider } from '@contexts/UserInfoContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


// import Header from "./components/ui/Header";



function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
 
      <QueryClientProvider client={queryClient}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
         <UserInfoProvider>
    <Toaster/>
    <HashRouter>
   <AppRoutes/>
   </HashRouter>
     <ReactQueryDevtools initialIsOpen={false} />
     </UserInfoProvider>
         </LocalizationProvider>
     </QueryClientProvider>

    </>
  )
}

export default App
