import Image from "next/image";

type SummaryItemProps = {
  label: string;
  value: number;
};

type ItemColor =  "red" | "orange" | "green" | "blue" | null

export default function SummaryItem({ label, value }: SummaryItemProps) {
let itemColor: ItemColor = null

  switch (label.toLowerCase()) {
    case "reaction":
      itemColor = "red";
      break;
    case "memory":
      itemColor = "orange";
      break;
    case "verbal":
      itemColor = "green";
      break;
    case "visual":
      itemColor = "blue";
      break;
    default:
      console.log("Error: No label for that type");
  }

  const bgColorClass: string = `bg-${itemColor}-50`;

  return (
    <div className={`flex justify-between p-4 rounded-xl ${bgColorClass}`}>
      <span className="flex gap-3">
        <Image
          src={`/images/icon-${label.toLowerCase()}.svg`}
          alt={`${label} image`}
          width={20}
          height={20}
        />
        {label}
      </span>
      <span>{value} / 100</span>
    </div>
  );
}
