import React from "react";
import Image from '../../assets/error.png'
import "./style.css";

export default function Error({
    message ='Oops, Something Went wrong in the Server, please try again letter'
}) {
  return (
    <div className="error">
      <img src={Image} alt="Error" className="error_img" />
      <text className='error_bold' >Sorry</text>
      <text className='error_message'>{message}</text>
    </div>
  );
}
