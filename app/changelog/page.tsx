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
      <h1 className="mb-10 text-5xl font-bold text-primary-700">Change Logs</h1>
      <span className="inline-block rounded-full bg-primary-200 px-4 py-2 text-sm font-medium text-primary-900">
        Only major version updates are shown here. For most recent updates,
        please see{" "}
        <a
          href="https://discord.com/invite/7QMraJUsQt"
          className="text-black-100 font-bold hover:underline"
        >
          #releases
        </a>{" "}
        channel in{" "}
        <a
          href="https://discord.com/invite/7QMraJUsQt"
          className="text-black-100 font-bold hover:underline"
        >
          Discord
        </a>{" "}
        or our{" "}
        <a
          href="https://github.com/trypear"
          className="text-black-100 font-bold hover:underline"
        >
          github commits
        </a>{" "}
        in various repos.
      </span>
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
