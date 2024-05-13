import Navigation from "../component/navigation";
import CV from "../component/cv";
import styled from "styled-components";
import AboutMe from "../component/about_me";

export default function Home() {
  return (
    <main>
      <Navigation />
      <AboutMe />
      <CV />
    </main>
  );
}
