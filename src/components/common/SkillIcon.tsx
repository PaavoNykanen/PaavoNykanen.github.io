import { Image, Rate, Tooltip } from 'antd';
import type { FC } from 'react';

export type SkillIconData = {
  src: string
  alt: string
  tooltip?: string
  origin?: string
  level?: 1 | 2 | 3 | 4 | 5
};

interface SkillIconProps {
  iconData: SkillIconData
}

const SkillIcon: FC<SkillIconProps> = ({
  iconData,
}) => {
  const tooltipContent = (
    <div className="flex flex-col gap-1 min-w-[200px]">
      <div className="font-oswald text-sm sm:text-base font-semibold text-gray-900">
        {iconData.alt}
      </div>
      {iconData.level !== undefined && (
        <Rate
          disabled
          value={iconData.level}
          className="text-xs"
          style={{ fontSize: 12 }}
        />
      )}
      {iconData.tooltip && (
        <div className="text-xs sm:text-sm font-lato text-gray-800">
          {iconData.tooltip}
        </div>
      )}
    </div>
  );

  return (
    <Tooltip
      placement="top"
      title={tooltipContent}
      overlayInnerStyle={{
        background: 'rgba(255,200,200,0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,140,120,0.45)',
        boxShadow: '0 20px 45px rgba(15,23,42,0.35)',
        borderRadius: 12,
        padding: 12,
      }}
    >
      <Image
        className="h-12 w-12 object-contain m-2"
        preview={false}
        src={iconData.src}
        alt={iconData.alt}
      />
    </Tooltip>
  );
};

export default SkillIcon;
