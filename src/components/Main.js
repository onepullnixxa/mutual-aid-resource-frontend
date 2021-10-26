import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Add from "../pages/Add";
import About from "../pages/About";

function Main(props) {
  const [person, setPerson] = useState(null);

  const URL = "https://mutual-aid-resource.herokuapp.com/home/";

  const getPersons = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPerson(data);
  };

  const createPersons = async (person) => {
    // make post request to create people
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    });
    // update list of people
    getPersons();
  };

  const updatePersons = async (person, id) => {
    // make put request to create people
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    });
    //update list of people
    getPersons();
  };

  const deletePersons = async (id) => {
    // make delete request to create people
    await fetch(URL + id, {
      method: "DELETE",
    });
    // update list of people
    getPersons();
  };

  useEffect(() => getPersons(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index person={person} createPersons={createPersons} />
        </Route>
        <Route
          path="/home/:id"
          render={(rp) => (
            <Show person={person} updatePersons={updatePersons} deletePersons={deletePersons} {...rp} />
          )}
        />
        <Route path="/add">
          <Add person={person} createPersons={createPersons} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
