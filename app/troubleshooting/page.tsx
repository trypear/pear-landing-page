import React from "react";

const TroubleshootingPage: React.FC = () => {
  return (
    <section className="mx-auto mt-36 flex w-full flex-col items-center px-4">
      <div className="mb-16 text-center">
        <h2
          className="mb-4 whitespace-pre-line text-3xl font-bold text-primary-700"
          data-aos="fade-up"
        >
          Troubleshooting
        </h2>
        <p
          className="whitespace-pre-line text-base text-gray-600"
          data-aos="fade-up"
        >
          If you are experiencing issues, please join our Discord server for
          support.
          <br />
          Once in the server, you can message us for assistance and we&apos;ll
          help you immediately!
        </p>
        <div className="mt-8">
          <a
            href="https://discord.gg/7QMraJUsQt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white inline-block rounded bg-primary-600 px-6 py-3 font-normal shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-opacity-50"
          >
            Join PearAI Discord
          </a>
        </div>
      </div>
    </section>
  );
};

export default TroubleshootingPage;
