import style from './App.module.css';
export default function HomePage() {
  return (
    <>
      <h1 style={{ color: 'black', backgroundColor: 'green' }}>Purwadhika</h1>
      <h2>Purwadhika</h2>
      <span>Hello World</span>
      <button id={style.button} className={`${style.bebas} ${style.custom}`}>Submit</button>
    </>
  );
}
