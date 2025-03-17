"use client";
import { cn } from "@/lib/utils";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const OptimizedImage = ({
  path,
  alt,
  width = 640,
  height = 360,
  containerClassName = "",
  imageClassName,
}: {
  path: string;
  width?: number;
  height?: number;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
}) => {
  return (
    <div
      draggable={false}
      className={cn(containerClassName, "relative w-full h-full select-none")}
    >
      {urlEndpoint ? (
        <IKImage
          className={cn(
            "w-full h-full object-center object-cover select-none",
            imageClassName
          )}
          draggable={false}
          urlEndpoint={urlEndpoint}
          alt={alt}
          path={path}
          loading="lazy"
          width={width}
          height={height}
          lqip={{ active: true, quality: 15, blur: 10 }}
        />
      ) : (
        <p>Missing urlEndpoint</p>
      )}
    </div>
  );
};

export default OptimizedImage;
