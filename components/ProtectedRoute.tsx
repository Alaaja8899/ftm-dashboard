"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Ensure code runs on client-side
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/auth/login");
    }
  }, [router]);

  if (!isClient) return null; // Prevents hydration errors

  return <>{children}</>;
};

export default ProtectedRoute;
