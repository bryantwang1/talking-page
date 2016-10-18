$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#meow").click(function() {
    $(this).after("<p>Meow</p>");
    $("button#woof").after("<p>Woof</p>");
  });

  $("button#woof").click(function() {
    $(this).after("<p>Woof!</p>");
    $("button#meow").after("<p>Meow!</p>");
  });

  $("button#top-left-x").click(function() {
    $("button#top-left-o").after("<img src=\"img/xImage.png\">");

    $("#top-left").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#top-left-o").click(function () {
    $(this).after("<img src=\"img/operaO.png\">");

    $("#top-left").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#top-middle-x").click(function() {
    $("button#top-middle-o").after("<img src=\"img/xImage.png\">");

    $("#top-middle").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#top-middle-o").click(function () {
    $(this).after("<img src=\"img/operaO.png\">");

    $("#top-middle").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#top-right-x").click(function() {
    $("button#top-right-o").after("<img src=\"img/xImage.png\">");

    $("#top-right").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#top-right-o").click(function () {
    $(this).after("<img src=\"img/operaO.png\">");

    $("#top-right").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#middle-left-x").click(function() {
    $("button#middle-left-o").after("<img src=\"img/xImage.png\">");

    $("#middle-left").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#middle-left-o").click(function () {
    $(this).after("<img src=\"img/operaO.png\">");

    $("#middle-left").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#middle-middle-x").click(function() {
    $("button#middle-middle-o").after("<img src=\"img/xImage.png\">");

    $("#middle-middle").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#middle-middle-o").click(function () {
    $(this).after("<img src=\"img/operaO.png\">");

    $("#middle-middle").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#middle-right-x").click(function() {
    $("button#middle-right-o").after("<img src=\"img/xImage.png\">");

    $("#middle-right").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#middle-right-o").click(function () {
    $(this).after("<img src=\"img/operaO.png\">");

    $("#middle-right").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#bottom-left-x").click(function() {
    $("button#bottom-left-o").after("<img src=\"img/xImage.png\">");

    $("#bottom-left").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#bottom-left-o").click(function () {
    $(this).after("<img src=\"img/operaO.png\">");

    $("#bottom-left").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#bottom-middle-x").click(function() {
    $("button#bottom-middle-o").after("<img src=\"img/xImage.png\">");

    $("#bottom-middle").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#bottom-middle-o").click(function () {
    $(this).after("<img src=\"img/operaO.png\">");

    $("#bottom-middle").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#bottom-right-x").click(function() {
    $("button#bottom-right-o").after("<img src=\"img/xImage.png\">");

    $("#bottom-right").children("img").first().click(function () {
      $(this).remove();
    });
  });

  $("button#bottom-right-o").click(function () {
    $(this).after("<img src=\"img/operaO.png\">");

    $("#bottom-right").children("img").first().click(function () {
      $(this).remove();
    });
  });
});
