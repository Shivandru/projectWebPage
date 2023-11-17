import React from "react";
import HomeVideo from "../components/homeVideo";
import PersonalTrainer from "../components/PersonalTrainer";
import Features from "../components/Features";
import Progress from "../components/Progress";
import Database from "../components/Database";
import SubFooter from "../components/SubFooter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HomeVideo />
      <PersonalTrainer />
      <Features />
      <Progress />
      <Database />
      <SubFooter />
    </>
  );
}
