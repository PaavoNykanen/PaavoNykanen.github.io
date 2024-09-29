import { Typography } from 'antd';
import { Footer } from 'antd/es/layout/layout';

const githubUrl = 'https://github.com/PaavoNykanen/PaavoNykanen.github.io';

const PageFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: '#736e67' }}>
      <Typography>
        Source: <a target="_blank" href={githubUrl}>PaavoNykanen.github.io</a>
      </Typography>
    </Footer>
  );
};

export default PageFooter;