"use client"

import * as RadixSlider from "@radix-ui/react-slider"
import React from "react"

interface SliderProps {
  value: number[] // expects actual email value like 10000, 20000
  onValueChange: (value: number[]) => void
  marks: number[] // list of allowed email values
  defaultValue?: number[]
}

export function Slider({
  value,
  onValueChange,
  marks,
  defaultValue,
}: SliderProps) {
  // Convert email value to index
  const valueIndex = marks.findIndex(m => m === value[0])
  const defaultIndex = defaultValue
    ? marks.findIndex(m => m === defaultValue[0])
    : 0

  return (
    <div className="w-full">
      <RadixSlider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        min={0}
        max={marks.length - 1}
        step={1}
        value={[valueIndex]}
        onValueChange={([index]) => {
          onValueChange([marks[index]])
        }}
        defaultValue={[defaultIndex]}
      >
        <RadixSlider.Track className="bg-[#ddd] relative grow rounded-full h-[4px]">
          <RadixSlider.Range className="absolute bg-[#6c3cbe] rounded-full h-full" />
        </RadixSlider.Track>
        <RadixSlider.Thumb className="block w-5 h-5 bg-[#6c3cbe] rounded-full shadow hover:bg-[#5a28a5] transition-colors" />
      </RadixSlider.Root>

      {/* Evenly spaced labels */}
      <div className="flex justify-between mt-4 text-xs text-gray-600">
        {marks.map((mark) => (
          <span key={mark} className="w-0 text-center transform -translate-x-1/2">
            {mark >= 1000 ? `${mark / 1000}K` : mark}
          </span>
        ))}
      </div>
    </div>
  )
}
