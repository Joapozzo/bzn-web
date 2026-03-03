import FlipCard from './FlipCard';
import emprendimientos from '../data/emprendimientos';
import { motion } from 'framer-motion';
import Button from './UI/Button';
import { useState, useRef, useEffect } from 'react';

const FlipCardsContainer = () => {
  const INITIAL_LIMIT = 6;
  const INTERVAL = 6;

  const [limitView, setLimitView] = useState(INITIAL_LIMIT);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldScrollRef = useRef(false);

  const viewMore = () => {
    setLimitView((prev) => prev + INTERVAL);
  };

  const viewLess = () => {
    shouldScrollRef.current = true; 
    setLimitView(INITIAL_LIMIT);
  };

  useEffect(() => {
    if (shouldScrollRef.current) {
      containerRef.current?.scrollIntoView({ behavior: 'smooth' });
      shouldScrollRef.current = false;
    }
  }, [limitView]);

  return (
    <section className="w-full flex flex-col gap-12 items-center justify-center">
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px] mx-auto"
      >
        {emprendimientos.slice(0, limitView).map((emprendimiento, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.04,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="w-full"
          >
            <FlipCard emprendimiento={emprendimiento} />
          </motion.div>
        ))}
      </div>
      <span className="flex w-full justify-center gap-5">
        {limitView > INITIAL_LIMIT && (
          <Button
            text="Ver menos"
            color="var(--red)"
            onClick={(e) => {
              e.preventDefault();
              viewLess();
            }}
          />
        )}
        {limitView < emprendimientos.length && (
          <Button
            text="Ver más"
            color="var(--red)"
            onClick={(e) => {
              e.preventDefault();
              viewMore();
            }}
          />
        )}
      </span>
    </section>
  );
};

export default FlipCardsContainer;
