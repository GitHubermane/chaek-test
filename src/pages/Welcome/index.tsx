import { Button, Container } from "components";

export const WelcomePage = () => {
  return (
    <Container>
      <h1 className="prose-base py-4 border-b-4 text-center">
        Игра в города на время
      </h1>
      <div className="p-6 text-gray-700">
        <div className="pb-6">
          <span className="prose-sm ">
            Цель: Назвать как можно больше реальных городов.
          </span>
        </div>
        <ul className="pl-7 pb-6 list-disc text-sm">
          <li>Запрещается повторение городов</li>
          <li>
            Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого
            бы пропускаем эту букву и игрок должен назвать город на букву
            стоящую перед ъ или ь знаком
          </li>
          <li>
            Каждому игроку дается 2 минуты на размышления, если спустя это время
            игрок не вводит слово он считается проигравшим
          </li>
        </ul>
        <div className="text-center">
          <Button>Начать игру</Button>
        </div>
      </div>
    </Container>
  );
};
