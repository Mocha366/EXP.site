export type ActivityIconId = "study" | "lt" | "workshop" | "circle"

export type Activity = {
  iconId: ActivityIconId
  title: string
  description: string
  color: string
  bgColor: string
}

export const activities: Activity[] = [
  {
    iconId: "study",
    title: "教材勉強会",
    description:
      "教室当日に使用する教材について、メンバー同士で確認・練習を行い、安心して子どもたちに教えられるよう準備します。",
    color: "var(--exp-cyan)",
    bgColor: "rgba(78, 205, 196, 0.1)",
  },
  {
    iconId: "lt",
    title: "3分LT",
    description:
      "自分の好きなことや興味のあるテーマを3分で紹介し、発信する力や、人前で伝える経験を積む機会をつくっています。",
    color: "var(--exp-green)",
    bgColor: "rgba(139, 195, 74, 0.1)",
  },
  {
    iconId: "workshop",
    title: "ワークショップ開催",
    description:
      "地域イベントや外部企画に参加し、子どもたちにプログラミングやものづくりの楽しさを届ける体験型企画を行っています。",
    color: "var(--exp-coral)",
    bgColor: "rgba(240, 128, 128, 0.1)",
  },
  {
    iconId: "circle",
    title: "サークル内企画",
    description:
      "忘年会やお疲れ様会、キックオフなどを通して、学年間の交流を深め、活動を継続しやすい雰囲気づくりを大切にしています。",
    color: "var(--exp-yellow)",
    bgColor: "rgba(255, 217, 61, 0.15)",
  },
]


