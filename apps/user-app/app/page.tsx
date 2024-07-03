

import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar} from "@repo/ui/appbar"
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";
export default async function Home() {
  

  const session = await getServerSession(authOptions)
  if (session?.user) {
    redirect('/dashboard')
  } else {
    redirect('/api/auth/signin')
  }
  

  
}
