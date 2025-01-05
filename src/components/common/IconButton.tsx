import { Button, Flex, Typography } from 'antd';
import React, { ReactElement } from 'react';
import { useState } from 'react';

const IconButton = ({
  icon,
  text,
  onClick,
}: { icon: ReactElement, text: string, onClick: () => void }) => {
  const { Text } = Typography;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Flex
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className='w-1'
    >
      <Button type="text" onClick={onClick}>
        {React.cloneElement(icon, { spin: isHovering, className: 'text-lg font-lato' })}
        <Text className='text-md font-lato'>{text}</Text>
      </Button>
    </Flex>
  );
};

export default IconButton;