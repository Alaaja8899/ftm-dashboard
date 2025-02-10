import CountCards from "@/components/CountCards";
import { ModeToggle } from "@/components/ModeToggle";
import { User, User2Icon, UserCheck, UserMinus } from "lucide-react";


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
    name: "Deseaced people",
    desc: "Latest modified 1month ago",
    count:3, 
    icon: UserMinus, 
  },
]


export default function Home() {
  return (
    <div className="w-full">
      <main>
        <div className="top-head flex items-center justify-between p-6 w-full mt-5">
          <h2>
            Dashboard
          </h2>

          
          <ModeToggle/>
        </div>
        <div className="count-cards px-6 flex gap-2 md:flex-row flex-col">
          {cardItems.map(info=>{
            return <CountCards key={info.name} name={info.name} desc={info.desc} icon={info.icon} count={info.count} />
          })}
        </div>
        
        
      </main>
    </div>
     );
}
