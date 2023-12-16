import { Card, CardHeader, CardContent } from "./ui/card"

export function ProjectCard({children,name,description,link,...props}:{children:React.ReactNode, name:string,description:string,link:string,[key: string]: any}) {
    return (
        <a className="group" href={link}>
                <Card className="transform transition-all duration-200 ease-in-out hover:scale-110">
                  <CardHeader>
                    {children}
                    <h3 className="text-lg font-bold text-black dark:text-black">{name}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black dark:text-black">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </a>
    )
}