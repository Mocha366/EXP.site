import { Users, Lightbulb, Rocket } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "仲間と一緒に",
    description: "初心者から経験者まで、様々なレベルのメンバーが互いに教え合い、刺激し合える環境",
    color: "var(--exp-cyan)",
    bgColor: "rgba(78, 205, 196, 0.1)",
  },
  {
    icon: Lightbulb,
    title: "実践的な学び",
    description: "座学だけでなく、実際にプロジェクトを作りながら本当に使えるスキルを習得",
    color: "var(--exp-green)",
    bgColor: "rgba(139, 195, 74, 0.1)",
  },
  {
    icon: Rocket,
    title: "成長の機会",
    description: "ハッカソンや勉強会への参加、ポートフォリオ作成など、キャリアにつながる経験",
    color: "var(--exp-coral)",
    bgColor: "rgba(240, 128, 128, 0.1)",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-28 bg-background">
      <div className="mx-auto max-w-[100rem] px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: "rgba(78, 205, 196, 0.1)", color: "var(--exp-cyan)" }}
          >
            About
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            EXP.について
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl mx-auto text-pretty">
            Experience Point Circle（EXP.）は、
            プログラミングを楽しく学び、成長するためのコミュニティです
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
          <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center border-2 border-dashed border-border">
            <p className="text-muted-foreground text-sm">活動写真 1</p>
          </div>
          <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center border-2 border-dashed border-border">
            <p className="text-muted-foreground text-sm">活動写真 2</p>
          </div>
        </div>
      </div>
    </section>
  )
}
