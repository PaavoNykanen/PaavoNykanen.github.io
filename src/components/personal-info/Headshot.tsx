import { Flex } from 'antd';
import headshot from '../../assets/omakuva.jpg'; // Import the local image file

const Headshot = ({
  className,
}: { className?: string }) => (
  <Flex>
    <img
      className={`rounded-2xl shadow-lg ${className}`}
      src={headshot}
      alt="Headshot of Paavo Nykänen"
    />
  </Flex>
);

export default Headshot;
