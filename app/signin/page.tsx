"use client";
import { ModeToggle } from "@/components/ModeToggle";
import React from "react";

function Page() {
  return (
    <div className="p-6">
      <main>
        <div className="top w-full flex justify-end">
          <ModeToggle />
        </div>
      </main>
    </div>
  );
}

export default Page;
