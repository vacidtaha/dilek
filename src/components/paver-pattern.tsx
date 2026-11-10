import { useId } from "react";

export function PaverPattern({ className }: { className?: string }) {
  const id = useId();

  return (
    <svg aria-hidden className={className}>
      <defs>
        <pattern id={id} width="80" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M0 .5H80M0 20.5H80M.5 0v20M40.5 0v20M20.5 20v20M60.5 20v20"
            fill="none"
            stroke="currentColor"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
