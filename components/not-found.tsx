import notFoundPan from "../public/gifs/dukepanshake-404.webm";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Head from "next/head";

export default function Custom404() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Page header */}
            <div className="md:pb-15 mx-auto max-w-3xl pb-10 text-center text-2xl md:text-3xl lg:text-4xl">
              <h1 className="h1 leading-tight">
                404 - Page Not Found
              </h1>
            </div>
            <div className="mx-auto max-w-xl">
              <div className="flex items-center justify-center mb-10">
                <video autoPlay loop muted playsInline className="max-w-full h-auto">
                  <source src={notFoundPan} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex items-center">
                <div
                  className="mr-3 grow border-t border-dotted border-gray-700"
                  aria-hidden="true"
                ></div>
                <div className="text-center text-gray-700">
                  Oops! The page you're looking for doesn't exist.
                </div>
                <div
                  className="ml-3 grow border-t border-dotted border-gray-700"
                  aria-hidden="true"
                ></div>
              </div>
              <div className="-mx-3 mt-11 flex flex-wrap">
                <div className="w-full px-3 text-center">
                  <Button
                    size={"sm"}
                    onClick={handleClick}
                    className="w-full bg-primary-700 text-white-main hover:bg-primary-800 hover:shadow-sm"
                  >
                    Go back to homepage
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}