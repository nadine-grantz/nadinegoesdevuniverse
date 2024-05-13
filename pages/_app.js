
import Navigation from "../components/navigation";
import CV from "../component/cv";
import css from "styled-jsx/css";
import AboutMe from "../components/about_me";


export default function Home() {
  return (
    <main>    
<Navigation />
    <AboutMe />
      <CV />
    </main>
  );
}
