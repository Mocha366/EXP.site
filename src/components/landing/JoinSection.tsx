import { Mail, MapPin, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"

const infoItems = [
  {
    icon: Calendar,
    label: "活動日",
    value: "不定期",
  },
  {
    icon: MapPin,
    label: "活動場所",
    value: "〒221-0835 神奈川県横浜市神奈川区鶴屋町２丁目１７",
  },
  {
    icon: Mail,
    label: "連絡先",
    value: "isc_exp@gn.iwasaki.ac.jp",
  },
]

export function JoinSection() {
  return (
    <section id="join" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: "rgba(240, 128, 128, 0.1)", color: "var(--exp-coral)" }}
            >
              Join Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              一緒に成長しませんか？
            </h2>
            <p className="text-muted-foreground text-lg mb-8 text-pretty">
              プログラミング初心者から経験者まで、興味のある方なら誰でも歓迎します。
              まずは見学からお気軽にどうぞ！
            </p>

            <div className="space-y-4 mb-8">
              {infoItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(78, 205, 196, 0.1)" }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: "var(--exp-cyan)" }} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold bg-[var(--exp-cyan)] hover:opacity-90 text-white transition-opacity"
              >
                <Mail className="mr-2 h-4 w-4" />
                お問い合わせ
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border-2 border-[var(--exp-green)] px-6 py-3 text-base font-medium text-[var(--exp-green)] hover:bg-[var(--exp-green)]/10 transition-colors"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                SNSをフォロー
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-20 -z-10"
              style={{
                background: "linear-gradient(135deg, var(--exp-cyan) 0%, var(--exp-green) 50%, var(--exp-yellow) 100%)"
              }}
            />
            <Image
              src="/images/kickoff.jpg"
              alt="メンバー集合写真"
              width={600}
              height={450}
              className="rounded-2xl w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
