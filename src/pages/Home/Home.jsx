import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import NearlyExpire from "./NearlyExpire";
import ExpiredFood from "./ExpiredFood";
import NewsLetter from "./NewsLetter";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Home = () => {
  const [nearlyExpired, setNearlyExpired] = useState([]);
  const [expired, setExpired] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchNearlyExpired = async () => {
      try {
        const res = await axiosSecure.get("/expire-soon");
        setNearlyExpired(res.data);
      } catch (error) {
        console.error("Error loading nearly expired foods:", error);
      }
    };

    const fetchExpired = async () => {
      try {
        const res = await axiosSecure.get("/expired-foods");
        setExpired(res.data);
      } catch (error) {
        console.error("Error loading expired foods:", error);
      }
    };

    fetchNearlyExpired();
    fetchExpired();
  }, [axiosSecure]);

  return (
    <div>
      <Banner />
      <NearlyExpire data={nearlyExpired} />
      <ExpiredFood expired={expired} />
      <Testimonial />
      <Faq />
      <NewsLetter />
    </div>
  );
};

export default Home;
