import { cn } from "./../../../utils/cn";

export default function CardNumerology({ link }) {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          `bg-[url(${link.image})] bg-cover bg-center`,
          "transition-all duration-500"
        )}
      >
        {/* Hover Video */}
        {link.gif.endsWith(".mp4") ? (
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <source src={link.gif} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className={`absolute inset-0 w-full h-full bg-cover bg-[url(${link.gif})] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          ></div>
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
