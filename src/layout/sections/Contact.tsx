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
    <Flex className="m-3 flex-col" id="contact">
      <Text className="text-lg sm:text-xl font-oswald text-gray-900 drop-shadow-sm font-semibold">
        Contact me!
      </Text>
      <Flex className="justify-center">
        <Card className="m-2 md:m-10 bg-white/20 backdrop-blur-md border-white/30 shadow-xl w-fit">
          <Flex className="m-3 flex-col md:flex-row justify-center gap-6">
            <Flex className="justify-center">
              <Headshot className="size-auto sm:size-80" />
            </Flex>
            <Flex className="space-y-5 m-3 flex-col">
              <Tooltip placement="topLeft" title="Copied!" open={phoneTooltip}>
                <IconButton
                  icon={<PhoneOutlined aria-label="Phone" />}
                  text={phoneNumber}
                  onClick={() => activatePhoneTooltip()}
                />
              </Tooltip>
              <Tooltip placement="topLeft" title="Copied!" open={emailTooltip}>
                <IconButton
                  icon={<MailOutlined aria-label="Email" />}
                  text={email}
                  onClick={() => activateEmailTooltip()}
                />
              </Tooltip>
              <IconButton
                icon={<LinkedinOutlined aria-label="LinkedIn" />}
                text={'Let\'s connect!'}
                onClick={() => window.open(linkedInUrl, '_blank')}
              />
              <IconButton
                icon={<GithubOutlined aria-label="Github" />}
                text="My projects!"
                onClick={() => window.open(githubUrl, '_blank')}
              />
              <IconButton
                icon={<InstagramOutlined aria-label="Instagram" />}
                text="My life!"
                onClick={() => window.open(instagramUrl, '_blank')}
              />
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default Contact;
