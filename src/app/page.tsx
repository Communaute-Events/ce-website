/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZJPSBBkMPHT
 */
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Navbar} from '@/components/Navbar';
import {ProjectCard} from '@/components/ProjectCard';

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
									aspectRatio: '192/192',
									objectFit: 'cover',
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
							<div className="space-x-4 flex md:shrink-0">
								<a href="about">
									<Button className="bg-[#0D9488] hover:bg-[#36776b] text-white py-2 px-6 rounded-md">À propos</Button>
								</a>
								<a href="https://github.com/Communaute-Events">
									<Button className="bg-[#333] hover:bg-[#222] text-white py-2 px-6 rounded-md">
										<GithubIcon className="w-4 h-4 mr-2" />
										GitHub
									</Button>
								</a>
								<a href="https://commu.events/discord">
									<Button className="bg-[#5865F2] hover:bg-[#3841a0] text-white py-2 px-6 rounded-md">
										<DiscordIcon className="w-4 h-4 mr-2" />
										Discord
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
							<ProjectCard
								name="Events Helper"
								description="Events Helper, notre bot Discord, permet d'être notifié lorsqu'un évenement est détecté sur un serveur discord. Il est complétement customizable."
								link="/projects/events-helper">
								<BotIcon className="w-4 h-4" />
							</ProjectCard>
							<ProjectCard
								name="Serveur Minecraft"
								description="Coming soon: Nous sommes actuellement entrain de développer un serveur Minecraft pour s'entraîner sur plusieurs épreuves récurrentes dans les évenements."
								link="/#projects">
								<ServerIcon className="w-4 h-4" />
							</ProjectCard>
							<ProjectCard
								name="AutoEvent"
								description="Une application de bureau permettant de rapidement lancer Minecraft dans la bonne version, avec les bons mods lorsqu'un évent est détecté."
								link="https://github.com/Communaute-Events/AutoEvent">
								<AppWindowIcon className="w-4 h-4" />
							</ProjectCard>
							<ProjectCard
								name="Events Monitor"
								description="Un websocket, fournissant des données sur de nombreux serveurs d'évents se trouvants sur Discord."
								link="https://github.com/Communaute-Events/ce-event-monitor">
								<WebhookIcon className="w-4 h-4" />
							</ProjectCard>
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
	);
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
			strokeLinejoin="round">
			<rect x="2" y="4" width="20" height="16" rx="2" />
			<path d="M10 4v4" />
			<path d="M2 8h20" />
			<path d="M6 4v4" />
		</svg>
	);
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
			strokeLinejoin="round">
			<path d="M12 8V4H8" />
			<rect width="16" height="12" x="4" y="8" rx="2" />
			<path d="M2 14h2" />
			<path d="M20 14h2" />
			<path d="M15 13v2" />
			<path d="M9 13v2" />
		</svg>
	);
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
			strokeLinejoin="round">
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</svg>
	);
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
			strokeLinejoin="round">
			<rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
			<rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
			<line x1="6" x2="6.01" y1="6" y2="6" />
			<line x1="6" x2="6.01" y1="18" y2="18" />
		</svg>
	);
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
			strokeLinejoin="round">
			<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
			<path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
			<path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
		</svg>
	);
}

function DiscordIcon(props) {
	return (
		<svg {...props} data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path d="M13.5535 3.01557C12.5023 2.5343 11.3925 2.19287 10.2526 2C10.0966 2.27886 9.95547 2.56577 9.82976 2.85952C8.6155 2.67655 7.38067 2.67655 6.16641 2.85952C6.04063 2.5658 5.89949 2.27889 5.74357 2C4.60289 2.1945 3.4924 2.53674 2.44013 3.01809C0.351096 6.10885 -0.215207 9.12285 0.0679444 12.0941C1.29133 12.998 2.66066 13.6854 4.11639 14.1265C4.44417 13.6856 4.73422 13.2179 4.98346 12.7283C4.51007 12.5515 4.05317 12.3334 3.61804 12.0764C3.73256 11.9934 3.84456 11.9078 3.95279 11.8248C5.21891 12.4202 6.60083 12.7289 7.99997 12.7289C9.39912 12.7289 10.781 12.4202 12.0472 11.8248C12.1566 11.9141 12.2686 11.9997 12.3819 12.0764C11.9459 12.3338 11.4882 12.5524 11.014 12.7296C11.2629 13.2189 11.553 13.6862 11.881 14.1265C13.338 13.6872 14.7084 13.0001 15.932 12.0953C16.2642 8.64968 15.3644 5.66336 13.5535 3.01557ZM5.34212 10.2668C4.55307 10.2668 3.90119 9.55073 3.90119 8.66981C3.90119 7.78889 4.53042 7.06654 5.3396 7.06654C6.14879 7.06654 6.79563 7.78889 6.78179 8.66981C6.76795 9.55073 6.14627 10.2668 5.34212 10.2668ZM10.6578 10.2668C9.86752 10.2668 9.21815 9.55073 9.21815 8.66981C9.21815 7.78889 9.84738 7.06654 10.6578 7.06654C11.4683 7.06654 12.1101 7.78889 12.0962 8.66981C12.0824 9.55073 11.462 10.2668 10.6578 10.2668Z" fill="currentColor"></path></svg>
	);
}
