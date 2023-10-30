import '../styles/Invite.module.css';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Header from '../parts/head';
import Head from 'next/head';

export default function Invite() {
    return (
        <div className={"container"}>

            {Header("Bot Invite | Pokedi")}

            <Head>
                <link rel="stylesheet" href="/global.css" /><meta http-equiv="refresh" content="1; https://discordapp.com/oauth2/authorize?client_id=716293342740348948&scope=bot&permissions=379968" />
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