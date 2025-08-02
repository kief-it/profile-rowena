import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-blue-50">
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {/* Slide 1 */}
        <div className="h-screen snap-start flex align-baseline justify-center py-[10px]">
          <div className="h-[80vh] md:h-[100vh] w-[390px] md:w-[500px] lg:w-[706px] bg-white rounded-2xl shadow-xl border-2 border-yellow-300 mt-[20px] px-1 pb-[20px] lg:p-5 relative overflow-hidden">
            {/* Logo */}
            <div className="flex justify-center mb-[20px] xl:mb-[50px] mt-[20px]">
              <Image
                src="/copy/logo.svg"
                alt="Kief Logo"
                className="lg:mx-[15%] w-[200px] lg:w-[425px] h-auto"
                width={425}
                height={151}
              />
            </div>
            {/* Content */}
            <div className="relative">
              {/* Founder Image */}
              <div className="flex justify-center z-10 relative overflow-hidden mb-[40px] xl:mb-[40px]">
                <Image
                  src="/copy/founder.png"
                  alt="Founder"
                  className=" w-[150px] lg:w-[200px] h-auto object-cover rounded-full border-4 border-yellow-400"
                  width={200}
                  height={200}
                />
              </div>

              {/* Name and Title */}
              <div className="text-center mb-2 z-10 relative">
                <h2 className="text-[25px] lg:text-[30px] xl:text-[40px] font-[1000] leading-[25px] lg:leading-[30px] xl:leading-[40px] mb-[10px] lg:mb-[15px] xl:mb-[20px] text-black">
                  AHMED ALHOSANI
                </h2>
                <p className="text-[20px] lg:text-[30px] text-black leading-[20px] lg:leading-[40px]">
                  FOUNDER
                </p>
              </div>

              {/* Company Name */}
              <div className="flex justify-center">
                <span
                  className="text-black text-[20px] lg:text-[30px] box-content font-[700] text-center my-[10px] lg:my-[5px] xl:my-[25px] rounded-md py-1 px-[30px] z-10 relative"
                  style={{ backgroundColor: "rgba(238, 180, 0, 0.15)" }}
                >
                  Kief Consultancy And Technology
                </span>
              </div>

              {/* Contact Icons */}
              <div className="flex justify-center items-center gap-6 mb-[30px] lg:mb-[20px] xl:mb-[30px] z-10 relative">
                <a href="mailto:ahmed.alhosani@kief.ae">
                  <Image
                    src="/copy/mail-icon.svg"
                    alt="Mail"
                    className="w-[50px] lg:w-[60px] xl:w-[70px]"
                    width={75}
                    height={75}
                  />
                </a>
                <a href="https://kief.ae" target="_blank">
                  <Image
                    src="/copy/globe-icon.svg"
                    alt="Website"
                    className="w-[50px] lg:w-[60px] xl:w-[70px]"
                    width={75}
                    height={75}
                  />
                </a>
              </div>

              {/* Social Media */}
              <div className="flex justify-center gap-3 my-4 mb-[20px] lg:mb-[10px] xl:mb-[30px] z-10 relative">
                <a
                  href="https://www.facebook.com/people/Kief-Consultancy-and-Technology/100087450420626/"
                  target="_blank"
                >
                  <Image
                    src="/copy/facebook.svg"
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://x.com/kief_ae" target="_blank">
                  <Image src="/copy/x.svg" alt="X" width={30} height={30} />
                </a>
                <a
                  href="https://www.instagram.com/kiefconsultancy"
                  target="_blank"
                >
                  <Image
                    src="/copy/instagram.svg"
                    alt="Instagram"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/kievct.ae/"
                  target="_blank"
                >
                  <Image
                    src="/copy/linkedin.svg"
                    alt="LinkedIn"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@kief_consultancy"
                  target="_blank"
                >
                  <Image
                    src="/copy/tiktok.svg"
                    alt="Tiktok"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
              {/* Backgrounds */}
              <div className="absolute bottom-0 left-0 w-full z-0">
                <Image
                  src="/copy/white_bg.svg"
                  alt="Yellow Background"
                  className="w-full"
                  width={675}
                  height={509}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full z-9 animate-switch pointer-events-none">
                <Image
                  src="/copy/yellow-bg.svg"
                  alt="White Background"
                  className="w-full"
                  width={675}
                  height={509}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="z-10 relative flex justify-center items-center gap-3 mt-4">
              <a
                href="/save_contact.vcf"
                download="save_contact.vcf"
                className="text-[20px] lg:text-[25px] xl:text-[40px] border-2 border-yellow-400 bg-gradient-to-r from-black to-yellow-400 text-white font-semibold py-3 px-6 rounded-[100px] shadow-md hover:opacity-90"
              >
                SAVE CONTACT
              </a>

              <a href="tel:+971508226697">
                <div className="bg-green-500 p-4 rounded-full shadow-lg cursor-pointer animate-pulseScale">
                  <svg
                    className="text-white w-[30px] lg:w-[30px] xl:w-[60px] animate-rotateBounce"
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

        {/* Slide 2 */}
        <div className="h-screen snap-start flex flex-col align-baseline justify-center items-center">
          <Image
            src="/copy/second_slide.png"
            alt="Second Slide"
            className="h-auto w-[390px] md:w-[500px] lg:w-[706px] object-cover rounded-2xl shadow-xl border-2 border-yellow-300"
            width={706}
            height={1083}
          />
          <div className="h-[20vh] md:h-0 w-full"></div>
        </div>

        {/* Slide 3 */}
        <div className=" md:h-screen snap-start flex flex-col justify-center items-center">
          <Image
            src="/copy/third_slide.png"
            alt="Third Slide"
            className="h-auto w-[390px] md:w-[500px] lg:w-[706px] object-cover rounded-2xl shadow-xl border-2 border-yellow-300"
            width={706}
            height={1083}
          />
          <div className="h-[20vh] md:h-0 w-full"></div>
        </div>
      </div>
    </main>
  );
}
