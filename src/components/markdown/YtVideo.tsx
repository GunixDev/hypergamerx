import { useState } from "react";

interface Props {
  id: string;
  title?: string;
}

export default function YtVideo({ id, title }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const label = title ? `Reproducir video: ${title}` : "Reproducir video de YouTube";

  return (
    <>
      {isOpen ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          loading="lazy"
          className="w-full mx-auto my-2 sm:my-4 duration-300 rounded sm:rounded-lg aspect-video"
          title={title ?? "Reproductor de video de YouTube"}
          allowFullScreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={label}
          className="group relative block w-full my-2 sm:my-4 cursor-pointer rounded sm:rounded-lg focus-visible:outline-2 focus-visible:outline-primary"
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <img
              src="/logos/youtube_videoicon.svg"
              width={68}
              height={48}
              alt=""
              aria-hidden="true"
              decoding="async"
              loading="lazy"
              className="md:h-24 md:w-8/12 w-5/12 h-10 mx-auto brightness-100 group-hover:brightness-150 group-focus-visible:brightness-150 duration-300"
            />
          </span>
          <img
            width={958}
            height={540}
            src={`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}
            srcSet={`https://i3.ytimg.com/vi/${id}/hqdefault.jpg 480w,
            https://i3.ytimg.com/vi/${id}/sddefault.jpg 640w,
            https://i3.ytimg.com/vi/${id}/maxresdefault.jpg 1280w`}
            sizes="(max-width: 1024px) 100vw, 800px"
            alt=""
            aria-hidden="true"
            decoding="async"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.removeAttribute("srcset");
              e.currentTarget.src = `https://i3.ytimg.com/vi/${id}/hqdefault.jpg`;
            }}
            className="w-full aspect-video object-cover brightness-50 group-hover:brightness-75 group-focus-visible:brightness-75 duration-300 rounded sm:rounded-lg"
          />
        </button>
      )}
    </>
  );
}