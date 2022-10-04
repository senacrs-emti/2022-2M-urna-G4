const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});
// close sidebar
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});
// change theme
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
  
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');  
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');  
});
// politics table
Politics.forEach((politic) => {
  const tr = document.createElement('tr');
  const trContent = `
                        <td>${politic.name}</td>
                        <td>${politic.number}</td>
                        <td>${politic.role}</td>
                        <td>${politic.Partido}</td>
                        <td>${politic.votes}</td>
                        `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
});
