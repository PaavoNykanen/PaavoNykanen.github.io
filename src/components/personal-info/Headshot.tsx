import { Flex, Image } from 'antd';
import headshot from '../../assets/omakuva.jpg'; // Import the local image file

const Headshot = ({
  className,
}: { className?: string }) => {
  return (
    <Flex>
      <Image
        className={className}
        src={headshot}
        alt="Headshot of Paavo Nykänen"
      />
    </Flex>
  );
};

export default Headshot;