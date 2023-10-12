import {
  OrganizationSwitcher,
  SignOutButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
  return (
    <nav className="topbar">
      <Link className="flex items-center gap-2" href="/">
        <Image src="/assets/logo.svg" alt="itForum" width={28} height={28} />
        <p className="text-heading3-bold max-xs:hidden text-light-1 select-none">
          itForum
        </p>
      </Link>
      <div className="flex items-center flex-1">
        <div className="block ml-auto self-end md:hidden cursor-pointer">
          <SignedIn>
            <SignOutButton>
              <div className="flex">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>

      <OrganizationSwitcher
        appearance={{
          elements: {
            organizationSwitcherTrigger: "py-2 px-4",
          },
        }}
      />
    </nav>
  );
}
