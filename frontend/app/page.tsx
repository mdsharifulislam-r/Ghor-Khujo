import Aboutus from "@/components/Home/Aboutus";
import CardSection from "@/components/Home/CardSection";
import Gallery from "@/components/Home/Gallery";
import Hero from "@/components/Home/Hero";
import MiniSearch from "@/components/Home/MiniSearch";
import NearestHomes from "@/components/Home/NearestHomes";
import Testmonials from "@/components/Home/Testmonials";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Hero/>
   <MiniSearch/>
   <CardSection/>
   <NearestHomes/>
   <Aboutus/>
   <Testmonials/>
   <Gallery/>
   </>
  );
}
