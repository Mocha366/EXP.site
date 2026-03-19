"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, BookOpen, ChevronDown } from "lucide-react"
import {
  achievementsByYear,
  type Achievement,
  type YearGroup,
} from "@/lib/achievements"

function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--exp-cyan)]/10 text-[var(--exp-cyan)] text-sm font-medium mb-4">
        <Calendar className="w-4 h-4" />
        {achievement.date}
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2">
        {achievement.title}
      </h3>

      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
        <BookOpen className="w-4 h-4" />
        教材：{achievement.material}
      </div>

      <p className="text-muted-foreground leading-relaxed mb-4">
        {achievement.description}
      </p>

      {achievement.imageSrc ? (
        <div className="aspect-video rounded-lg overflow-hidden border border-border">
          <Image
            src={achievement.imageSrc}
            alt={achievement.title}
            width={640}
            height={360}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="aspect-video rounded-lg border-2 border-dashed border-[var(--exp-green)]/40 bg-[var(--exp-green)]/5 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[var(--exp-green)]/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[var(--exp-green)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-sm text-[var(--exp-green)]">写真を追加</p>
          </div>
        </div>
      )}
    </div>
  )
}

function YearAccordion({ yearGroup }: { yearGroup: YearGroup }) {
  const [isOpen, setIsOpen] = useState(yearGroup.year === "2025")

  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl md:text-4xl font-bold text-[var(--exp-cyan)]">
            {yearGroup.year}
          </span>
          <span className="text-muted-foreground">
            {yearGroup.achievements.length}件の活動
          </span>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-6 pt-0">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--exp-cyan)]/30" />

              <div className="flex flex-col gap-8">
                {yearGroup.achievements.map((achievement) => (
                  <div key={achievement.id} className="relative flex gap-6">
                    <div className="absolute left-4 -translate-x-1/2 top-8 w-3 h-3 rounded-full bg-[var(--exp-cyan)] border-2 border-background z-10" />
                    <div className="ml-10 flex-1">
                      <AchievementCard achievement={achievement} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-[rgba(255,217,61,0.16)] text-[var(--exp-yellow)]">
            Activities Record
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            活動実績
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            EXP.のこれまでの活動をご紹介します。
            <br />
            メンバー全員で作り上げてきた思い出と成果の記録です。
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {achievementsByYear.map((yearGroup) => (
            <YearAccordion key={yearGroup.year} yearGroup={yearGroup} />
          ))}
        </div>
      </div>
    </section>
  )
}

