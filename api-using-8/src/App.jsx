import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios, { Axios } from "axios";

const BASEURL = "http://localhost:4500";

function App() {
  //all user
  const getAllUsers = async () => {
    const response = await axios.get(BASEURL + "/users");
    return response.data;
  };

  //get user
  const getUserById = async (userId) => {
    if (!userId) throw "User Id bilgisini geçmediniz!";
    const response = await axios.get(`${BASEURL}/users/${userId}`);
    console.log(response.data);
  };

  //create user
  const createUser = async (newUser) => {
    const response = await axios.post(`${BASEURL}/users`, newUser);
    console.log("Eklenen kullanıcı:" + JSON.stringify(response.data));
  };

  //update user
  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(`${BASEURL}/users/${userId}`, updatedUser);
    console.log(
      "Güncellenen kullanıcı: " +
        "Güncellenen kullanıcı: " +
        JSON.stringify(response.data),
    );
  };

  //delete user
  const deleteUser = async (userId) => {
    const response = await axios.delete(`${BASEURL}/users/${userId}`);
    console.log("Silinen kullanıcı: " + JSON.stringify(response.data));
  };

  //Canlı hayat örnek
  //user
  const getUserForPost = async (userId) => {
    const response = await axios.get(`${BASEURL}/users/${userId}`);
    return response.data;
  };

  //post for id
  const getPostById = async (postId) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + postId,
    );
    return response.data;
  };

  const getPost = async () => {
    const userResponse = await getUserForPost(2);
    const postId = userResponse?.postId || 0;
    const post = await getPostById(postId);
    console.log("post: " + JSON.stringify(post));
  };

  useEffect(() => {
    //getAllUsers();
    //getUserById(1)
    const updatedUser = {
      id: "3",
      username: "Kemih",
      password: "1203393",
    };
    //updateUser(3,updatedUser)
    //deleteUser(1)
    getPost();
  }, []);

  return (
    <>
      <div>
        <b>Merhaba</b>
      </div>
    </>
  );
}

export default App;
