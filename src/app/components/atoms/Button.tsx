'use client';
import React from "react";

type color = "primary" | "secondary" | "danger" | "link" | "cyan" | "me";
type textSize = "sm" | "md" | "lg" | "xl" | "2xl" | 'bold' | 'simiBold';

interface ButtonProps {
  color?: color;
  label?: string;
  text?: textSize;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  label = "Click Me",
  text = "md",
  onClick,
}) => {
  const colors = {
    primary: "bg-blue-500 transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg",
    secondary: "bg-green-500 transition-all duration-300 ease-in-out hover:bg-green-700 hover:shadow-lg",
    danger: "bg-red-500 transition-all duration-300 ease-in-out hover:bg-red-700 hover:shadow-lg",
    link: "bg-blue-500 transition-all duration-300 ease-in-out hover:bg-cyan-700 hover:shadow-lg",
    cyan: "bg-green-500 transition-all duration-300 ease-in-out hover:bg-green-700 hover:shadow-lg",
    me: "text-slate-500 hover:text-white border-2 border-blue-700 hover:outline-blue-700 hover:bg-blue-700 hover:drop-shadow-md hover:drop-shadow-blue-100 transition-all duration-300 ease-in-out",
  };

  const textSizes = {
    bold: 'font-bold',
    simiBold: 'font-semibold',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl pb-4',
  };

  return (
    <button
      type="button"
      className={`flex justify-center items-center px-5 py-3 pb-3 rounded-full ${colors[color]} ${textSizes[text]} text-white`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
