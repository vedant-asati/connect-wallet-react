//App.js file
import "./App.css";
import { useState } from "react";
const { ethers } = require("ethers");

function App() {
  // State variables for wallet connection status and address
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  // Function to connect/disconnect the wallet
  async function connectWallet() {
    // Check if the wallet is not connected
    if (!connected) {
      // Create a new provider using the Ethereum browser provider from ethers.js
      const provider = new ethers.BrowserProvider(window.ethereum);
  
      // Get a signer object from the provider (allows you to interact with the connected wallet)
      const signer = await provider.getSigner();
  
      // Retrieve the wallet address of the connected user
      const _walletAddress = await signer.getAddress();
  
      // Set the 'connected' state to true, indicating that the wallet is now connected
      setConnected(true);
  
      // Set the 'walletAddress' state to the retrieved wallet address
      setWalletAddress(_walletAddress);
    } else {
      // If the wallet is already connected, do the following:
  
      // Deselect the currently selected wallet address (if any)
      window.ethereum.selectedAddress = null;
  
      // Set the 'connected' state to false, indicating that the wallet is disconnected
      setConnected(false);
  
      // Clear the 'walletAddress' state by setting it to an empty string
      setWalletAddress("");
    }
  }
  

  return (
    <div className="app">
      <div className="main">
        <div className="content">
          <button className="btn" onClick={connectWallet}>
            {connected ? "Disconnect Wallet" : "Connect Wallet"}
          </button>
          <h3>Address</h3>
          <h4 className="wal-add">{walletAddress}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;