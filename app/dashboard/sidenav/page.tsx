import { signOutAction } from "@/app/lib/action";
import AcmeLogo from "@/app/ui/acme-logo";
import NavLinks from "@/app/ui/navlinks";
import { signOut } from "@/auth";
import { PowerIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className=" flex h-full flex-col px-4 py-4 md:px-6">
      <Link
        href="/"
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-700 p-4 md:h-40"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className=" flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 h-full ">
        <NavLinks />

        <div className=" w-full">
          {" "}
          <form
            action={signOutAction}
            className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 cursor-pointer w-full p-4"
          >
            <button type="submit" className="flex items-center gap-2 ">
              <PowerIcon className="w-6 text-sm font-medium  " />
            <span className="hidden md:block">Sign Out</span>
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
