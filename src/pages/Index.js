import { Link } from "react-router-dom";

function Index(props) {
  const loaded = () => {
    return props.person.map((individual) => (
      <div key={individual._id} className="individual">
        <Link to={`/home/${individual._id}`}>
          <img
            src={individual.img}
            alt={individual.name}
            className="person-icon"
          />
        </Link>
        <div className="individual-text">
          <h3 id="individual-name">{individual.name}</h3>
          <h3 id="individual-link">{individual.donateLink}</h3>
          <p id="individual-text">{individual.contentText}</p>
        </div>
      </div>
    ));
  };

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const loading = () => {
    return <h1>Just a moment...</h1>;
  };

  return props.person ? shuffle(loaded()) : loading();
}

export default Index;
