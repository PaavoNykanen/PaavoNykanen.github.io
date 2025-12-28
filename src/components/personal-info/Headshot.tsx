import { Flex } from 'antd';

const headshot = '/assets/omakuva.jpg';

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
