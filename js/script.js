
function replaceName() {
    let name = prompt("Halo, boleh tahu nama kamu siapa?", "");
    
    // Jika user tidak isi apa-apa, kasih nama default "Guest"
    if (name == "" || name == null) {
        document.getElementById("user-name").innerHTML = "Guest";
    } else {
        document.getElementById("user-name").innerHTML = name;
    }
}

replaceName();

function submitForm() {
    
    const name = document.getElementById("input-name").value;
    const birthDate = document.getElementById("input-birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("input-message").value;

    
    if (name == "" || birthDate == "" || message == "") {
        alert("Jangan ada yang kosong ya!");
        return false;
    }
   
    const currentTime = new Date();


    document.getElementById("current-time").innerHTML = currentTime;
    document.getElementById("res-name").innerHTML = name;
    document.getElementById("res-birthdate").innerHTML = birthDate;
    document.getElementById("res-gender").innerHTML = gender;
    document.getElementById("res-message").innerHTML = message;

    
    return false;
}