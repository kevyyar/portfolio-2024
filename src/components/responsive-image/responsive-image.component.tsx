"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface Props {
  src: string;
  mobileHeight: number;
  desktopHeight: number;
  mobileWidth: number;
  desktopWidth: number;
  alt: string;
  className?: string;
}

export const ResponsiveImage = ({
  src,
  mobileHeight,
  desktopHeight,
  mobileWidth,
  desktopWidth,
  alt,
  className,
}: Props) => {
  const { width: imgWidth } = useMediaQuery();

  return (
    <Image
      src={src}
      height={imgWidth < 640 ? mobileHeight : desktopHeight}
      width={imgWidth < 640 ? mobileWidth : desktopWidth}
      alt={alt}
      className={className}
    />
  );
};
