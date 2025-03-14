import Spline from "@splinetool/react-spline/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Nextjs15`,
  description: "Nextjs15",
  icons: {
    icon: "/next.svg",
  },
};

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center">
      <div className="w-[300px] h-[300px] overflow-hidden">
        <div className="w-full h-full transform scale-75">
          {" "}
          <Spline scene="https://prod.spline.design/HPCHGeiSnzjVLfJg/scene.splinecode" />
        </div>
      </div>
      <div className="w-[300px] h-[300px] overflow-hidden">
        <div className="w-full h-full transform scale-75">
          {" "}
          <Spline scene="https://prod.spline.design/HPCHGeiSnzjVLfJg/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
