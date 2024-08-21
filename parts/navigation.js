import Image from "next/image";

export default function Navigation() {
    return (
        <>
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
                                <a href="/vote" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Vote</a>
                            </li>
                            <li>
                                <a href="/invite" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Invite</a>
                            </li>
                            {/* <li>
                  <a href="https://wiki.pokedi.xyz/" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Wiki</a>
                </li> */}
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
        </>
    );
}