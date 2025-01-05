import { GithubOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Flex, Typography } from 'antd';
import IconButton from '../../components/common/IconButton';

const phoneNumber = '+358451140398';
const email = 'paavonykanen@gmail.com';
const linkedInUrl = 'https://www.linkedin.com/in/paavo-nyk%C3%A4nen-82a56520a/';
const githubUrl = 'https://github.com/PaavoNykanen';
const instagramUrl = 'https://www.instagram.com/paavoli/profilecard/?igsh=eDIwNXRvMG96a2oz';

const Contact = () => {
  const { Text } = Typography;

  return (
    <Flex className='m-3 flex-col' id="contact">
      <Text className='text-lg md:text-md lg:text-lg xl:text-xl font-oswald mb-5'>
        Contact me!
      </Text>
      <Flex vertical className='space-y-5'>
        <IconButton
          icon={<PhoneOutlined aria-label='Phone' />}
          text={phoneNumber}
          onClick={() => window.open(`tel:${phoneNumber}`, '_blank')}
        />
        <IconButton
          icon={<MailOutlined aria-label='Email' />}
          text={email}
          onClick={() => window.open(`mailto:${email}`, '_blank')}
        />
        <IconButton
          icon={<LinkedinOutlined aria-label='LinkedIn' />}
          text={'Let\'s connect!'}
          onClick={() => window.open(linkedInUrl, '_blank')}
        />
        <IconButton
          icon={<GithubOutlined aria-label='Github' />}
          text={'My projects!'}
          onClick={() => window.open(githubUrl, '_blank')}
        />
        <IconButton
          icon={<InstagramOutlined aria-label='Instagram' />}
          text={'My life!'}
          onClick={() => window.open(instagramUrl, '_blank')}
        />
      </Flex>
    </Flex>
  );
};

export default Contact;