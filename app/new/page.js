"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Mousewheel } from "swiper/modules";
import { useEffect, useState } from "react";

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
    <div className="flex justify-center items-center h-screen bg-white mp-[22px]">
      <div className="flex justify-center items-center flex-col w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto bg-white rounded-2xl shadow-xl border-2 border-[#CDA93B] p-5">
        {/* Logo */}
        <div className="flex justify-center mb-3 sm:mb-[20px] xl:mb-[30px] mt-2 sm:mt-[20px]">
          <Image
            src="/copy/logo1.png"
            alt="Kief Logo"
            className="w-[150px] md:w-[200px] h-auto"
            width={1868}
            height={664}
            priority
          />
        </div>
        {/* Founder Info */}
        <div className="relative flex-grow flex flex-col">
          <div className="flex justify-center z-10 relative overflow-hidden mb-3 sm:mb-[20px] xl:mb-[30px]">
            <Image
              src="/copy/founder1.png"
              alt="Founder"
              className="w-[150px] lg:w-[180px] rounded-full border-4 border-[#CDA93B]"
              width={800}
              height={800}
              priority
            />
          </div>

          <div className="text-center mb-1 sm:mb-2 z-10 relative">
            <h2 className="text-[20px] md:text-[25px]  xl:text-[35px] font-[900] text-black mb-[5px] ">
              AHMED ALHOSANI
            </h2>
            <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-black">
              FOUNDER
            </p>
          </div>

          <div className="flex justify-center">
            <span
              className="text-black text-[14px] lg:text-[18px] font-[700] text-center my-[5px] sm:my-[10px] rounded-md py-1 px-[15px] sm:px-[30px] z-10 relative"
              style={{ backgroundColor: "rgba(238, 180, 0, 0.15)" }}
            >
              Kief Consultancy And Technology
            </span>
          </div>

          <div className="flex justify-center items-center gap-4 sm:gap-6 my-3 sm:mb-[20px] z-10 relative">
            <a
              href="mailto:ahmed.alhosani@kief.ae"
              className="transform hover:scale-110 transition-transform"
            >
              <Image
                src="/copy/mail-icon.svg"
                alt="Mail"
                className="w-[40px] lg:w-[50px]"
                width={75}
                height={75}
              />
            </a>
            <a
              href="https://kief.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <Image
                src="/copy/globe-icon.svg"
                alt="Website"
                className="w-[40px] lg:w-[50px]"
                width={75}
                height={75}
              />
            </a>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-2 sm:gap-3  z-10 relative">
            <a
              href="https://www.facebook.com/people/Kief-Consultancy-and-Technology/100087450420626/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <Image
                src="/copy/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
                className="w-[24px] sm:w-[30px]"
              />
            </a>
            <a
              href="https://x.com/kief_ae"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <Image
                src="/copy/x.svg"
                alt="X"
                width={30}
                height={30}
                className="w-[24px] sm:w-[30px]"
              />
            </a>
            <a
              href="https://www.instagram.com/kiefconsultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <Image
                src="/copy/instagram.svg"
                alt="Instagram"
                width={30}
                height={30}
                className="w-[24px] sm:w-[30px]"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/kievct.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <Image
                src="/copy/linkedin.svg"
                alt="LinkedIn"
                width={30}
                height={30}
                className="w-[24px] sm:w-[30px]"
              />
            </a>
            <a
              href="https://www.tiktok.com/@kief_consultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <Image
                src="/copy/tiktok.svg"
                alt="Tiktok"
                width={30}
                height={30}
                className="w-[24px] sm:w-[30px]"
              />
            </a>
          </div>

          {/* Backgrounds */}
          <div className="absolute bottom-0 left-0 w-full z-0">
            <Image
              src="/copy/white_bg.svg"
              alt="Background"
              className="w-full transition-opacity duration-300"
              width={675}
              height={509}
              style={{ opacity: 1 }}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full z-[1] animate-toggle pointer-events-none">
            <Image
              src="/copy/yellow-bg.svg"
              alt="Yellow Background"
              className="w-full transition-opacity duration-300"
              width={675}
              height={509}
            />
          </div>
        </div>

        {/* Save button */}
        <div className="z-10 relative flex justify-center items-center gap-2 sm:gap-3 mt-2 sm:mt-4">
          <a
            href="/copy/save_contact.vcf"
            download="ahmed_alhosani.vcf"
            className="text-[16px]  lg:text-[22px] xl:text-[30px] border-2 border-[#CDA93B] bg-gradient-to-r from-black to-[#CDA93B] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-[100px] shadow-md hover:opacity-90 transition-opacity"
          >
            SAVE CONTACT
          </a>

          <a href="tel:+971508226697" aria-label="Call">
            <div
              className="relative p-2 sm:p-3 rounded-full shadow-lg cursor-pointer animate-pulseScale overflow-hidden group"
              style={{
                background:
                  "linear-gradient(45deg, #22c55e, #16a34a, #15803d, #16a34a, #22c55e)",
                backgroundSize: "200% 200%",
                animation:
                  "pulseScale 2s infinite ease-in-out, gradientShift 3s infinite ease-in-out",
              }}
            >
              {/* Ripple effect */}
              <span className="absolute inset-0 rounded-full bg-white opacity-30 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-1000"></span>

              {/* Glow effect */}
              <span className="absolute inset-0 -z-10 rounded-full bg-green-500 blur-md opacity-70 animate-glow"></span>

              <svg
                className="text-white w-[24px] sm:w-[30px] xl:w-[40px] animate-rotateBounce relative z-10"
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
