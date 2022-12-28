import abi from "./contract/chai.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import Footer from "./components/Footer";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("None");

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x18de3c21af20c61aedc8746e00581fd1c7bc92c1";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  // console.log(state);
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <section className="my-10 mx-10 sm:mt-10 md:drop-shadow-lg tracking-wider flex items-center justify-center ">
        <div className="px-4 sm:py-4 md:px-8 my-20 mx-24 text-center md:rounded-full bg-yellow-200  w-2/3 ">
          <span className="font-circular text-lg md:text-2xl text-gray-600 leading-normal">
            connected account :- {account}
          </span>
        </div>
      </section>
      <Buy state={state}></Buy>
      <Memos state={state}></Memos>
      <Footer></Footer>
    </>
  );
}

export default App;
