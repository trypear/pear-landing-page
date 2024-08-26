import { Metadata } from "next";
import updates from "./changelog";
import { TimelineItem } from "./timeline";
import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Change Logs",
  description: "The change logs for PearAI.",
  canonical: "/changelog",
});

const ChangeLog: React.FC = () => {
  return (
    <div className="mx-2 px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="mx-auto min-h-screen pt-8 lg:py-32 lg:pt-28 xl:max-w-5xl">
        <h1 className="mb-10 text-center text-3xl font-semibold text-primary-700 md:mb-16 lg:text-4xl">
          Change Logs
        </h1>
        <main>
          <section>
            {/* <!-- Timeline --> */}
            {updates.map((update, index) => (
              <TimelineItem key={index} {...update} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default ChangeLog;
