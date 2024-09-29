import { Flex, Image } from 'antd';
import headshot from './../assets/skeleton.jpg'; // Import the local image file

const Headshot = () => {
  return (
    <Flex style={{ margin: '10px' }}>
      <Image
        width={200}
        src={headshot}
        alt="Headshot of Paavo Nykänen"
      />
    </Flex>
  );
};

export default Headshot;