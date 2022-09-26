/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoindex = Math.floor(Math.random(who) * who.length);
  let whatindex = Math.floor(Math.random(what) * what.length);
  let whenindex = Math.floor(Math.random(when) * when.length);

  console.log(who[whoindex] + "" + what[whatindex] + "" + when[whenindex]);
  return (document.getElementById("excuse").innerHTML =
    who[whoindex] + " " + what[whatindex] + " " + when[whenindex]);
};
