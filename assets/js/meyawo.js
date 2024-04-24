/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// $(document).ready(function () {
//     // Smooth scrolling for navigation links excluding those inside the hamburger menu
//     $(".navbar .nav-link:not(#nav-toggle)").on('click', function (event) {
//         if (this.hash !== "") {
//             event.preventDefault();
//             var hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 700, function () {
//                 window.location.hash = hash;
//             });
//         }
//     });

//     // Toggle navigation menu when clicking on the hamburger button
//     $('#nav-toggle').click(function () {
//         $(this).toggleClass('is-active')
//         $('ul.nav').toggleClass('show');
//     });
// });


// contact form...

//1.your name
function validateName() {
    let usname = document.getElementById("name").value;
    let reg = /^[a-zA-Z\S]+$/;

    if (reg.test(usname)) {
        document.getElementById("message1").innerHTML = "verified";
        document.getElementById("message1").style.color = "green";
        return true
    } else {
        document.getElementById("message1").innerHTML = "failed";
        document.getElementById("message1").style.color = "red";
        return false
    }
}

//2.enter email

function validateEmail() {
    let uremail = document.getElementById("email").value;
    let reg = /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-_]{2,20})\.([a-z]{2,6})$/;

    if (reg.test(uremail)) {
        document.getElementById("message2").innerHTML = "verified";
        document.getElementById("message2").style.color = "green";
        return true
    } else {
        document.getElementById("message2").innerHTML = "failed";
        document.getElementById("message2").style.color = "red";
        return false
    }
}

//3.write something

function validateWrite() {
    let comment = document.getElementById("email").value;
    let reg = /^([a-zA-Z0-9\S]{5,1000}+\.[a-zA-Z0-9\S]{5,1000}+(\r)?(\n)?)+$/;

    if (reg.test(comment)) {
        document.getElementById("message3").innerHTML = "verified";
        document.getElementById("message3").style.color = "green";
        return true
    } else {
        document.getElementById("message3").innerHTML = "failed";
        document.getElementById("message3").style.color = "red";
        return false
    }
}

//4.button

function validateAllFields() {
    validateName();
    validateEmail();
    validateWrite();
    if (validateName() && validateEmail() && validateWrite()) 
    {
       return true
    }
    else
    {
        return false
    }
}