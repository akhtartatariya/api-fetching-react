"use client";
import { MyContext } from "@/Helper/Context";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [user, setUser] = useState([]);
  const getData = async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);
      let data = response.data;
      setUser(data);
    } catch (error) {
      console.error("error while creating");
    }
  };
  const notify = () => toast("Wow so easy!");
  useEffect(() => {
    getData();
  }, []);

  const cL = useContext(MyContext);
  return (
    <>
      <button
        onClick={getData}
        className="mx-4 my-5 px-4 py-3 rounded w-100 bg-slate-800 text-white"
      >
        Get Data
      </button>
      <div className="p-8 bg-slate-400 mt-5">
        <ul>
          {user.map((e) => {
            return (
              <li>
                {e.name}--- <a href={`/${e.id}`}>Explore</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div>{cL}</div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </>
  );
};

export default page;
