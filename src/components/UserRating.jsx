import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const UserRating = () => {
    const [userRating, updateUserRating] = useState(0);
    const handleRating = (index) => {
        updateUserRating(index);
    }

    const userRatingStar = Array.from({ length: 5}, (element, index) => {
        return (
            <span key ={index}>
                {userRating >= index + 1 ? (
                <FaStar className="ratingStar" onClick={() => handleRating (index + 1)} />
                ): (
                   <AiOutlineStar className="ratingStar" onClick={() => handleRating (index + 1)} />
                )}
            </span>
        )
    });
    
  return (
    <>
        {userRatingStar}
    </>
  );
};
export default UserRating;