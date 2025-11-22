declare module "next/image" {
  import React from "react"

  export interface StaticImageData {
    src: string
    height: number
    width: number
    blurDataURL?: string
  }

  export interface ImageProps {
    src: string | StaticImageData
    alt: string
    width?: number | string
    height?: number | string
    fill?: boolean
    loader?: (props: { src: string; width: number; quality?: number }) => string
    quality?: number
    priority?: boolean
    placeholder?: "blur" | "empty"
    blurDataURL?: string
    unoptimized?: boolean
    onLoadingComplete?: (result: { naturalWidth: number; naturalHeight: number }) => void
    onError?: (event: any) => void
    className?: string
    style?: React.CSSProperties
    sizes?: string
    loading?: "lazy" | "eager"
  }

  const Image: React.FC<ImageProps>
  export default Image
}

