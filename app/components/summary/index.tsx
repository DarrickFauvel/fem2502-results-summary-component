import { Button } from "@/components/ui/button";
import Header from "../header";
import Item from "./item";

export default function Summary() {
    const items = [
      {
        text: "reaction",
        value: 80,
        color: "red",
      },
      {
        text: "memory",
        value: 92,
        color: "orange",
      },
      {
        text: "verbal",
        value: 61,
        color: "green",
      },
      {
        text: "visual",
        value: 72,
        color: "blue",
      },
    ];
    
    const colors = {
      red: 'bg-red-100',
      orange: "bg-orange-100",
      green: 'bg-green-100',
      blue: 'bg-blue-100'
    }

  return (
    <section className="px-8 py-6">
      <Header level={2} className="text-lg">
        Summary
      </Header>
      
      <div className="flex flex-col gap-4 py-6">
        {items.map((item) => (
          <Item item={item} colors={colors} key={item.text} />
        ))}
      </div>

      <Button className="bg-fig-dark-navy p-4 w-full rounded-full text-lg font-bold h-auto">
        Continue
      </Button>
    </section>
  );
}
