import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css';

export default function Header(title = "Pokédi - Adventure Beyond!") {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0"></meta>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <link rel="stylesheet" href="/global.css" />

            <meta content="Pokedi Official" property="og:title" />
            <meta content="Pokedi Official" property="title" />
            <meta property="og:site_name" value="Pokedi Official" />

            <meta property="og:image" content="/images/banner.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="og:type" content="image" />
            <meta property="twitter:image" content="/images/banner.png" />
            <meta name="description" content="Pokedi, a community-friendly yet ever so evolving Pokemon bot, that allows you catch, trade, and duel with your friends!" />
            <meta content="Pokedi, a community-friendly yet ever so evolving Pokemon bot, that allows you catch, trade, and duel with your friends!" property="og:description" />
            <meta name="twitter:description" content="Pokedi, a community-friendly yet ever so evolving Pokemon bot, that allows you catch, trade, and duel with your friends!" property="og:description" />

            <meta property="og:site_name" content="Pokedi Official" />

            <meta name="theme-color" content="#7289DA" />

            <meta property="og:url" content="https://discord.com/api/oauth2/authorize?client_id=716293342740348948&permissions=379968&scope=applications.commands%20bot" />

            <meta name="keywords" content="discordapp, pokémon, pokemon, pokemon bot, entertainment, trade, sell, catch, farm, discord bot, ditto duck penguin" />

            <meta name="author" content="Ditto Duck Penguin" />

            <meta name="robots" content="index, follow" />

            <meta name="twitter:card" value="summary" />
            <meta name="twitter:title" content="Pokedi | A fun Pokemon bot" />

            <meta property="og:image:alt" content="Pokedi Official" />
        </Head>
    );
}