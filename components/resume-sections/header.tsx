import { Github, Mail, Linkedin, MapPin, Calendar, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ResumeContent } from "@/app/content/content";
import { Separator } from "../ui/separator";
import Link from "next/link";

type HeaderProps = {
  profile: ResumeContent["profile"];
};

export function Header({ profile }: HeaderProps) {
  return (
    <>
      <header>
        <div className="flex items-start gap-4">
          {profile.image && (
            <img
              src={profile.image || "/placeholder.svg"}
              alt={profile.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-primary/20 print:w-20 print:h-20 bg-white self-center grayscale hover:grayscale-0"
            />
          )}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200 print:text-xl">
              {profile.name}
            </h1>
            <p className="text-lg print:text-base">{profile.title}</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground items-center">
              {profile.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {profile.location}
                </span>
              )}
              {profile.email && (
                <span className="flex items-center gap-1">
                  <Mail className="h-4 w-4" /> {profile.email}
                </span>
              )}
              {profile.phone && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {profile.phone}
                </span>
              )}
            </div>
            <div className="flex gap-4 text-sm items-center text-muted-foreground print:hidden">
              {profile.links?.website && (
                <Link
                  href={profile.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:underline gap-1"
                >
                  <Globe className="h-4 w-4" /> Website
                </Link>
              )}
              {profile.links?.github && (
                <Link
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:underline gap-1"
                >
                  <Github className="h-4 w-4" /> GitHub
                </Link>
              )}
              {profile.links?.linkedin && (
                <Link
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:underline gap-1"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
      <Separator />
    </>
  );
}
