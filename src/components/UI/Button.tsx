import React from "react";

interface ButtonProps {
  text: string;
  outline?: boolean;
  icon?: React.ReactNode;
  color?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  text,
  outline,
  icon,
  color = "var(--red)",
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <div className="w-full md:w-auto">
      <button
        type={type}
        onClick={onClick}
        className="w-full text-center flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium uppercase transition-all duration-300 border"
        style={{
          backgroundColor: outline ? "transparent" : color,
          color: outline ? "var(--white)" : "var(--white)",
          borderColor: outline ? "var(--white)" : "transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.borderColor = "var(--white)";
          e.currentTarget.style.color = "var(--white)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = outline ? "transparent" : color;
          e.currentTarget.style.borderColor = outline ? "var(--white)" : "transparent";
          e.currentTarget.style.color = outline ? "var(--white)" : "var(--white)";
        }}
      >
        {text}
        {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
      </button>
    </div>
  );
};

export default Button;
