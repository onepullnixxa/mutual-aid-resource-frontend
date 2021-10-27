import { Link } from "react-router-dom";


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
  function Index(props) {

  const shuffledPeople = props.person ? shuffle(props.person) : [];

  return (
    <div>
      <div className="titleText">
        <h1 className="lineOne">Mutual</h1>
        <h1 className="lineTwo">Aid</h1>
        <h1 className="lineThree">Resource</h1>
      </div>
      {!shuffledPeople && <h1>Just a moment...</h1>}
      {shuffledPeople &&
        shuffledPeople.map((individual) => (
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
              <a href={individual.donateLink} id="individual-link">
                {individual.donateLink}
              </a>
              <p id="individual-text">{individual.contentText}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Index;
