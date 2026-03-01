import { Button } from 'antd';
import type { MouseEventHandler } from 'react';

export const ThemeButton = ({
  text,
  onClick,
  className,
  variant = 'primary',
  href,
  target,
  rel,
  download,
}: {
  text: string
  onClick?: MouseEventHandler<HTMLElement>
  variant?: 'primary' | 'secondary'
  className?: string
  href?: string
  target?: string
  rel?: string
  download?: boolean | string
}) => {
  const primaryStyles = `font-lato text-base font-semibold rounded-2xl  
                          bg-white/30 backdrop-blur-md
                          border-2 border-white/50 text-gray-800
                          hover:bg-white/40 hover:border-white/70 hover:shadow-lg
                          active:bg-white/50 transition-all duration-200`;

  const secondaryStyles = `font-lato text-base font-semibold rounded-2xl
                            bg-white/20 backdrop-blur-md
                            border-2 border-white/40 text-gray-800
                            hover:bg-white/30 hover:border-white/60 hover:shadow-lg
                            active:bg-white/40 transition-all duration-200`;

  return (
    <Button
      className={`${variant === 'primary' ? primaryStyles : secondaryStyles} ${className}`}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      download={href ? download : undefined}
    >
      {text}
    </Button>
  );
};
