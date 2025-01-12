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
      bg-gradient-to-br from-purple-500 to-blue-500
      border-purple-300
        text-base font-semibold rounded-2xl
      hover:from-blue-500 hover:to-purple-500
      hover:text-red-200
      active:bg-purple-500 active:border-purple-600
        ${className}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};