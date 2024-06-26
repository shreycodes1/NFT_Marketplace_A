import { useState } from "react";
import axios from "axios";
import "../styles/createProfileModal.css";
import createuser from "../utilities/createuser.png";

import { useAccount } from "wagmi";
const CreateProfileModal = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  // const [walletAddress, setWalletAddress] = useState<any>();
  const { address: walletAddress } = useAccount();

  const handleSubmit = async (e: any) => {
    console.log(walletAddress);
    e.preventDefault();
    try {
      await axios
        .post("https://project-nft-market-1-39k3.vercel.app/users/createuser", {
          username,
          email,
          walletAddress,
        })
        .then((result) => console.log(result));
      //   navigate("/");
      //   props.toggleModal(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }

    console.log(username, email, walletAddress);
    // username && email ? navigate("/") : alert("All fields are required");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => {
  //   setWalletAddress(localStorage.getItem("address"));
  //   console.log(walletAddress);
  // }, [address]);
  return (
    <>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10 modal">
        <div className="flex shadow-md">
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[34rem] h-[34rem]">
            <div className="w-72">
              <h1 className="text-[1.5rem] font-semibold">Welcome</h1>
              <small className="text-gray-400">
                Welcome! Please enter your details
              </small>

              <form className="mt-4">
                <div className="mb-3">
                  <label className="mb-2 block text-[1.2rem] font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-md border border-gray-500 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold text-[1.2rem]">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <button
                    className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                    onClick={handleSubmit}
                  >
                    Create User
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-wrap content-center justify-center rounded-r-md w-[34rem] h-[34rem]">
            <img
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
              src={createuser}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProfileModal;
