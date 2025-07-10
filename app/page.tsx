import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center bg-black">
        <Image
          src="/poster.png"
          alt="Drive For Sight Poster"
          width={800}
          height={600}
          className="max-h-[120vh] max-w-[200vw] object-contain"
        />
      </div>
    </div>
  );
}
