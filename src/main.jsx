import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createAppKit } from "@reown/appkit/react";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { mainnet, arbitrum, bscTestnet, sepolia, bsc } from "@reown/appkit/networks";
import { getAccessToken } from '@utils/Session';

// 1. Get projectId
const projectId = "49546acedc91dd32f884746f88babb8a";

// 2. Create a metadata object - optional
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

const token = getAccessToken();

// 3. Create the AppKit instance
createAppKit({
  adapters: [new Ethers5Adapter()],
  metadata,
  networks: [bsc],
  projectId,
  features: {
    analytics: true,
    socials: false,
    email: false, // Optional - defaults to your Cloud configuration
    allWallets: "SHOW",
    emailShowWallets: false,
  },
  enableReconnect : token ? true : false
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
