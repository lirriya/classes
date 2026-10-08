interface IconProps {
  className?: string;
}

const sharedProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function NotebookIcon({ className }: IconProps) {
  return (
    <svg className={className} {...sharedProps}>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17.5a2.5 2.5 0 0 1-2.5 2.5H6.5A2.5 2.5 0 0 1 4 19.5z" />
      <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20" />
      <path d="M9 7h7" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg className={className} {...sharedProps}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg className={className} {...sharedProps}>
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg className={className} {...sharedProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function BookmarkIcon({ className }: IconProps) {
  return (
    <svg className={className} {...sharedProps}>
      <path d="M6 3h12v18l-6-4.5L6 21z" />
    </svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg className={className} {...sharedProps}>
      <path d="m12 3 9 5-9 5-9-5z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg className={className} {...sharedProps}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m6.3 6.3 2.8 2.8" />
      <path d="m14.9 14.9 2.8 2.8" />
      <path d="m17.7 6.3-2.8 2.8" />
      <path d="m9.1 14.9-2.8 2.8" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} {...sharedProps}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function CrossIcon({ className }: IconProps) {
  return (
    <svg className={className} {...sharedProps}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function RotateIcon({ className }: IconProps) {
  return (
    <svg className={className} {...sharedProps}>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

export function EyeIcon({ className }: IconProps) {
  return (
    <svg className={className} {...sharedProps}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
