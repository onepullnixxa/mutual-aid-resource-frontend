import { Link } from "react-router-dom";

function Index(props) {

    const loaded = () => {
        return props.person.map((individual) => (
            <div key={individual._id} className="individual">
                <Link to={`/home/${individual._id}`}><h1>{individual.name}</h1></Link>
                <img src={individual.img} alt={individual.name} />
                <h3>{individual.name}</h3>
                <h3>{individual.donateLink}</h3>
                <p>{individual.contentText}</p>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Just a moment...</h1>;
    };

    return props.person ? loaded() : loading();
}

export default Index;