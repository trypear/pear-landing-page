import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import SignInComponent from "@/components/auth/signin"

export default async function SignIn() {
  const supabase = createClient()
  const { data } = await supabase.auth.getUser()

  if (process.env.NODE_ENV === 'production') { // Temporarily redirect to home page in production until we have a proper backend auth flow
    redirect('/')
  }

  if (data?.user) {
    redirect('/')
  }
  return (
    <>
      <SignInComponent />
    </>
  )
}
