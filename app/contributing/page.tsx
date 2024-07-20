"use client";

import React from "react";
import { Separator } from "@radix-ui/react-dropdown-menu";

export const Contributing: React.FC = () => {
  return (
    <div>
      <div className="flex items-start justify-center">
        <h1 className="ml-67 font-architects-daughter pt-40 text-5xl font-extrabold leading-tight tracking-tighter">
          PearAI team contributing 101
        </h1>
      </div>

      <Separator className="ml-15 w-4/4 border-grey-300 mb-2 mt-10 border-t-2" />

      <div className="justify-left mt-[20px] flex items-center pl-16">
        <h2 className="font-architects-daughter text-3xl font-semibold leading-tight tracking-tighter">
          What is PearAI?
        </h2>
      </div>

      <div className="flex justify-end pr-12"></div>

      <div>
        <li className="mt-[20px] pl-16">An AI-powered code editer</li>
        <li className="mt-[10px] pl-16">
          short term goal: Beat the opps - github copilot, jetbrains ai,
          cursor.sh, etc.{" "}
        </li>
        <li className="pl-16 pt-3">
          long term goal: Empower people by reducing time from ideas to
          conception.{" "}
        </li>

        <h2 className="font-architects-daughter ml-40 mt-[80px] text-3xl font-semibold leading-tight tracking-tighter">
          - Our mission is to make the best AI-powered code editor
        </h2>
      </div>

      <div className="flex justify-center pt-20">
        <h1 className="font-architects-daughter pt-30 text-5xl font-extrabold leading-tight tracking-tighter">
          Why should you contribute?
        </h1>
      </div>
      <Separator className="ml-15 w-4/4 border-grey-300 mb-2 mt-10 border-t-2 pt-4" />
      <h2 className="font-architects-daughter pl-16 pt-[-5px] text-3xl font-semibold leading-tight tracking-tighter">
        Be part of a meaningful mission
      </h2>
      <div className="pt-12">
        <li className="mb-[-2px] pl-16">
          Empower people to bring their ideas into reality.
        </li>
        <li className="pl-16 pt-3">
          Empower people to be entrepreneurs, giving more power to the
          individual.
        </li>
        <li className="pl-16 pt-3">
          Be at the forefront of the ever-nearing landscape change of software
          engineering/coding.
        </li>
      </div>

      <div className="mt-3 flex min-h-[700px]">
        <h2 className="font-architects-daughter pl-16 pt-20 text-3xl font-semibold leading-tight tracking-tighter">
          Practical
        </h2>
      </div>

      <div className="mt-[-530px]">
        <li className="mb-[-2px] pl-16">
          Built in public: you only have to worry about improving the product,
          we will make sure others know about Pear and your contributions.
        </li>
        <li className="pl-16 pt-3">
          Resume: all of your contributions are public, which means you can list
          PearAI on your resume experience. If you have made contributions that
          are hard to find, let us know and we will surface them. All credits
          will be given.
        </li>
      </div>

      <div className="min-h-[700px] pt-20">
        <h2 className="font-architects-daughter pl-16 text-3xl font-semibold leading-tight tracking-tighter">
          Fun
        </h2>
        <div className="pt-5">
          <li className="mb-[3px] pl-16">
            Be a part of an active and fun community.
          </li>
          <li className="pl-16 pt-3">
            Shoutouts for contributors at the end of every week in Discord in
            #general.
          </li>
          <li className="pl-16 pt-3">
            Shoutouts for contributors in our videos.
          </li>
          <li className="pl-16 pt-3">
            Discounts when the product is released for top contributors.
          </li>
          <li className="pl-16 pt-3">Free merch for top contributors.</li>
        </div>
      </div>

      <div className="flex min-h-[1500px] justify-center">
        <h1 className="font-architects-daughter mt-[-40px] text-5xl font-extrabold leading-tight tracking-tighter">
          Codebase
        </h1>
      </div>

      <Separator className="ml-15 w-4/4 border-grey-300 mb-20 mt-[-1448px] border-t-2" />

      <div className="min-h-[1200px]">
        <h2 className="font-architects-daughter ml-[40px] text-2xl font-semibold leading-tight tracking-tighter">
          {" "}
          All repos can be found here:{" "}
          <a
            href="https://github.com/trypear/"
            className="text-blue-500 underline"
          >
            https://github.com/trypear/
          </a>
        </h2>
        <h2 className="font-architects-daughter ml-[40px] pt-4 text-2xl font-semibold leading-tight tracking-tighter">
          Find full repo structure here:{" "}
          <a
            href="https://docs.google.com/document/d/1AO9wuZDOae9jj4FGGpVqKUVe4Jj9vpl1FTR3k0RzhU4/edit#heading=h.nppbhnnt72ef"
            className="text-blue-500 underline"
          >
            https://docs.google.com/document/
          </a>
        </h2>
        <Separator className="border-grey-300 ml-[40px] mt-6 w-2/4 border-t-2" />
        <li className="font-architects-daughter mb-[3px] pl-16 pt-5 font-semibold">
          pearai app repo:{" "}
          <a href="https://github.com/trypear/pearai-app">
            https://github.com/trypear/pearai-app
          </a>
        </li>
        <li className="font-architects-daughter pl-16 pt-3 font-semibold">
          pear submodule repo:{" "}
          <a href="https://github.com/trypear/pearai-submodule">
            https://github.com/trypear/pearai-submodule
          </a>
        </li>
        <li className="font-architects-daughter pl-16 pt-3 font-semibold">
          {" "}
          pear landing page repo:{" "}
          <a href="https://github.com/trypear/pear-landing-page">
            https://github.com/trypear/pear-landing-page
          </a>
        </li>
        <Separator className="pt-25 w-4/4 border-grey-300 mb-2 mt-10 border-t-2" />
      </div>

      <div className="min-h-[5px] pt-20">
        <h2 className="font-architects-daughter ml-[40px] mt-[-950px] text-3xl font-semibold leading-tight tracking-tighter">
          {" "}
          Contributing roles
        </h2>
        <Separator className="border-grey-300 ml-[40px] mt-6 w-1/4 border-t-2" />
        <h2 className="font-regular font-architects-daughter ml-[40px] mt-7 text-2xl leading-tight tracking-tighter">
          - User : anyone{" "}
        </h2>
        <h2 className="font-regular font-architects-daughter ml-[40px] mt-4 text-2xl leading-tight tracking-tighter">
          - Contributor : 1 + commits to codebase | can create PR’s{" "}
        </h2>
        <h2 className="font-regular font-architects-daughter ml-[40px] mt-4 text-2xl leading-tight tracking-tighter">
          - Moderator : Application based | can approve PR’s | cannot merge yet{" "}
        </h2>
        <h2 className="font-regular font-architects-daughter ml-[40px] mt-4 text-2xl leading-tight tracking-tighter">
          - Maintainer : Approval-based from Admins | has been a moderator for a
          while | read/write access to main
        </h2>
        <h2 className="font-regular font-architects-daughter ml-[40px] mt-4 text-2xl leading-tight tracking-tighter">
          - Admin : Pan & Nang{" "}
        </h2>
      </div>

      <div className="min-h-[5px] pt-20">
        <h2 className="font-architects-daughter ml-[40px] mt-[-470px] text-3xl font-semibold leading-tight tracking-tighter">
          Get Started by staying updated
        </h2>
        <Separator className="border-grey-300 ml-[40px] mt-6 w-2/4 border-t-2" />
        <h2 className="font-regular font-architects-daughter ml-[40px] mt-7 text-2xl leading-tight tracking-tighter">
          - Go through the discord and regularly check channels, threads, and
          pinned messages for context{" "}
        </h2>
        <h2 className="font-regular font-architects-daughter ml-[40px] mt-7 text-2xl leading-tight tracking-tighter">
          - Check Quest boards to see whos working on what{" "}
        </h2>
        <h2 className="font-regular font-architects-daughter ml-[40px] mt-7 text-2xl leading-tight tracking-tighter">
          - Find an issue, fork the repo relevent to said issue, and create your
          own branch
        </h2>
      </div>
    </div>
  );
};

export default Contributing;
