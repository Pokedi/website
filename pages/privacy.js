import Head from "next/head";
import Footer from "../parts/footer";
import Header from "../parts/head";
import Navigation from "../parts/navigation";
import Link from "next/link";

export default function Privacy() {
    return (<>

        <div>

            {Header()}

            <Head>
                <link rel="canonical" href="https://pokedi.xyz" />
            </Head>

            <Navigation />

            <main className="overflow-x-hidden min-w-full min-h-screen bg-slate-800 pt-20">

                {/* Content */}
                <section className="container mx-auto text-white px-10 lg:max-w-[50%]">

                    {/* Head */}
                    <h1 className="text-3xl font-bold mt-6">Privacy Policy</h1>
                    <b>
                        Effective Date: August 21, 2024
                    </b>
                    <h2 className="text-xl font-bold mt-6">1. Acceptance of Terms</h2>
                    <p>Your Souls belong to Anthony if you ever interact with the bot, accidentally or intentionally.</p>
                    
                </section>

            </main>

            <Footer />

        </div>
    </>)
}