/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LpFEHJdaRKB
 */
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Metadata, Viewport } from "next"

export const viewport: Viewport = {
    themeColor: "#439288"
}

export const metadata: Metadata = {
    title: 'Events Helper',
    description: "Events Helper est un bot d'alertes d'évenements Minecraft. Il est complétement configurable, et open-source.",
    openGraph: {
        description: "Events Helper est un bot d'alertes d'évenements Minecraft. Il est complétement configurable, et open-source.",
        type: "website",
        images: "https://commu.events/og-image.png"
    },
    twitter: {
        card: "summary_large_image",
        title: "Events Helper",
        description: "Events Helper est un bot d'alertes d'évenements Minecraft. Il est complétement configurable, et open-source.",
        images: "https://commu.events/og-image.png"
    }
}

export default function PAge() {
    return (
        <div className="bg-[#1D1D1F] text-white min-h-screen">
            <Navbar />
            <header className="w-full py-12 bg-[#439288] text-center">
                <h1 className="text-4xl font-bold mb-2">Events Helper</h1>
                <p className="text-lg">Un bot avancé de détection d'events</p>
            </header>
            <main className="container mx-auto my-12 px-4 md:px-6">
                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-4">Comment ça marche?</h2>
                    <p className="text-base mb-8">
                        Pour détecter des events Minecraft, Events Helper va se connecter à un flux d'information (websocket) afin de récuperer de potentielles informations. Le WebSocket monitorant les serveurs d'évenements a aussi été crée par nous et est complétement open-source, il est donc possible d'y ajouter facilement des sources d'évenements.
                    </p>
                    <h2 className="text-3xl font-bold mb-4">Contribuer</h2>
                    <p className="text-base mb-8">
                        Pour contribuer au développement du bot, rendez vous sur <a href="https://github.com/Communaute-Events/ce-discord-bot" className="text-blue-400">le repo GitHub</a>.
                    </p>
                    <h2 className="text-3xl font-bold mb-4">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card>
                            <CardContent className="p-4">
                                <h3 className="text-xl font-bold mb-2">Alertes d'events</h3>
                                <p>Ping des rôles, et envoyer des messages lors de nouveaux events</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <h3 className="text-xl font-bold mb-2">Facilement configurable</h3>
                                <p>Définir des rôles à ping, le salon dans le quel envoyer les alertes, etc...</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <h3 className="text-xl font-bold mb-2">Intégration avec AutoLaunch (soon)</h3>
                                <p>Intégration permettant de lancer Minecraft dans la bonne version pour un event, en un clique de bouton.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                <section className="flex justify-center">
                    <a href="/projects/events-helper/invite">
                        <Button className="bg-[#5865F2] text-white px-8 py-2 rounded-md hover:bg-[#4650c1] mr-4 flex items-center">
                            <DiscIcon className="w-4 h-4 mr-2" />
                            Ajouter à Discord
                        </Button>
                    </a>
                    <a href="https://docs.commu.events">
                        <Button className="bg-[#a858f2] text-white px-8 py-2 rounded-md hover:bg-[#7b40b3] mr-4 flex items-center">
                            <DocsIcon className="w-4 h-4 mr-2" />
                            Documentation
                        </Button>
                    </a>
                    <a href="https://github.com/Communaute-Events/ce-discord-bot">
                        <Button className="bg-black text-white px-8 py-2 rounded-md hover:bg-gray-800 flex items-center">
                            <GithubIcon className="w-4 h-4 mr-2" />
                            GitHub
                        </Button>
                    </a>
                </section>
            </main>
            <footer className="mt-auto w-full py-6 bg-[#439288] text-center">
                <p>
                    Besoin d'aide? Rejoignez notre{" "}
                    <Link className="underline" href="/discord">
                        Serveur Discord
                    </Link>
                </p>
                <p>
                    Passez voir le code du bot sur{" "}
                    <Link className="underline" href="https://github.com/Communaute-Events/ce-discord-bot">
                        GitHub
                    </Link>
                </p>
            </footer>
        </div>
    )
}

function DiscIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    )
}


function GithubIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}

function DocsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    )
}