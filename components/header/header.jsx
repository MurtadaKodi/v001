import React from "react";
import './header.css'
import Link from "next/link";

function MyHeader() {
  return (
    <>
      <div className="navbar">
        <Link href="/">
          Home
        </Link>
        {/* <a href="#news">News</a>
        <a href="#contact">Contact</a> */}
      </div>
  
    </>
  );
}

export default MyHeader;
