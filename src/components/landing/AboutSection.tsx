import Image from "next/image"
import { Users, Lightbulb, Rocket } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "仲間と一緒に",
    description: "初心者から経験者、1年生から4年生まで、多様なメンバーが在籍しています。それぞれの経験や得意分野を活かしながら、互いに教え合い、刺激し合える環境を大切にしています。",
    color: "var(--exp-cyan)",
    bgColor: "rgba(78, 205, 196, 0.1)",
  },
  {
    icon: Lightbulb,
    title: "実践的な学び",
    description: "小中学校でのプログラミング教室の運営を通じて、人前で伝える力を養います。また、教材制作におけるOfficeツールの活用や、ワークショップの企画・運営、メンバーのマネジメントを通して、実践的なスキルと責任感を身につけることができます。",
    color: "var(--exp-green)",
    bgColor: "rgba(139, 195, 74, 0.1)",
  },
  {
    icon: Rocket,
    title: "成長の機会",
    description: "何から始めればよいかわからない場合でも、まずは「誰かのために」行動することを大切にしています。約130人規模のコミュニティの中で、自分のやりたいことに挑戦できる環境が整っており、主体的に成長する機会が広がっています。",
    color: "var(--exp-coral)",
    bgColor: "rgba(240, 128, 128, 0.1)",
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/about/about-bg-v2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover blur-md scale-105 opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/75 to-sky-50/65" />
      </div>

      <div className="relative mx-auto max-w-[100rem] px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: "rgba(78, 205, 196, 0.1)", color: "var(--exp-cyan)" }}
          >
            About
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            EXP.とは
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl mx-auto text-pretty">
          EXP.は、学生主体で小中学生向けにプログラミング教育を提供する、
          <br />
          学校法人岩崎学園 情報科学専門学校の学内サークルです。
          <br />
          <span className="block h-4" />
          プログラミング教室やワークショップを通じて、
          子どもたちにものづくりの楽しさや、学びのきっかけを届けることを目的として活動しています。
          <br />
          <span className="block h-4" />
          参加してくれる子どもたち一人ひとりと向き合いながら、
          <br />
          安心して学べる環境づくりと、主体的に挑戦できる場の提供を大切にしています。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-10 border border-border hover:shadow-lg transition-shadow"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: feature.bgColor }}
              >
                <feature.icon
                  className="w-7 h-7"
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl aspect-[4/3] overflow-hidden border border-border">
            <Image
              src="/images/about/IMG_8743.png"
              alt="活動写真 1"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative rounded-2xl aspect-[4/3] overflow-hidden border border-border">
            <Image
              src="/images/about/IMG_8744.png"
              alt="活動写真 2"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
