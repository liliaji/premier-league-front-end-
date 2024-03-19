import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTeam, editTeam } from "../services/teams.js";

function TeamEdit() {
  const [team, setTeam] = useState({
    name: "",
    ranking: 0,
    captain: "",
    banner: "",
    founded: 0,
    stadium: "",
  });

  let { id } = useParams()
  let navigate = useNavigate();

  async function fetchTeam() {
    const oneTeam = await getTeam(id)
    setTeam(oneTeam)
  }

  useEffect(() => {
    fetchTeam()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editTeam(id, team);
    navigate(`/teams/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTeam((prevTeam) => ({
      ...prevTeam,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setTeam((prevTeam) => ({
      ...prevTeam,
      [name]: checked,
    }));
  };

  return (
    <div>
      <h1>Add a newly promoted team in our Database at the end of the Football season!</h1>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Please add the name of a promoted team"
          name="name"
          value={team.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Ranking"
          name="ranking"
          value={team.ranking}
          onChange={handleChange}
        />        
        <input
          type="text"
          placeholder="Team Leader"
          name="captain"
          value={team.captain}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Add image url"
          name="banner"
          value={team.banner}
          onChange={handleChange}
        />
        <label htmlFor="year_founded">Year Founded: </label>
        <input
          id="year_founded"
          type="number"
          placeholder="Year founded"
          name="founded"
          value={team.founded}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Home Stadium"
          name="stadium"
          value={team.stadium}
          onChange={handleChange}
        />
             
        <button type="submit">Edit your Team!</button>
      </form>
    </div>
  );
}

export default TeamEdit;