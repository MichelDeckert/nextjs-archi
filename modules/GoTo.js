export default function GoTo({ subclass, style }) {
  return (
    <div class={`${subclass} goto`} style={style || {}}>
      <span>LIRE</span>
      <img src="./icons/arrow-2-right-long.svg" alt="arrow left" />
    </div>
  );
}
