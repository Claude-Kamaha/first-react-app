function ListGroup() {
  const items = ["jame", "Pat", "Joelle"];
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
