import type { ResumeContent } from "@/app/content/content";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  profile: ResumeContent["profile"];
};

export function Header({ profile }: HeaderProps) {
  return (
    <>
      <header className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold uppercase">
            {profile.name}
          </h1>
          <h2 className="text-lg font-semibold">{profile.title}</h2>
          <div className="flex gap-x-2 flex-wrap text-sm text-muted-foreground items-center">
            {profile.location && <span>{profile.location}</span>}
            {profile.email && (
              <span className="before:content-['•'] before:mr-2">
                {profile.email}
              </span>
            )}
            {profile.phone && (
              <span className="before:content-['•'] before:mr-2">
                {profile.phone}
              </span>
            )}
            {profile.links?.website && (
              <Link
                href={profile.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline before:content-['•'] before:mr-2"
              >
                {profile.links.website.replace(/^https?:\/\//, "")}
              </Link>
            )}
            {profile.links?.github && (
              <Link
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline before:content-['•'] before:mr-2 print:hidden"
              >
                GitHub
              </Link>
            )}
            {profile.links?.linkedin && (
              <Link
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline before:content-['•'] before:mr-2 print:hidden"
              >
                LinkedIn
              </Link>
            )}
          </div>
        </div>
        {profile.image && (
            <Image
              src={profile.image}
              alt={profile.name}
              width={500}
              height={500}
              className="w-20 h-20 rounded-full object-cover border-2 border-primary/20 bg-white self-center grayscale hover:grayscale-0 print:hidden"
            />
          )}
      </header>
      <Separator />
    </>
  );
}
