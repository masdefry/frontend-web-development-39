import useCounterStore from '@/stores/useCounterStore';
export default function ZustandPage() {
  const { counter, increase, decrease } = useCounterStore();

  return (
    <>
      <h1>Counter with Zustand</h1>
      <button onClick={decrease}>-</button>
      <h2>{counter}</h2>
      <button onClick={increase}>+</button>
    </>
  );
}
