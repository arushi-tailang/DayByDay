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
import { useState } from "react";
import Profile from "./Screens/Profile";

const App = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/createnote" component={CreateNote} />
        <Route path="/mynotes" component={() => <MyNotes search={search} />} />
        <Route path="/note/:id" component={SingleNote} />
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
