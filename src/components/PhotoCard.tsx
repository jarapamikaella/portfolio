import Image from "next/image";
import React from "react";

interface PhotoCardProps {
  title: string;
  desciption: string;
  image: string;
  subdesription?: string;
  withLivePreview?: boolean;
  withCodeLink?: boolean;
  livePreviewLink?: string;
  codeLink?: string;
}

export const PhotoCard = ({
  title,
  desciption,
  image,
  subdesription,
  withLivePreview = true,
  withCodeLink = true,
  livePreviewLink,
  codeLink,
}: PhotoCardProps) => {
  return (
    <div className="bg-white text-black shadow-md rounded-xl">
      <div className="max-h-96">
        <img src={image} alt={"background-image"} className="rounded-t-xl" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-4 p-5">
          <p className="text-xl">{title}</p>
          <p className="text-md">{desciption}</p>
          <p className="text-sm">{subdesription}</p>
        </div>
        <div className="flex justify-between px-5 pb-5">
          {withLivePreview && (<a href={livePreviewLink}>
            <div className="flex gap-2 cursor-pointer">
              <Image
                src={"/icons/link.svg"}
                alt="linkLogo"
                width={20}
                height={20}
              />
                <p className="text-sm underline">Live Preview</p>
            </div>
          </a>)}
          {withCodeLink && (<a href={codeLink}>
            <div className="flex gap-2 cursor-pointer">
              <Image
                src={"/icons/github.svg"}
                alt="GithubLogo"
                width={20}
                height={20}
              />
              <p className="text-sm underline">View Code</p>
            </div>
          </a>)}
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
