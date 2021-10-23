function Show(props) {
  const id = props.match.params.id;
  const person = props.person;
  const individual = person.find((p) => p._id === id);

  return (
    <div className="person-show">
      <div className="show-left">
        <img src={individual.img} alt={individual.name} className="show-icon" />
      </div>
      <div className="show-right">
        <h1 className="show-name">{individual.name}</h1>
        <h2 className="show-link">{individual.donateLink}</h2>
        <p className="show-text">{individual.contentText}</p>
      </div>
    </div>
  );
}

export default Show;
