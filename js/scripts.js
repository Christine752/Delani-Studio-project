$(document).ready(function () {
  $(".onClick1").click(function () {
    $("#click1").toggle();
    $("#magic1").toggle();
  });
  $(".onClick2").click(function () {
    $("#magic2").toggle();
    $("#click2").toggle();
  });
  $(".onClick3").click(function () {
    $("#magic3").toggle();
    $("#click3").toggle();
  });
});

$(document).ready(function () {
  $("div.image-frame").hover(function () {
    $(".classAdd1").addClass("mask flex-center rgba-red-strong");
  });
  $("div.image-frame").hover(function () {
    $(".classAdd2").addClass("mask flex-center rgba-blue-light");
  });
  $("div.image-frame").hover(function () {
    $(".classAdd3").addClass("mask flex-center rgba-green-slight");
  });
  $("div.image-frame").hover(function () {
    $(".classAdd4").addClass("mask flex-center");
  });
});

function myMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("comment").value;
  if (email !== "" && name !== "" && message !== "") {
    // document.getElementById("pop").innerHTML =
    alert(
      "Hello" +
        " " +
        name +
        " we have received your message. Thank you for reaching out to us."
    );
  } else if (email == "" || name !== "" || message !== "") {
    alert("Please fill in all the details");
  }
}
