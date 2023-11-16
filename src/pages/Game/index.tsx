import { Container, Input, StatusBar } from "components";
import { useState } from "react";
import { timeFormatter } from "utils";

export const GamePage = () => {
  const timer = () => {
    const [seconds, setSeconds] = useState(120);

    setTimeout(() => {
      setSeconds(s => s - 1);
    }, 1000);

    return seconds;
  };

  const currentTimer = timer();

  const percentage = (currentTimer / 120) * 100;

  return (
    <Container>
      <div className="w-full">
        <div className="flex justify-between p-4">
          <h2>Сейчас ваша очередь</h2>
          <div>{timeFormatter(currentTimer)}</div>
        </div>
        <StatusBar percentage={percentage} />
        <div className="p-4">
          <div className="h-80 relative">
            <span className="m-auto absolute bottom-2/4 translate-y-2/4 w-full text-center text-gray-400 ">
              Первый участник вспоминает города...
            </span>
          </div>
          <Input placeholder="Ожидаем ответа соперника..." />
        </div>
      </div>
    </Container>
  );
};
