import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DownloadPage: React.FC = () => {
  return (
    <section
      className="relative py-8 sm:py-12 md:py-16 lg:py-24"
      aria-labelledby="download-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          <div className="mx-auto mt-16 max-w-4xl space-y-4 text-center sm:mt-0 sm:space-y-6">
            <h1
              id="download-heading"
              className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Thanks for downloading PearAI! 🍐
            </h1>
          </div>

          <div className="flex items-center justify-center" role="list">
            <Card className="w-full max-w-md border">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary-700">
                  <p>
                    If the download hasn’t started automatically
                    <Link
                      href="https://discord.com/channels/1237009981803462729/1261895264382484520"
                      className="text-link ml-1"
                    >
                      click here
                    </Link>
                  </p>
                </CardTitle>
              </CardHeader>

              <CardFooter className="p-6 text-center">
                <p className="text-base text-gray-400">
                  If you encounter any issues, feel free to ask on our
                  <Link
                    href="https://discord.com/channels/1237009981803462729/1261895264382484520"
                    target="_blank"
                    className="text-link ml-1"
                  >
                    Discord
                  </Link>
                  .
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadPage;
