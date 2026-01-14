import Calculator from "./components/Calculator";
import Love from "./components/Love";

function App() {
  return (
    <main class="flex flex-col items-center px-4 py-8">
      <h1 class="text-2xl font-bold text-center mb-6">Калькулятор калорий</h1>
      <Calculator />
      <Love />
    </main>
  );
}

export default App;
