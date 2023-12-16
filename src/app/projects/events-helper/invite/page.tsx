import { redirect } from "next/navigation";
export default function InviteBot() {
    redirect("https://discord.com/api/oauth2/authorize?client_id=1171561146415861771&permissions=395136993280&scope=applications.commands+bot")
}