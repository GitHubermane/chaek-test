import { Container, Input, StatusBar } from "components";
import { useAppSelector, useTimer } from "hooks";
import { timeFormatter } from "utils";
import { Messages } from "./Messages";

export const GamePage = () => {
  const { messages } = useAppSelector(state => state.messages);
  const currentTimer = useTimer();

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
          <div className="h-80 relative flex flex-col overflow-auto">
            {messages.length !== 0 ? (
              messages.map(message => (
                <Messages
                  key={message.id}
                  {...message}
                />
              ))
            ) : (
              <span className="m-auto absolute bottom-2/4 translate-y-2/4 w-full text-center text-gray-400 ">
                Первый участник вспоминает города...
              </span>
            )}
          </div>
          {messages.length > 1 && (
            <div className="py-2 text-gray-400 text-center">
              Всего перечислено городов: {messages.length}
            </div>
          )}
          <Input placeholder="Ожидаем ответа соперника..." />
        </div>
      </div>
    </Container>
  );
};
