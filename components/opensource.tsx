// components/opensource/index.tsx
import { BUNNY_CDN_HOST } from '@/utils/constants'
import { Check } from 'lucide-react'
import Image from 'next/image'

export default function OpenSource() {
  return (
    <div className="mx-6">
    <section className="relative overflow-hidden flex mx-auto max-w-3xl py-6 lg:max-w-[1049px] rounded-xl border-2 border-gray-200 dark:border-gray-50">
      <div className="absolute inset-0">
        <Image
          src={`${BUNNY_CDN_HOST}/opensource-bg.png`}
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto py-4">
          <h2 className="text-4xl text-black md:text-4xl font-bold mb-2">
            Open source is <span className="text-white-50 drop-shadow-[0_0_5px_rgba(64,203,160,255)] font-bold">transparency.</span>
          </h2>
          <div className="space-y-2 flex items-center flex-col">
            <div></div>
            <div>
            <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <p className="text-black">See every line on our public repos.</p>
            </div>
            <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <p className="text-black">We never store your code.</p>
            </div>
            <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <p className="text-black">Zero Data Retention policy with Anthropic.</p>
            </div>
            <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <p className="text-black">Self-host server for enterprise.</p>
            </div>
            </div>
            <div></div>
            </div>
        </div>
      </div>
    </section>
    </div>
  )
}
