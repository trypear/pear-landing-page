import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import SignUpComponent from "@/components/auth/signup"

export default async function SignUp() {
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
      <SignUpComponent />
    </>
  )
}
