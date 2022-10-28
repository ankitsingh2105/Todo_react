export default function Ank(props) {
  const { name, index, onSelect, edit } = props;
  return (
    <div className="align1">
      <div className="one1">{index}.</div>
      <div className="one2">{name}</div>
      <button
        className="delete"
        onClick={function () {
          onSelect({ index });
        }}
      >
        Delete
      </button>{" "}
      &nbsp;&nbsp;
      <button onClick={() => edit({ index })}>Edit</button>
    </div>
  );
}
