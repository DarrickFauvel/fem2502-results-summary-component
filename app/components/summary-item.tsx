type SummaryItemProps = {
  label: string;
  value: number;
};

type ItemOptions = {
  color: "red" | "orange" | "green" | "blue" | null;
  icon: string | null;
};

export default function SummaryItem({ label, value }: SummaryItemProps) {
  label = label.toLowerCase();
  let itemOptions: ItemOptions = {
    color: null,
    icon: null,
  };

  switch (label) {
    case "reaction":
      itemOptions = { color: "red", icon: "bolt" };
      break;
    case "memory":
      itemOptions = { color: "orange", icon: "brain" };
      break;
    case "verbal":
      itemOptions = { color: "green", icon: "chat" };
      break;
    case "visual":
      itemOptions = { color: "blue", icon: "eye" };
      break;
    default:
      console.log("Error: No label for that type");
  }

  const bgColorClass = 'bg-' + itemOptions.color + '-500'

  return (
    <div className={`flex justify-between bg-red-100`}>
      <span>{label}</span>
      <span>{value} / 100</span>
    </div>
  );
}
