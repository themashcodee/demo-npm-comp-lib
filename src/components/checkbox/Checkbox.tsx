import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
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

export const Checkbox: FC<CheckBoxProps> = ({
  initialState = 'disabled',
  ariaLabel = 'Toggle Dark Mode',
}) => {
  const [enabled, setEnabled] = useState<boolean>(
    initialState === 'disabled' ? false : true
  );
  const controls = useAnimation();

  useEffect(() => {
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
        // transition={{ duration: 0.2 }}
        className={`h-full w-12 rounded text-white flex justify-center items-center p-2`}
      >
        {enabled && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </motion.span>
    </Switch>
  );
};
