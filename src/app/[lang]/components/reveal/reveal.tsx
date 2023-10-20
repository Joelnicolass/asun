"use client"
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
  slideColor: string;
}

export const Reveal = ({
  children,
  width = 'fit-content',
  slideColor,
}: Props) => {
  const ref = useRef(null);
  const isInVew = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInVew) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInVew]);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width,
        overflow: 'hidden',
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: '#CCC',
          opacity: 0.1 ,
          zIndex: 20,
        }}
        className='blur-sm'
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
      />
    </div>
  );
};
