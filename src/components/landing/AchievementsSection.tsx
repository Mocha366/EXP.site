"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Calendar, BookOpen, Puzzle, Flag } from "lucide-react"
import {
  achievementsByYear,
  type Achievement,
  type YearGroup,
} from "@/lib/achievements"

function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="h-full bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--exp-cyan)]/10 text-[var(--exp-cyan)] text-sm font-medium">
          <Calendar className="w-4 h-4" />
          {achievement.date}
        </div>

        <h3 className="text-xl font-bold text-foreground min-h-[3.5rem]">
          {achievement.title}
        </h3>

        <div className="flex items-center gap-2 text-muted-foreground text-sm min-h-5">
          <BookOpen className="w-4 h-4" />
          教材：{achievement.material}
        </div>

        <p className="text-muted-foreground leading-relaxed min-h-[6rem]">
          {achievement.description}
        </p>
      </div>

      {achievement.imageSrc ? (
        <div className="mt-auto aspect-video rounded-lg overflow-hidden border border-border">
          <Image
            src={achievement.imageSrc}
            alt={achievement.title}
            width={640}
            height={360}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="mt-auto aspect-video rounded-lg border-2 border-dashed border-[var(--exp-green)]/40 bg-[var(--exp-green)]/5 flex items-center justify-center">
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

function YearBlock({
  yearGroup,
  isSelected,
  onClick,
}: {
  yearGroup: YearGroup
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={isSelected}
      className={`
        w-full text-left pl-5 pr-3 py-2 rounded-lg font-bold text-sm transition-all
        bg-[#ff9f2f] text-white border-b-2 border-[#de7810] hover:brightness-105
        ${isSelected ? "ring-2 ring-[#ffd091] shadow-sm -translate-y-[1px]" : ""}
      `}
    >
      <span>EXP.{yearGroup.year}</span>
    </button>
  )
}

function ScratchWorkspaceHeader({
  selectedYearGroup,
}: {
  selectedYearGroup?: YearGroup
}) {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="relative bg-[#ffbf00] text-white px-5 py-2.5 rounded-[12px] font-bold border-b-2 border-[#d79d00] shadow-sm">
        <span className="inline-flex items-center gap-2">
          <Flag className="w-4 h-4" />
          年度が選択されたとき
        </span>
        <span
          className="absolute -bottom-2 left-4 w-4 h-2 bg-[#ffbf00]"
          style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 30% 100%)" }}
          aria-hidden
        />
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-[#ff9f2f] text-white px-4 py-2.5 font-bold border-b-2 border-[#de7810] shadow-sm">
        <span>EXP.の活動実績を見る</span>
        <div className="rounded-full bg-white/95 text-[#6b7280] px-3 py-1 text-xs font-bold">
          {selectedYearGroup
            ? `EXP.${selectedYearGroup.year}`
            : "年度"}
        </div>
      </div>
    </div>
  )
}

function BlockProgrammingArea({
  achievementsByYear,
  selectedYear,
  onSelectYear,
}: {
  achievementsByYear: YearGroup[]
  selectedYear: string | null
  onSelectYear: (year: string) => void
}) {
  const selectedYearGroup = achievementsByYear.find((y) => y.year === selectedYear)

  return (
    <div className="mb-10 max-w-5xl mx-auto">
      <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
        <div className="grid md:grid-cols-[220px_1fr]">
          <div className="bg-[#f7f7f7] border-r border-border p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-[#ff8c1a] text-white text-xs font-bold flex items-center justify-center">
                年
              </div>
              <p className="text-sm font-semibold">年度ブロック</p>
            </div>
            <div className="flex flex-col gap-2">
              {achievementsByYear.map((yearGroup) => (
                <YearBlock
                  key={yearGroup.year}
                  yearGroup={yearGroup}
                  isSelected={selectedYear === yearGroup.year}
                  onClick={() => onSelectYear(yearGroup.year)}
                />
              ))}
            </div>
          </div>

          <div
            className="min-h-[160px] p-5"
            style={{
              background: "#ececec",
              backgroundImage: "radial-gradient(#c8c8c8 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          >
            <ScratchWorkspaceHeader selectedYearGroup={selectedYearGroup} />
            <p className="mt-3 text-sm text-muted-foreground">
              年度ブロックを選ぶと、その年の活動実績を表示します。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AchievementsHorizontalList({ yearGroup }: { yearGroup: YearGroup }) {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const draggingRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartScrollRef = useRef(0)
  const loopItems = [
    ...yearGroup.achievements,
    ...yearGroup.achievements,
    ...yearGroup.achievements,
  ]

  useEffect(() => {
    const el = scrollRef.current
    if (!el || yearGroup.achievements.length === 0) return
    el.scrollLeft = el.scrollWidth / 3
  }, [yearGroup])

  const handleLoopScroll = () => {
    const el = scrollRef.current
    if (!el || yearGroup.achievements.length === 0) return

    const sectionWidth = el.scrollWidth / 3
    const min = sectionWidth * 0.5
    const max = sectionWidth * 1.5

    if (el.scrollLeft < min) {
      el.scrollLeft += sectionWidth
    } else if (el.scrollLeft > max) {
      el.scrollLeft -= sectionWidth
    }
  }

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = scrollRef.current
    if (!el) return

    draggingRef.current = true
    dragStartXRef.current = e.clientX
    dragStartScrollRef.current = el.scrollLeft
    el.classList.add("cursor-grabbing")
  }

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = scrollRef.current
    if (!el || !draggingRef.current) return
    e.preventDefault()

    const delta = e.clientX - dragStartXRef.current
    el.scrollLeft = dragStartScrollRef.current - delta
  }

  const handleMouseUpOrLeave = () => {
    const el = scrollRef.current
    draggingRef.current = false
    el?.classList.remove("cursor-grabbing")
  }

  return (
    <div>
      <div className="mb-3 px-1 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-[var(--exp-cyan)]">
            {yearGroup.year}
          </span>
          <span className="text-muted-foreground">
            {yearGroup.achievements.length}件の活動
          </span>
        </div>
        <p className="text-sm text-muted-foreground">横スクロールで実績を確認</p>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleLoopScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className="relative left-1/2 -translate-x-1/2 w-screen pb-2 overflow-x-auto px-3 md:px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab select-none"
      >
        <div className="flex w-max gap-5 pr-6">
          {loopItems.map((achievement, index) => (
            <div
              key={`${achievement.id}-${index}`}
              className="shrink-0 w-[94vw] sm:w-[600px] md:w-[700px] lg:w-[760px]"
            >
              <AchievementCard achievement={achievement} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function AchievementsSection() {
  const [selectedYear, setSelectedYear] = useState<string | null>("2025")

  const selectedYearGroup = achievementsByYear.find(
    (yg) => yg.year === selectedYear
  )

  return (
    <section id="achievements" className="relative py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(78,205,196,0.34) 0%, rgba(139,195,74,0.30) 40%, rgba(255,217,61,0.30) 72%, rgba(240,128,128,0.28) 100%)",
          }}
        />
        <div
          className="absolute -top-28 -right-28 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "rgba(78,205,196,0.28)" }}
        />
        <div
          className="absolute -bottom-20 -left-24 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "rgba(255,217,61,0.24)" }}
        />
      </div>

      <div className="relative container mx-auto px-3 md:px-4 max-w-[1400px]">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-[rgba(139,195,74,0.14)] text-[var(--exp-green)]">
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

        <BlockProgrammingArea
          achievementsByYear={achievementsByYear}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
        />

        {selectedYearGroup ? (
          <AchievementsHorizontalList yearGroup={selectedYearGroup} />
        ) : (
          <div className="text-center py-16 rounded-2xl border-2 border-dashed border-muted-foreground/30 bg-muted/20">
            <Puzzle className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <p className="text-muted-foreground text-lg">
              年度ブロックを選んで活動実績を表示しよう
              </p>
          </div>
        )}
      </div>
    </section>
  )
}
