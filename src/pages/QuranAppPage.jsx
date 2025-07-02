import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function QuranAppPage() {
  useEffect(() => {
    document.title = "Qur'an - App";
  }, []);

  const navigate = useNavigate();
  function handleClickkeBeranda() {
    navigate("/");
  }

  return (
    <div className="grow bg-white p-8 flex flex-col items-center justify-center">
      <p className="font-size-text-biasa">App Soon!</p>
      <button
        onClick={handleClickkeBeranda}
        className="font-size-text-biasa bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 mt-4 rounded-full cursor-pointer transition-colors duration-300"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
}

export default QuranAppPage;
