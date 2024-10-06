import { Flex, List } from 'antd';

const BasicInfoList = () => {
  const age = new Date().getTime() - new Date('1999-01-13').getTime();
  const data = [
    'Name: Paavo Nykänen',
    'Title: Software Developer',
    `Age: ${Math.floor(age / (1000 * 60 * 60 * 24 * 365))}`,
    'Location: Jyväskylä, Finland',
    'Email: paavonykanen@gmail.com',
    'Phone: +358 451140398',
  ];

  return (
    <Flex style={{ margin: '10px' }}>
      <List
        size="small"
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Flex>
  );
};

export default BasicInfoList;
