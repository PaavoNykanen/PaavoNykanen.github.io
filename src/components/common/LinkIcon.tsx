import { Button, ButtonProps } from 'antd';
import { FC, ReactNode } from 'react';

interface LinkIconProps extends ButtonProps {
  href: string
  icon: ReactNode
  title?: string
  isExternal?: boolean
}

const LinkIcon: FC<LinkIconProps> = ({
  href, icon, title, isExternal,
}) => {
  return (
    <Button type="text" href={href} icon={icon} target={isExternal ? '_blank' : ''}>
      {title}
    </Button>
  );
};

export default LinkIcon;
