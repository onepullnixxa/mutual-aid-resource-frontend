import { Link } from "react-router-dom";

function Index(props) {
  
  const loaded = () => {
    return props.person.map((individual) => (
      <div key={individual._id} className="individual" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Link to={`/home/${individual._id}`}>
          <img
            src={individual.img}
            alt={individual.name}
            className="person-icon"
          />
        </Link>
        <h3>{individual.name}</h3>
        <h3>{individual.donateLink}</h3>
        <p>{individual.contentText}</p>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Just a moment...</h1>;
  };

  return props.person ? loaded() : loading();
}

export default Index;
