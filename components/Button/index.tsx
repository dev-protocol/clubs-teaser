import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-purple-600 text-white rounded px-12 py-4"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
