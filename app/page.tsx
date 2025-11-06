import Greeting from "./sections/greeting";
import Highlights from "./sections/highlights";

export default function Home() {
  return (
    <main className="page">
      <Greeting />
      <Highlights />
    </main>
  );
}
