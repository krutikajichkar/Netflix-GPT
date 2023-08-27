import React,{useState} from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

const Header = () => {
  const currentUser = auth.currentUser;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useSelector((store) => store.user);
 
  const signoutHandler = () => {
    signOut(auth)
      .then(() => {
      
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black w-full flex justify-between items-center py-6 px-8  ">
      <h1 className="text-4xl font-bold text-red-600 text-left">NETFLIX</h1>
      {currentUser && (
        <div className="">
          <button className="outline-none border-none" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <img
              className="w-12 h-12 rounded-full"
              src={user?.photoURL}
              alt="profile"
            />
          </button>
          {isDropdownOpen && (
            <div className="bg-red-100 rounded-lg px-4 py-2 absolute right-3 cursor-pointer text-lg text-left ">
              <ul>
                <li className="px-4 my-2 py-2 border-b-2 border-gray-100 hover:bg-red-200 hover:rounded-lg ">
                  {user?.displayName}
                </li>
                <li
                  className="px-4 my-2 py-2 hover:bg-red-200 hover:rounded-lg "
                  onClick={signoutHandler}
                >
                  sign out
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
