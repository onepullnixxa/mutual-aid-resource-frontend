import { useState } from "react";

function Add(props) {
  //State to hold form data
  const [newForm, setNewForm] = useState({
    name: "",
    img: "",
    donateLink: "",
    contentText: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
    console.log(event.target)
    console.log(setNewForm)
  };

  // handleSubmit function for form
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
          name="img"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.donateLink}
          name="donateLink"
          placeholder="Link to Donate"
          onChange={handleChange}
        />
        <textarea
          type="text"
          value={newForm.contentText}
          name="contentText"
          placeholder="Please enter text here..."
          onChange={handleChange}
        />
        <input type="submit" value="Submit Post" />
      </form>
    </section>
  );
}

export default Add;
