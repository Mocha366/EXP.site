import { Code2, Presentation, Trophy, Coffee } from "lucide-react"

const activities = [
  {
    icon: Code2,
    title: "ハンズオン勉強会",
    description: "Web開発、アプリ開発、機械学習など、様々なテーマで実践的な勉強会を開催",
    color: "var(--exp-cyan)",
    bgColor: "rgba(78, 205, 196, 0.1)",
  },
  {
    icon: Presentation,
    title: "LT会・発表会",
    description: "メンバーが学んだことや作ったものを発表し、アウトプットの機会を提供",
    color: "var(--exp-green)",
    bgColor: "rgba(139, 195, 74, 0.1)",
  },
  {
    icon: Trophy,
    title: "ハッカソン参加",
    description: "チームを組んで各種ハッカソンに挑戦。実践的なチーム開発を経験",
    color: "var(--exp-coral)",
    bgColor: "rgba(240, 128, 128, 0.1)",
  },
  {
    icon: Coffee,
    title: "もくもく会",
    description: "各自が自分のプロジェクトに取り組む作業会。困ったときはすぐに相談できる",
    color: "var(--exp-yellow)",
    bgColor: "rgba(255, 217, 61, 0.15)",
  },
]

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-28 bg-muted/50">
      <div className="mx-auto max-w-[100rem] px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: "rgba(139, 195, 74, 0.1)", color: "var(--exp-green)" }}
          >
            Activities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            主な活動内容
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl mx-auto text-pretty">
            プログラミングスキルを伸ばすための様々な活動を行っています
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: activity.bgColor }}
              >
                <activity.icon
                  className="w-6 h-6"
                  style={{ color: activity.color }}
                />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2">
                {activity.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            活動の様子
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-muted rounded-xl aspect-square flex items-center justify-center border-2 border-dashed border-border"
              >
                <p className="text-muted-foreground text-sm">写真 {i}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
