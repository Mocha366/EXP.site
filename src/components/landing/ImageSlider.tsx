"use client"

import Image from "next/image"

const defaultImages = Array(12).fill("/images/kickoff.JPG")

type ImageSliderProps = {
  images?: string[]
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
    "--img-height": imageHeight,
    "--img-gap": gap,
    animation: `imgSlider${direction === "left" ? "Left" : "Right"} ${duration}s linear infinite`,
    willChange: "transform",
  } as React.CSSProperties

  return (
    <ul
      className="ugkImgSlider__lists flex list-none w-fit shrink-0"
      style={style}
    >
      {[...images, ...images].map((src, i) => (
        <li key={i} className="ugkImgSlider__item shrink-0">
          <Image
            src={src}
            alt=""
            width={200}
            height={120}
            className="ugkImgSlider__img h-[var(--img-height)] w-auto max-w-max object-cover rounded-lg"
            sizes="(max-width: 640px) 20vw, (max-width: 1024px) 15vw, 10vw"
          />
        </li>
      ))}
    </ul>
  )
}

export function ImageSlider({
  images = defaultImages,
  imageHeight = "20vh",
  gap = "0.5%",
  duration = 60,
  rows = 3,
}: ImageSliderProps) {
  return (
    <div className="ugkImgSlider w-full overflow-hidden">
      <div className="flex flex-col gap-8">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="w-full overflow-hidden">
            <SliderRow
              images={images}
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
