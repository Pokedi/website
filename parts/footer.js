export default function Footer() {
    return (<footer className='bg-gray-800 container h-[20vh] min-w-full inline-flex items-center justify-center justify-items-center flex-col'>
        <ul className='flex gap-8'>
            <li>
                <a href="/privacy" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Privacy Policy</a>
            </li>
            <li>
                <a href="/terms" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Terms of Service</a>
            </li>
        </ul>
        <div className='text-white'>Copyright © 2020-2024 Pokédi</div>
    </footer>);
}