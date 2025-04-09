import React from 'react';
import FlipCard from './FlipCard';
import emprendimientos from '../data/emprendimientos';
import { motion } from 'framer-motion';

const FlipCardsContainer = () => {
  return (
    <section className="flex flex-col lg:flex-row flex-wrap items-start gap-10 w-full max-w-[1200px] mx-auto justify-between">
      {emprendimientos.map((emprendimiento, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.3, // más rápido
            delay: index * 0.05 // delay progresivo más corto
          }}
          className="flex justify-center w-full md:w-auto"
        >
          <FlipCard emprendimiento={emprendimiento} />
        </motion.div>
      ))}
    </section>
  );
};

export default FlipCardsContainer;
