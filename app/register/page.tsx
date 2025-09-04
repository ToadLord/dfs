import { Cedarville_Cursive } from "next/font/google";

const cursive = Cedarville_Cursive({
      subsets: ["latin"],
      weight: ["400"],
    });

export default function register()
{

    return (
        <div className="flex justify-center items-center h-screen">
      <h1 className={`${cursive.className} text-4xl text-center`}>Registration is now closed.</h1>
        </div>
    );
}
