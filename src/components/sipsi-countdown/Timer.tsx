import { Flex } from 'antd';

const SipsiCountdownTimer = (
  { days, hours, minutes, seconds }: { days: string, hours: string, minutes: string, seconds: string },
) => (
  <Flex
    vertical
    align="center"
    justify="center"
    className="h-screen w-screen overflow-hidden relative bg-gradient-to-br from-[#667eea] to-[#764ba2]"
  >
    <h1 className="text-xl md:text-2xl text-white mb-8 md:mb-12 text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] px-4">
      Sipsi countdown
    </h1>
    <Flex gap="large" className="gap-4 md:gap-8 flex-wrap mb-8 md:mb-12">
      <Flex
        vertical
        align="center"
        className="bg-white/10 backdrop-blur-md rounded-3xl p-4 md:py-8 md:px-12 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20"
      >
        <div className="text-5xl md:text-8xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] min-w-[80px] md:min-w-[120px] text-center">
          {days}
        </div>
        <div className="text-sm md:text-xl text-white/90 uppercase tracking-[2px] mt-2">
          Päivää
        </div>
      </Flex>
      <Flex
        vertical
        align="center"
        className="bg-white/10 backdrop-blur-md rounded-3xl p-4 md:py-8 md:px-12 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20"
      >
        <div className="text-5xl md:text-8xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] min-w-[80px] md:min-w-[120px] text-center">
          {hours}
        </div>
        <div className="text-sm md:text-xl text-white/90 uppercase tracking-[2px] mt-2">
          Tuntia
        </div>
      </Flex>
      <Flex
        vertical
        align="center"
        className="bg-white/10 backdrop-blur-md rounded-3xl p-4 md:py-8 md:px-12 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20"
      >
        <div className="text-5xl md:text-8xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] min-w-[80px] md:min-w-[120px] text-center">
          {minutes}
        </div>
        <div className="text-sm md:text-xl text-white/90 uppercase tracking-[2px] mt-2">
          Minuuttia
        </div>
      </Flex>
      <Flex
        vertical
        align="center"
        className="bg-white/10 backdrop-blur-md rounded-3xl p-4 md:py-8 md:px-12 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20"
      >
        <div className="text-5xl md:text-8xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] min-w-[80px] md:min-w-[120px] text-center">
          {seconds}
        </div>
        <div className="text-sm md:text-xl text-white/90 uppercase tracking-[2px] mt-2">
          Sekuntia
        </div>
      </Flex>
    </Flex>
  </Flex>
);

export default SipsiCountdownTimer;
