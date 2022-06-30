import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import { ArrowRightIcon } from "@heroicons/react/solid";

interface FWPlaceholderImageProps {}

const FWPlaceholderImage: React.FC<FWPlaceholderImageProps> = () => {
  return (
    <div className="w-full h-48 border border-violet-200 rounded border-4 flex items-center justify-center mb-12">
      image
    </div>
  );
};

const Home: NextPage = () => {
  // TODO: link needs to be added
  const joinUri = "";
  const join = () => {};

  return (
    <div>
      <Head>
        <title>Clubs</title>
        <meta name="description" content="The WordPress of DAO Builders" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/uml2uca.css" />
      </Head>

      <header>
        <div className="container mx-auto max-w-screen-lg p-4">
          <a
            className="text-accent float-right"
            href={joinUri}
            target="_blank"
            rel="noreferrer"
          >
            Join
          </a>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4 flex flex-col max-w-screen-lg">
          {/**
           * ==============
           * Landing Section
           * ==============
           */}
          <section className="py-24 flex justify-center items-center mb-12">
            <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-8 auto-cols-max">
              <div className="bg-white px-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl mb-2 font-medium">Clubs</h2>
                  <div className="mb-12">A WordPress-like DAO Builder</div>
                  <div className="mb-12 text-6xl font-bold">
                    Build your blockchain community in 1 minute
                  </div>
                </div>
                {/* <Button text="Join The Waitlist" onClick={join} /> */}

                <div className="flex">
                  <a
                    href={joinUri}
                    target="_blank"
                    rel="noreferrer"
                    className="relative"
                  >
                    <Image
                      className="rounded-full"
                      src="/images/earth.png"
                      width={62}
                      height={62}
                      alt="Earth"
                    />
                    <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center">
                      <ArrowRightIcon className="text-white w-4 h-4" />
                    </div>
                  </a>
                  <div className="flex flex-col pl-4">
                    <a
                      href={joinUri}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent text-xl font-medium mb-2"
                    >
                      Join The Waitlist
                    </a>
                    <span className="font-medium text-sm">
                      Kickstart your Web3 Adventure?
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-[33rem] grid grid-cols-1 gap-4 relative">
                <div className="flex justify-start md:justify-center">
                  <div className="relative h-64 w-96">
                    <div className="absolute left-0 h-64 w-64 border-black border rounded">
                      <Image
                        className="rounded"
                        src="/images/hero__mock-1.png"
                        alt="Clubs Light Teaser"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="absolute left-32 h-64 w-64">
                      <Image
                        className="rounded-full"
                        src="/images/hero__designer.png"
                        alt="Clubs Light Teaser"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-start md:justify-center z-10 ">
                  <div className="relative h-64 w-96">
                    <div className="absolute left-0 h-64 w-64 rounded">
                      <Image
                        className="rounded"
                        src="/images/hero__mock-2.png"
                        alt="Clubs Dark Teaser"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>

                    <div className="absolute left-32 h-64 w-64">
                      <Image
                        className="rounded-full"
                        src="/images/hero__gamer.png"
                        alt="Clubs Light Teaser"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="z-0 absolute bottom-0 left-[18rem] flex items-center justify-center">
                  <div className="circle circle--blue"></div>
                </div>
              </div>
            </div>

            <div className="z-0 absolute top-56 -left-24 flex items-center justify-center">
              <div className="circle circle--pink"></div>
            </div>
          </section>

          {/**
           * ==================
           * Placeholder themes
           * ==================
           */}
          <section className="mb-32">
            <div></div>
            <div className="w-full text-center">
              <h2 className="font-semibold text-3xl text-gray-500">
                Theming for your community.
              </h2>
            </div>
          </section>

          <section className="mb-32">
            <h2 className="text-5xl font-semibold mb-8">Safe tokens.</h2>
            <p className="font-medium mb-8">
              Built-in incentives by $DEV protects you. Clubs can build <br />{" "}
              an ecosystem while keeping your custom tokens safe.
            </p>
            <FWPlaceholderImage />
            <div className="text-center">
              <Button text="Join The Waitlist" onClick={join} />
            </div>
          </section>

          <section className="mb-32">
            <div className="text-right">
              <h2 className="text-6xl mb-8">Make fans memberships.</h2>
              <p className="text-2xl mb-8">
                With creators and fans aligning incentives, Clubs <br /> turns
                fans into passionate memberships.
              </p>
            </div>
            <FWPlaceholderImage />
            <div className="text-center">
              <Button text="Join The Waitlist" onClick={join} />
            </div>
          </section>

          <section className="mb-32">
            <h2 className="text-6xl mb-8">Grow your own ecosystem.</h2>
            <p className="text-2xl mb-8">
              Clubs allows you to start using many pre-built features to <br />{" "}
              build the ecosystem for your community immediately.
            </p>
            <FWPlaceholderImage />
            <div className="text-center">
              <Button text="Join The Waitlist" onClick={join} />
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="container mx-auto p-4"></div>
      </footer>
    </div>
  );
};

export default Home;
