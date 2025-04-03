interface Props {
  title: string;
  text: string;
}

const Counter: React.FC<Props> = ({ title, text }) => {
  return (
    <div>
      <div className="flex items-center lg:justify-end gap-2 text-white sm:justify-start">
        <span className="text-3xl font-semibold text-[var(--red)]">+</span>
        <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-[var(--white)]">
          {title}
        </span>
      </div>
      <span className="block text-white text-sm md:text-base font-medium text-end max-w-30 font-semibold">
        {text}
      </span>
    </div>
  );
};

export default Counter;
