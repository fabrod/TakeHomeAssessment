export function Answer(props) {
  return (
    <div style={{ border: "1px solid", padding: "10px", margin: "10px" }}>
      <p>{props.answer.room_id}</p>
      <p>{props.answer.checkin_date}</p>
      <p>{props.answer.checkout_date}</p>
      <p>{props.answer.total_charge}</p>
    </div>
  );
}