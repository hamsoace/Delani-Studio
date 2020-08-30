$(document).ready(function() {
    $("#design").click(function() {
        $("#design-p").toggle();
    });

    $("#development").click(function() {
        $("#development-p").toggle();
    });

    $("#product").click(function() {
        $("#product-p").toggle();
    });

    $("p").css("text-align", "center");

    $("h5").css("text-align", "center");

    $("h5").css("font-weight", "bold");

    $("h4").css("text-align", "center");

    $("#wrap1").mouseover(function() {
        $("#overlay1").show();
    }).mouseout(function() {
        $("#overlay1").hide();
    });


    $("#wrap2").mouseover(function() {
        $("#overlay2").show();
    }).mouseout(function() {
        $("#overlay2").hide();
    });

    $("#wrap3").mouseover(function() {
        $("#overlay3").show();
    }).mouseout(function() {
        $("#overlay3").hide();
    });

    $("#wrap4").mouseover(function() {
        $("#overlay4").show();
    }).mouseout(function() {
        $("#overlay4").hide();
    });

    $("#wrap5").mouseover(function() {
        $("#overlay5").show();
    }).mouseout(function() {
        $("#overlay5").hide();
    });

    $("#wrap6").mouseover(function() {
        $("#overlay6").show();
    }).mouseout(function() {
        $("#overlay6").hide();
    });

    $("#wrap7").mouseover(function() {
        $("#overlay7").show();
    }).mouseout(function() {
        $("#overlay7").hide();
    });

    $("#wrap8").mouseover(function() {
        $("#overlay8").show();
    }).mouseout(function() {
        $("#overlay8").hide();
    });


    $(".project").css("margin-top", "30%");

});

function main() {
    var name = document.getElementById("mce-FNAME").value;
    var email = document.getElementById("mce-EMAIL").value;
    var message = document.getElementById("mce-MESSAGE").value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    var validateForm = function() {
        if(name == "" || email == "" || message == "") {
        alert("Please fill in the form!");
        }
        else {
            return true;
        };

        if(email !== mailFormat) {
            alert("Input the correct email address!")
        }
        else {
            return true;
        };
    }
    
    if (validateForm() === true) {
            alert("We have received your message " + name + ". Thank you for reaching out to us.")
        }
        else {
            return false;
        };
    


};