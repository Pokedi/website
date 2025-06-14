import '../styles/Vote.module.css';
import Image from 'next/image';
import Header from '../parts/head';
import Head from 'next/head';

export default function Vote() {
    return (
        <div className={"container"}>

            {Header("Bot Vote | Pokedi")}

            <Head>
                <link rel="stylesheet" href="/global.css" />
                <meta http-equiv="refresh" content="1; https://top.gg/bot/716293342740348948/vote" />
                <link rel="canonical" href="https://pokedi.xyz/vote" />
            </Head>

            <main className='bg-[#1a1c1d] h-screen w-screen'>
                <center>
                    <Image src={"/images/pokeball.gif"} width={800} height={600} alt='loader'
                        className={"centered"} />
                </center>
            </main>

            <footer>

            </footer>

        </div>
    );
}