import { checkUser } from "@/lib/checkuser";
import GuestPage from "./guest/page";
import Dashboard from "./dashboard/page";

export default async function  HomePage(){
  const user = await checkUser()
  if(!user){
    return <GuestPage/>

  }
  return (
    <div>
      <Dashboard />
    </div>

  )
}