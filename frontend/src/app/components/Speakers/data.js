const speakers = [
  {
    id: 0,
    name: "Manish Advani",
    img: "/Speakers/manish-advani.jpg",
    post: "CEO MIMO Potentio \n TEDx Speaker",
    facebook: "https://www.facebook.com/manish.advani.12",
    twitter: "https://twitter.com/IndianMarketer",
    linkedIn: "https://www.linkedin.com/in/manish-advani-38168b9/",
  },
  {
    id: 1,
    name: "Neha Agrawal",
    img: "/Speakers/neha-agrawal.jpg",
    post: "Founder Mathematically Inclined, 1.55M subscribers",
    facebook: "https://www.facebook.com/neha.mi.agrawal",
    twitter: "https://twitter.com/NehaAgrawalMath",
    linkedIn: "https://www.linkedin.com/in/nehagarawalmath",
  },
  {
    id: 2,
    name: "Manan Verma",
    img: "/Speakers/manan-verma.jpg",
    post: "Engineering leader at PW \n Angel Investor",
    facebook: "https://www.facebook.com/MananVermaTech",
    twitter: "https://twitter.com/MananVermaTech",
    linkedIn: "https://www.linkedin.com/in/mananverma/",
  },
  {
    id: 3,
    name: "Saurabh Jain",
    img: "/Speakers/saurabh-jain.jpg",
    post: "Founder Fun2Do Labs \n Ex-Vice President at Paytm",
    facebook: "https://www.facebook.com/skjsaurabh",
    twitter: "https://twitter.com/skjsaurabh",
    linkedIn: "https://www.linkedin.com/in/saurabhskj/",
  },
  {
    id: 4,
    name: "Bharat H. Jethani",
    img: "/Speakers/bharat.jpg",
    post: "Author, TEDx speaker \n Master Franchisee, Asentiv Central India",
    facebook: "https://www.facebook.com/bjethani",
    twitter: "https://twitter.com/JethaniBharat",
    linkedIn: "https://www.linkedin.com/in/bharatjethani/",
  },
  {
    id: 5,
    name: "Jagat Iyer",
    img: "/Speakers/jagat-iyer.jpg",
    post: "Founder and CEO at Vidphone \n Manager at EveryCrave",
    facebook: "https://www.facebook.com/jagat.iyer",
    twitter: "https://twitter.com/vidphone",
    linkedIn: "https://www.linkedin.com/in/jagatiyer/",
  },
  {
    id: 6,
    name: "Harshak Sinha",
    img: "/Speakers/harshak-sinha.jpg",
    post: "CEO - Digitea & Digitea Events \n Entrepreneur, Marketing & Branding",
    facebook: "https://www.instagram.com/harshaksinha/",
    twitter: "https://twitter.com/HarshakSinha",
    linkedIn: "https://www.linkedin.com/in/harshak-sinha/",
  },
  {
    id: 7,
    name: "Ankush Singla",
    img: "/Speakers/ankur.jpg",
    post: "Co-Founder, Coding Ninjas",
    facebook: "https://www.facebook.com/mnnitecell",
    twitter: "https://twitter.com/ecellmnnit",
    linkedIn: "https://www.linkedin.com/in/ankushsingla",
  },
  {
    id: 8,
    name: "Anuj Batra",
    img: "/Speakers/anuj.jpg",
    post: "Co-Founder, Andromedia Maritime Solutions",
    facebook: "https://www.facebook.com/mnnitecell",
    twitter: "https://twitter.com/ecellmnnit",
    linkedIn: "https://www.linkedin.com/in/anujbatra1/",
  },
  {
    id: 9,
    name: "Ashish Meena",
    img: "/Speakers/ashishMeena.jpg",
    post: "Vice President of technology, OYO rickshaw",
    facebook: "https://www.facebook.com/mnnitecell",
    twitter: "https://twitter.com/ecellmnnit",
    linkedIn: "https://www.linkedin.com/in/ashishmeena8/",
  },
  {
    id: 10,
    name: "Aashish Sharma",
    img: "/Speakers/ashish.png",
    post: "Vice President, Capgemini",
    facebook: "https://www.facebook.com/mnnitecell",
    twitter: "https://twitter.com/ecellmnnit",
    linkedIn: "https://www.linkedin.com/in/aashishsharma1/",
  },
  {
    id: 11,
    name: "Amit Yadav",
    img: "/Speakers/amityadav.jpeg",
    post: "D2C Product & Growth @ Mamaearth ",
    facebook: "https://www.facebook.com/mnnitecell",
    twitter: "https://twitter.com/ecellmnnit",
    linkedIn: "https://www.linkedin.com/in/amit-at-8287502355/",
  },
  {
    id: 12,
    name: "Ganesh Kumar",
    img: "/Speakers/ganesh.jpg",
    post: "City Head, Shadowfax",
    facebook: "https://www.facebook.com/mnnitecell",
    twitter: "https://twitter.com/ecellmnnit",
    linkedIn: "https://www.linkedin.com/in/ganesh-kumar-9317bb7/",
  },
  {
    id: 13,
    name: "Navin Manaswi",
    img: "/Speakers/navin.jpg",
    post: "Founder and CEO, WoWexp Technologies",
    facebook: "https://www.facebook.com/mnnitecell",
    twitter: "https://twitter.com/ecellmnnit",
    linkedIn: "https://www.linkedin.com/in/navin-manaswi-1a708b8",
  },
  {
    id: 14,
    name: "R K Guran",
    img: "/Speakers/rk.jpg",
    post: "Founder, StartupCasa",
    facebook: "https://www.facebook.com/mnnitecell",
    twitter: "https://twitter.com/ecellmnnit",
    linkedIn: "https://www.linkedin.com/in/rakesh-kumar-guran-rkg",
  },
  {
    id: 15,
    name: "shivesh kumar",
    img: "/Speakers/shivesh.jpg",
    post: "Founder and CEO, StartUp Monk",
    facebook: "https://www.facebook.com/mnnitecell",
    twitter: "https://twitter.com/ecellmnnit",
    linkedIn: "https://www.linkedin.com/in/siveshkumar",
  },
  {
    id: 16,
    name: "Snehaal Dhruv",
    img: "/Speakers/snehal.jpg",
    post: "Co-founder & CEO, Superfan Studio",
    facebook: "https://www.facebook.com/mnnitecell",
    twitter: "https://twitter.com/ecellmnnit",
    linkedIn: "https://www.linkedin.com/in/snehaaldhruv",
  },
  {
    id: 17,
    name: "Tapan Singhel",
    img: "/Speakers/tapan.jpg",
    post: "Managing Director & CEO, Bajaj Allianz General Insurance",
    facebook: "https://www.facebook.com/mnnitecell",
    twitter: "https://twitter.com/ecellmnnit",
    linkedIn: "https://www.linkedin.com/in/tapansinghel/",
  },
  {
    id: 18,
    name: "Utkarsh Shukla",
    img: "/Speakers/utkarsh.jpg",
    post: "Founder, CEO, YUG Metaverse",
    facebook: "https://www.facebook.com/mnnitecell",
    twitter: "https://twitter.com/ecellmnnit",
    linkedIn: "https://www.linkedin.com/in/utkarshx",
  },
  {
    id: 19,
    name: "Vikas Bansal",
    img: "/Speakers/vikas.jpg",
    post: "Co-Founder, Crejo.Fun",
    facebook: "https://www.facebook.com/mnnitecell",
    twitter: "https://twitter.com/ecellmnnit",
    linkedIn: "https://www.linkedin.com/in/vikasbansal",
  }
];

export default speakers;
