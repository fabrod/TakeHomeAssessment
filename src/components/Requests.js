import { Request } from './Request';

export function Requests(props) {
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      {props.requests.map((request, index) => <Request key={index} request={request} />)}
    </div>
  );
}