import { Cedarville_Cursive } from "next/font/google";

const cursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: ["400"],
});

export default function donate() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className={`${cursive.className} text-4xl`}>Coming soon</h1>
    </div>
  );
}
