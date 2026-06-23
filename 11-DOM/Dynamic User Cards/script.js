const users = [
  {
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    fullName: "Arjun Sharma",
    role: "Frontend Developer",
    description: "Passionate about creating responsive and interactive user interfaces."
  },
  {
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    fullName: "Priya Verma",
    role: "UI/UX Designer",
    description: "Designs clean, user-friendly, and modern digital experiences."
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    fullName: "Rahul Singh",
    role: "Backend Developer",
    description: "Builds secure and scalable server-side applications."
  },
  {
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    fullName: "Sneha Gupta",
    role: "Product Manager",
    description: "Coordinates teams and ensures successful product delivery."
  },
  {
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    fullName: "Vikram Patel",
    role: "Full-Stack Developer",
    description: "Works across frontend and backend to build complete web solutions."
  },
  {
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    fullName: "Neha Kapoor",
    role: "Digital Marketer",
    description: "Focuses on online growth, branding, and customer engagement."
  },
  {
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    fullName: "Karan Malhotra",
    role: "DevOps Engineer",
    description: "Automates deployments and maintains cloud infrastructure."
  },
  {
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    fullName: "Ananya Roy",
    role: "Content Writer",
    description: "Creates engaging content for websites and social media."
  }
];

var h1 = document.querySelector('h1');
var img = document.querySelector('img');
var h4 = document.querySelector('h4');
var h5 = document.querySelector('h5');


users.forEach(function(elem) {
    console.log(elem)
    img.src = elem.img;
    h1.innerHTML = elem.fullName 
    h4.innerHTML = elem.role
    h5.innerHTML = elem.description
});