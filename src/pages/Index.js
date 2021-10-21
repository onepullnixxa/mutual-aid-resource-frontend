import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  // State to hold form data
  const [newForm, setNewForm] = useState({
    name: "",
    img: "",
    donateLink: "",
    contentText: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createPersons(newForm);
    setNewForm({
      name: "",
      img: "",
      donateLink: "",
      contentText: "",
    });
  };

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
        <h3>{individual.name}</h3>
        <h3>{individual.donateLink}</h3>
        <p>{individual.contentText}</p>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Just a moment...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="Individual's Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.img}
          name="image"
          placeholder="Individual's Image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.donateLink}
          name="donate-link"
          placeholder="Donation Link"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.contentText}
          name="content-text"
          placeholder="What would you like to say?"
          onChange={handleChange}
        />
        <input type="submit" value="Submit Post" />
      </form>
      {props.people ? loaded() : loading()}
    </section>
  );
}

export default Index;
