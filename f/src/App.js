import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./Screens/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./Screens/MyNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/mynotes" component={MyNotes} />
    </main>

    <Footer />
  </BrowserRouter>
);

export default App;
