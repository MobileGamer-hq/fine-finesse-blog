
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Header from "./components/Header.tsx";


function App() {
    return (
        <Router>
            <Header/>
            <div className="App">
                <Routes>
                {/*General Routes for everyone*/}
                    <Route path="/" Component={Home} />
                    <Route path="/post" Component={BlogPost} />


                    <Route path="/login" Component={Login} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;