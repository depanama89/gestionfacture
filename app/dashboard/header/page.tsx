import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
// import { redirect } from "next/dist/server/api-utils"

export default async function Header() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }
  const name = session.user.name;

  return (
    <header className="hidden lg:block mb-4 bg-white ">
      <div className="shadow-lg h-16 w-full flex items-center justify-between">
       <div></div> <div className=" px-4 flex items-center max-w-md gap-4 ">{session.user.name} 
        <Image src="/profile.png" alt="profile" width={24}  height={24} className=" rounded-full"/> 
       </div>
      </div>
    </header>
  );
}
