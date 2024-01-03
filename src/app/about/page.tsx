/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FsXuGglOkCO
 */
import Link from "next/link"
import Head from "next/head"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Navbar } from "@/components/Navbar"
import { MemberCard } from "@/components/MemberCard"

export const metadata = {
  themeColor: "#439288",
  title: '❔ À propos de Communauté Events',
  description: "Communauté Events est une organization open-source, créant des outils pour la communauté event français sur Minecraft",
  openGraph: {
    description: "Communauté Events est une organization open-source, créant des outils pour la communauté event français sur Minecraft",
    type: "website",
    images: "https://commu.events/og-image.png"
  },
  twitter: {
    card: "summary_large_image",
    title: "Events Helper",
    description: "Communauté Events est une organization open-source, créant des outils pour la communauté event français sur Minecraft",
    images: "https://commu.events/og-image.png"
  }
}

export default function Component() {
  return (
      <div className="flex flex-col min-h-screen bg-[#1D1D1F] dark:bg-gray-900">
        <Navbar />
        <main className="flex-1">
          <section className="w-full py-6 md:py-12 lg:py-16 xl:py-24 bg-[#1D1D1F] dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <img
                  alt="Communauté Events logo"
                  className="h-48 w-auto mb-4"
                  height="192"
                  src="/logo.png"
                  style={{
                    aspectRatio: "192/192",
                    objectFit: "cover",
                  }}
                  width="192"
                />
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-200 dark:text-gray-200">
                    À propos Communauté Events
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400">
                    Nous sommes un groupe de passionnés de Minecraft créant des outils pour la communauté française des événements. Notre équipe est composée de développeurs et de joueurs acros (c'est faux) à Minecraft.
                  </p>
                  <img src="arrow.png" alt="Arrow" className="w-[30%] ml-[35%]" />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-[#1D1D1F] dark:bg-gray-900 py-8 md:py-16 lg:py-24 xl:py-32" id="team">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold mb-8 text-gray-200 dark:text-gray-200">Notre équipe</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <MemberCard avatar="https://avatars.githubusercontent.com/u/74014262?s=70&v=4" name="Origaming" description="Salut! Je fais de la programmation depuis tout petit, et je travaille actuellement sur notre bot discord et serveur Minecraft!" link="https://github.com/OrigamingWasTaken" />
                <MemberCard avatar="https://avatars.githubusercontent.com/u/89902968?v=4" name="Meek" description="gros noob" link="https://github.com/MeekOnGithub" />
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#0D9488] dark:border-gray-700">
          <p className="text-xs text-gray-400 dark:text-gray-400">© Communauté Events. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400 dark:text-gray-400" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400 dark:text-gray-400" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
  )
}

