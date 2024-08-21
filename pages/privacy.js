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
                    <p>
                        <strong>Effective Date:</strong> August 21, 2024</p>
                    <p>Privacy is very important for us at Pokédi. Below is how we handle your data.</p>
                    <h2 className="text-xl font-bold mt-6">1. Data Collection and Use</h2>
                    <p>The following information is stored for the proper operation of the Services:</p>
                    <ul className=" list-disc ms-5 ps-5">
                        <li>Discord user, server, and channel names and identifiers, to associate you, your channels, and your servers, with your configuration and assets within the Services;</li>
                        <li>user-supplied content, including, but not limited to, text for nicknames, bot prefixes, location configuration; and</li>
                        <li>data regarding interactions you have made with the Services, including commands executed, time of execution, Discord server and channel of execution, and any arguments passed to the command.</li>
                    </ul>
                    <p>We retain the information collected for as long as is necessary to properly provide you with access to the Services. Data is removed when the reason for its collection is no longer applicable.</p>
                    <h2 className="text-xl font-bold mt-6">2. Third Parties</h2>
                    <p>We do not provide any collected data to third parties for reasons beyond maintaining the proper operation of the Services.
                        Our Services may link to external sites not operated by us. We do not have any control over the policies of these sites.</p>
                    <h2 className="text-xl font-bold mt-6">3. Contacting Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us in our Discord support server <a href="https://discord.gg/BUnZdjY">https://discord.gg/BUnZdjY</a>.</p>

                </section>

            </main>

            <Footer />

        </div>
    </>)
}