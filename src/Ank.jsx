export default function Ank(props) {
  const { name, index, onSelect } = props;
  return (
    <div className="align1">
      <div className="one1">{index}.</div>
      <div className="one2">{name}</div>
      <button
        className="delete"
        onClick={() => {
          onSelect({ index });
        }}
      >
        Delete
      </button>
    </div>
  );
}
