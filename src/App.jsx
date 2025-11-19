import './App.css'
import { createAppKit } from "@reown/appkit/react";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { mainnet, arbitrum, bscTestnet } from "@reown/appkit/networks";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
// import Header from "./components/ui/Header";

// 1. Get projectId
const projectId = "49546acedc91dd32f884746f88babb8a";

// 2. Create a metadata object - optional
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 3. Create the AppKit instance
createAppKit({
  adapters: [new Ethers5Adapter()],
  metadata,
  networks : [bscTestnet],
  projectId,
  features: {
     analytics: true,
    socials: false,
    email: false, // Optional - defaults to your Cloud configuration
    allWallets: "SHOW",
    emailShowWallets: false,
  },
});

function App() {

  return (
    <>
    <BrowserRouter>
   <AppRoutes/>
   </BrowserRouter>
    </>
  )
}

export default App
