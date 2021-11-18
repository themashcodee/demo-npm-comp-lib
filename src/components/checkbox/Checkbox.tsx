import React, { FC, HTMLAttributes, useLayoutEffect, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { Switch } from '@headlessui/react';

export interface CheckBoxProps extends HTMLAttributes<HTMLDivElement> {
  initialState: 'enabled' | 'disabled';
  ariaLabel: string;
}

const variant: Variants = {
  initial: {
    x: 0,
    backgroundColor: '#dddddd',
  },
  animate: {
    x: 52,
    backgroundColor: '#3b82f6',
  },
};
const svgOutlineAnim: Variants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const Checkbox: FC<CheckBoxProps> = ({
  initialState = 'disabled',
  ariaLabel = 'Toggle Dark Mode',
}) => {
  const [enabled, setEnabled] = useState<boolean>(
    initialState === 'disabled' ? false : true
  );
  const controls = useAnimation();

  useLayoutEffect(() => {
    enabled ? controls.start('animate') : controls.start('initial');
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      role="switch"
      className="w-28 h-14 p-1 bg-[#fff] shadow-sm rounded-lg border flex"
    >
      <span className="sr-only">{ariaLabel}</span>
      <motion.span
        initial="initial"
        animate={controls}
        variants={variant}
        className="h-full w-12 rounded text-white flex justify-center items-center p-2"
      >
        {enabled && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <motion.path
              initial="initial"
              animate="animate"
              variants={svgOutlineAnim}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </motion.span>
    </Switch>
  );
};
