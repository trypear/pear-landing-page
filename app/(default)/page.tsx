export const metadata = {
  title: 'Home - pear.ai',
  description: 'The best AI-powered code editor',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Try from '@/components/try'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Try />
    </>
  )
}
