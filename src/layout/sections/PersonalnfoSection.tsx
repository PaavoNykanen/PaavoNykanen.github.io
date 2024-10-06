import { Flex } from 'antd';
import BasicInfoList from '../../components/personal-info/BasicInfoList';
import Headshot from '../../components/personal-info/Headshot';
import HeaderDivider from '../../components/common/HeaderDivider';

const PersonalInfoSection = () => {

  return (
    <Flex vertical style={{ margin: '10px' }}>
      <HeaderDivider title="About me" titleLevel={3} />
      <Flex>
        <Headshot />
        <BasicInfoList />
      </Flex>
    </Flex>
  );
};

export default PersonalInfoSection;