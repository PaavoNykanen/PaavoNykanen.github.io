import { GithubOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Card, Flex, Tooltip, Typography } from 'antd';
import IconButton from '../../components/common/IconButton';
import Headshot from '../../components/personal-info/Headshot';
import { useState } from 'react';

const phoneNumber = '+358451140398';
const email = 'paavonykanen@gmail.com';
const linkedInUrl = 'https://www.linkedin.com/in/paavo-nyk%C3%A4nen-82a56520a/';
const githubUrl = 'https://github.com/PaavoNykanen';
const instagramUrl = 'https://www.instagram.com/paavoli/profilecard/?igsh=eDIwNXRvMG96a2oz';

const Contact = () => {
  const { Text } = Typography;
  const [emailTooltip, setEmailTooltip] = useState(false);
  const [phoneTooltip, setPhoneTooltip] = useState(false);

  const activateEmailTooltip = () => {
    navigator.clipboard.writeText(email);
    setEmailTooltip(true);
    setTimeout(() => {
      setEmailTooltip(false);
    }, 1500);
  };
  const activatePhoneTooltip = () => {
    navigator.clipboard.writeText(phoneNumber);
    setPhoneTooltip(true);
    setTimeout(() => {
      setPhoneTooltip(false);
    }, 1500);
  };

  return (
    <Flex className='m-3 flex-col' id="contact">
      <Text className='text-lg sm:text-xl font-oswald'>
        Contact me!
      </Text>
      <Card className='m-10 bg-orange-100 border-orange-200'>
        <Flex className='m-3 flex-col md:flex-row justify-center'>
          <Flex className='justify-center'>
            <Headshot className='size-auto sm:size-80' />
          </Flex>
          <Flex className='space-y-5 m-3 flex-col'>
            <Tooltip placement='topLeft' title={'Copied!'} open={phoneTooltip}>
              <IconButton
                icon={<PhoneOutlined aria-label='Phone' />}
                text={phoneNumber}
                onClick={() => activatePhoneTooltip()}
              />
            </Tooltip >
            <Tooltip placement='topLeft' title={'Copied!'} open={emailTooltip}>
              <IconButton
                icon={<MailOutlined aria-label='Email' />}
                text={email}
                onClick={() => activateEmailTooltip()}
              />
            </Tooltip >
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
      </Card>
    </Flex>
  );
};

export default Contact;