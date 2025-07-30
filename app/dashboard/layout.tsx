import Header from "./header/page";
import SideNav from "./sidenav/page";
export const experimental_ppr = true;
export default function Layout({children}:{children:React.ReactNode}){
return(
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-[#f9f9f9] ">
        <div className="w-full flex-none md:w-64">
            <SideNav/>
        </div>
        <div className="flex-grow md:overflow-y-auto md:pt-4 ">
            {/* <Header/> */}
            {children}</div>

    </div>
)
}