import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";

export default function SideNav({ isOpen, onClose } : any) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed  z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* SideNav */}
      <section
        className={`fixed top-3 -right-2  w-[612px] h-[98vh] sidenav overflow-y-scroll
        z-50 p-10 transition-all duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-7">
          <div className="flex flex-row justify-between items-center">
            <Image src={logo} alt="logo" width={150} height={60} />

            <button
              onClick={onClose}
              className="w-10 h-10 bg-[#672b6c] rounded-full flex items-center justify-center"
            >
              <i className="ri-close-line text-2xl text-white"></i>
            </button>
          </div>

          <h5 className="text-white text-2xl max-w-[330px] w-full">
            Do You Have A Project In Your Mind? Keep Connect Us.
          </h5>

          <h3 className="text-white text-4xl max-w-[330px] font-bold w-full">
            CONNECT US
          </h3>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
                <i className="ri-phone-line text-[#672b6c] text-2xl"></i>
              </div>
              <span className="text-xl text-white">+92 326 4774776</span>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
                <i className="ri-whatsapp-line text-[#672b6c] text-2xl"></i>
              </div>
              <span className="text-xl text-white">+92 326 4774776</span>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
                <i className="ri-mail-line text-[#672b6c] text-2xl"></i>
              </div>
              <span className="text-xl text-white">info@sispntech.com</span>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
                <i className="ri-map-pin-line text-[#672b6c] text-2xl"></i>
              </div>
              <span className="text-xl text-white">
                Plot # A 287, gulshan-e-iqbal, block 2, Karachi, Pakistan.
              </span>
            </div>
          </div>

          <div className="w-[80%] bg-white h-1 mx-auto"></div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
                <i className="ri-phone-line text-[#672b6c] text-2xl"></i>
              </div>
              <span className="text-xl text-white">+1 (718) 395-9596</span>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
                <i className="ri-whatsapp-line text-[#672b6c] text-2xl"></i>
              </div>
              <span className="text-xl text-white">+1 (602) 566-0822</span>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
                <i className="ri-mail-line text-[#672b6c] text-2xl"></i>
              </div>
              <span className="text-xl text-white">info@sispntech.com</span>
            </div>

            <div className="flex flex-row gap-4 items-center">
              <div className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
                <i className="ri-map-pin-line text-[#672b6c] text-2xl"></i>
              </div>
              <span className="text-xl text-white">
                364 E Main Street Suite 1902 Middletown, DE 19709
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}