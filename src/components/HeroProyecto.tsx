import React from "react";
import { Hero } from "./HeroWissen";

export interface HeroProyectoProps {
  title: string;
  subtitle?: string;
  heroImage: string;
  whatsappMessage: string;
  phone: string;
  badge?: string;
}

const HeroProyecto = ({
  title,
  subtitle,
  heroImage,
  whatsappMessage,
  phone,
  badge = "PROYECTO ACTUAL",
}: HeroProyectoProps) => {
  return (
    <Hero
      title={title}
      subtitle={subtitle}
      heroImage={heroImage}
      whatsappMessage={whatsappMessage}
      phone={phone}
      badge={badge}
    />
  );
};

export default HeroProyecto;
