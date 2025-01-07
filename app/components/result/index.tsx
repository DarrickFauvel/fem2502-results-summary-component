import Header from "../header";

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

      <article className="gradient-circle flex flex-col justify-center w-[140px] h-[140px] rounded-full">
        <span className="font-extrabold text-white text-[3.5rem] leading-[4.5rem]">
          {value}
        </span>
        <span className="text-fig-light-blue font-bold">of 100</span>
      </article>

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
