class Student{
    constructor(firstName, lastName, idNumber, classRoom){
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.classRoom = classRoom;
    }
}

class Command{
    registerNewStudent(student){
        const allStudents = document.getElementById("all-students");
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.idNumber}</td>
        <td>${student.classRoom}</td>
        <td> <a href="#" class="remove-student">🗑️</td>
        `
        allStudents.appendChild(row);
    }
    clearInputs(){
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("idNumber").value = "";
        document.getElementById("classRoom").value = "";
    }
    displayAlert(message, className){
        const div = document.createElement("div");
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".regisiter-student");
        const form = document.querySelector(".student-form");
        container.insertBefore(div, form);

        setTimeout( () => {
            document.querySelector('.alert').remove();
        },2000)
    }
    deleteStudent(element){
        if(element.className === 'remove-student'){
            element.parentElement.parentElement.remove();
        }
    }
}


const handleFromSubmit = (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const idNumber = document.getElementById("idNumber").value;
    const classRoom = document.getElementById("classRoom").value;

    const student = new Student(firstName, lastName, idNumber, classRoom);
    const command = new Command();
    if(firstName === "" || lastName === "" || idNumber === ""){
        command.displayAlert("fiil all inputs please", "alert-warning");
    }else{
       command.registerNewStudent(student);
       command.displayAlert("Added succesfully", "alert-succes");
       command.clearInputs(); 
    }
};

document.querySelector('.student-form').addEventListener('submit', handleFromSubmit);
document.getElementById("all-students").addEventListener('click', function(e){
    const command = new Command();
    command.deleteStudent(e.target)
    command.displayAlert("deleted succesfully", "alert-succes")
    e.preventDefault();
});


const images = ["https://media.istockphoto.com/photos/parent-teacher-appointment-pta-at-school-concept-hand-of-attendee-picture-id1342688562?b=1&k=20&m=1342688562&s=170667a&w=0&h=xDtDO0KA7Ge89xWe6EX_aucyxxpaJrzxISwAk40wO0c=",
"https://media.istockphoto.com/photos/online-medical-learning-telehealth-concept-picture-id1331969179?b=1&k=20&m=1331969179&s=170667a&w=0&h=P0b8CIRYC9cw3U3sBFK_CCyqoyF1xHPj8xZGEDl61Do=",
"https://media.istockphoto.com/photos/parent-teacher-appointment-pta-at-school-concept-blur-abstract-at-picture-id1207969619?b=1&k=20&m=1207969619&s=170667a&w=0&h=Vb1o0E0uGUt31e2lrkjqEWNxw4N9CrjSYPK6UyCKsNo="
];


document.slide.src = images[0];

var rightBtn = document.querySelector('.right');
var leftBtn = document.querySelector('.left');
var i = 0;

function setImages(){
    document.slide.src = images[i];
}

var time = 5000;

function slideImages(){
    if(i < images.length-1){
        i++;
    }else{
        i = 0;
    }
    setImages();
    setTimeout('slideImages()', time);
}
window.onload = slideImages;
rightBtn.addEventListener('click', function(){
    if(i < images.length-1){
        i++;
    }else{
        i = 0;
    }
    setImages();
})

leftBtn.addEventListener('click', function(){
    if(i > 0){
        i--;
    }else{
        i = images.length-1;
    }
    setImages();
})

const toggle = document.getElementById('toggleLight');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})
