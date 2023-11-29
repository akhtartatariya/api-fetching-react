"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const { id } = params;
  const [user, setUser] = useState([]);
  const getData = async () => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    setUser(data);
    console.log(user);
  };
  useEffect(() => {
    getData();
  }, []);

  return <>{JSON.stringify(user)}</>;
};

export default page;
