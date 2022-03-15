const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name="jack"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))