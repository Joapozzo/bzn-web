import React from "react";

interface InputProps {
    icon?: React.ReactNode;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ icon, placeholder }) => {
    return (
        <div className="flex flex-col w-full max-w-xs">
            {/* Input container */}
            <div className="flex items-center gap-2 bg-[var(--black-200)] px-3 py-2 rounded-md border border-transparent transition-all duration-300 focus-within:border-[var(--red)] hover:border-[var(--red-200)]">
                {/* Icono */}
                <span className="text-[var(--red)] text-lg">{icon}</span>

                {/* Input */}
                <input
                    type="text"
                    placeholder={placeholder}
                    className="bg-transparent flex-1 text-white placeholder-gray-400 outline-none"
                />
            </div>
        </div>
    );
};

export default Input;
