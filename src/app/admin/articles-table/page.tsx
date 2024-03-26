import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyTokenForPage } from "@/utils/verifyToken";

const AdminArticlesTable = () => {
  const token = cookies().get("jwtToken")?.value;
  if(!token) redirect("/");

  const payload = verifyTokenForPage(token);
  if(payload?.isAdmin === false) redirect("/");

  
  return (
    <div>AdminArticlesTable</div>
  )
}

export default AdminArticlesTable