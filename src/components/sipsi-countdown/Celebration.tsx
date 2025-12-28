import { Flex } from 'antd';
import { useMemo } from 'react';
import chipImage from '../../assets/potato-chip.png';
import tommi from '../../assets/tommi.jpg';
import vertti from '../../assets/vertti.jpg';
import eemil from '../../assets/eemil.jpg';

const Celebration = () => {
  const chips = useMemo(
    () =>
      [...Array(15)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${3 + Math.random() * 2}s`,
      })),
    [],
  );

  return (
    <Flex vertical align="center" justify="center" className="celebration-bg h-screen w-screen overflow-hidden relative">
      {chips.map(chip => (
        <div
          key={chip.id}
          className="falling-chip z-0"
          style={{
            left: chip.left,
            animationDelay: chip.delay,
            animationDuration: chip.duration,
          }}
        >
          <img src={chipImage} alt="Chip" className="w-16 h-16 md:w-24 md:h-24 " />
        </div>
      ))}
      <Flex vertical align="center" justify="center" gap="large" className="z-10 relative">
        <h1 className="text-xl lg:text-2xl 4xl:text-4xl text-white text-center animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] px-4">
          🎉 Hyvää sipsintäytteistä uutta vuotta 2026! 🎉
        </h1>
        <h2 className="text-lg lg:text-xl 4xl:text-3xl text-white text-center animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] px-4">
          🤑 Ja kiitos lahjoituksesta kundit! 🤑
        </h2>
        <Flex className="flex-row flex-wrap justify-center items-center" gap={20}>
          <img src={tommi} alt="tommi" className="h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80 object-cover rounded-lg shadow-xl" />
          <img src={vertti} alt="vertti" className="h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80 object-cover rounded-lg shadow-xl" />
          <img src={eemil} alt="eemil" className="h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80 object-cover rounded-lg shadow-xl" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Celebration;
