let allStudent = [];

function addStudent(){
    let studentName = document.getElementById("name").value;
    let studentSurname = document.getElementById("surname").value;
    let studentDate = document.getElementById("date").value;
    let studentLearn = document.getElementById("option").value;

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("date").value = "";
    document.getElementById("option").value = "";

    let newStudent = {
        name: studentName,
        surname: studentSurname,
        date: studentDate,
        learn: studentLearn
    };

    allStudent.push(newStudent);
    console.log(allStudent);

    saveStudent();
}

function saveStudent(){
    let result = "";

    for (let i = 0; i<allStudent.length; i++){
        result+= `
                                <tr>
                                    <td>${i+1.}</td>
                                    <td><p>${allStudent[i].name+ " " + allStudent[i].surname}</p></td>
                                    <td><p>${allStudent[i].date}</p></td>
                                    <td><p>${allStudent[i].learn}</p></td>
                                    <td><button class="border-0" onclick="deleteStudent(${i})"><img id="img" class="img img-fluid" src="imgs/delete.jpg" alt="delete"></button></td>
                                </tr>
        `
    }
    document.getElementById("result").innerHTML = result;
}

function deleteStudent(index){
    allStudent.splice(index,1);
    saveStudent();
}

function deleteAll(index) {
    allStudent.splice(index,9999);
    saveStudent();
}

function switchOff() {
    let table = document.getElementById("table");
    let text = document.getElementById("text");
    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2");
    let text3 = document.getElementById("text3");
    let text4 = document.getElementById("text4");
    let body = document.getElementById("body");
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let img = document.getElementById("img");
    body.style.background = "black";
    text.style.color = "white";
    text1.style.color = "white";
    text2.style.color = "white";
    text3.style.color = "white";
    text4.style.color = "white";
    table.classList.value = "table table-dark mt-5 ml-5 table-bordered";
    one.style.background = "black";
    two.style.background = "black";
    three.style.background = "black";
}
function SwitchOn() {
    let table = document.getElementById("table");
    let text = document.getElementById("text");
    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2");
    let text3 = document.getElementById("text3");
    let text4 = document.getElementById("text4");
    let body = document.getElementById("body");
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    body.style.background = "white";
    text.style.color = "black";
    text1.style.color = "black";
    text2.style.color = "black";
    text3.style.color = "black";
    text4.style.color = "black";
    table.classList.value = "table  mt-5 ml-5 table-bordered";
    one.style.background = "whitesmoke";
    two.style.background = "white";
    three.style.background = "whitesmoke";
}