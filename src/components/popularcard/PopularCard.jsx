import React from 'react';
import PropTypes from 'prop-types';

const PopularCard = ({ image, avatar, owner }) => {
  return (
    <div className="relative w-full p-4">
      <div className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
        <img src={image} alt={`Artwork by ${owner}`} className="w-full" />
        <div className="absolute bottom-[10px] left-[20px] right-0 p-4 flex items-center gap-2 ">
          <img src={avatar} alt={`Avatar of ${owner}`} className="w-10 h-10 rounded-full border-2 border-white " />
          <div className="text-white">
            <div className="text-xs opacity-70">Owner</div>
            <div className="font-medium">{owner}</div>
          </div>
        </div>
      </div>
    </div>
  );
};



PopularCard.propTypes = {
  image: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default PopularCard;
