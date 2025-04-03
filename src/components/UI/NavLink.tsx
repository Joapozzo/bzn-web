interface NavLinkProps {
  href: string;
  text: string;
  onClick?: () => void;
}

const NavLink = ({ href, text, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="group relative uppercase text-white font-medium transition-all"
      onClick={onClick}
    >
      <span className="relative inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-1 md:text-base">
        {text}
      </span>
      <span className="absolute left-1/2 -translate-x-1/2 top-full w-[70%] h-[3px] bg-[var(--red-200)] scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
    </a>
  );
};

export default NavLink;