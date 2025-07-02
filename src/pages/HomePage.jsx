import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import QuranLogo from "/assets/logo/Quran_Kareem_logo.svg";

function HomePage() {
  useEffect(() => {
    document.title = "Qur'an - Beranda";
  }, []);

  const navigate = useNavigate();
  function handleClickMulaiBaca() {
    navigate("/app");
  }

  return (
    <>
      <div className="content-wrapper container grow flex flex-col pt-16 self-center justify-center md:flex-row md:pl-7 md:pr-7">
        <div className="home-img flex flex-col justify-center items-center mt-2">
          <img src={QuranLogo} alt="quran-logo.svg" className="w-2/4 md:w-full max-w-[50%] md:max-w-full xl:max-w-[80%]" />
          <p className="font-size-credit-img text-center text-gray-500 mt-2">
            Logo "Quran Kareem" by{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Quran_Kareem_logo.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 transition-colors duration-300"
            >
              محمد الحراق
            </a>
          </p>
        </div>

        <div className="home-welcome-text p-4 text-justify flex flex-col justify-center items-center md:ml-16 md:p-0">
          <p className="font-size-text-biasa">
            Temukan kemudahan membaca dan memahami Al-Quran. Aplikasi ini hadir untuk membantumu menjelajahi ayat-ayat suci, di mana pun dan kapan pun kamu inginkan.
          </p>
          <button
            onClick={handleClickMulaiBaca}
            className="font-size-text-biasa bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 mt-4 rounded-full cursor-pointer transition-colors duration-300"
          >
            Mulai Baca
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
