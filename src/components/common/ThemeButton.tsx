import { Button } from 'antd';

export const ThemeButton = ({ text }: { text: string}) => {
  return (
    <Button className="ml-auto m-5 font-sans
    bg-purple-500 border-purple-400 text-black
      text-base font-semibold rounded-2xl
    hover:bg-purple-600 hover:border-purple-500
    active:bg-purple-500 active:border-purple-600
     ">
      {text}
    </Button>
  );
};