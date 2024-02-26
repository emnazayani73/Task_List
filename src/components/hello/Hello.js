import "./Hello.css";
function Hello() {
  const world = "world";
  function Hi() {
    return <div>hi</div>;
  }
  return (
    <div className="hello">
      <p>hello {world}</p>
      {Hi()}
    </div>
  );
}
export default Hello;
