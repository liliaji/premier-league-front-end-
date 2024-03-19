import { Link } from 'react-router-dom'

function Team({ team }) {
  return (
    <div>
      <Link to={`/teams/${team._id}`}>
        <img className="team-banner" src={team.banner} alt={team.name} />
      </Link>
    </div>
  )
}

export default Team