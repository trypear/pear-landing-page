import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function Settings() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/signin')
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h1 className="h1">Settings</h1>
          </div>

          {/* Settings */}
          <div className="max-w-sm mx-auto">
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}