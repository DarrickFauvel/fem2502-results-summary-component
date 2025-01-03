import React, { JSX } from "react";

type HeaderProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
};

export default function Header({ level, className, children }: HeaderProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={`font-bold ${className}`}>{children}</Tag>;
}
