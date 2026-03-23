import Image from "next/image"
import { Code2, Presentation, Trophy, Coffee } from "lucide-react"
import { activities, type ActivityIconId } from "@/lib/activities"

export function ActivitiesSection() {
  return (
    <section id="activities" className="relative py-28 bg-muted/40 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -inset-[20%] blur-3xl opacity-55"
          style={{
            background:
              "linear-gradient(135deg, var(--exp-coral) 0%, #F4A261 20%, var(--exp-green) 55%, var(--exp-yellow) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[100rem] px-6 sm:px-8 lg:px-12">
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
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {activities.map((activity) => {
            const iconMap: Record<ActivityIconId, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
              study: Code2,
              lt: Presentation,
              workshop: Trophy,
              circle: Coffee,
            }
            const Icon = iconMap[activity.iconId]

            return (
            <div
              key={activity.title}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: activity.bgColor }}
              >
                <Icon
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
          )})}
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            活動の様子
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                src: "/images/activities/IMG_0009.png",
                alt: "教材勉強会の様子",
                label: "教材勉強会",
              },
              {
                src: "/images/activities/DSC01395.png",
                alt: "3分LTの様子",
                label: "3分LT",
              },
              {
                src: "/images/activities/IMG_3183.png",
                alt: "ワークショップ開催の様子",
                label: "ワークショップ開催",
              },
              {
                src: "/images/activities/IMG_2768.png",
                alt: "サークル内企画の様子",
                label: "サークル内企画",
              },
            ].map((photo) => (
              <div
                key={photo.label}
                className="relative rounded-xl overflow-hidden aspect-[4/3] border border-border bg-muted"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/45 text-white text-xs sm:text-sm px-2 py-1 text-center">
                  {photo.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
