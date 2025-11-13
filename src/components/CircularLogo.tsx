import React from 'react';

interface CircularLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const CircularLogo: React.FC<CircularLogoProps> = ({ className, ...props }) => {
  return (
    <svg 
      width="180" 
      height="180" 
      viewBox="0 0 180 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path 
        d="M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180Z" 
        fill="#3B82F6"
      />
    </svg>
  );
};

export default CircularLogo;