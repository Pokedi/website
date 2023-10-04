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
        </Head>
    );
}