import { Flex, Image } from 'antd';
import headshot from '../../assets/omakuva.jpg'; // Import the local image file

const Headshot = () => {
  return (
    <Flex>
      <Image
        width={200}
        src={headshot}
        alt="Headshot of Paavo Nykänen"
      />
    </Flex>
  );
};

export default Headshot;