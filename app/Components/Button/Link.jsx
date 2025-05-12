import React from "react";

export default function Link({
  href = "#",
  active = false,
  d1,
  d2,
  d3,
  d4,
  text,
  onClick,
}) {
  return (
    <a href={href} onClick={onClick}>
      <div
        className={`
          ${
            active
              ? "bg-blue-600 text-white"
              : "hover:bg-blue-600 text-gray-600 hover:text-white"
          } 
          mt-1 px-4 py-3 rounded-xl group
        `}
      >
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={active ? "#FFFFFF" : "#737373"}
            className="size-5 group-hover:fill-white"
          >
            {d1 && <path d={d1} />}
            {d2 && <path d={d2} />}
            {d3 && <path d={d3} />}
            {d4 && <path d={d4} />}
          </svg>

          <h1 className="text-sm font-normal">{text}</h1>
        </div>
      </div>
    </a>
  );
}
