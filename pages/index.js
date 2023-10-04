// import Head from 'next/head';
import Image from 'next/image.js';
import Header from '../parts/head.js';
import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <div>

      {Header()}

      <main className="container overflow-x-hidden min-w-full">

        {/* Start Navigation */}
        <nav className="bg-gray-900 fixed w-full z-10">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
              <Image
                src="/images/logo.webp"
                className='mr-3'
                width={32}
                height={32}
                alt="Welcome to Pokedi!"
              ></Image>
              <span className="self-center text-2xl font-extrabold whitespace-nowrap text-white">Pokédi</span>
            </a>
            <button data-collapse-toggle="navbar-default" onClick={() => {
              document.querySelector('#navbar-default').classList.toggle("hidden")
            }} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>

            {/* Start Navigation List */}
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="sm:text-left lg:text-center font-medium lg:flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700 items-center">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                </li>
                {/* <li>
                  <a href="/team" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Team</a>
                </li> */}
                {/* <li>
                  <a href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li> */}
                <li>
                  <a href="https://wiki.pokedi.xyz/" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Wiki</a>
                </li>
                <li>
                  <a href="https://discord.gg/BUnZdjY" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Discord</a>
                </li>
                <li>
                  <a href="https://discord.com/api/oauth2/authorize?client_id=716293342740348948&permissions=379968&scope=applications.commands%20bot" className="w-fit block rounded-xl hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 hover:text-white bg-white px-2 py-1 font-normal hover:-translate-y-1 transition-transform">Add Pokédi</a>
                </li>
              </ul>
            </div>
            {/* End Navigation List */}
          </div>
        </nav>
        {/* End Navigation */}


        {/* Start Content */}
        <div className="bg-gray-900 relative isolate px-6 pt-14 lg:px-8 lg:pt-0 h-screen w-full max-h-screen overflow-hidden">

          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#111827] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          <div className="mx-auto max-w-2xl sm:py-48 z-0 py-40 mt-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                Welcome to the World of Pokémon!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-500">
                Dive into a world of thrilling battles, exciting captures, dynamic trading, and bountiful farming experiences—all in one place.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://discord.com/api/oauth2/authorize?client_id=716293342740348948&permissions=379968&scope=applications.commands%20bot"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Invite Now!
                </a>
                <a href="https://wiki.pokedi.xyz" className="text-sm font-semibold leading-6 text-gray-100">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#111827] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

        </div>
        {/* End Content */}

        {/* Start Cards */}
        <div className="bg-gray-900 w-screen relative isolate px-6 pt-[10vh] lg:px-8 lg:pt-[20vh] min-h-screen pb-20">
          <div className="grid lg:grid-cols-4 gap-x-5">
            <div className="mt-10 sm:col-span-full lg:col-span-1 text-center w-full align-middle items-center justify-center flex">
              <div className="hover:scale-105 transition-transform font-semibold border-solid border-4 h-[60vh] border-blue-300 pt-5 rounded-3xl w-[80%]">
                <div className='text-xl text-white mb-4'>Catch, Trade, Grow</div>
                <div className="my-10 text-white hover:animate-pulse hover:text-blue-400 transition-all ease-linear"><i className="text-8xl material-icons">nature_people</i></div>
                <hr></hr>
                <div className="text-gray-200 px-3 py-5 font-normal">Catch, trade, and evolve Pokémon legendaries, mythicals, and more! Dive into a world of adventure, friendship, and evolution as you embark on your Pokémon journey.</div>
              </div>
            </div>
            <div className="mt-5 sm:col-span-full lg:col-span-1 text-center w-full align-middle items-center justify-center flex">
              <div className="hover:scale-105 transition-transform font-semibold border-solid border-4 h-[60vh] border-blue-300 pt-5 rounded-3xl w-[80%]">
                <div className='text-xl text-white mb-4'>Duel and Brawl</div>
                <div className="my-10 text-white hover:animate-pulse hover:text-blue-400 transition-all ease-linear"><i className="text-8xl material-icons">whatshot</i></div>
                <hr></hr>
                <div className="text-gray-200 px-3 py-5 font-normal">Duel trainers and conquer Gym Leaders to earn prestigious badges. Prove your skills in epic battles and become a true Pokémon Master!</div>
              </div>
            </div>
            <div className="mt-5 sm:col-span-full lg:col-span-1 text-center w-full align-middle items-center justify-center flex">
              <div className="hover:scale-105 transition-transform font-semibold border-solid border-4 h-[60vh] border-blue-300 pt-5 rounded-3xl w-[80%]">
                <div className='text-xl text-white mb-4'>Plant and Shower</div>
                <div className="my-10 text-white hover:animate-pulse hover:text-blue-400 transition-all ease-linear"><i className="text-8xl material-icons">person_pin</i></div>
                <hr></hr>
                <div className="text-gray-200 px-3 py-5 font-normal">Cultivate berries, uncover hidden Pokémon, and gather rare treasures. It's going to be an exciting journey filled with discovery and adventure!</div>
              </div>
            </div>
            <div className="mt-5 sm:col-span-full lg:col-span-1 text-center w-full align-middle items-center justify-center flex">
              <div className="hover:scale-105 transition-transform font-semibold border-solid border-4 h-[60vh] border-blue-300 pt-5 rounded-3xl w-[80%]">
                <div className='text-xl text-white mb-4'>Community, Love, Flowers</div>
                <div className="my-10 text-white hover:animate-pulse hover:text-blue-400 transition-all ease-linear"><i className="text-8xl material-icons">insert_emoticon</i></div>
                <hr></hr>
                <div className="text-gray-200 px-3 py-5 font-normal">Connect with trainers worldwide, forge lasting friendships, and embark on epic adventures together. Join a community where everyone is welcome, and the Pokémon spirit thrives!</div>
              </div>
            </div>
          </div>
        </div>
        {/* End Cards */}

        {/* Start Tutorial */}
        <div className='w-screen pb-20 min-h-screen lg:pt-[20vh] lg:px-8 pt-[10vh] px-6 isolate relative bg-gray-900'>
          <div>
            <div className="align-middle justify-center lg:flex lg:pe-[15vw]">
              <Image
                className='hover:scale-105 transition-transform'
                src="/images/evolve.png"
                alt="Catch, Trade, and Evolve!"
                width={861}
                height={538}
              ></Image>
              <div className="hover:scale-105 transition-transform bg-[#23272aed] border-4 border-blue-400 lg:absolute lg:right-[30vh] p-5 lg:h-[200px] lg:w-[350px] rounded-3xl">
                <div className="text-white font-bold pb-7">Catch, Trade, and Evolve Pokémon!</div>
                <p className="text-sm text-white pb-5 font-medium">Just talk, walk, run, something is bound to bring excitement to the fun!</p>
                <p className="text-white text-xs italic">Fun Fact: Look out for Giga-Energy leaks and Raid Boss spawns!</p>
              </div>
            </div>

            <div className="align-middle justify-center lg:flex grid lg:ps-[15vw] lg:mt-60 mt-20">
              <div className="order-2 lg:order-1 hover:scale-105 transition-transform bg-[#23272aed] border-4 border-blue-400 lg:absolute lg:left-[30vh] p-5 lg:h-[200px] lg:w-[350px] rounded-3xl">
                <div className="text-white font-bold pb-7">Play in your own Language!</div>
                <p className="text-sm text-white pb-10 font-medium">The Bot's not only fun in English, but Portugal, Espanol, and Deutch. Give it a try.</p>
                <p className="text-white text-xs italic">Be sure to check your language settings</p>
              </div>
              <Image
                className='order-1 lg:order-2'
                src="/images/language.png"
                alt="Play in your own Language!"
                width={861}
                height={538}
              ></Image>
            </div>

            <div className="align-middle justify-center lg:flex lg:pe-[15vw] lg:mt-60 mt-20">
              <Image
                className='hover:scale-105 transition-transform'
                src="/images/battle.png"
                alt="The Best Battle Experience!"
                width={861}
                height={538}
              ></Image>
              <div className="hover:scale-105 transition-transform bg-[#23272aed] border-4 border-blue-400 lg:absolute lg:right-[30vh] p-5 lg:h-[200px] lg:w-[350px] rounded-3xl">
                <div className="text-white font-bold pb-7">The Best Battle Experience!</div>
                <p className="text-sm text-white pb-10 font-medium">Duel your friends, Gym Leaders, AI, Wild Pokémon, and even a Giga Boss!</p>
                <p className="text-white text-xs italic">Pokéball, berries, and more included</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Tutorial */}
      </main>

      <footer className='bg-gray-800 h-[20vh] container text-center align-middle flex justify-center items-center min-w-full'>
        <div className='text-white'>Copyright © 2020-2023 Pokédi</div>
      </footer>

    </div>
  );
}
