

const  tabs = document.querySelectorAll(".tabs li a");
const sections = document.querySelectorAll("section");


let currentIndex = 0;


for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {


        for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("active");
    }

    tabs[i].classList.add("active");


    for (let j = 0; j < sections.length; j++) {
      sections[j].style.display = "none";
    }

    currentIndex = i;
    const targetSection = sections[currentIndex];
    if (targetSection) {
      targetSection.style.display = "block";
    }
  });
}


  
  
  

  
// formulaire
function submitForm() {
  var name = document.getElementById('nom').value;
  var email = document.getElementById('mail').value;
  var objet = document.getElementById('objet').value;
  var message = document.getElementById('message').value;

  //  alert message
  var alertMessage = 'Name: ' + name + '\nEmail: ' + email + '\nobjet: ' + objet + '\nMessage: ' + message;
  alert(alertMessage);

  //mab3ed yawli ma3ch fih chay 
  document.getElementById('nom').value = '';
  document.getElementById('mail').value = '';
  document.getElementById('objet').value = '';
  document.getElementById('message').value = '';
}


    // Add Project Function
    function addProject() {
      var projectName = document.getElementById('projectName').value;
      var projectDescription = document.getElementById('projectDescription').value;

      // Check if both fields are filled
      if (projectName && projectDescription) {
        var newProject = document.createElement('div');
        newProject.className = 'project';

        var projectTitle = document.createElement('h2');
        projectTitle.textContent = projectName;

        var projectText = document.createElement('p');
        projectText.textContent = projectDescription;

        newProject.appendChild(projectTitle);
        newProject.appendChild(projectText);

        // Append the new project to the projects section
        var projectsSection = document.getElementById('projectscontainer');
        projectsSection.appendChild(newProject);

        // Clear the input fields
        document.getElementById('projectName').value = '';
        document.getElementById('projectDescription').value = '';
      } else {
        alert('remplir tous les champs requis.');
      }
    }


    var pop=document.querySelector('.popup');
    var $li = $('.popup .colorchange span');
            var $root = $(':root');
    
            function chou() {
                $root.css('--main-color', $(this).data('color'));
            }
    
            $li.each(function() {
                $(this).css('background', $(this).data('color'));
                $(this).on('click', chou);
            });
    
    function showparametre(){
        pop.style.transform="translateY(0)";
    }
    function closepopup(){
        pop.style.transform="translateY(-1000px)";
    
    }
    
    




jQuery(document).ready(function($) {
    
    $('span[data-toul]').each(function () {
    
      var percentage = $(this).data('toul');
      $(this).css('width', percentage);
    });
  });

