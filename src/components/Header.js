import { useCallback } from 'react';
import { useHistory } from 'react-router-dom'

export function Header() {
  const history = useHistory()

  const handlePage = useCallback((path) => {
    history.push(path)
  }, [history])

  return (
    <div style={{background: "#343434", padding: "40px"}}>
      <button style={{ margin: "10px", padding: "10px" }} onClick={() => handlePage("answers")}> Answers </button>
      <button style={{ margin: "10px", padding: "10px" }} onClick={() => handlePage("rooms")}> Rooms </button>
      <button style={{ margin: "10px", padding: "10px" }} onClick={() => handlePage("requests")}> Requests </button>
      <button style={{ margin: "10px", padding: "10px" }} onClick={() => handlePage("reservations")}> Reservations </button>
    </div>
  );
}