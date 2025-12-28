import { useEffect, useState } from 'react';
import './SipsiCountdown.css';
import SipsiCountdownTimer from '../components/sipsi-countdown/timer';
import Celebration from '../components/sipsi-countdown/Celebration';

function SipsiCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    const targetDate = new Date(2026, 0, 1, 0, 0, 0);

    const updateTimer = () => {
      const difference = targetDate.getTime() - Date.now();

      if (difference <= 0) {
        setIsNewYear(true);
        return false;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
      return true;
    };

    if (!updateTimer()) {
      return;
    }

    const timer = setInterval(() => {
      if (!updateTimer()) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isNewYear) {
    return (
      <Celebration />
    );
  }

  return (
    <SipsiCountdownTimer
      days={String(timeLeft.days).padStart(2, '0')}
      hours={String(timeLeft.hours).padStart(2, '0')}
      minutes={String(timeLeft.minutes).padStart(2, '0')}
      seconds={String(timeLeft.seconds).padStart(2, '0')}
    />
  );
}

export default SipsiCountdown;
