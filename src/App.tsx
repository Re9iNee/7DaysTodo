import "./App.css";
import Todo from "./Todo";

function App() {
    return (
        <div className='App'>
            My Todo Application
            <Todo />
            <button data-testid='submit-btn'>Submit</button>
        </div>
    );
}

export default App;
