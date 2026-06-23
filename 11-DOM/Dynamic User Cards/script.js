const users = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y-fFn8KjGMJWwHyFA32_Xvysu-c0c3pHIw&s",
    fullName: "Arjun Sharma",
    role: "Frontend Developer",
    description: "Passionate about creating responsive and interactive user interfaces."
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/single-women-happier-than-men-675ac891b545d.jpg?crop=0.673xw:1.00xh;0.252xw,0&resize=1200:*",
    fullName: "Priya Verma",
    role: "UI/UX Designer",
    description: "Designs clean, user-friendly, and modern digital experiences."
  },
  {
    img: "https://img.magnific.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg",
    fullName: "Rahul Singh",
    role: "Backend Developer",
    description: "Builds secure and scalable server-side applications."
  },
  {
    img: "https://source.roboflow.com/FGq37iciLURC8G9wByu8akl5lRb2/8YiIFnxF3NTRHT1CkJa3/original.jpg",
    fullName: "Sneha Gupta",
    role: "Product Manager",
    description: "Coordinates teams and ensures successful product delivery."
  },
  {
    img: "https://i.pinimg.com/736x/4f/d8/da/4fd8da966e8e5953f9167faa5738e84a.jpg",
    fullName: "Vikram Patel",
    role: "Full-Stack Developer",
    description: "Works across frontend and backend to build complete web solutions."
  },
  {
    img: "https://img.freepik.com/free-photo/close-up-woman-holding-big-usa-flag_23-2148534451.jpg?semt=ais_hybrid&w=740&q=80",
    fullName: "Neha Kapoor",
    role: "Digital Marketer",
    description: "Focuses on online growth, branding, and customer engagement."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-ym_nwxVbi4Y5_6t1iub6QSCncl0iaLkuQ&s",
    fullName: "Karan Malhotra",
    role: "DevOps Engineer",
    description: "Automates deployments and maintains cloud infrastructure."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUNa6bDCrkhyY8QsmQjwLKvnD9T4iUb8jWg&s",
    fullName: "Ananya Roy",
    role: "Content Writer",
    description: "Creates engaging content for websites and social media."
  },
  {
  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  fullName: "Aman Khanna",
  role: "Mobile App Developer",
  description: "Builds high-performance Android and iOS applications."
},
{
  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  fullName: "Riya Mehta",
  role: "Data Analyst",
  description: "Transforms raw data into actionable business insights."
}
];

var h1 = document.querySelector('h1');
var img = document.querySelector('img');
var h4 = document.querySelector('h4');
var h5 = document.querySelector('h5');

var sum = ""
users.forEach(function(elem) {

  sum = sum + `  <div id="card">
            <img src= "${elem.img}" alt="Shobhit">
            <h1>${elem.fullName}</h1>
            <h4>${elem.role}</h4>
            <h5>${elem.description}</h5>
        </div>`


    // console.log(elem)
    // img.src = elem.img;
    // h1.innerHTML = elem.fullName 
    // h4.innerHTML = elem.role
    // h5.innerHTML = elem.description
});

var main = document.querySelector("#main")

main.innerHTML = sum;