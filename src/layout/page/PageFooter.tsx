import { Flex, Typography } from 'antd';
import { LinkedinOutlined, GithubOutlined, InstagramOutlined } from '@ant-design/icons';
import LinkIcon from '../../components/common/LinkIcon';

const source = 'https://github.com/PaavoNykanen/PaavoNykanen.github.io';
const linkedInUrl = 'https://www.linkedin.com/in/paavo-nyk%C3%A4nen-82a56520a/';
const githubUrl = 'https://github.com/PaavoNykanen';
const instagramUrl = 'https://www.instagram.com/paavoli/profilecard/?igsh=eDIwNXRvMG96a2oz';

const PageFooter = () => {
  return (
    <Flex vertical className='p-3'>
      <Flex className='justify-center'>
        <LinkIcon
          icon={(<LinkedinOutlined aria-label='LinkedIn'/>)}
          href={linkedInUrl}
          style={{ paddingRight: '10px' }}
          isExternal
        />
        <LinkIcon
          icon={(<GithubOutlined aria-label='Github' />)}
          href={githubUrl}
          style={{ paddingRight: '10px' }}
          isExternal
        />
        <LinkIcon
          icon={(<InstagramOutlined aria-label='Instagram' />)}
          href={instagramUrl}
          style={{ paddingRight: '10px' }}
          isExternal
        />
      </Flex>
      <Typography className='text-center'>
        Source: <a target="_blank" className='text-blue-700 font-sans' href={source}>PaavoNykanen.github.io</a>
      </Typography>
    </Flex>
  );
};

export default PageFooter;