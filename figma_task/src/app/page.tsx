"use client";
import Apı_comment from "./components/Apı_comment";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Keyfeatures from "./components/Keyfeatures";
import Slider from "./components/Slider";
import Subscribe from "./components/Subscribe";

export default function Page() {
  return (
    <div className="min-h-screen bg-white ">

      <div className="bg-custom-gradient min-h-screen">
        <Header />
        <Hero />
        <Hero2 />
      </div>

      <Slider />
      <Keyfeatures />
      <Apı_comment />
      <Subscribe />
      <Footer />
    </div>
  );
}
