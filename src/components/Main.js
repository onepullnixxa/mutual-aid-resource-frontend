import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [person, setPerson] = useState(null);

  const URL = "https://mutual-aid-resource.herokuapp.com/home";

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

  useEffect(() => getPersons(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index person={person} createPersons={createPersons} />
        </Route>
        <Route
          path="/home/:id"
          render={(rp) => <Show person={person} {...rp} />}
        />
      </Switch>
    </main>
  );
}

export default Main;
