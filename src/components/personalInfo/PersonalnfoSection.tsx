import { Flex } from 'antd';
import BasicInfoList from './BasicInfoList';
import Headshot from './Headshot';
import HeaderDivider from '../common/HeaderDivider';

const PersonalInfoSection = () => {

  return (
    <Flex vertical style={{ width: '100vh', margin: '10px' }}>
      <HeaderDivider title="About me" titleLevel={3} />
      <Flex>
        <Headshot />
        <BasicInfoList />
      </Flex>
    </Flex>
  );
};

export default PersonalInfoSection;