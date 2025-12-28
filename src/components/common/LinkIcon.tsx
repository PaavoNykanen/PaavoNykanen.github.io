import { Button, type ButtonProps } from 'antd';
import type { FC, ReactNode } from 'react';

interface LinkIconProps extends ButtonProps {
  href: string
  icon: ReactNode
  title?: string
  isExternal?: boolean
}

const LinkIcon: FC<LinkIconProps> = ({
  href, icon, title, isExternal,
}) => (
  <Button type="text" href={href} icon={icon} target={isExternal ? '_blank' : ''}>
    {title}
  </Button>
);

export default LinkIcon;
