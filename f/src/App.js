import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./Screens/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./Screens/MyNotes";
import LoginPage from "./Screens/LoginPage/LoginPage";
import RegisterPage from "./Screens/RegisterPage/RegisterPage";
import CreateNote from "./Screens/CreateNote";
import SingleNote from "./Screens/SingleNote";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/createnote" component={CreateNote} />
        <Route path="/mynotes" component={MyNotes} />
        <Route path="/note/:id" component={SingleNote} />
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
