const navItems2 = [
    { text: "HOME", href: "../../index.html#header" },
    { text: "CONTACT", href: "../../index.html#contact" },
    { text: "CERTIFICATES", href: "#" },
    { text: "SKILLS", href: "../../index.html#skills" },
    { text: "PROJECTS", href: "../../index.html#main__skills" }
];

const navList = document.getElementById('nav__list');

navItems2.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'list__item';
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.text;
    listItem.appendChild(link);
    navList.appendChild(listItem);
   
});



  