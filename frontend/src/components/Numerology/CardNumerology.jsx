// CardNumerology.js
import { cn } from "./../../../utils/cn";

export default function CardNumerology({ link }) {
  console.log("Rendering CardNumerology with link:", link); // Debugging log

  // Determine if the link is an image or a gif
  const isImage =
    link.image.endsWith(".jpg") ||
    link.image.endsWith(".jpeg") ||
    link.image.endsWith(".png");
  const isGif = link.gif.endsWith(".gif") || link.gif.endsWith(".mp4");

  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          `bg-[url(${link.image})] bg-cover bg-center`,
          // Preload hover gif by setting it in a pseudo-element
          `before:bg-[url(${link.gif})] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
          `hover:bg-[url(${link.gif})]`,
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        {/* Conditionally render image or video */}
        {isImage ? (
          <img
            src={link.image}
            alt={link.text}
            className="w-full h-full object-cover"
          />
        ) : isGif ? (
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={link.gif} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="absolute inset-0 bg-gray-800 text-white flex items-center justify-center">
            Unsupported file format
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

        {/* Text Content */}
        <div className="text relative z-50 p-4">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {link.text}
          </h1>
          <p className="font-semibold text-base text-gray-400 relative my-4">
            {link.description}
          </p>
        </div>
      </div>
    </div>
  );
}
