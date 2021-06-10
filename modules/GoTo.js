export default function GoTo({ subclass, style }) {
  return (
    <div className={`${subclass || 'light'} goto`} style={style || {}}>
      <span>LIRE</span>
      <img src="/icons/arrow-2-right-long.svg" alt="got to arrow" />
    </div>
  );
}
