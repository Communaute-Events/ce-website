/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZJPSBBkMPHT
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1D1D1F] dark:bg-gray-900">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-[#0D9488]">
        <Link className="flex items-center justify-center" href="#">
          <img
            alt="Logo"
            className="h-6 w-6"
            height="24"
            src="/logo.png"
            style={{
              aspectRatio: "24/24",
              objectFit: "cover",
            }}
            width="24"
          />
          <span className="ml-2 text-lg font-bold text-gray-200 dark:text-gray-200">Communauté Events</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-gray-400 hover:underline dark:text-gray-300" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium text-gray-400 hover:underline dark:text-gray-300" href="about">
            About
          </Link>
          <Link className="text-sm font-medium text-gray-400 hover:underline dark:text-gray-300" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium text-gray-400 hover:underline dark:text-gray-300" href="contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#1D1D1F] dark:bg-gray-800">
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
                  Bienvenue chez Communauté Events
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400">
                  Nous créons des outils pour la communauté d'évents Minecraft française.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-[#0D9488] hover:bg-[#36776b] text-white py-2 px-6 rounded-md">À propos</Button>
                <a href="https://github.com/Communaute-Events">
                  <Button className="bg-[#333] hover:bg-[#222] text-white py-2 px-6 rounded-md">
                  <GithubIcon className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#1D1D1F] dark:bg-gray-900 py-12 md:py-24 lg:py-32 xl:py-48" id="projects">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-gray-200 dark:text-gray-200">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <a className="group" href="https://github.com/Communaute-Events/ce-discord-bot">
                <Card className="transform transition-all duration-200 ease-in-out hover:scale-110">
                  <CardHeader>
                    <BotIcon className="w-4 h-4" />
                    <h3 className="text-lg font-bold text-black dark:text-black">Bot Discord</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black dark:text-black">
                      Events Helper, notre bot Discord, permet d'être notifié lorsqu'un évenement est détecté sur un
                      serveur discord. Il est complétement customizable.
                    </p>
                  </CardContent>
                </Card>
              </a>
              <a className="group" href="#projects">
                <Card className="transform transition-all duration-200 ease-in-out hover:scale-110">
                  <CardHeader>
                    <ServerIcon className="w-4 h-4" />
                    <h3 className="text-lg font-bold text-black dark:text-black">Notre serveur Minecraft</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black dark:text-black">
                      Coming soon: Nous sommes actuellement entrain de développer un serveur Minecraft pour s'entraîner sur plusieurs
                      épreuves récurrentes dans les évenements.
                    </p>
                  </CardContent>
                </Card>
              </a>
              <a className="group" href="https://github.com/Communaute-Events/AutoLaunch">
                <Card className="transform transition-all duration-200 ease-in-out hover:scale-110">
                  <CardHeader>
                    <AppWindowIcon className="w-4 h-4" />
                    <h3 className="text-lg font-bold text-black dark:text-black">AutoLaunch</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black dark:text-black">
                      Une application de bureau permettant de rapidement lancer Minecraft dans la bonne version, avec
                      les bons mods lorsqu'un évent est détecté.
                    </p>
                  </CardContent>
                </Card>
              </a>
              <a className="group" href="https://github.com/Communaute-Events/ce-event-monitor">
                <Card className="transform transition-all duration-200 ease-in-out hover:scale-110">
                  <CardHeader>
                    <WebhookIcon className="w-4 h-4" />
                    <h3 className="text-lg font-bold text-black dark:text-black">Events Monitor</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black dark:text-black">
                      Un websocket, fournissant des données sur de nombreux serveurs d'évents se trouvants sur Discord.
                    </p>
                  </CardContent>
                </Card>
              </a>
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

function AppWindowIcon(props) {
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </svg>
  )
}


function BotIcon(props) {
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
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


function ServerIcon(props) {
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
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}


function WebhookIcon(props) {
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
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  )
}
