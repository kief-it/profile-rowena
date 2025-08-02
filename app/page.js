"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Mousewheel } from "swiper/modules";
import { useEffect, useState } from "react";
import ParticleNetwork from "./new1/Comp";
import DualDotWave from "./new1/DotWave";
import SplitDualDotWave from "./new1/DotWave";

const page = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden bg-white py-[10px]">
      <div className="relative flex justify-center items-center flex-col mb-[85px] md:mb-[0px] h-[85%] sm:h-auto w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto bg-white rounded-2xl shadow-xl border-2 border-[#022352] p-2 sm:p-5">
        <div className="absolute top-0 left-0 w-full h-full z-[1]">
          {/* <ParticleNetwork color="#CDA93B" numParticles={50} /> */}
          {/* <SplitDualDotWave
            topConfig={{
              color: "#F1F1F2",
              rows: 20,
              columns: 50,
              baseRadius: 1.5,
              waveSpeed: 0.01,
              waveAmplitude: 2,
            }}
            bottomConfig={{
              color: "#F1F1F2",
              rows: 15,
              columns: 30,
              baseRadius: 3,
              waveSpeed: 0.01,
              waveAmplitude: 2,
            }}
          /> */}
        </div>
        {/* Logo */}
        <div className="flex justify-center mb-[20px] sm:mb-[20px] xl:mb-[30px]  mt-5 sm:mt-[20px] z-10 relative">
          <Image
            src="/copy/logo.jpg"
            alt="EDTECH Training & Consultancy L.L.C"
            className="w-[200px] h-auto"
            width={138}
            height={144}
            priority
          />
        </div>
        {/* Founder Info */}
        <div className="relative w-[100%] sm:w-auto flex-grow flex flex-col">
          <div className="flex justify-center z-10 relative overflow-hidden mb-3 sm:mb-[20px] xl:mb-[30px]">
            <Image
              src="/copy/profile_pic.jpeg"
              alt="Rowena Gumiran"
              className="w-[150px] lg:w-[180px] rounded-full border-2 border-[#022352]"
              width={800}
              height={800}
              priority
            />
          </div>

          <div className="text-center mb-1 sm:mb-2 z-10 relative">
            <h2 className="text-[20px] md:text-[25px]  xl:text-[35px] font-[900] text-black mb-[5px] ">
              ROWENA GUMIRAN
            </h2>
            <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-black">
              ACADEMIC DIRECTOR
            </p>
          </div>

          <div className="flex justify-center items-center">
            <span className=" text-[14px] lg:text-[18px] font-[700] text-center text-white bg-[#354166] mb-[60px] sm:mb-[5px] mt-[5px] sm:mt-[10px] rounded-md pt-2 pb-1 px-[15px] sm:px-[30px] z-10 relative">
              EDTECH Training & Consultancy L.L.C
            </span>
          </div>

          <div className="flex justify-center items-center gap-4 sm:gap-6 my-[10px] md:my-[20px] lg:my-[15px] z-10 relative">
            <a
              href="mailto:rowena@edtechgcc.com"
              className="transform hover:scale-110 transition-transform"
            >
              <Image
                src="/copy/mail-icon1.svg"
                alt="Mail"
                className="w-[50px] lg:w-[50px]"
                width={75}
                height={75}
              />
            </a>
            <a
              href="https://www.edtechgcc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <Image
                src="/copy/globe-icon1.svg"
                alt="Website"
                className="w-[50px] lg:w-[50px]"
                width={75}
                height={75}
              />
            </a>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-3 sm:gap-3  z-10 relative my-[5px] md:my-[10px] lg:my-[15px]">
            <a
              href="https://www.facebook.com/EdTechTrainingAndConsultancy/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <Image
                src="/copy/facebook2.png"
                alt="Facebook"
                width={30}
                height={30}
                className="w-[30px] sm:w-[30px]"
              />
            </a>

            <a
              href="https://www.instagram.com/edtech_training"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <Image
                src="/copy/instagram.svg"
                alt="Instagram"
                width={30}
                height={30}
                className="w-[30px] sm:w-[30px]"
              />
            </a>

            <a
              href="https://twitter.com/edtech_training"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <Image
                src="/copy/x.svg"
                alt="X"
                width={30}
                height={30}
                className="w-[30px] sm:w-[30px]"
              />
            </a>

            <a
              href="https://www.youtube.com/channel/UCu9k4yxBqDq60Dwju7Dc90Q"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <div className="w-[30px] sm:w-[30px]  rounded-[5px]">
                <Image
                  src="/copy/linkedin2.png"
                  alt="Youtube"
                  width={500}
                  height={500}
                  className="w-[30px] sm:w-[30px] bg-white"
                />
              </div>
            </a>

            <a
              href="https://www.youtube.com/channel/UCu9k4yxBqDq60Dwju7Dc90Q"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <div className="w-[30px] sm:w-[30px]  rounded-[5px]">
                <Image
                  src="/copy/youtube2.png"
                  alt="Youtube"
                  width={500}
                  height={500}
                  className="w-[30px] sm:w-[30px] bg-white"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Save button */}
        <div className="z-10 relative flex justify-center items-center gap-2 sm:gap-3 mt-[20px] mb-[20px] md:mt-[30px] sm:mt-4">
          {/* <a
            href="/copy/save_contact.vcf"
            download="m_lamdy.vcf"
            className="text-[16px]  lg:text-[22px] xl:text-[30px] border-2 border-[#F0DD50] text-white font-semibold py-[15px] sm:py-3 px-[18px] sm:px-6 rounded-[99px] shadow-md hover:opacity-90 transition-opacity"
            style={{
              background:
                "linear-gradient(to right, #7F8287 27%, #F0DD50 93%, #F0DD50 100%)",
            }}
          >
            SAVE CONTACT
          </a> */}
          <a
            href="/copy/save_contact.vcf"
            download="rowena.vcf"
            className="text-[16px]  lg:text-[22px] xl:text-[30px] border-2 border-[#192751] bg-[#192751] text-white font-semibold py-[15px] sm:py-3 px-[18px] sm:px-6 rounded-[99px] shadow-md hover:opacity-90 transition-opacity"
          >
            SAVE CONTACT
          </a>

          <a href="tel:+971568006744" aria-label="Call">
            <div
              className="relative p-2 sm:p-[15px] rounded-[99px] shadow-lg cursor-pointer animate-pulseScale overflow-hidden group"
              style={{
                background:
                  "linear-gradient(45deg, #22c55e, #16a34a, #15803d, #16a34a, #22c55e)",
                backgroundSize: "200% 200%",
                animation:
                  "pulseScale 2s infinite ease-in-out, gradientShift 3s infinite ease-in-out",
              }}
            >
              {/* Ripple effect */}
              <span className="absolute inset-0 rounded-[16px] bg-white opacity-30 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-1000"></span>

              {/* Glow effect */}
              <span className="absolute inset-0 -z-10 rounded-[16px] bg-green-500 blur-md opacity-70 animate-glow"></span>

              <svg
                className="text-white w-[44px] sm:w-[30px] xl:w-[40px] animate-rotateBounce relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.43 2.57 13.93 2.57 4a1 1 0 011-1H7a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1.003 1.003 0 01-.21 1.11l-2.2 2.2z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
