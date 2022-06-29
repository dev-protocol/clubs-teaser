import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Button from "../components/Button";

interface FWPlaceholderImageProps {}

const FWPlaceholderImage: React.FC<FWPlaceholderImageProps> = () => {
  return (
    <div className="w-full h-48 border border-violet-200 rounded border-4 flex items-center justify-center mb-12">
      image
    </div>
  );
};

const Home: NextPage = () => {
  const join = () => {};

  return (
    <div>
      <Head>
        <title>Clubs</title>
        <meta name="description" content="The WordPress of DAO Builders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-purple-300">
        <div className="container mx-auto p-4">
          <h1>Clubs</h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4 flex flex-col">
          <section className="py-24 flex justify-center items-center mb-12 relative">
            <div className="z-10 text-center">
              <h2 className="text-4xl mb-12">Clubs</h2>
              <div className="mb-12">A WordPress-like DAO Builder</div>
              <div className="mb-12 text-2xl">
                Build your decentralized community in 1 minute
              </div>
              <Button text="Join The Waitlist" onClick={join} />
            </div>

            <div className="z-0 absolute bottom-0 left-0 w-48 h-48 border border-violet-200 rounded border-4 flex items-center justify-center mb-12">
              image
            </div>

            <div className="z-0 absolute top-32 right-0 w-48 h-48 border border-violet-200 rounded border-4 flex items-center justify-center mb-12">
              image
            </div>
          </section>
          <section className="flex justify-center pt-12 h-[32rem] w-full mb-24">
            <div className="w-3/4 relative">
              <div className="absolute top-8 left-0 shadow-2xl h-96 w-96 rounded">
                <Image
                  className="rounded"
                  src="/images/hero__mock-1.png"
                  alt="Clubs Light Teaser"
                  layout="fill"
                />
              </div>
              <div className="absolute top-0 right-0 shadow-2xl h-96 w-96 rounded">
                <Image
                  className="rounded"
                  src="/images/hero__mock-2.png"
                  alt="Clubs Dark Teaser"
                  layout="fill"
                />
              </div>
            </div>
          </section>
          <section className="mb-32">
            <h2 className="text-6xl mb-8">Safe tokens.</h2>
            <p className="text-2xl mb-8">
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
