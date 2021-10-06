import { useState } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'

import { Header } from './components/Header';

import { Answers } from './components/Answers';
import { Rooms } from './components/Rooms';
import { Requests } from './components/Requests';
import { Reservations } from './components/Reservations';

import { ANSWERS } from './answers';
import { ROOMS } from './rooms';
import { REQUESTS } from './requests';
import { RESERVATIONS } from './reservations';

function App() {
  const [answers, setAnswers] = useState(ANSWERS);
  const [rooms, setRooms] = useState(ROOMS);
  const [requests, seRequests] = useState(REQUESTS);
  const [reservations, setReservations] = useState(RESERVATIONS);

  const handleBook = () => {
    for (const request of requests) {
      const roomsAble = rooms.filter((room) => {
        if (request.is_smoker === room.allow_smoking && request.min_beds <= room.num_beds) {
          const reservationsAble = reservations.filter((reservation) => {
            if (room.id === reservation.room_id && 
              (request.checkin_date >= reservation.checkin_date && request.checkin_date <= reservation.checkout_date)) {
              return true;
            }
            return false;
          })
          
          if (reservationsAble.length === 0) {
            return true;
          }
        }
        return false;
      });

      let cost = roomsAble[0].daily_rate * ((new Date(request.checkout_date) - new Date(request.checkin_date))/86400000) + roomsAble[0].cleaning_fee;
      let roomFinal = roomsAble[0];

      for (const room of roomsAble) {
        if (room.daily_rate * ((new Date(request.checkout_date) - new Date(request.checkin_date))/86400000) + room.cleaning_fee < cost) {
          roomFinal = room;
          cost = room.daily_rate * ((new Date(request.checkout_date) - new Date(request.checkin_date))/86400000) + room.cleaning_fee;
        }
      }

      let reserv = reservations;
      reserv.push({"room_id" : roomFinal.id, "checkin_date": request.checkin_date, "checkout_date": request.checkout_date, "total_charge": cost });
      setReservations(reserv);
      console.log(reservations);
    }
  }

  return (
    <BrowserRouter>
      <Header />
      <button style={{ margin: "10px", padding: "10px", color: "red", fontSize: "24px" }} onClick={handleBook}> Book Now!!! </button>
      <Switch>
        <Redirect exact from="/" to="/answers" />
        <Route path="/answers" >
          <Answers answers={answers} />
        </ Route>
        <Route path="/rooms" >
          <Rooms rooms={rooms} />
        </Route>
        <Route path="/requests" >
          <Requests requests={[]} />
        </Route>
        <Route path="/reservations" >
          <Reservations reservations={reservations} />
        </Route>
        <Redirect from="*" to="/answers" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
