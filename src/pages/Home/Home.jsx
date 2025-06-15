import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router";
import NearlyExpire from "./NearlyExpire";
import apiUrl from "../../utils/apiUrl";
import ExpiredFood from "./ExpiredFood";

const Home = () => {
  const data = useLoaderData();
  const [expired, setExpired] = useState([]);

  useEffect(() => {
    const fetchExpiredFood = async () => {
      try {
        const res = await apiUrl.get("/expired-foods");
        setExpired(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExpiredFood();
  }, []);

  return (
    <div>
      <Banner />
      <NearlyExpire data={data} />
      <ExpiredFood expired={expired} />
    </div>
  );
};

export default Home;
