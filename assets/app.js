
 
        const navItems = [
            { text: "HOME", href: "#main__photo" },
            { text: "CONTACT", href: "#contact" },
            { text: "CERTIFICATES", href: "./assets/pages/cert.html" },
            { text: "SKILLS", href: "#skills" },
            { text: "PROJECTS", href: "#main__skills" }
        ];

        const navList = document.getElementById('nav__list');

        navItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'list__item';
            const link = document.createElement('a');
            link.href = item.href;
            link.textContent = item.text;
            listItem.appendChild(link);
            navList.appendChild(listItem);
           

        });

        
       
const container = document.getElementById("img_cont");
const img = document.getElementById("image");
const close = document.getElementById("_close");


document.getElementById('projects').addEventListener('click', function(event) {
    
    const projectContainer = event.target.closest('.project-container');
    if (projectContainer) {
        
        const image = projectContainer.querySelector('.project-image');
        
            container.style.display = "flex";
           img.src = image.src;
        
    }
});


close.addEventListener('click', function() {
    container.style.display = "none";
});





      

   


