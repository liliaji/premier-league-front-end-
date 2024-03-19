import { useState, useEffect } from 'react';
import { getTeam, deleteTeam } from "../services/teams.js";
import { Link, useParams, useNavigate } from "react-router-dom";

function TeamDetail() {
  const [team, setTeam] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()

  const fetchTeam = async () => {
    const oneTeam = await getTeam(id)
    setTeam(oneTeam)
  }

  useEffect(() => {
    fetchTeam()
  }, [])

  const handleDelete = async () => {
    await deleteTeam(id)
    navigate("/teams")
  }

  return (
    <div>
      <h1>Hello, We are {team.name}</h1>
      <h2>Founded {team.founded}</h2>
      <img className="clubdetail"src={team.banner} alt={team.banner} />
      <p>{team.stadium}</p>
      <p>Ranking {team.ranking}</p>
      <p>Captain {team.captain}</p>
      <div>
        <Link to={`/teams/${id}/edit`}>
          <button>EDIT</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  )
}

export default TeamDetail