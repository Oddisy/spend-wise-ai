 import SideNav from "@/components/SideNav";
 export default  function DashboardLayout({children}:{children:React.ReactNode}) {
    return (
<div className="flex">
<SideNav/>
<main className='ml-0 lg:ml-64 transition-all duration-300'>
{children}
</main>
</div>
    )
}