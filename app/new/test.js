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
    <Swiper
      direction="vertical"
      slidesPerView={1}
      mousewheel
      pagination={{ clickable: true }}
      modules={[Pagination, Mousewheel]}
      className="h-[100dvh] w-full bg-gradient-to-b from-white to-blue-50"
    >
      <div className="flex justify-center flex-col items-center min-h-screen bg-gray-100">
        {/* slide 1 */}
        <SwiperSlide>
          <div className="flex justify-center items-center flex-col w-[90%] md:w-[50%] lg:w-[40%] mx-auto bg-white rounded-2xl shadow-xl border-2 border-yellow-300 p-5">
            {/* Logo */}
            <div className="flex justify-center mb-3 sm:mb-[20px] xl:mb-[30px] mt-2 sm:mt-[20px]">
              <Image
                src="/copy/logo.svg"
                alt="Kief Logo"
                className="w-[150px] md:w-[200px] h-auto"
                width={425}
                height={151}
                priority
              />
            </div>
            {/* Founder Info */}
            <div className="relative flex-grow flex flex-col">
              <div className="flex justify-center z-10 relative overflow-hidden mb-3 sm:mb-[20px] xl:mb-[30px]">
                <Image
                  src="/copy/founder.png"
                  alt="Founder"
                  className="w-[100px] sm:w-[150px] lg:w-[180px] rounded-full border-4 border-yellow-400"
                  width={200}
                  height={200}
                  priority
                />
              </div>

              <div className="text-center mb-1 sm:mb-2 z-10 relative">
                <h2 className="text-[20px] sm:text-[25px] lg:text-[30px] xl:text-[40px] font-[900] text-black mb-[5px] sm:mb-[10px]">
                  AHMED ALHOSANI
                </h2>
                <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-black">
                  FOUNDER
                </p>
              </div>

              <div className="flex justify-center">
                <span
                  className="text-black text-[14px] sm:text-[18px] lg:text-[22px] font-[700] text-center my-[5px] sm:my-[10px] rounded-md py-1 px-[15px] sm:px-[30px] z-10 relative"
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
                    className="w-[40px] sm:w-[50px] lg:w-[60px]"
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
                    className="w-[40px] sm:w-[50px] lg:w-[60px]"
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
                  className="w-full"
                  width={675}
                  height={509}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full z-[1] animate-switch pointer-events-none">
                <Image
                  src="/copy/yellow-bg.svg"
                  alt="Yellow Background"
                  className="w-full"
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
                className="text-[16px] sm:text-[20px] lg:text-[25px] xl:text-[30px] border-2 border-yellow-400 bg-gradient-to-r from-black to-yellow-400 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-[100px] shadow-md hover:opacity-90 transition-opacity"
              >
                SAVE CONTACT
              </a>

              <a href="tel:+971508226697" aria-label="Call">
                <div className="bg-green-500 p-3 sm:p-4 rounded-full shadow-lg cursor-pointer animate-pulseScale">
                  <svg
                    className="text-white w-[24px] sm:w-[30px] xl:w-[40px] animate-rotateBounce"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.43 2.57 13.93 2.57 4a1 1 0 011-1H7a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1.003 1.003 0 01-.21 1.11l-2.2 2.2z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
          <div className="flex justify-center items-center flex-col w-[90%] md:w-[50%] lg:w-[40%] mx-auto bg-white rounded-2xl shadow-xl">
            <Image
              src="/copy/second_slide.png"
              alt="Second Slide"
              className="mx-auto h-auto  w-full object-cover rounded-2xl shadow-xl border-2 border-yellow-300"
              width={706}
              height={1083}
            />
          </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
          <div className="flex justify-center items-center flex-col w-[90%] md:w-[50%] lg:w-[40%] mx-auto bg-white rounded-2xl shadow-xl">
            <Image
              src="/copy/third_slide.png"
              alt="Second Slide"
              className="mx-auto h-auto  w-full object-cover rounded-2xl shadow-xl border-2 border-yellow-300"
              width={706}
              height={1083}
            />
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default page;
