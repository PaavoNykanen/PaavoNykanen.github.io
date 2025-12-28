import { Image, Tooltip } from 'antd';
import type { FC } from 'react';

export type SkillIconData = {
  src: string
  alt: string
  tooltip?: string
  origin?: string
};

interface SkillIconProps {
  iconData: SkillIconData
}

const SkillIcon: FC<SkillIconProps> = ({
  iconData,
}) => (
  <Tooltip
    placement="top"
    title={iconData.tooltip}
  >
    <Image
      className="h-12 w-12 object-contain m-2"
      preview={false}
      src={iconData.src}
      alt={iconData.alt}
    />
  </Tooltip>
);

export default SkillIcon;
