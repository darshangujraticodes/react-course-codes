import Card from "./components/Card";
import Footer from "./components/footer";
import Header from "./components/Header";
import "./App.css";
import TailwindPractise from "./components/TailwindPractise";
import FetchApiData from "./components/FetchApiData";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Header /> */}

      {/* <h1 className="py-5">Tailwind CSS with React Component Props</h1> */}

      {/* <div className="grid grid-cols-3 gap-4 py-5">
        <Card
          cardHead="Learn HTML & CSS"
          cardBody="HTML & CSS is the backbone of web content, providing structure 
            and elements for building visually appealing websites."
          btnText="Enroll in Course Now !"
        />

        <Card
          cardHead="Learn JavaScript"
          cardBody="JavaScript empowers dynamic web development, 
            enabling interactive and responsive user interfaces for 
            modern websites and applications."
          btnText="Enroll in Course Now !"
        />
        <Card
          cardHead="Learn ReactJS"
          cardBody="ReactJS empowers and enhancing user experience 
            with its dynamic and efficient component-based architecture."
        />
      </div> */}

      {/* <TailwindPractise />
      <FetchApiData /> */}
      <div className="bg-background">
        <Navbar />
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default App;
