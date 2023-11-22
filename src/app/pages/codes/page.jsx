"use client"
import { get } from 'http';
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { IoIosRefresh } from "react-icons/io";
// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// console.log("APi "+ apiUrl);
const page = () => {
  const [otp,setOtp] = useState("");
  const [formData,setFormData] = useState({
    code:'',
  });
  const [status,setStatus] = useState();
  
  const changeHandler = (event) => {
    const {name,value} = event.target;
    setFormData({
      ...formData,
      [name] : value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = formData.code;
    console.log("data " + data);
    console.log("otp -> " + data.code);
    console.log("body " + JSON.stringify(formData));
    try{

      // axios.post(`${process.env.NEXT_PUBLIC_API_URL}/codes/use`, {code:data}).then((response)=>{console.log("response" + response.json())}).catch((err)=>{console.log(err)});

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/codes/use`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("response:-" + data.message);
      setStatus(data.message);

      // if(data.success===true){
      //     <h2>
      //       {data.message}
      //     </h2>
      // }
      // // if(response.success){
      //   console.log("Data sent");
      // }
      // else{
      //   console.log("Failed to submit data");
      // }
    }
    catch(err){
      console.log("Error in submiting code" + err.message);
    }
  }

  const clickHandler = () => {
    location.reload();
  }
  useEffect(()=>{
    
  const getOtp = async () => {
    try{
      // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/codes`);
      // console.log("API url is " + process.env.NEXT_PUBLIC_API_URL);
      
      const data = await response.json();
      // console.log("data " + data);
      const code = data.otp;
      console.log("code " + code);
      setOtp(code);

    }
    catch(err){
      console.log("Error in getting code" + err);
    }
  }

  getOtp();

  },[]);



  return (
    <div className='flex gap-[25px] flex-col justify-center items-center mx-auto  bg-blue-200 w-[100vw] h-[100vh] '>

<div className='text-4xl font-[600] flex w-[100px] gap-[40px] justify-between '>
        <h1>
          {
            otp
          }
        </h1>
        <button onClick={clickHandler}><IoIosRefresh /></button>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input className='w-[400px]  text-center  h-[30px] rounded-md placeholder:text-center placeholder:font-semibold' type="text" placeholder='Enter above shown code' name="code" value={formData.code} onChange={changeHandler} />
          <button className='ml-4 border-2 px-4 py-2 bg-green-500 rounded-md  ' type='submit'>Submit</button>
        </form>
      </div>
      <div>
        <h2>
          {status}
        </h2>
      </div>
    </div>
  )
}

export default page