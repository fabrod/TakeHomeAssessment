import { Reservation } from './Reservation';

export function Reservations(props) {
  return (
    <div style={{ backgroundColor: "pink" }}>
      {props.reservations.map((reservation, index) => <Reservation key={index} reservation={reservation} />)}
    </div>
  );
}