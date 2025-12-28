import { Button } from 'antd';
import type { MouseEventHandler } from 'react';

export const ThemeButton = ({
  text,
  onClick,
  className,
  variant = 'primary',
}: {
  text: string
  onClick: MouseEventHandler<HTMLElement> | undefined
  variant?: 'primary' | 'secondary'
  className?: string
}) => {
  const primaryStyles = `font-lato text-base font-semibold rounded-2xl  
                          bg-gradient-to-br from-purple-500 to-blue-500
                          border-purple-300
                          hover:from-blue-500 hover:to-purple-500 hover:text-red-200
                          active:bg-purple-500 active:border-purple-600`;

  const secondaryStyles = `font-lato text-base font-semibold rounded-2xl
                            bg-gradient-to-br from-purple-400 to-blue-400 
                            border-blue-300
                            hover:from-purple-400 hover:to-blue-400 hover:text-red-200
                            active:bg-blue-400 active:border-blue-600`;

  return (
    <Button
      className={`${variant === 'primary' ? primaryStyles : secondaryStyles} ${className}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
