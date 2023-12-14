import Link from "next/link"

export function Navbar() {
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-[#0D9488]">
        <Link className="flex items-center justify-center" href="/">
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
            <Link className="text-sm font-medium text-gray-400 hover:underline dark:text-gray-300" href="https://github.com/Communaute-Events">
                Github
            </Link>
            <Link className="text-sm font-medium text-gray-400 hover:underline dark:text-gray-300" href="about">
                About
            </Link>
            <Link className="text-sm font-medium text-gray-400 hover:underline dark:text-gray-300" href="/#projects">
                Projects
            </Link>
            <Link className="text-sm font-medium text-gray-400 hover:underline dark:text-gray-300" href="https://discord.gg/HUzcrSCAZQ">
                Contact
            </Link>
        </nav>
      </header>
    )
}