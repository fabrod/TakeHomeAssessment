export function Request(props) {
  return (
    <div style={{ border: "1px solid", padding: "10px", margin: "10px" }}>
      <p>{props.request.id}</p>
      <p>{props.request.min_beds}</p>
      <p>{props.request.is_smoker}</p>
      <p>{props.request.checkin_date}</p>
      <p>{props.request.checkout_date}</p>
    </div>
  );
}