import React from "react";
import videoGym from "../assets/Gymwolf 2019.mp4";
import { useEffect, useRef, useState } from "react";
import RegisterModal from "./RegisterModal";
export default function HomeVideo() {
  const videoRef = useRef(null);
  const [registerModal, setRegisterModal] = useState(false);
  const registerRef = useRef(null);
  function handleRegister() {
    setRegisterModal(true);
  }
  useEffect(() => {
    function playVideo() {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 4000);
    }
    playVideo();
  }, []);

  return (
    <div id="main" style={{ position: "relative" }}>
      <video ref={videoRef} width="100%" height="100%" muted loop>
        <source src={videoGym} type="video/mp4" />
      </video>
      <h1
        style={{
          position: "absolute",
          top: "30%",
          fontSize: "4vw",
          color: "#FFFFFF",
          fontWeight: "700",
          left: "20%",
        }}
      >
        A better way to track your workouts
      </h1>
      <button
        style={{
          width: "30%",
          height: "8%",
          backgroundColor: "#4299E1",
          color: "#FFFFFF",
          fontSize: "2vw",
          borderRadius: "7px",
          position: "absolute",
          top: "50%",
          left: "35%",
        }}
        onClick={handleRegister}
      >
        Start Free
      </button>
      <RegisterModal
        initialRef={registerRef}
        isOpen={registerModal}
        onClose={() => {
          setRegisterModal(false);
        }}
      />
    </div>
  );
}
