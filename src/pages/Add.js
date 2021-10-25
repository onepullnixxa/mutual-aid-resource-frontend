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
    <div className="container">      

    <section className="addForm">
      <div className="formTitle">
        <h4>Please enter information</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          className="individualName"
          placeholder="Individual's Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          value={newForm.img}
          name="img"
          className="individualImg"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          value={newForm.donateLink}
          name="donateLink"
          className="donationLink"
          placeholder="Link to Donate"
          onChange={handleChange}
          required
        />
        <textarea
          type="text"
          value={newForm.contentText}
          name="contentText"
          className="paragraphTextBox"
          placeholder="Enter short description here..."
          onChange={handleChange}
          required
        />
        <input className="submitButton" type="submit" value="Submit Post" />
      </form>
    </section>
  </div>
  );
}

export default Add;
