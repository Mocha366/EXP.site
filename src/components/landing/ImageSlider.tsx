"use client"

import Image from "next/image"

const defaultImages = Array(12).fill("/images/kickoff.JPG")

type ImageSliderProps = {
  images?: string[]
  imagesByRow?: string[][]
  imageHeight?: string
  gap?: string
  duration?: number
  rows?: number
}

function SliderRow({
  images,
  imageHeight,
  gap,
  duration,
  direction,
}: {
  images: string[]
  imageHeight: string
  gap: string
  duration: number
  direction: "left" | "right"
}) {
  const style = {
    gap,
    animation: `imgSlider${direction === "left" ? "Left" : "Right"} ${duration}s linear infinite`,
    willChange: "transform",
  } as React.CSSProperties

  return (
    <ul
      className="flex list-none w-max shrink-0"
      style={style}
    >
      {[...images, ...images].map((src, i) => (
        <li
          key={i}
          className="shrink-0 overflow-hidden rounded-lg"
          style={{ height: imageHeight, aspectRatio: "4 / 3" }}
        >
          <Image
            src={src}
            alt=""
            width={200}
            height={150}
            className="h-full w-full object-cover"
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 200px"
          />
        </li>
      ))}
    </ul>
  )
}

export function ImageSlider({
  images = defaultImages,
  imagesByRow,
  imageHeight = "clamp(150px, 30vw, 230px)",
  gap = "12px",
  duration = 60,
  rows = 3,
}: ImageSliderProps) {
  const getRowImages = (rowIndex: number) =>
    imagesByRow?.[rowIndex] ?? images

  return (
    <div className="ugkImgSlider w-full overflow-hidden">
      <div className="flex flex-col gap-[10px]">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="w-full overflow-hidden">
            <SliderRow
              images={getRowImages(i)}
              imageHeight={imageHeight}
              gap={gap}
              duration={duration}
              direction={i % 2 === 0 ? "left" : "right"}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
