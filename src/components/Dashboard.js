import Navbar from "./Navbar";
import { auth } from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (!user) navigate("login");
  if (user)
    return (
      <div>
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className="shadow-xl  p-10 text-gray-700 rounded-lg max-w-[500px]">
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              <div className="text-align-center">
                <div className="text-3xl p-4 ">Hello {user.displayName} </div>
                <button
                  onClick={() => auth.signOut()}
                  className="p-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Dashboard;
