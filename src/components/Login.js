import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/clientApp";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shadow-xl  p-10 text-gray-700 rounded-lg max-w-[500px] ">
        <img className="w-[300px] " src={logo} alt="logo" />
        <h2 className="text-3xl font-medium">Join Today</h2>
        <div className="py-4">
          <h3 className="py-4">Sign in with :</h3>
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2"
            onClick={googleLogin}
          >
            <FcGoogle className="text-2xl" /> Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
