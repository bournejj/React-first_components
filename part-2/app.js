const App = () => {
    return (
        <div>
            <Tweet username="bournejj" name="jack" data="hey" message="my name is jack"/>
            <Tweet username="lauren" name="lauren" data="lauren" message="my name is lauren"/>
            <Tweet username="james" name="james" data="hey" message="my name is james"/>
            
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))