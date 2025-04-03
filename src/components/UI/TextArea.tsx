import React from "react";

interface TextAreaProps {
  icon?: React.ReactNode;
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({ icon, placeholder }) => {
  return (
    <div className="flex flex-col w-full max-w-xs min-w-[300px]">
      {/* TextArea container */}
      <div className="flex items-start gap-2 bg-[var(--black-200)] px-3 py-2 rounded-md border border-transparent transition-all duration-300 focus-within:border-[var(--red)] hover:border-[var(--red-200)]">
        {/* Icono */}
        <span className="text-[var(--red)] text-lg">{icon}</span>

        {/* TextArea */}
        <textarea
          placeholder={placeholder}
          className="bg-transparent flex-1 text-white placeholder-gray-400 outline-none resize-none h-24"
        />
      </div>
    </div>
  );
};

export default TextArea;
