import React from "react";

export function TestiCard(props) {
  return (
    <div key={props.id} className="card w-[32vw] h-[40vw] rounded-[1.5vw] text-[#e9e9e9] bg-[#0e0e0e] p-[2.5vw]">
      <div className="Image_Review">
        <div className="flex items-center">
          <img src={props.image} alt="Client Image" className="w-[6vw] h-[6vw] rounded-[0.75vw] bg-black" />
          <div className="flex flex-col mx-[1.5vw]">
            <span className="text-[2vw] font-medium">{props.name}</span>
            <span className="text-[1.2vw] text-[#b9b9b9]">{props.post}</span>
          </div>

          {/* <span className="text-[1vw] font-medium">{props.company}</span> */}
        </div>
        <p className="mt-[2.5vw] text-[1.5vw] text-[#b9b9b9] leading-[2vw]">
          {props.review}
        </p>
      </div>


    </div>
  );
}
