"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Profile from '../public/profile-img.jpg'
import Pfp from '../public/pfp1.jpg'
import { RiYoutubeLine } from "react-icons/ri";
import { LiaCommentsSolid } from "react-icons/lia";
import {
  FaCheck,
  FaAngleLeft,
  FaChevronRight,
  FaYoutube,
  FaFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";

export default function Home() {
const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/hello').then((a) => {
      return a.json();})
      .then((parsed) => {
        setData(parsed);
      })
  },[]);
  
  return (
    <main className="flex min-h-screen flex-col">
      {data.map((pagedata) => {
        return (
          <div
            key={pagedata.title}
            className="flex min-h-screen flex-col items-center justify-between"
          >
            <section className=" w-full h-[40vh] px-96 relative hero-container text-black">
              <h4 className=" font-bold absolute mb-2 bottom-44 text-white">
                {pagedata.name}
              </h4>
              <h2 className=" w-[28vw] font-bold text-[2rem] text-white absolute bottom-10">
                {pagedata.title}
              </h2>
            </section>
            {/* nav bar  */}
            <nav className=" w-[60vw]">
              <ul className=" flex w-1/2 h-[4vh] gap-8 text-center items-center">
                <li className=" w-[8vw] h-[4vh] pt-1 text-center relative hover:cursor-pointer after:content-[''] after:w-[8vw] after:h-[3px] after:bg-purple-500 after:absolute after:left-0 after:bottom-0 after:opacity-0 hover:after:opacity-70">
                  About
                </li>
                <li className=" w-[8vw] h-[4vh] pt-1 text-center relative hover:cursor-pointer after:content-[''] after:w-[8vw] after:h-[3px] after:bg-purple-500 after:absolute after:left-0 after:bottom-0 after:opacity-0 hover:after:opacity-70">
                  Instructor
                </li>
                <li className=" w-[8vw] h-[4vh] pt-1 text-center relative hover:cursor-pointer after:content-[''] after:w-[8vw] after:h-[3px] after:bg-purple-500 after:absolute after:left-0 after:bottom-0 after:opacity-0 hover:after:opacity-70">
                  Reviews
                </li>
              </ul>
            </nav>
            {/* about part  */}
            <section className="w-[60vw] relative">
              <article className="w-[30vw]">
                <h2 className="font-bold text-xl my-4">About the course</h2>
                <p className="my-2">{pagedata.about.content1}</p>

                <p className="my-2">{pagedata.about.content2}</p>

                <p className="my-2">{pagedata.about.content3}</p>

                <h3 className="font-semibold text-lg my-4">
                  What to expact from the course
                </h3>
                <ul>
                  <li className="flex items-center gap-2 text-[16px] my-1">
                    <span><FaCheck /></span>{pagedata.expact.li1}
                  </li>

                  <li className="flex items-center gap-2 text-[16px] my-1">
                    <span><FaCheck /></span>{pagedata.expact.li2}
                  </li>

                  <li className="flex items-center gap-2 text-[16px] my-1">
                    <span><FaCheck /></span>{pagedata.expact.li3}
                  </li>

                  <li className="flex items-center gap-2 text-[16px] my-1">
                    <span><FaCheck /></span>{pagedata.expact.li4}
                  </li>
                </ul>

                <h3 className="font-semibold text-lg my-4">
                  Key topics covered
                </h3>
                <p>{pagedata.topics.p}</p>

                <ol className="mt-2">
                  <li className="flex items-start my-3 gap-3">
                    <span><FaCheck /></span>
                    {pagedata.topics.ol1}
                  </li>

                  <li className="flex items-start my-3 gap-3">
                    <span><FaCheck /></span>
                    {pagedata.topics.ol2}
                  </li>

                  <li className="flex items-start my-3 gap-3">
                    <span><FaCheck /></span>
                    {pagedata.topics.ol3}
                  </li>

                  <li className="flex items-start my-3 gap-3">
                    <span><FaCheck /></span>
                    {pagedata.topics.ol4}

                  </li>
                </ol>
              </article>
              <aside className=" bg-purple-50 w-[22vw] h-[36vh] p-5 absolute -top-20 right-0">
                <h3 className=" font-semibold text-[1rem]">Course fees</h3>
                <h2 className=" font-bold text-[2rem]">&#x20B9; {pagedata.amount}</h2>
                <h4 className="font-bold">Whsts included :</h4>
                <p className="flex items-center gap-2 mt-2">
                  <span>
                    <RiYoutubeLine />
                  </span>
                  5 on-demand videos
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <span>
                    <RiYoutubeLine />
                  </span>
                  2 livestream sessions
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <span>
                    <LiaCommentsSolid />
                  </span>
                  Live Q&A sessions with Nityanand Charan Das
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <span>
                    <LiaCommentsSolid />
                  </span>
                  An active whatsapp community
                </p>
                <button
                  type="submit"
                  className=" bg-purple-500 w-full py-2 mt-6 rounded-3xl text-white font-medium"
                >
                  Register today
                </button>
              </aside>
            </section>
            {/* about_instructor  */}
            <section className="w-[60vw] h-[30vh]">
              <h2 className="font-semibold">About the Instructor</h2>
              <article className=" flex pt-2">
                <div className=" w-[6vw] py-2 px-2">
                  <Image src={Profile} className="rounded-full" width={100} height={100}  alt="profile-img" />
                </div>
                <div className="w-[50vw] h-48 py-2 pl-2 flex gap-4">
                  <div className="w-[25vw] h-44">
                    <p className="w-[24vw] mb-8">{pagedata.instructor.p1}</p>
                    <p className="flex">
                  <span className=" flex items-center gap-4 font-medium hover:cursor-pointer"><FaFacebook className="text-blue-500"/>facebook</span>  
                  <span className="flex items-center gap-4 font-medium ml-8 hover:cursor-pointer"><FaSquareXTwitter/>twitter</span>  
                    </p>
                  </div>
                  <div className="w-[25vw] h-44">
                    <p className="w-[24vw] mb-8">{pagedata.instructor.p2}</p>
                    <p className="flex">
                    <span className="flex items-center gap-4 font-medium hover:cursor-pointer"><FaYoutube className=" text-red-500"/>youtube </span>
                    <span className="flex items-center gap-4 font-medium ml-8 hover:cursor-pointer"><FaSquareInstagram/>instgram</span>
                    </p>
                  </div>
                </div>
              </article>
            </section>
            {/* testimonial  */}
            <section className="w-full h-[28vh] flex items-center justify-center bg-slate-100">
              <div className="w-[60vw] flex items-center justify-between">
                <button className=" w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center"><FaAngleLeft/></button>
                <div className=" w-[28rem]">
                  <p className=" font-bold text-xl">
                    {pagedata.testimonial.text}
                  </p>
                  <div className="flex mt-3 gap-2">
                    <Image src={Pfp} className=" rounded-full" width={40} height={40} alt="person-img" />
                    <div className="flex flex-col">
                      <span>{pagedata.testimonial.name}</span>
                      <span>{pagedata.testimonial.designation}</span>
                    </div>
                  </div>
                </div>
                <button className=" w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center"><FaChevronRight/></button>
              </div>
            </section>
          </div>
        );
      })}
      
            
    </main>
  );
}
