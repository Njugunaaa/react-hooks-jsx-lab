import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        A paragraph is defined as “a group of sentences or a single sentence
        that forms a unit” (Lunsford and Connors 116). Length and appearance do
        not determine whether a section in a paper is a paragraph. For instance,
        in some styles of writing, particularly journalistic styles, a paragraph
        can be just one sentence long.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
