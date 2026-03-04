import BagComparison from "@/components/homePage/bagComparision";
import BagCustomizer from "@/components/homePage/bagCustomizer";
import FastCheckout from "@/components/homePage/fastCheckout";
import Hero3D from "@/components/homePage/hero";
import LifestyleSelector from "@/components/homePage/lifeStyleSelecter";
import SmartFeatures from "@/components/homePage/startFeatures";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
     <Hero3D/>
     <SmartFeatures/>
     <LifestyleSelector />

      {/* 4. Customization Tool */}
      <BagCustomizer />

      {/* 5. Smart Compare Tool */}
      <BagComparison />

      {/* 6. Fast Checkout Experience */}
      <FastCheckout />
    </div>
  );
}
