import { sendIcon } from "assets";
import { useAppDispatch } from "hooks";
import { FC, useCallback, useState } from "react";
import { setMessages } from "store/messages";

type PropsType = {
  placeholder?: string;
  disabled?: boolean;
};

export const Input: FC<PropsType> = ({ placeholder, disabled }) => {
  const dispatch = useAppDispatch();

  // Т.к. нет бекенда, то id присваиваю на фронте
  const [id, setId] = useState(0);
  const [text, setText] = useState("");

  const onTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value),
    [],
  );

  const sendMessage = useCallback(() => {
    dispatch(setMessages({ id, isMine: true, text }));
    setId(prev => prev + 1);
    setText("");
  }, [text, id]);

  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const disabledStyle = disabled ? "bg-gray-400" : "";

  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-md">
      <input
        className="p-3 w-11/12 bg-transparent"
        value={text}
        onChange={onTextChange}
        onKeyDown={onEnterPress}
        placeholder={placeholder}
        type="text"
      />
      <button
        className={`h-8 w-8 mr-2 bg-violet-500 ${disabledStyle} rounded-md`}
        onClick={sendMessage}
        disabled={disabled}
      >
        <img
          className="m-auto"
          src={sendIcon}
          alt="icon"
        />
      </button>
    </div>
  );
};
