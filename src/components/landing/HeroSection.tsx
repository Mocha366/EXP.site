import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, var(--exp-cyan) 0%, #6DD5C7 30%, #A8E063 60%, var(--exp-yellow) 100%)"
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/images/exp-logo.png"
            alt="EXP. - Experience Point Circle"
            width={320}
            height={128}
            className="w-64 md:w-80 h-auto drop-shadow-lg"
            priority
          />

          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md text-balance">
              経験値を積んで、成長しよう
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
              プログラミングを通じて仲間と共に学び、
              <br className="hidden sm:block" />
              実践的なスキルと経験を身につけるサークルです
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="#join"
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

        <div className="mt-16 relative">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30 shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="aspect-video bg-white/30 rounded-xl flex items-center justify-center border-2 border-dashed border-white/50">
              <p className="text-white/80 text-sm md:text-base">
                メイン画像をここに配置
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
