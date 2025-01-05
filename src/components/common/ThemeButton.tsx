import { Button } from 'antd';
import { MouseEventHandler } from 'react';

export const ThemeButton = ({
  text,
  onClick,
  className,
}: { text: string, onClick: MouseEventHandler<HTMLElement> | undefined, className?: string }) => {
  return (
    <Button
      className={`font-lato
      bg-purple-500 border-purple-400 text-black
        text-base font-semibold rounded-2xl
      hover:bg-purple-600 hover:border-purple-500
      active:bg-purple-500 active:border-purple-600
        ${className}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};