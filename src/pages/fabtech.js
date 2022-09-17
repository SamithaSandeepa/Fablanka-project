import React from "react";
import Layout from "../hocs/Layout";


const fabtech = () => {
  return (
    <Layout className="h-30 bg-gradient-to-r from-[#b69501] to-[#0673a5]">
      <>
      <div className="text-center mt-5 mb-5">
          <h1 className="font-sans text-[60px] text-[#ccb032] mb-3 mt-5 font-medium">FabTech 2022</h1>
          <h2 className="mb-2 font-medium text-[#5f5f5f]">will take place on</h2>
          <h1 className="font-sans text-[30px] text-[#e4c436] font-medium">August 26 <sup>th</sup> and August 27 <sup>th</sup> <br></br>
          from 9.00 am to 4.00 pm</h1>
          <h2 className="text-[#5f5f5f]">at FabLab Makandura location in</h2>
          <h1 className="text-[30px] text-[#ccb032] font-medium mb-2">Makandura Public Library complex</h1>
          <img src="https://img.icons8.com/fluency/48/000000/more.png" className=""></img>
          <div className="h-1 w-full bg-gradient-to-r from-[#977402fb] to-fuchsia-500 mb-5 mt-10"></div>

      <div>
        {/* card */}
        <div className="grid grid-cols-5 gap-4 font-semibold">
              <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <img className="w-full" src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/fabtech-event/robotics.jpg" alt="Sunset in the mountains"></img>
                <div className="px-6 py-6">
                  <div className="text-lg mb-2">Robotics</div>
                </div>
              </div>

              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/fabtech-event/IMG_9574.jpg" alt="Sunset in the mountains"></img>
                <div className="px-6 py-4">
                  <div className="text-lg mb-2">Virtual Reality</div>
                </div>
              </div>

              <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <img className="w-full" src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/fabtech-event/3d+printing.jpg" alt="Sunset in the mountains"></img>
                <div className="px-6 py-4">
                  <div className="text-lg mb-2">3D Printing</div>
                </div>
              </div>

              <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <img className="w-full" src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/fabtech-event/drone.jpg" alt="Sunset in the mountains"></img>
                <div className="px-6 py-4">
                  <div className="text-lg mb-2">Drone Technology</div>
                </div>
              </div>

              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/fabtech-event/electronic.jpg" alt="Sunset in the mountains"></img>
                <div className="px-6 py-4">
                  <div className="text-lg mb-2">Basic Electrical, electronic and mechanical principles</div>
                </div>
              </div>
            </div>
      </div>

      </div>
        <div className=" font-semibold  mb-10">
        <h1 className="text-[30px] mb-3 mx-10">This exposition will include</h1>
          <div className="text-[20px] text-cyan-600 ">
            <li className="mb-2 ">Launching of new Product</li>
            <li className="mb-2 ">Experiecing some Industry 4.0 Technologies</li>
            <li className="mb-2 ">One day workshops for school children to experience the technologies like:</li>
              <ul className="text-[#1d2970]">
              <li>Robotics</li>
              <li>Virtual Reality</li>
              <li>3D Printing</li>
              <li>Drone Technology</li>
              <li className="mb-2">Basic Electrical, electronic and mechanical principles </li>
              </ul>
            <li className="mb-2 ">Technology competitions and awards.</li>
            <li className="mb-2 ">Awarding certificates for "Digital Design p Product Manufactring" course graduates and Registering new students</li>
            <li className="mb-2 ">Opening of a new electronic component p at FabLab Makandura</li>
      </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
      </>
    </Layout>
  );
};

export default fabtech;
