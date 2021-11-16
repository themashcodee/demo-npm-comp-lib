import React, { FC, HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button: FC<ButtonProps> = ({ text = 'Default' }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="bg-blue-500 text-white rounded w-max py-2 px-3 font-medium cursor-pointer"
    >
      {text}
    </motion.button>
  );
};
