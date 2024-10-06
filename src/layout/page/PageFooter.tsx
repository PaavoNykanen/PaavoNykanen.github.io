import { Flex, Typography } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { LinkedinOutlined, GithubOutlined, InstagramOutlined } from '@ant-design/icons';
import LinkIcon from '../../components/common/LinkIcon';

const source = 'https://github.com/PaavoNykanen/PaavoNykanen.github.io';
const linkedInUrl = 'https://www.linkedin.com/in/paavo-nyk%C3%A4nen-82a56520a/';
const githubUrl = 'https://github.com/PaavoNykanen';
const instagramUrl = 'https://www.instagram.com/paavoli/profilecard/?igsh=eDIwNXRvMG96a2oz';

const PageFooter = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
        backgroundColor: '#736e67',
      }}>
      <Flex vertical style={{ justifyContent: 'center' }}>
        <Flex style={{ justifyContent: 'center' }}>
          <LinkIcon
            icon={(<LinkedinOutlined aria-label='LinkedIn' style={{ fontSize: '20px' }} />)}
            href={linkedInUrl}
            style={{ paddingRight: '10px' }}
            isExternal
          />
          <LinkIcon
            icon={(<GithubOutlined aria-label='Github' style={{ fontSize: '20px' }} />)}
            href={githubUrl}
            style={{ paddingRight: '10px' }}
            isExternal
          />
          <LinkIcon
            icon={(<InstagramOutlined aria-label='Instagram' style={{ fontSize: '20px' }} />)}
            href={instagramUrl}
            style={{ paddingRight: '10px' }}
            isExternal
          />
        </Flex>
        <Typography
          style={{
            fontSize: 14,
            color: 'white',
          }}>
          Source: <a target="_blank" href={source}>PaavoNykanen.github.io</a>
        </Typography>
      </Flex>
    </Footer>
  );
};

export default PageFooter;