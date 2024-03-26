import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyTokenForPage } from "@/utils/verifyToken";

const AdminCommentsTable = () => {
  const token = cookies().get("jwtToken")?.value;
  if(!token) redirect("/");

  const payload = verifyTokenForPage(token);
  if(payload?.isAdmin === false) redirect("/");

  return (
    <div>AdminCommentsPage</div>
  )
}

export default AdminCommentsTable;