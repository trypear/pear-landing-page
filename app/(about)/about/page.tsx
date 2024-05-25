import AboutComponent from '@/components/about'
import { constructMetadata } from '@/lib/utlis'
import { Metadata } from 'next/types'

export const metadata:Metadata = constructMetadata({
  title: 'About',
  description: 'About the team behind pear.ai',
  canonical: "/"
})

export default function About() {
  return (
    <>
      <AboutComponent />
    </>
  )
}
