import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HackathonPage() {
  return (
    <div className="light relative flex h-screen w-screen justify-center overflow-hidden bg-gray-900">
      <img
        src="/images/pearai-hackathon-mobile.svg"
        alt="PearAI Hackathon"
        className="absolute h-full w-full object-cover opacity-90 md:hidden" // Show on mobile, hide on larger screens
      />
      <img
        src="/images/pearai-hackathon.svg"
        alt="PearAI Hackathon"
        className="absolute hidden h-full w-full object-cover opacity-90 md:block" // Hide on mobile, show on larger screens
      />
      <Button
        asChild
        variant="white"
        className="relative top-[26rem] z-10 transform px-8 py-8 text-xl transition-transform duration-200 hover:scale-105 md:top-[22rem] md:text-4xl"
      >
        <Link href="https://forms.gle/Jph47doeUHy1CP1J6" target="_blank">
          Sign up early today
        </Link>
      </Button>
    </div>
  );
}
