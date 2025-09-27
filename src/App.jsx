import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0)); // prevents negative numbers
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 text-center w-64">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">
          Counter App
        </h1>

        <p className="text-3xl font-mono mb-6 text-blue-600">{count}</p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
          >
            +
          </button>

          <button
            onClick={handleDecrement}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
