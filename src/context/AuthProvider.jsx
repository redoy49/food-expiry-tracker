import { useEffect, useState } from "react";
// import apiUrl from "../utils/apiUrl";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import axios from "axios";
// import toast from "react-hot-toast";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      // const token = currentUser.accessToken;

      if (currentUser?.email) {
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            {
              email: currentUser?.email,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      } else {
        localStorage.removeItem("token");
      }

      //   try {
      //     const res = await axiosSecure.post(
      //       "/jwt",
      //       { token },
      //       {
      //         headers: {
      //           Authorization: `Bearer ${token}`,
      //         },
      //         withCredentials: true,
      //       }
      //     );

      //     console.log("JWT issued:", res.data);
      //   } catch (err) {
      //     console.error(
      //       "Error setting JWT cookie:",
      //       err.response?.data || err.message
      //     );
      //   }
      // }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const manageProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    return updateProfile(auth.currentUser, profile)
      .then(() => {
        const userUpdate = {
          ...auth.currentUser,
          displayName: name,
          photoURL: photoURL,
        };
        setUser(userUpdate);
        // toast.success("Save user info succesfull!");
      })
      .catch(() => {
        // toast.error("Upate user info fail");
      });
  };

  const authInfo = {
    user,
    setUser,
    loading,
    logout,
    googleLogin,
    createUser,
    loginUser,
    manageProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
