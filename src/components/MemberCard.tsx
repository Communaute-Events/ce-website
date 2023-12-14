import { Card, CardHeader, CardContent } from "./ui/card"

export function MemberCard({ name, avatar, description, link, ...props }: { name: string, avatar: string, description: string, link: string, [key: string]: any }) {
    return (
        <div className="group">
            <a href={link}>
                <Card className="transform transition-all duration-200 ease-in-out hover:scale-110 bg-teal-500 border-black border">
                    <CardHeader>
                        <img
                            alt={`${name} profile`}
                            className="h-12 w-12 rounded-full"
                            height="48"
                            src={avatar}
                            style={{
                                aspectRatio: "48/48",
                                objectFit: "cover",
                            }}
                            width="48"
                        />
                        <h3 className="text-lg font-bold text-black dark:text-black">{name}</h3>
                    </CardHeader>
                    <CardContent>
                        <p className="text-black dark:text-black">{description}</p>
                    </CardContent>
                </Card>
            </a>
        </div>
    )
}