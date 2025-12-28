import { Flex, Typography } from 'antd';

const source = 'https://github.com/PaavoNykanen/PaavoNykanen.github.io';

const PageFooter = () => (
  <Flex vertical className="p-3">
    <Typography className="text-center">
      Source:
      {' '}
      <a target="_blank" className="text-blue-700 font-lato" href={source} rel="noreferrer">PaavoNykanen.github.io</a>
    </Typography>
  </Flex>
);

export default PageFooter;
