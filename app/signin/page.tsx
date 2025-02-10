"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TreePalmIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="p-6">
      <main>
        <div className="top w-full flex justify-end">
          <ModeToggle />
        </div>

          {/* login form */}

          <div className="login-container flex justify-center mt-20">

              <form className="border p-6  md:w-[35rem] w-full rounded-lg flex flex-col space-y-4">
                <h2 className="flex gap-1 font-bold text-2xl">Family <TreePalmIcon/> Tree </h2>
                <p className="text-gray-500">Log in Access your family tree dashboard</p>
                <Input placeholder="Email / Username" required/>
                <Input placeholder="Email / Username" required type="password"/>
                <Button>Sign in </Button>

                <Link href={'/'}>
                Forget Password ?
                </Link>

              </form>


          </div>



      </main>
    </div>
  );
}

export default Page;
