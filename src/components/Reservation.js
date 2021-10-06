export function Reservation(props) {
  return (
    <div style={{ border: "1px solid", padding: "10px", margin: "10px" }}>
      <p>{props.reservation.room_id}</p>
      <p>{props.reservation.checkin_date}</p>
      <p>{props.reservation.checkout_date}</p>
      <p>{props.reservation.total_charge}</p>
    </div>
  );
}