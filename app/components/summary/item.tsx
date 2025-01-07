import Image from "next/image";

type Item = {
  text: string
  value: number
  color: string
}

type Colors = {
  red: string
  orange: string
  green: string
  blue: string
}

type ItemProps = {
  item: Item
  colors: Colors
};

export default function Item({ item, colors }:ItemProps) {
  const newClass = `flex justify-between p-4 rounded-xl ${
    item.color ? colors[item.color] : ""
  }`;

  return (
    <div className={newClass}>
      <span className="flex gap-3">
        <Image
          src={`/images/icon-${item.text.toLowerCase()}.svg`}
          alt={`${item.text} image`}
          width={100}
          height={100}
          className="w-5"
        />
        {item.text}
      </span>
      <span>{item.value} / 100</span>
    </div>
  );
}
