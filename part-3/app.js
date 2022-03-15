const App = () => {
    return (
        <div>
            <Person name ="jack" age="30" hobbies={['hiking', 'swimming', 'cooking', 'reading']}/>
            <Person name ="james" age="17" hobbies={['reading', 'dancing', 'cooking', 'guitar']}/>
            <Person name ="lauren" age="27" hobbies={['running', 'swimming', 'drums', 'painting']}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))