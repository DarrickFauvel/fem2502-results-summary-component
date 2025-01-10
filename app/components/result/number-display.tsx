"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


type NumberDisplayProps = {
  value: number;
};

export default function NumberDisplay({ value }: NumberDisplayProps) {
  const [number, setNumber] = useState(value);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleNumberClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      setNumber(newValue);
    }
  };

  const handleInputBlur = () => setIsEditing(false);

  useEffect(() => {
    if (inputRef.current) {
      if (isEditing) {
        inputRef.current.focus();
      }
    }
  }, [isEditing]);

  return (
    <article className="gradient-circle flex flex-col justify-center w-[140px] h-[140px] rounded-full">
      <span className="font-extrabold text-white text-[3.5rem] leading-[4.5rem]">
        {!isEditing ? (
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger>
                <span
                  className="cursor-pointer select-none"
                  onClick={handleNumberClick}
                >
                  {number}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to edit</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <input
            type="number"
            ref={inputRef}
            value={number}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="w-full outline-none focus:ring focus:ring-blue-300 rounded-3xl text-indigo-700 bg-indigo-100 text-center"
          />
        )}
      </span>
      <span className="text-fig-light-blue font-bold">of 100</span>
    </article>
  );
}
