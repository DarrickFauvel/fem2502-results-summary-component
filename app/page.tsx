import Image from "next/image";
import Header from "./components/header";
import SummaryItem from "./components/summary-item";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-hanken-grotesk)]">
      <main className="flex flex-col max-w-[375px] w-full">
        <section className="gradient-background flex flex-col items-center rounded-b-[2rem] text-center">
          <Header level={2} className="text-lg text-fig-light-blue py-6">Your Result</Header>
          <article className="gradient-circle flex flex-col justify-center w-[140px] h-[140px] rounded-full">
            <span className="font-extrabold text-white text-[3.5rem] leading-[4.5rem]">76</span>
            <span className="text-fig-light-blue font-bold">of 100</span>
          </article>
          
          <div className="flex flex-col gap-2 pt-6">
            <Header level={3} className="text-2xl text-white">Great</Header>
            <p className="text-fig-light-blue max-w-[32ch] pb-10">
              You scored higher than 65% of the people who have taken these
              tests!
            </p>
          </div>
        </section>

        <section className="px-8 py-6">
          <Header level={2} className="text-lg">Summary</Header>
          <div className="flex flex-col gap-4 py-6">
            <SummaryItem label="Reaction" value={80} />
            <SummaryItem label="Memory" value={92} />
            <SummaryItem label="Verbal" value={61} />
            <SummaryItem label="Visual" value={72} />
          </div>
          <button type="button" className="bg-fig-dark-navy text-white p-4 w-full rounded-full text-lg font-bold">Continue</button>
        </section>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </div>
  );
}
