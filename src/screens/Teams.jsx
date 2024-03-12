import { useState, useEffect } from 'react';
import { getTeams } from "../services/teams.js";
import Team from '../components/Team.jsx';

function Teams() {
  const [teams, setTeams] = useState([])

  async function fetchTeams() {
    const allTeams = await getTeams()
    setTeams(allTeams)
  }

  useEffect(() => {
    fetchTeams()
  }, [])

  return (
    <div>
      <h1>All the Teams!</h1>
      <div className="teams-container">
        {
          teams.map((team) => (
            <Team team={team} key={team._id} />
          ))
        }
      </div>
    </div>
  )
}

export default Teams