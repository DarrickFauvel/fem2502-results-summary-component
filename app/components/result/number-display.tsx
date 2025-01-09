import { useRef, useState } from "react";

type NumberDisplayProps = {
  value: number;
};

export default function NumberDisplay({ value }: NumberDisplayProps) {
  const [number, setNumber] = useState(value);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  return (
    <article className="gradient-circle flex flex-col justify-center w-[140px] h-[140px] rounded-full">
      <span className="font-extrabold text-white text-[3.5rem] leading-[4.5rem]">
        {value}
      </span>
      <span className="text-fig-light-blue font-bold">of 100</span>
    </article>
  );
}
