// import axios from "axios";
// import useAuth from "../hooks/useAuth";

// const apiUrl = axios.create({
//   baseURL: "https://food-expiry-tracker-server-phi.vercel.app",
// });

// const useAxios = () => {
//   const { user } = useAuth();

//   console.log(user.accessToken);

//   apiUrl.interceptors.request.use((config) => {
//     config.headers.authorization = `Bearer ${user.accessToken}`;
//     return config;
//   });

//   return apiUrl;
// };

// export default useAxios;
