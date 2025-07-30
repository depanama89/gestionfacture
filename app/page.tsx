import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { lusitana } from "./ui/fonts";
import Image from "next/image";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-[#333] p-4 md:h-52">
        <AcmeLogo />
        {/* <div className={styles.shape}/> */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Invoxia</strong>
           <ul className="flex flex-col gap-4 mt-4">
            <li className="text-base"> Gagnez du temps et simplifiez la gestion de vos factures.
            </li>
            <li className="text-base">Connectez-vous pour commencer à facturer en toute sérénité.</li>
           </ul>
           
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-[#333] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            alt="dashboard"
            width={1000}
            height={700}
            className="hidden md:block"
          />
          <Image
            src="/hero-mobile.png"
            alt="dashboard"
            width={560}
            height={620}
            className="md:hidden block"
          />
        </div>
      </div>
    </main>
  );
}
