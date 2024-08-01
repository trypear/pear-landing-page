import updates from "./changelog";
import TimelineItem from "./timeline";

export default function ChangeLog() {
  return (
    <>
      <div className="mx-2 px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="mx-auto min-h-screen pt-24 lg:w-4/6 lg:py-32">
          <h1 className="mb-6 text-xl font-bold tracking-wide">Change logs</h1>
          <main>
            <div>
              {/* <!-- Timeline --> */}
              {updates.map((update, index) => (
                <TimelineItem key={index} {...update} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
