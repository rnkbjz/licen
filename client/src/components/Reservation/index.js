import './reservationstyle.css'
import React, { useState } from 'react'
import clsx from 'clsx'

const movies = [
  {
    name: 'Avenger',
    occupied: [20, 21, 30, 5, 2, 8],
  },
  {
    name: 'Joker',
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: 'Toy story',
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: 'the lion king',
    occupied: [10, 12, 50, 33, 28, 47],
  },
]

const seats = Array.from({ length: 8 * 8 }, (_, i) => i)

export default function ReservationPage() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const [selectedSeats, setSelectedSeats] = useState([])

  return (
    <div className="ReservationPage">
      <Movies
        movie={selectedMovie}
        onChange={movie => {
          setSelectedSeats([])
          setSelectedMovie(movie)
        }}
      />
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />

      <p className="info">
        Liczba wybranych miejsc: <span className="count">{selectedSeats.length}</span>{' '}
      </p>
    </div>
  )
}

function Movies({ movie, onChange }) {
  return (
    <div className="Movies">
      <label htmlFor="movie">Wybierz film</label>
      <select
        id="movie"
        value={movie.name}
        onChange={e => {
          onChange(movies.find(movie => movie.name === e.target.value))
        }}
      >
        {movies.map(movie => (
          <option key={movie.name} value={movie.name}>
            {movie.name}
          </option>
        ))}
      </select>
    </div>
  )
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>Wolne</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Wybrane</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Zarezerwowane</small>
      </li>
    </ul>
  )
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat)
                      }
                    }
              }
            />
          )
        })}
      </div>
      <button className='rez'>Rezerwacja</button>
    </div>
  )
}
