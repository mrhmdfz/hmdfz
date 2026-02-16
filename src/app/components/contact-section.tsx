export default function ContactSection() {
  return (
    <div
      className="flex flex-col gap-3
      bg-base
      border border-dashed border-gray-200
      border-r-gray-200 border-t-0 border-l-gray-200 border-b-gray-200
      w-full
      p-6"
    >
      <h1 className="text-blue-600 text-sm md:text-md tracking-tight font-semibold">
        CONTACT
      </h1>
      <div className="flex flex-col divide-y divide-dashed divide-gray-200">
        <div className="grid grid-cols-2 py-4 items-center">
          <span className="text-gray-400 text-xs md:text-sm tracking-wide font-geist">
            EMAIL
          </span>
          <a
            href="mailto:hmdfzi15@gmail.com"
            className="flex items-center gap-2 justify-end text-xs md:text-sm text-blue-600 hover:text-blue-800 transition"
          >
            hmdfzi15@gmail.com
          </a>
        </div>
        <div className="grid grid-cols-2 py-4 items-center">
          <span className="text-gray-400 text-xs md:text-sm tracking-wide font-geist">
            INSTAGRAM
          </span>
          <a
            href="https://instagram.com/hmdfzzi"
            target="_blank"
            className="flex items-center gap-2 justify-end text-xs md:text-sm text-blue-600 hover:text-blue-800 transition"
          >
            @hmdfzzi
          </a>
        </div>
        <div className="grid grid-cols-2 py-4 items-center">
          <span className="text-gray-400 text-xs md:text-sm  tracking-wide font-geist">
            GITHUB
          </span>
          <a
            href="https://github.com/mrhmdfz"
            target="_blank"
            className="flex items-center gap-2 text-xs md:text-sm justify-end text-blue-600 hover:text-blue-800 transition"
          >
            github.com/mrhmdfz
          </a>
        </div>
        <div className="grid grid-cols-2 py-4 items-center">
          <span className="text-gray-400 text-xs md:text-sm tracking-wide font-geist">
            LINKEDIN
          </span>
          <a
            href="https://linkedin.com/in/ahmad-fauzi-56051a37b/"
            target="_blank"
            className="flex items-center gap-2 justify-end text-xs md:text-sm text-blue-600 hover:text-blue-800 transition"
          >
            linkedin.com/in/ahmad-fauzi-56051a37b
          </a>
        </div>
      </div>
    </div>
  );
}
