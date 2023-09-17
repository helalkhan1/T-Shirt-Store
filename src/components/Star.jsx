import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({stars}) => {

  const ratingStar = Array.from({ length: 5}, (element, index) => {
    let halfStar = index + 0.5 ;
    return (
      <span key ={index}>
        {stars >= index + 1 ? (
          <FaStar className="ratingStar" />
          ): stars >= halfStar ? (
            <FaStarHalfAlt className="ratingStar" />
          ): (
            <AiOutlineStar className="ratingStar" />
          )
        }
      </span>
    )
  });

  return (
    <>
      {ratingStar}
    </>
  );
};
export default Star;