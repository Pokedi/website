import Head from "next/head";
import Footer from "../parts/footer";
import Header from "../parts/head";
import Navigation from "../parts/navigation";
import Link from "next/link";

export default function Home() {
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
                    <h1 className="text-3xl font-bold mt-6">Terms of Service</h1>
                    <b>
                        Effective Date: August 21, 2024
                    </b>
                    <h2 className="text-xl font-bold mt-6">1. Acceptance of Terms</h2>
                    <p>By inviting or using the Pokedi (the &quot;Bot&quot;), or our website(s) (collectively, &quot;Pokédi&quot; or the &quot;Services&quot;), you agree to these Terms of Service (the &quot;Terms of Service&quot; or &quot;Terms&quot;) and our Privacy Policy located at <Link className="text-blue-400 underline"  href="https://pokedi.xyz/privacy">https://pokedi.xyz/privacy</Link> (the &quot;Privacy Policy&quot;). </p>
                    <p>We reserve the right to update these Terms of Service at any time. If the changes affect your usage of the Services, we&#39;ll notify you at least seven days before the changes take effect. Your continued use of the Services constitutes your agreement to those changes. If you object to the changes, cease using the Services.</p>
                    <h2 className="text-xl font-bold mt-6">2. Use of the Bot</h2>
                    <p>You agree to use the Bot in a manner that is lawful, respectful (expanded upon in section 3), and in compliance with Discord&#39;s Terms of Service located at <Link className="text-blue-400 underline"  href="https://discord.com/terms">https://discord.com/terms</Link> and Community Guidelines located at <Link className="text-blue-400 underline"  href="https://discord.com/guidelines">https://discord.com/guidelines</Link>.</p>
                    <h2 className="text-xl font-bold mt-6">3. Acceptable Conduct</h2>
                    <p>The Services may only be used within the scope of what they are provided for, under these Terms and applicable law. By accessing the Services, you agree that you shall not use the Services in a manner that:</p>
                    <ul className=" list-disc ms-5 ps-5">
                        <li>violates these Terms, or any applicable laws, regulations, or contractual agreements, including, when relevant, the Discord Terms of Service;</li>
                        <li>infringes on the intellectual property rights of any party;</li>
                        <li>is threatening, harassing, defamatory, libelous, deceptive, fraudulent, malicious, obscene, or otherwise objectionable;</li>
                        <li>jeopardizes the security of your or any other person&#39;s account (such as exposing login credentials);</li>
                        <li>attempts, in any manner, to obtain passwords, accounts, or other private information from other users;</li>
                        <li>interferes or attempts to interrupt the proper operation of the Services;</li>
                        <li>exploits or publicly informs other members of any error or bug which gives an unintended advantage;</li>
                        <li>involves programs or operations designed to falsely resemble or impersonate the Services to deceive other users;</li>
                        <li>involves the development, distribution, or use of unacceptable software programs (as listed below); or</li>
                        <li>condones, benefits from, or is otherwise in connection with any person who violates these Terms.</li>
                    </ul>
                    <h2 className="text-xl font-bold mt-6">4. Acceptable Software Programs</h2>
                    <p>The Services are intended to be used by humans only. To ensure a fair and equitable experience for all users, you shall not develop, distribute, or use software programs that interact with the Services in a matter that:</p>
                    <ul className=" list-disc ms-5 ps-5">
                        <li>involves the automated sending of messages to influence the spawning of Pokémon (&quot;autospamming&quot;);</li>
                        <li>involves the automated catching of Pokémon (&quot;autocatching&quot;);</li>
                        <li>involves the automated use of the market or auction systems (&quot;autosniping&quot;, &quot;autobidding&quot;); or</li>
                        <li>otherwise automates interations with the Services, including the use of &quot;selfbots&quot; and other &quot;auto&quot; programs.</li>
                    </ul>
                    <h2 className="text-xl font-bold mt-6">5. Termination</h2>
                    <p>We reserve the right to terminate or suspend your access to the Services at any time, without notice, if you violate these Terms or if we believe that your use of the Services poses a risk to the Services, or other users.</p>
                    <h2 className="text-xl font-bold mt-6">6. Limitation of Liability</h2>
                    <p>Pokédi provides the Bot on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties or representations about the Services&#39; functionality, accuracy, or availability. To the fullest extent permitted by law, Pokédi is not liable for any direct, indirect, incidental, consequential, or punitive damages arising from or related to your use of the Services.</p>
                    <h2 className="text-xl font-bold mt-6">7. Contact Us</h2>
                    <p>If you have any questions about these Terms or the Bot, please contact us in our Discord support server <Link className="text-blue-400 underline" href="https://discord.gg/BUnZdjY">https://discord.gg/BUnZdjY</Link>.</p>

                </section>

            </main>

            <Footer />

        </div>
    </>)
}