import Header from "../header";
import NumberDisplay from "./number-display";

type ResultProps = {
  value: number;
};

type Message = {
  header: string;
  text: string;
};

export default function Result({ value }: ResultProps) {
  const message: Message =
    value > 65
      ? {
          header: "Great",
          text: "You scored higher than 65% of the people who have taken these tests!",
        }
      : {
          header: "Sorry",
          text: "You scored lower than 65% of the people who have taken the tests. 😥",
        };

  return (
    <section className="gradient-background flex flex-col items-center rounded-b-[2rem] text-center">
      <Header level={2} className="text-lg text-fig-light-blue py-6">
        Your Result
      </Header>

      <NumberDisplay value={value} />

      <div className="flex flex-col gap-2 pt-6">
        <Header level={3} className="text-2xl text-white">
          {message.header}
        </Header>
        <p className="text-fig-light-blue max-w-[32ch] pb-10">
          {message.text}
        </p>
      </div>
    </section>
  );
}
