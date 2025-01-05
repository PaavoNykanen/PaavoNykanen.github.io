import { Flex } from 'antd';
import BasicInfoList from '../../components/personal-info/BasicInfoList';
import Headshot from '../../components/personal-info/Headshot';

const PersonalInfo = () => {

  return (
    <Flex>
      <Headshot />
      <BasicInfoList />
    </Flex>
  );
};

export default PersonalInfo;