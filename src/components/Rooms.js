import { Room } from './Room';

export function Rooms(props) {
  return (
    <div style={{ backgroundColor: "green" }}>
      {props.rooms.map((room, index) => <Room key={index} room={room} />)}
    </div>
  );
}