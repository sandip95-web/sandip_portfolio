"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Globe, Mail, MapPin, Phone, UserCheck } from "lucide-react";
import Link from "next/link";

export default function GithubRedirectCard() {
  return (
    <Card className="w-full h-fit max-w-md overflow-hidden shadow-lg border border-border mt-5 bg-card">
      <CardHeader className="pb-3 border-b">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-full bg-primary/10 text-primary">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold leading-tight">
              Get in Touch
            </h2>
            <p className="text-xs text-muted-foreground">
              Open to QA & Backend opportunities
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4 text-sm">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Location</p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Jawalakhel-5, Lalitpur, Bagmati Province, Nepal
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Phone</p>
            <a
              href="tel:+9779818504980"
              className="text-primary hover:underline text-xs"
            >
              +977-9818504980
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Email</p>
            <a
              href="mailto:sandipmaharjan95@gmail.com"
              className="text-primary hover:underline text-xs"
            >
              sandipmaharjan95@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Globe className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Languages</p>
            <p className="text-muted-foreground text-xs">
              Nepali (Fluent) • English (Fluent) • Hindi (Intermediate)
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex flex-col gap-2">
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full justify-center text-sm"
          )}
        >
          Connect on LinkedIn
        </Link>
        <Link
          href={siteConfig.links.github}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full justify-center text-sm"
          )}
        >
          View GitHub Profile
        </Link>
      </CardFooter>
    </Card>
  );
}
