function Show(props) {
  const id = props.match.params.id;
  const person = props.person;
  const individual = person.find((p) => p._id === id);

  return (
    <div className="person-show">
      <img 
      src={individual.img} 
      alt={individual.name} 
      className="show-icon" 
      />
      <h1>{individual.name}</h1>
      <h2>{individual.donateLink}</h2>
      <p>{individual.contentText}</p>
    </div>
  );
}

export default Show;