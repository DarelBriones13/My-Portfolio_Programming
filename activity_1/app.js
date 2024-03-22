import { leftDiv } from "./info.js";
import { rightDiv } from "./image.js";

const myObject = {
    title: "This is my dog",
    para: "The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose. It is a very clever animal and is very useful in catching thieves. It runs very fast, barks loudly and attacks the strangers.",
    button: "Click Here",
    image: "dog.jpg"
}

const {title, para, button, image} = myObject

let container = document.getElementById("container")
container.append(leftDiv(title, para, button))
container.append(rightDiv(image))