document
.getElementById("registrationForm")
.addEventListener("submit", function(event){

    event.preventDefault();


    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;


    if(age < 18){

        alert("Age should be above 18");
        return;

    }


    if(number.length != 10){

        alert("Enter valid 10 digit mobile number");
        return;

    }


    alert(
        "Registration Successful\n\n" +
        "Name: " + name +
        "\nAge: " + age +
        "\nEmail: " + email
    );


    document.getElementById("registrationForm").reset();

});