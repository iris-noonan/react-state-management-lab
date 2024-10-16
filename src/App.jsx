// src/App.jsx

import { useState } from 'react';

import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)

  const handleAddFighter = (fighter) => {
    let copyTeam = [...team]
    if (money - fighter.price > 0) {
      copyTeam.push(fighter)
      setTeam(copyTeam)
      const total = copyTeam.reduce((currentPrice, fighter) => {
        return currentPrice + fighter.price
      }, 0)
      const newMoneyTotal = 100 - total
      setMoney(newMoneyTotal)
    } else {
      console.log('Not enough money')
    }
  }

  const handleRemoveFighter = (fighter) => {
    let newTeam = [...team]
    let index = newTeam.findIndex(
      member => member.name === fighter.name
    );
    newTeam.splice(index, 1);
    setTeam(newTeam)
    const total = newTeam.reduce((currentPrice, fighter) => {
      return currentPrice + fighter.price
    }, 0)
    const newMoneyTotal = 100 - total
    setMoney(newMoneyTotal)
  }

const strength = () => {
  return team.reduce((currentStrength, fighter) => {
    return currentStrength + fighter.strength
  }, 0)
}

const agility = () => {
  return team.reduce((currentAgility, fighter) => {
    return currentAgility + fighter.agility
  }, 0)
}

  return (
    <>
      <h1>Zombie Fighters</h1>
      <p>Money: {money}</p>
      <p>Team Strength: {strength()}</p>
      <p>Team Agility: {agility()}</p>
      <p>Team</p>
      {team.length === 0 ? <p>Pick some team members!</p> : null }
      <ul>
        {team.map(function(member) {
          return (
            <li key={member.price}>
              <img src={member.img} />
              <p>{member.name}</p>
              <p>Price: {member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => handleRemoveFighter(member)}>
                remove
              </button>
            </li>
          )
        })}
      </ul>
      <p>Fighters</p>
      <ul>
        {zombieFighters.map(function(fighter) {
          return (
            <li key={fighter.name}>
              <img src={fighter.img} />
              <p>{fighter.name}</p>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>
                Add
              </button>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default App