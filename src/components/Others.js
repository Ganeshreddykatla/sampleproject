import React from 'react';

export const Plus = ({ color = 'currentColor', width = 12, height = 12 }) => {
    return (
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 12 12"
        >
          <path
            id="_ionicons_svg_ios-add_7_"
            data-name="_ionicons_svg_ios-add (7)"
            d="M138.753,132.753h-4.506v-4.506a.747.747,0,1,0-1.494,0v4.506h-4.506a.747.747,0,0,0,0,1.494h4.506v4.506a.747.747,0,1,0,1.494,0v-4.506h4.506a.747.747,0,1,0,0-1.494Z"
            transform="translate(-127.5 -127.5)"
            fill={color}
          />
        </svg>
      </span>
    );
  };