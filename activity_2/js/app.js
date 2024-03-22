
import { homeDiv } from "./home.js";
import { rightDiv } from "./image.js";
import { project } from "./card.js";

const data1 = {
    title: "Darel <span>Code</span>",
    para1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    contactBtn:"Contact me",
    img: "darelgwapo.jpg",
}

const data2 = {
    title2:"PROJECT COMPLTE",
    img1:"java.png",
    img2:"python.png",
    img3:"website.png",
    para2:"A hotel reservation system is a sophisticated software solution designed to streamline the process of booking accommodations for travelers. It serves as a central hub where guests can browse available rooms, make reservations, manage bookings, and interact with hotel staff seamlessly. The system not only benefits guests by providing convenience and efficiency but also aids hotel management in optimizing occupancy rates, enhancing guest satisfaction, and improving overall operational efficiency.",
    para3:"A library management system is a comprehensive software solution designed to automate and streamline the operations of a library, including cataloging, circulation, patron management, and resource tracking. It serves as a central platform where librarians can efficiently manage library collections, facilitate borrowing and returning of materials, and provide seamless access to resources for patrons. The system plays a crucial role in enhancing library services, improving user experience, and optimizing library operations.",
    para4:"A website portfolio is a digital showcase of an individual's or a company's work, skills, accomplishments, and expertise. It serves as a dynamic and interactive platform to present projects, creative endeavors, and professional achievements to potential clients, employers, or collaborators. A well-crafted portfolio website not only highlights the creator's capabilities but also reflects their personality, style, and brand identity, making it a powerful tool for personal branding and professional networking.",
    learnBtn:"Learn More"
}

const { title, para1, contactBtn, img } = data1
const { title2, img1, img2, img3, para2, para3, para4, learnBtn } = data2

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

sectionOne.append(rightDiv(img))
sectionOne.append(homeDiv(para1, contactBtn))
sectionTwo.append(project(title2, img1, img2, img3, para2, para3, para4, learnBtn))