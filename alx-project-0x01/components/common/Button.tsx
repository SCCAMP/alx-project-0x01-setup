import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
    >
      {label}
    </button>
  );
};

export default Button;
