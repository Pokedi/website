import Link from 'next/link';

function Page() {
    return <>
        <div className="bg-black w-screen h-screen m-auto text-center align-middle justify-center flex items-center">
            <div className="block">
                <div className="flex">
                    <div className="text-white border-e-2 border-e-white pe-5 text-2xl">404</div>
                    <div className="text-gray-200 ps-3 pe-3 mt-1">Page not Found.</div>
                </div>
                <div className="mt-5">
                    <Link className='w-fit rounded-xl hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 hover:text-white bg-blue-600 px-2 py-2 font-normal hover:-translate-y-1 transition-transform text-white' href={"/"}>Go Home</Link>
                </div>
            </div>
        </div>
    </>;
}

export default Page;