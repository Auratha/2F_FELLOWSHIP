import React from "react";

const ScanPopUp = ({ showScanPopUp, handleShowScanPopUp }) => {
  return (
    showScanPopUp && (
      <div className="w-[75%] lg:w-auto fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white p-4 shadow-lg z-50">
        <img className="w-full" src="/icons/qr.png" alt="social qr" />
        <img
          className="position absolute right-2 top-2 sm:right-5 sm:top-5 cursor-pointer"
          src="/icons/delete.svg"
          onClick={handleShowScanPopUp}
        />
      </div>
    )
  );
};

export default ScanPopUp;
