import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HackathonPage() {
  return (
    <div className="h-screen w-screen flex justify-center overflow-hidden relative bg-gray-900 light">
      <img
        src="/images/pearai-hackathon-mobile.svg"
        alt="PearAI Hackathon"
        className="w-full h-full absolute object-cover opacity-90 md:hidden" // Show on mobile, hide on larger screens
      />
      <img
        src="/images/pearai-hackathon.svg"
        alt="PearAI Hackathon"
        className="w-full h-full absolute object-cover opacity-90 hidden md:block" // Hide on mobile, show on larger screens
      />
      <Button
        asChild
        variant="white"
        className="relative top-[26rem] md:top-[22rem] z-10 transform hover:scale-105 transition-transform duration-200 text-xl md:text-4xl px-8 py-8"
      >
        <Link href="https://forms.gle/Jph47doeUHy1CP1J6" target="_blank">
          Sign up early today
        </Link>
      </Button>
    </div>
  );
}
