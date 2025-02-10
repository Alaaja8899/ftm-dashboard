"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { url } from "@/services/config";
import { TreePalmIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Correct hook for Next.js App Router
import React, { useState } from "react";

function Page() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await fetch(`${url.baseURL}/api/method/ftm.api.login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usr: username, pwd: password }), // API expects `usr` and `pwd`
      });

      const data = await response.json();

      if (data?.data?.success_key === 1) {
        const userData = {
          username: data.data.username,
          email: data.data.email,
          sid: data.data.sid,
          api_key: data.data.api_key,
          api_secret: data.data.api_secret,
        };

        localStorage.setItem("user", JSON.stringify(userData)); // Store user in localStorage
        router.push("/app"); // Redirect to app
      } else {
        setError(data?.data?.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="p-6">
      <main>
        <div className="top w-full flex justify-end">
          <ModeToggle />
        </div>

        {/* Login form */}
        <div className="login-container flex justify-center mt-20">
          <form
            onSubmit={handleSubmit}
            className="border p-6 md:w-[35rem] w-full rounded-lg flex flex-col space-y-4"
          >
            <h2 className="flex gap-1 font-bold text-2xl">
              Family <TreePalmIcon /> Tree
            </h2>
            <p className="text-gray-500">
              Log in to access your family tree dashboard
            </p>

            {error && <p className="text-red-500">{error}</p>} {/* Show error if login fails */}

            <Input
              placeholder="Email / Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
            <Button type="submit">Sign in</Button>

            <Link href={"/auth/forget"}>Forgot Password?</Link>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Page;
