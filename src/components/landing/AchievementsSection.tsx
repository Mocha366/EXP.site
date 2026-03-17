import { CalendarDays, MapPin, Users, Award } from "lucide-react"

const achievements = [
  {
    icon: CalendarDays,
    title: "年間開催回数",
    value: "20+ 回",
    description: "小中学校や地域イベントなどで実施した教室・ワークショップの回数",
  },
  {
    icon: Users,
    title: "これまでに出会った子どもたち",
    value: "300+ 人",
    description: "プログラミングやものづくりを一緒に体験した小中学生の累計人数",
  },
  {
    icon: MapPin,
    title: "活動した場所",
    value: "横浜・川崎 周辺",
    description: "地域イベントや公共施設、学校など、さまざまな場所で活動を展開",
  },
  {
    icon: Award,
    title: "メンバーのチャレンジ",
    value: "130+ 名",
    description: "EXP.に所属し、教室運営や企画づくりに挑戦してきた学生メンバー",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="mx-auto max-w-[100rem] px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-[rgba(240,128,128,0.08)] text-[var(--exp-coral)]">
            Activities Record
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            活動実績
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            EXP.は、教室運営やイベント参加を通じて、子どもたちと学生メンバーの双方が学び合える場づくりを続けてきました。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-7 border border-border/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-muted">
                <item.icon className="w-6 h-6 text-[var(--exp-coral)]" />
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {item.title}
              </p>
              <p className="text-2xl font-bold text-foreground mb-3">
                {item.value}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

