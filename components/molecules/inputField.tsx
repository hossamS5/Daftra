import React from "react";
import RightIcon from "@/assets/icons/rightIcon.svg";
import FalseIcon from "@/assets/icons/falseIcon.svg";

interface IProps {
  withActionBtns?: boolean;
  value: string;
  onChangeHanlder: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  saveBtnHandler?: () => void;
  closeBtnHandler?: () => void;
}

const InputField: React.FC<IProps> = ({
  withActionBtns = false,
  value = "",
  onChangeHanlder = () => null,
  onKeyDown = () => null,
  saveBtnHandler = () => null,
  closeBtnHandler = () => null,
}) => {
  return (
    <div className="w-full">
      <input
        type="text"
        value={value}
        onChange={onChangeHanlder}
        className="px-2 py-1 border rounded text-primary-10 w-full h-[50px] text-2xl"
        onKeyDown={onKeyDown}
      />

      {withActionBtns && (
        <div className="flex gap-2">
          <>
            <RightIcon className="text-green-500" onClick={saveBtnHandler} />
            <FalseIcon className="text-red-500" onClick={closeBtnHandler} />
          </>
        </div>
      )}
    </div>
  );
};

export default InputField;
