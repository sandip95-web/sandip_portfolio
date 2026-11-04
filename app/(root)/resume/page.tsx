"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  const [hasRedirected, setHasRedirected] = useState(false);
  const resumeLink =
    process.env.NEXT_PUBLIC_RESUME_LINK ||
    "https://drive.google.com/file/d/1Vn76dYJeMgjw1ojhxFVZ7jJTWh7q04_w/view?usp=sharing";

  useEffect(() => {
    if (resumeLink && resumeLink !== "your_resume_link") {
      window.location.href = resumeLink;
    } else {
      setHasRedirected(true);
    }
  }, [resumeLink]);

  if (!hasRedirected) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <p className="text-muted-foreground">Redirecting to resume...</p>
      </div>
    );
  }

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="font-heading text-3xl font-bold">Resume</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        You can request my latest resume copy directly at{" "}
        <a
          href="mailto:sandipmaharjan95@gmail.com"
          className="text-primary underline font-medium"
        >
          sandipmaharjan95@gmail.com
        </a>
        .
      </p>
      <div className="mt-6 flex gap-4">
        <Button asChild>
          <a href="mailto:sandipmaharjan95@gmail.com">Request via Email</a>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
