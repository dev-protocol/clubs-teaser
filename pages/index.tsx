import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { LightningBoltIcon } from '@heroicons/react/outline'
import JoinWaitlistBtn from '../components/JoinWaitlistBtn'

const Home: NextPage = () => {
  // TODO: link needs to be added
  const joinUri = ''

  const mod = (x: number, m: number) => {
    return ((x % m) + m) % m
  }

  const placeholder = (i: number) => (
    <Image
      className="rounded-xl h-40 w-auto"
      key={`${i}`}
      src={`/images/placeholder${mod(i, 6) + 1}.png`}
      height="216"
      width="384"
      alt="Test"
    />
  )

  return (
    <div>
      <Head>
        <title>Clubs</title>
        <meta name="description" content="The WordPress of DAO Builders" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/uml2uca.css" />
      </Head>

      <header>
        <div className="container mx-auto p-4">
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

      <main className="overflow-x-clip">
        {/**
         * ==============
         * Landing Section
         * ==============
         */}
        <section className="py-24 mb-12 container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 auto-cols-max">
            <div className="w-full max-w-xl mx-auto">
              <div className="flex items-center mb-2 ">
                <h2 className="text-4xl font-medium mr-2">Clubs</h2>
                <LightningBoltIcon className="mr-2" width={24} height={24} />
                <Image
                  src="/images/Polygon_Primary_Token.png"
                  width={24}
                  height={24}
                  alt="Polygon logo"
                />
              </div>
              <p className="mb-12">A WordPress-like DAO Builder</p>
            </div>
            <i></i>
            <div className="flex flex-col justify-between max-w-xl mx-auto">
              <div className="relative">
                <i className="circle circle--pink w-[60%] lg:w-[80%] aspect-square absolute top-0 -left-[20%] lg:-left-[calc(80%+10%)]"></i>
                <p className="mb-12 relative break-normal text-6xl lg:text-8xl font-bold">
                  Build your Web3 community in 1 minute
                </p>
              </div>

              <div className="flex relative">
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
            <div className="grid gap-8">
              <div className="flex w-full aspect-[1.5/1]">
                <div className="h-full aspect-square border-black border rounded">
                  <Image
                    className="rounded h-full"
                    src="/images/hero__mock-1.png"
                    width={1043}
                    height={1043}
                    alt="Clubs Light Teaser"
                  />
                </div>
                <div className="relative -ml-[calc(100%/3)] h-full aspect-square">
                  <Image
                    className="rounded-full"
                    src="/images/hero__designer.png"
                    alt="Clubs Light Teaser"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>

              <div className="relative flex w-full aspect-[1.5/1]">
                <div className="absolute circle circle--blue h-full aspect-square bottom-0 -right-1/3"></div>
                <div className="h-full aspect-square border-black border rounded">
                  <Image
                    className="rounded h-full"
                    src="/images/hero__mock-2.png"
                    width={1043}
                    height={1043}
                    alt="Clubs Dark Teaser"
                  />
                </div>
                <div className="relative -ml-[calc(100%/3)] h-full aspect-square">
                  <Image
                    className="rounded-full"
                    src="/images/hero__gamer.png"
                    alt="Clubs Dark Teaser"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/**
         * ==================
         * Placeholder themes
         * ==================
         */}
        <section className="mb-32">
          <div className="flex gap-8 max-w-full overflow-x-hidden whitespace-nowrap">
            {/**
             * this is used to repeat the images like placeholder1, placeholder2, etc
             * in a loop of 60
             */}
            <div className="animate-[loop-a_180s_-90s_linear_infinite] flex gap-8 shrink-0 flex-nowrap">
              {[...Array(30)].map((_, i) => placeholder(i))}
            </div>
            <div className="animate-[loop-b_120s_linear_infinite] flex gap-8 shrink-0 flex-nowrap">
              {[...Array(30)].map((_, i) => placeholder(i))}
            </div>
          </div>
          <div className="w-full text-center">
            <h2 className="font-semibold mt-12 text-3xl text-gray-500">
              Theming for your community.
            </h2>
          </div>
        </section>

        {/**
         * ===================
         * Safe Tokens Section
         * ===================
         */}
        <section className="mb-40 container mx-auto p-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-7">Safe NFTs.</h2>
          <p className="font-medium mb-12">
            Built-in incentives by $DEV protects you. Clubs can build an
            ecosystem while keeping your custom tokens safe.
          </p>

          <div className="flex justify-center mb-16 w-full aspect-[2/1]">
            <div className="h-full aspect-square relative rounded-full overflow-clip">
              <Image
                className=""
                src="/images/feat__youtuber.png"
                layout="fill"
                alt="YouTuber"
              />
            </div>
            <div className="h-full flex justify-center items-center aspect-square rounded-full bg-black">
              <div className="w-3/5 h-3/5 border border-2 border-white animate-[8s_ease-in-out_infinite_spin]"></div>
            </div>
          </div>

          <div className="flex justify-center">
            <JoinWaitlistBtn joinUri={joinUri} />
          </div>
        </section>

        {/**
         * ===================
         * Fan Memberships Section
         * ===================
         */}
        <section className="mb-40 container mx-auto p-4">
          <div className="text-right mb-12">
            <h2 className="text-5xl md:text-7xl font-bold mb-7">
              Make fans memberships.
            </h2>
            <p className="font-medium">
              With creators and fans aligning incentives, Clubs turns fans into
              passionate memberships.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="bg-black w-full aspect-[2/1] p-4 rounded-full box-content">
              <div className="h-full aspect-square bg-gray-800 animate-[5s_alternate_ease-in-out_infinite_switch-a-leftToRight] rounded-full overflow-clip">
                <Image
                  className="animate-[5s_alternate_ease-in-out_infinite_switch-a-fadeIn]"
                  src="/images/feat__happy.png"
                  layout="fill"
                  alt="Happiness from launching a DAO through Clubs"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <JoinWaitlistBtn joinUri={joinUri} />
          </div>
        </section>

        {/**
         * ===================
         * Grown your own ecosystem
         * ===================
         */}
        <section className="mb-40 container mx-auto p-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-7">
            Grow your own ecosystem.
          </h2>
          <p className="font-medium mb-12">
            Clubs allows you to start using many pre-built features to build the
            ecosystem for your community immediately.
          </p>

          <div className="flex justify-center mb-16 w-full aspect-[2/1]">
            <div className="h-full aspect-square relative rounded-full overflow-clip">
              <Image
                className=""
                src="/images/feat__smile.png"
                layout="fill"
                alt="A man smiling from launching his DAO on Clubs"
              />
            </div>
            <div className="h-full aspect-square px-8 grid grid-cols-2 gap-4 items-end">
              <div className="bg-black h-2/3 rounded-full box-content animate-[8s_ease-in-out_infinite_stretch-a]"></div>
              <div className="bg-black h-4/5 rounded-full box-content animate-[8s_1s_ease-in-out_infinite_stretch-b]"></div>
            </div>
          </div>

          <div className="flex justify-center">
            <JoinWaitlistBtn joinUri={joinUri} />
          </div>
        </section>

        <div className="flex justify-center mb-40">
          <a
            className="bg-accent text-white rounded-full w-1/2 text-center py-6"
            href={joinUri}
            target="_blank"
            rel="noreferrer"
          >
            Learn More About Clubs
          </a>
        </div>
      </main>

      <footer>
        <div className="container mx-auto p-4">
          <div className="flex justify-between mb-8">
            <a
              className="text-accent font-medium"
              href={joinUri}
              target="_blank"
              rel="noreferrer"
            >
              Join the Waitlist
            </a>
            <div className="flex items-center">
              <span className="mr-2">Clubs powered by </span>
              <Image
                src="/images/Polygon_Monochrome_White.png"
                width={32}
                height={32}
                alt="Polygon Logo"
              />
              <span>polygon</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-64 mb-8">
            <div className="flex flex-col">
              <span className="mb-2">Community</span>
              <div className="mb-2">
                <a
                  href="https://discord.gg/VwJp4KM"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 "
                >
                  Discord
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="https://medium.com/devprtcl"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 "
                >
                  Medium
                </a>
              </div>

              <div className="mb-2">
                <a
                  href="https://twitter.com/devprtcl"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500"
                >
                  Twitter
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="mb-2">About</span>
              <div className="mb-2">
                <a
                  href="https://devprotocol.xyz/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 "
                >
                  Dev Protocol
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="https://community.devprotocol.xyz/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 "
                >
                  Forum
                </a>
              </div>
            </div>
          </div>
          <span className="text-gray-400 text-xs pb-16">
            Clubs build on Dev Protocol, the core of the Decentralized Creator
            Economy, completely on-chain and 100% composable middleware
            protocol.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Home
