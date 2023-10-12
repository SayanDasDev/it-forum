"use client";

import { leftsidebarlinks } from "@/constants/leftSidebarIndex";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="leftsidebar custom-scrollbar font-bold text-light-1 select-none">
      <div className="flex flex-1 w-full flex-col gap-6 px-6">
        {leftsidebarlinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && `bg-primary-500`}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-12">
        <SignedIn>
          <SignOutButton
            signOutCallback={() => {
              router.push("/sign-in");
            }}
          >
            <div className="flex gap-2 px-12 max-lg:px-6 max-lg:justify-center w-full flex-1 cursor-pointer">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />
              <p className="max-lg:hidden">Log out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}
