import './App.css'

import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { UserInfoProvider } from '@contexts/UserInfoContext';
import HomePopup from '@components/HomePopup';

// import Header from "./components/ui/Header";



function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
 
      <QueryClientProvider client={queryClient}>
         <UserInfoProvider>
    <Toaster/>
    <BrowserRouter>
   <AppRoutes/>
   </BrowserRouter>
     <ReactQueryDevtools initialIsOpen={false} />
     </UserInfoProvider>
     </QueryClientProvider>
  
    </>
  )
}

export default App
