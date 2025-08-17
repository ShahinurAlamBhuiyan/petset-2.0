// app/page.tsx
"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { increment, decrement, incrementByAmount } from "@/store/slices/counterSlice";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          - Decrement
        </button>

        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          + Increment
        </button>

        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          +5
        </button>
      </div>
    </main>
  );
}
