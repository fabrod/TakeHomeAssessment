export function Room(props) {
  return (
    <div style={{ border: "1px solid", padding: "10px", margin: "10px" }}>
      <p>{props.room.id}</p>
      <p>{props.room.num_beds}</p>
      <p>{props.room.allow_smking}</p>
      <p>{props.room.daily_rate}</p>
      <p>{props.room.cleaning_fee}</p>
    </div>
  );
}