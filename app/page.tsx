// page.tsx (Sidebar moved here)
import CountCards from "@/components/CountCards";
import FamilyTreeComponent from "@/components/FamilyTree";
import { ModeToggle } from "@/components/ModeToggle";
import { ChartCom } from "@/components/pie-chart";
import { User, User2Icon, UserCheck, UserMinus } from "lucide-react";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const cardItems = [
  {
    name:"Number of all Boys",
    desc: "Latest changed 1 week ago",
    count: 43, 
    icon: User, 
  },
  {
    name:"Number of girls",
    desc: "Latest changed 1 day ago",
    count: 10, 
    icon: User2Icon, 
  },
  {
    name: "Alive people",
    desc: "Latest modified 2min ago",
    count: 50, 
    icon: UserCheck, 
  },
  {
    name: "Deceased people",
    desc: "Latest modified 1month ago",
    count:3, 
    icon: UserMinus, 
  },
];

export default function Home() {
  return (
    <SidebarProvider>
      <div className="w-full flex">
        <AppSidebar />
        <SidebarTrigger/>
        <main className="w-full p-6 space-y-3">
          <div className="top-head flex items-center justify-between w-full mt-5">
            <h2>Dashboard</h2>
            <ModeToggle/>
          </div>
          <div className="count-cards flex gap-2 md:flex-row flex-col">
            {cardItems.map(info => (
              <CountCards key={info.name} name={info.name} desc={info.desc} icon={info.icon} count={info.count} />
            ))}
          </div>
          <div className="hero flex md:flex-row items-start flex-col">
            <FamilyTreeComponent/>
            <ChartCom/>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
