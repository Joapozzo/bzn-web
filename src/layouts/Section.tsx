interface SectionProps {
    id?: string;
    title?: string;
    children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
    return (
        <div id={id} className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            {/* Título */}
            <h2 className="text-3xl font-extrabold mb-4 text-[var(--red)]">{title}</h2>

            {/* Rectángulo rojo debajo del título */}
            <div className="h-1 w-20 mb-6 bg-[var(--red)]"></div>

            {/* Contenido de la sección (slot) */}
            <div>
                {children}
            </div>
        </div>
    );
};

export default Section;
