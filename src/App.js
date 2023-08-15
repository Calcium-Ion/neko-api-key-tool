import logo from './logo.svg';
import './App.css';
import Log from "./pages/Log";
import {Container, Header, Input} from "semantic-ui-react";

function App() {
    return (
        <div className="App">
            <Header className="App-header">
                <Container className={'main-container'}>
                    <Log/>
                </Container>
            </Header>
        </div>
    );
}

export default App;
