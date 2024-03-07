import Box from "@/components/Box.jsx";
import Car from "@/components/Car.jsx";
import Counter from "@/components/Counter.jsx";
import Mirror from "@/components/Mirror.jsx";
import Stopwatch from "@/components/Stopwatch.jsx";

export default function Home() {
  return (
    <main>
      <h1>Day 10</h1>
      <hr />
      <h1>Toggle the Box</h1>
      <Box />
      <hr />
      <h1>Mirror</h1>
      <Mirror />
      <hr />
      <h1>Counter</h1>
      <Counter />
      <hr />
      <h1>Race</h1>
      <p>Move car to the right by pressing the right arrow</p>
      <Car />
      <hr />
      <h1>Stopwatch</h1>
      <Stopwatch />
    </main>
  );
}
