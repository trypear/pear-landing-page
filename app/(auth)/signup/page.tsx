import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import SignUpComponent from "@/components/auth/signin"

export default async function SignUp() {
  const supabase = createClient()
  const { data } = await supabase.auth.getUser()

  if (data?.user) {
    redirect('/')
  }
  return (
    <>
      <SignUpComponent />
    </>
  )
}
