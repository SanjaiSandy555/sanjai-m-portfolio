import React from 'react';

interface LeafIconProps {
  className?: string;
  size?: number;
  color?: string;
  accentColor?: string;
}

export const LeafIcon: React.FC<LeafIconProps> = ({
  className = '',
  size = 22,
  color = '#10B981',
  accentColor = '#6EE7B7',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform duration-300 hover:scale-110 hover:rotate-6 ${className}`}
      aria-label="Botanical Leaf Emblem"
    >
      {/* Outer leaf contour */}
      <path
        d="M6 26C6 26 8 16 18 10C24 6.4 27 5 27 5C27 5 25.6 8 22 14C16 24 6 26 6 26Z"
        fill={color}
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Delicate central leaf vein / line */}
      <path
        d="M8.5 23.5C13 19 18 14 27 5"
        stroke={accentColor}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Subtle secondary vein branch */}
      <path
        d="M13 18C15 19 17 19.2 18.5 18"
        stroke={accentColor}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
};
