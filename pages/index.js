import CV from "../component/cv";
import css from "styled-jsx/css";
import AboutMe from "../component/about_me";

export default function Home() {
  return (
    <main>
      <AboutMe />
      <CV />
    </main>
  );
}
