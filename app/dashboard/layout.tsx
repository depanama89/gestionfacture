import SideNav from "./sidenav/page";

export default function Layout({children}:{children:React.ReactNode}){
return(
    <div>
        <div>
            <SideNav/>
        </div>
        <div>{children}</div>

    </div>
)
}