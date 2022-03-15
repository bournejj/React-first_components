const Person = (props) => {
    let reply; 
    if(props.age >= 18)
    reply = <h3>please go and vote</h3>
    else 
    reply = <h3>you must be 18</h3>
    return <p> Learn some more information about this person
        <ul>
            <li>{props.name}</li>
            <li>{props.age}</li>
            <li>{reply}</li>
            {props.hobbies.map (h => <li>{h}</li>)}
        </ul>
      
    </p>

}