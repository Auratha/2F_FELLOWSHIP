import React from "react";

const SocialMedia = ({ handleShowScanPopUp }) => {
  return (
    <div
      className="h-10 fixed top-[50%] right-0 transform -translate-y-[50%] social-sidebar z-50"
      onClick={handleShowScanPopUp}
    >
      <img
        className="w-10 cursor-pointer"
        src="/icons/line.png"
        alt="linelogo"
      />
      <img
        className="w-10 cursor-pointer"
        src="/icons/viber.png"
        alt="facebooklogo"
      />
    </div>
  );
};

export default SocialMedia;
