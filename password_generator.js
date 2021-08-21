
window.onload = eventHandler

function eventHandler(){
    length_slider = document.getElementById("length-slider");
    special_checkbox = document.getElementById("special-chars");
    lowercase_checkbox = document.getElementById("lowercase-chars");
    uppercase_checkbox = document.getElementById("uppercase-chars");
    numbers_checkbox = document.getElementById("numbers");
    copy_btn = document.getElementById("copy-btn");

    length_slider.addEventListener("mouseup", generatePassword);
    special_checkbox.addEventListener("click", generatePassword);
    lowercase_checkbox.addEventListener("click", generatePassword);
    uppercase_checkbox.addEventListener("click", generatePassword);
    numbers_checkbox.addEventListener("click", generatePassword);
    copy_btn.addEventListener("click", copyText);
}

function generatePassword(){
    var len = document.getElementById("length-slider").value;
    var special_flag = document.getElementById("special-chars").checked;
    var lowercase_flag = document.getElementById("lowercase-chars").checked;
    var uppercase_flag = document.getElementById("uppercase-chars").checked;
    var numbers_flag = document.getElementById("numbers").checked;

    
    var password = "";

    for (let i = 0; i < len; i++){
        password += randomize_char(special_flag, lowercase_flag, uppercase_flag, numbers_flag);

    }
    length_value = document.getElementById("length");
    password_p_element = document.getElementById("generated-password");
    length_value.innerHTML = "Length: " + len;
    if (password){
        password_p_element.innerHTML = password;
    }
    else{
        password_p_element.innerHTML = "Please check at least one box";
    }

}

function randomize_char(special_flag, lowercase_flag, uppercase_flag, numbers_flag){
    var possible_char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var possible_special_char = ['!','@','#','$','%','^','&','*'];
    var possible_numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var randomized_char = '';
    if (special_flag || lowercase_flag || uppercase_flag || numbers_flag){
        while (!randomized_char){
            var randomized_flag = Math.floor(Math.random() * 4);

            if (randomized_flag == 0 && uppercase_flag){
                randomized_char = possible_char[Math.floor(Math.random() * possible_char.length)].toUpperCase();
            }

            else if (randomized_flag == 1 && lowercase_flag){
                randomized_char = possible_char[Math.floor(Math.random() * possible_char.length)];
            }

            else if (randomized_flag == 2 && special_flag){
                randomized_char = possible_special_char[Math.floor(Math.random()* possible_special_char.length)];
            }

            else if (randomized_flag == 3 && numbers_flag){
                randomized_char = possible_numbers[Math.floor(Math.random() * possible_numbers.length)];
            }
        }
    }
    return randomized_char;
}

function copyText(){
    var copyText = document.getElementById("generated-password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}