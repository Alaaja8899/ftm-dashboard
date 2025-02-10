import { ModeToggle } from "@/components/ModeToggle";

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

        
      </main>
    </div>
     );
}
