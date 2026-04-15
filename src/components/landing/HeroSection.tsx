"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ImageSlider } from "@/components/landing/ImageSlider"

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden pt-16">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, var(--exp-cyan) 0%, #6DD5C7 30%, #A8E063 60%, var(--exp-yellow) 100%)"
        }}
      />

      <div className="flex-1 flex flex-col justify-start items-center w-full py-8 gap-15">
        <div className="w-full py-2">
          <div className="w-full">
            <ImageSlider
            rows={3}
            imagesByRow={[
              [
                "/images/Hero1/IMG_1470.png",
                "/images/Hero1/IMG_1480.png",
                "/images/Hero1/IMG_1486.png",
                "/images/Hero1/IMG_1489.png",
                "/images/Hero1/IMG_1534.png",
                "/images/Hero1/IMG_1548.png",
                "/images/Hero1/IMG_1551.png",
              ],
              [
                "/images/Hero2/DSC_3715.png",
                "/images/Hero2/IMG_1237.png",
                "/images/Hero2/IMG_1252.png",
                "/images/Hero2/IMG_1307.png",
                "/images/Hero2/IMG_8403.png",
                "/images/Hero2/IMG_8412.png",
                "/images/Hero2/IMG_8415.png",
              ],
              [
                "/images/Hero3/DSC00680.png",
                "/images/Hero3/DSC00689.png",
                "/images/Hero3/DSC01116.png",
                "/images/Hero3/DSC07650.png",
                "/images/Hero3/IMG_0128.png",
                "/images/Hero3/IMG_0136.png",
                "/images/Hero3/PXL_20251206_014431823.png",
              ],
            ]}
          />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-6 pb-12 px-4 sm:px-6 lg:px-8 text-center max-w-6xl mx-auto">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white/95 w-full text-center text-pretty">
            参加していただいている皆さまへ、心より感謝申し上げます。
            <br className="hidden sm:block" />
            EXP.は、学生主体で小中学生に向けたプログラミング教育を行うサークルです。
          </p>
          <div className="flex flex-col sm:flex-row gap-10">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfbu8boYAmLhtGPb_Vl5UfaFyK0NLAfGgzICisvck9sDwVGiQ/viewform?usp=sharing&ouid=102421748208923207087"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold bg-white text-[var(--exp-cyan)] hover:bg-white/90 shadow-lg transition-colors"
            >
              サークルに参加する
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10 bg-transparent transition-colors"
            >
              詳しく見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
