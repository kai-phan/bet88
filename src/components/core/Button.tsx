import React from 'react';
import classNames from 'classnames';

export interface Props {
  type?: 'primary' | 'secondary' | 'default';
  children?: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  type = 'default',
  className,
}: Props) {
  return (
    <button
      className={classNames(
        'px-3 py-2 text-sm rounded-lg font-light tracking-wide inline-flex items-center justify-center gap-2',
        {
          'bg-green-primary text-white': type === 'primary',
          'bg-azure-18': type === 'default',
        },
        className,
      )}
    >
      {children}
    </button>
  );
}
