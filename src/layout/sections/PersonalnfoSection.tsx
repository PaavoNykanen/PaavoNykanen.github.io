import { Flex } from 'antd';
import BasicInfoList from '../../components/personal-info/BasicInfoList';
import Headshot from '../../components/personal-info/Headshot';

const PersonalInfoSection = () => {

  return (
    <Flex>
      <Headshot />
      <BasicInfoList />
    </Flex>
  );
};

export default PersonalInfoSection;