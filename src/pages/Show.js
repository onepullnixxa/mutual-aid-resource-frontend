function Show(props) {
  const id = props.match.params.id;
  const person = props.person;
  const individual = person.find((p) => p._id === id);

  const removePerson = () => {
    props.deletePersons(individual._id);
    props.history.push("/");
  };

  return (
    <div className="show-container">
      <div className="show-left">
        <img src={individual.img} alt={individual.name} className="show-icon" />
      </div>
      <div className="show-right">
        <h1 className="show-name">{individual.name}</h1>
        <a href={individual.donateLink} className="show-link">{individual.donateLink}</a>
        <p className="show-text">{individual.contentText}</p>
      </div>
      <button id="delete" className="deleteButton" onClick={removePerson}>
        Delete Post
      </button>
    </div>

  );
}

export default Show;
