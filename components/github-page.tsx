import React from "react"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
const GithubPageComponent: React.FC = () => {
    return (
        <section
            className="px-4 py-12 pt-20"
            data-aos="fade-up"
            data-aos-delay="200"
        >
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row">
                    {/* Left column */}
                    <div className="lg:w-1/2 lg:pr-8">

                        <h2 className="mb-4 text-3xl font-bold">Github Repositories</h2>
                        <div className="mb-8 text-gray-500">
                            {/*App Repo */}
                            <p>
                                <a
                                    href="https://github.com/trypear/pearai-app"
                                    className="font-bold text-primary-700"
                                >
                                    PearAI App Github Repository
                                </a>{" "}
                                <span className="font-bold">(PLEASE STAR ⭐)</span>
                            </p>
                            <p>
                                This is the main app for PearAI and contains the code for both
                                the VSCode fork and AI chat extension (the submodule
                                repository).
                            </p>
                            {/*App Repo Button*/}
                            <div className="mt-6 w-full px-3 text-center lg:ml-10 lg:px-0 lg:text-left">
                                <Button
                                    asChild
                                    size="lg"
                                    variant="default"
                                    className="h-12 w-3/4 text-xl text-white-main hover:bg-primary-800 hover:shadow-sm"
                                >
                                    <Link
                                        href="https://github.com/trypear/pearai-app"
                                        target="_blank"
                                    >
                                        App Repository
                                        <ExternalLink size={"20"} />
                                    </Link>
                                </Button>
                            </div>
                            <br />

                            {/*Submodule Repo */}
                            <p>
                                <a
                                    href="https://github.com/trypear/pearai-submodule"
                                    className="font-bold text-primary-700"
                                >
                                    PearAI Submodule Repository
                                </a>{" "}
                                <span className="font-bold">(PLEASE STAR ⭐)</span>
                            </p>
                            <p>
                                The logic for all the AI related features including the chat. It
                                is a submodule of the outer pearai-app repo because it is a fork
                                of another open source repository.
                            </p>
                            {/*Submodule Repo Button*/}
                            <div className="mt-6 w-full px-3 text-center lg:ml-10 lg:px-0 lg:text-left">
                                <Button
                                    asChild
                                    size="lg"
                                    variant="default"
                                    className="h-12 w-3/4 text-xl text-white-main hover:bg-primary-800 hover:shadow-sm"
                                >
                                    <Link
                                        href="https://github.com/trypear/pearai-submodule"
                                        target="_blank"
                                    >
                                        Submodule Repository
                                        <ExternalLink size={"20"} />
                                    </Link>
                                </Button>
                            </div>
                            <br />

                            {/*Landing Page Repo */}
                            <p>
                                <a
                                    href="https://github.com/trypear/pearai-landing-page"
                                    className="font-bold text-primary-700"
                                >
                                    PearAI Landing Page Repository
                                </a>

                            </p>
                            <p>
                                This website which informs users about PearAI and its features.
                                It includes the frontend implementation and user interface
                                components.
                            </p>
                        </div>




                        {/*Landing Page Repo Button*/}
                        <div className="mt-6 w-full px-3 text-center lg:ml-10 lg:px-0 lg:text-left">
                            <Button
                                asChild
                                size="lg"
                                variant="default"
                                className="h-12 w-3/4 text-xl text-white-main hover:bg-primary-800 hover:shadow-sm"
                            >
                                <Link
                                    href="https://github.com/trypear/pear-landing-page"
                                    target="_blank"
                                >
                                    Landing Page Repository
                                    <ExternalLink size={"20"} />
                                </Link>
                            </Button>
                        </div>


                    </div>

                    {/* Right column */}
                    <div className="lg:w-1/2">
                        <h2 className="mb-4 text-3xl font-bold">Quest Board</h2>
                        <div className="mb-8 text-gray-500">
                            <p>
                                Checking out quest boards are a great way to get context on what’s currently being worked on.
                                They can be found in the <a href="https://github.com/orgs/trypear/projects" className="font-bold text-primary-700">
                                    Projects page
                                </a> of the <a href="https://github.com/trypear" className="font-bold text-primary-700">
                                    trypear github profile
                                </a>.
                            </p>
                            <br></br>
                            The three quest boards are:
                            <li className="ml-2">
                                <a href="https://github.com/orgs/trypear/projects/2" className="font-bold text-primary-700">
                                    Landing Page Quest Board
                                </a>
                            </li>
                            <li className="ml-2">
                                <a href="https://github.com/orgs/trypear/projects/1" className="font-bold text-primary-700">
                                    Backend & Server Quest Board
                                </a>
                            </li>
                            <li className="ml-2">
                                <a href="https://github.com/orgs/trypear/projects/5" className="font-bold text-primary-700">
                                    Dev Experience & Testing Quest Board
                                </a>
                            </li>
                            <br />
                            <div
                                className="font-bold rounded-3xl bg-primary-50 pb-3 pl-6 pr-6 pt-3 text-center text-primary-700"
                                style={{
                                    border: "1px solid rgba(20, 189, 149, 0.35)",
                                    background: "rgba(20, 189, 149, 0.03)",
                                }}
                            >
                                <p><a href="https://github.com/orgs/trypear/projects">Quest Boards</a></p>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-4 text-3xl font-bold ">Want to Contribute?</h2>
                            <p>
                                <a
                                    href="https://docs.google.com/presentation/u/0/d/1zR9-7DTlb2PcsnapryZw8jHSkLTs9JxeXth4nyeemAQ/edit"
                                    className="font-bold text-primary-700"
                                >
                                    pear.ai contributing 101
                                </a>
                            </p>


                            {/* Contributing Guide + How are we going to work together (Squads)?  */}

                            <p>
                                <a
                                    href="https://github.com/trypear/pearai-app/blob/main/CONTRIBUTING.md"
                                    className="font-bold text-primary-700"
                                >
                                    Contributing Guide{" "}
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://docs.google.com/document/d/1u_b6tN7rCCOBBSISaI_KMX7K2-vzJqgQIiJgMltegso/edit#heading=h.ns98wd85nc2o"
                                    className="font-bold text-primary-700"
                                >
                                    {" "}
                                    How are we going to work together (Squads)?
                                </a>
                            </p>

                            {/* Explanation of Contributor Roles */}
                            <p>
                                <a
                                    href="https://github.com/trypear/pearai-app/wiki/Open-Source-Roles"
                                    className="font-bold text-primary-700"
                                >
                                    Explanation of Contributor Roles
                                </a>
                            </p>


                            <br />

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubPageComponent;