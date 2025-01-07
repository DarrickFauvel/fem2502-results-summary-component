import Result from "./components/result";
import Summary from "./components/summary";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-hanken-grotesk)]">
      <main className="flex flex-col max-w-[375px] w-full">
        <Result value={76} />

        <Summary />
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
