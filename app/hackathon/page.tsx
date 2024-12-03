import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HackathonPage() {
  return (
    <div className="light relative flex h-screen w-screen justify-center overflow-hidden bg-black pt-12">
      <img
        src="/images/pearai-hackathon-mobile.png"
        alt="PearAI Hackathon"
        className="absolute h-full w-full object-cover opacity-90 md:hidden" // Show on mobile, hide on larger screens
      />
      <img
        src="/images/pearai-hackathon.png"
        alt="PearAI Hackathon"
        className="absolute hidden h-full w-full object-cover opacity-90 md:block" // Hide on mobile, show on larger screens
      />
      <div className="flex flex-col items-center">
        <p className="text-white-50 h1 relative mt-32 text-center w-full font-bold hidden md:block">Introducing the PearAI Hackathon</p>
        <p className="text-white-50 h1 relative mt-32 text-center w-full font-bold text-6xl md:hidden">PearAI Hackathon</p>
        <p className="text-gray-500 text-xl font-semibold md:text-2xl relative mt-6">Coming soon. Over $10k in cash prizes.</p>
        <Button
          asChild
          variant="white"
          className="relative z-10 transform px-6 py-6 text-lg transition-transform duration-200 hover:scale-105 mt-10 md:mt-10 md:text-xl"
        >
          <Link href="https://forms.gle/Jph47doeUHy1CP1J6" target="_blank">
            Sign up early today
          </Link>
        </Button>
      </div>
    </div>
  );
}
