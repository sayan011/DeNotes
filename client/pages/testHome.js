import React from "react";
import Typing from "../components/Typing";
import Study from "../public/study.png";
// import Card from "../components/Card";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import Hamburger from "../components/Hamburger";
import Categories from "./categories";
// import { Card } from "antd";
import Card from "../components/TestCard"

const HomeMain = () => {
  // const { Meta } = Card;
  return (
    <>
      <div className="h-auto bg-slate-800 flex">
        <div className="flex">
          {/* <Hamburger /> */}
          <Typing className="z-10" />
          <img
            className=" object-fill w-96 h-80 mt-8 absolute right-0 pr-20 mr-52"
            src="/books.png"
            alt="logo"
          />
        </div>
      </div>
      <p className="text-3xl  font-semibold text-white bg-slate-800 pt-9 pb-5 px-8 pt-11">
        Browse by Subject
      </p>
      <div className="grid grid-flow-col bg-slate-800">
        {/* <Card /> */}
        {/* <Card style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card> */}
        <div className="text-white flex px-8 py-5 ">
          {/* <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card> */}
          <Card/>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
