"use client";

import React from "react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const Contributing: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="ml-67 pb-12 font-architects-daughter mt-20 text-5xl font-semibold leading-tight tracking-tighter text-primary-800">
          PearAI 
        </h1>
      </div>

     <div className=" flex items-start justify-center ml-30 pl-50">
        <h2 className="font-architects-daughter text-3xl font-light leading-tight tracking-tighter">Contributing 101: Everything you need to know</h2>
     </div>

      <div className="pl-1 pt-20 mt-20 pr-10 ">
        <Accordion type="single" collapsible className="ml-50 pl-10 ">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-architects-daughter text-4xl font-regular leading-tight tracking-tighter">
              What is PearAI?
            </AccordionTrigger>
            <AccordionContent>
              <li className="font-architects-daughter text-2xl font-light mt-[20px] pl-16 leading-tight tracking-tighter">
                an AI-powered code editer
              </li>
            </AccordionContent>
            <AccordionContent>
              <li className="font-architects-daughter text-2xl font-light mt-[10px] pl-16 leading-tight tracking-tighter">
                short term goal: Beat the opps - github copilot, jetbrains ai, cursor.sh, etc.
              </li>
            </AccordionContent>
            <AccordionContent>
              <li className="font-architects-daughter text-2xl font-light pl-16 pt-3 leading-tight tracking-tighter">
                long term goal: Empower people by reducing time from ideas to conception.
              </li>
            </AccordionContent>
            <AccordionContent>
              <h2 className="font-architects-daughter ml-30 mt-[20px] text-2xl font-light leading-tight tracking-tighter">
                - Our mission is to make the best AI-powered code editor
              </h2>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="pl-12 pr-10">
        <Accordion type="single" collapsible className="">
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-architects-daughter text-4xl font-regular leading-tight tracking-tighter">
              Why should you contribute?
            </AccordionTrigger>
            <AccordionContent>
              <Separator className="ml-15 w-full border-grey-300 mb-2 mt-10 border-t-2 pt-4" />
              <h2 className="font-architects-daughter pl-16 pt-[-2px] text-3xl font-semibold leading-tight tracking-tighter">
                Be part of a meaningful mission
              </h2>
              <ul>
                <li className="font-architects-daughter text-2xl font-light mb-[-2px] pl-16 pt-9 leading-tight tracking-tighter">
                  - Empower people to bring their ideas into reality.
                </li>
                <li className="font-architects-daughter text-2xl font-light pl-16 pt-4 leading-tight tracking-tighter">
                  - Empower people to be entrepreneurs, giving more power to the individual.
                </li>
                <li className="font-architects-daughter text-2xl font-light pl-16 pt-4 leading-tight tracking-tighter">
                  - Be at the forefront of the ever-nearing landscape change of software engineering/coding.
                </li>
              </ul>
            </AccordionContent>
            <AccordionContent>
              <h2 className="font-architects-daughter mt-5 pl-16 text-3xl font-semibold leading-tight tracking-tighter">
                Practical
              </h2>
              <ul>
                <li className="font-architects-daughter font-light text-2xl pl-16 pt-7 leading-tight tracking-tighter">
                  Built in public - You only have to worry about improving the product,
                  we will make sure others know about Pear and your contributions.
                </li>
                <li className="font-architects-daughter font-light text-2xl pl-16 pt-3 leading-tight tracking-tighter">
                  Resume - All contributions are public, you can list PearAI on your resume experience. If you have made
                   contributions that are hard to find, let us know and we will surface them. All credits will be given.
                </li>
              </ul>
            </AccordionContent>
            <AccordionContent>
              <h2 className="font-architects-daughter pl-16 text-3xl pt-5 font-semibold leading-tight tracking-tighter">
                Fun
              </h2>
              <ul>
                <li className="font-architects-daughter font-light text-2xl pl-16 pt-5 leading-tight tracking-tighter">
                  - Be a part of an active and fun community.
                </li>
                <li className="font-architects-daughter font-light text-2xl pl-16 pt-5 leading-tight tracking-tighter">
                  - Shoutouts for contributors at the end of every week in Discord in <span className="text-primary-800">#general</span>
                </li>
                <li className="font-architects-daughter font-light text-2xl pl-16 pt-5 leading-tight tracking-tighter">
                  - Shoutouts for contributors in our videos.
                </li>
                <li className="font-architects-daughter font-light text-2xl pl-16 pt-5 leading-tight tracking-tighter">
                  - Discounts when the product is released for top contributors.
                </li>
                <li className="font-architects-daughter font-light text-2xl pl-16 pt-5 leading-tight tracking-tighter">
                  - Free merch for top contributors.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="pl-12 pr-10">
        <Accordion type="single" collapsible >
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-architects-daughter  text-4xl font-regular leading-tight tracking-tighter">
                Codebase
            </AccordionTrigger>
            <AccordionContent>
              <Separator className="ml-15 w-full border-grey-300 mb-2 mt-10 border-t-2 pt-4" />
              <h2 className="font-architects-daughter font-light ml-[40px] mt-2 text-2xl leading-tight tracking-tighter">
                {" "}
                - All repos can be found here:{" "}
                <a href="https:github.com/trypear/" className="text-primary-800 underline">
                  https:github.com/trypear/
                </a>
              </h2>
              <h2 className="font-architects-daughter font-light ml-[40px] pt-4 text-2xl leading-tight tracking-tighter">
                - Find full repo structure here:{" "}
                <a
                  href="https:docs.google.com/document/d/1AO9wuZDOae9jj4FGGpVqKUVe4Jj9vpl1FTR3k0RzhU4/edit#heading=h.nppbhnnt72ef"
                  className="text-primary-800 underline"
                >
                  https://docs.google.com/document/
                </a>
              </h2>
              <Separator className="ml-15 w-full border-grey-300 mb-2 mt-7 border-t-2 pt-4" />
            </AccordionContent>
            <AccordionContent>
              <li className="font-architects-daughter font-light text-2xl pl-16 leading-tight tracking-tighter">
                pearai app repo:{" "}
                <a className="text-primary-800 underline" href=" https:github.com/trypear/pearai-app">
                  https:/github.com/trypear/pearai-app
                </a>
              </li>
            </AccordionContent>
            <AccordionContent>
              <li className="font-architects-daughter font-light text-2xl pl-16 pt-[-3px] leading-tight tracking-tighter">
                pear submodule repo:{" "}
                <a className="text-primary-800 underline" href="https:github.com/trypear/pearai-submodule">
                  https:github.com/trypear/pearai-submodule
                </a>
              </li>
              <li className="font-architects-daughter font-light text-2xl pl-16 pt-4 leading-tight tracking-tighter">
                {" "}
                pear landing page repo:{" "}
                <a className="text-primary-800 underline" href="https:github.com/trypear/pear-landing-page">
                  https:github.com/trypear/pear-landing-page
                </a>
              </li>
              <h2 className="font-architects-daughter font-semibold ml-[40px] pt-7 text-3xl leading-tight tracking-tighter">
              Roles
             </h2>
            
             <li className="font-architects-daughter font-light text-2xl pt-6 pl-16 leading-tight tracking-tighter">
                 User - Anyone
              </li>
            </AccordionContent>
            <AccordionContent>
              <li className="font-architects-daughter font-light text-2xl pl-16 leading-tight tracking-tighter">
              Contributor: 1+ commits to codebase, can create PR’s 
              </li>
            </AccordionContent>
            <AccordionContent>
                
              <li className="font-architects-daughter font-light text-2xl pl-16 leading-tight tracking-tighter">
              Moderator: Application based, can approve PR’s, cannot merge yet  
              </li> 
              <li className="font-architects-daughter font-light text-2xl pl-16 pt-4 leading-tight tracking-tighter">
              Maintainer: Approval-based from Admins / has been a moderator for a while, read/write access to main 
              </li> 
              <li className="font-architects-daughter font-light text-2xl pl-16 pt-4 leading-tight tracking-tighter">
              Admin: Pan and Nang
              </li>
              <h2 className="font-architects-daughter font-semibold ml-[40px] pt-7 text-3xl leading-tight tracking-tighter">
              Getting Started
             </h2>
             <li className="font-architects-daughter font-light text-2xl pl-16 pt-6 leading-tight tracking-tighter">
              Look through existing channels, threads, and pinned messages in Discord for context
              </li> 
              <li className="font-architects-daughter font-light text-2xl pl-16 pt-4 leading-tight tracking-tighter">
               Look through the quest boards for current issues on the backlog that havent been assigned yet
              </li> 
              <li className="font-architects-daughter font-light text-2xl pl-16 pt-4 leading-tight tracking-tighter">
               Fork the repo, and create your own branch 
              </li> 
              <h2 className="font-architects-daughter pt-7 text-1xl font-light text-2xl leading-tight tracking-tighter">
                (Check README for instructions on running the app locally) 
              </h2>
              <h2 className="font-architects-daughter text-1xl font-light text-2xl pt-7 leading-tight tracking-tighter "> - We know many of you will have great ideas. However, please keep in mind we are also bounded by priorities, and will focus on those first. <br></br>If you’d like to try your hand at an idea that is not currently prioritized, feel free to send designs or create PRs, but no promises for accepting them!
              </h2>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
            
      </div>
    </div>
  );
};

export default Contributing;
