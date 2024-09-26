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
    <div className="mx-auto mb-32 mt-36 min-h-screen px-10">
      <h1 className="mb-16 text-5xl font-bold text-primary-700">Change Logs</h1>
      <main>
        <section>
          {/* <!-- Timeline --> */}
          {updates.map((update, index) => (
            <TimelineItem key={index} {...update} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default ChangeLog;
