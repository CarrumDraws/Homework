$(function () {
  // Values returned from selecting an element in vanilla JS vs jQuery

  // var div = document.getElementById("div");
  // console.log(div);

  // var $div = $("#div"); // naming convention for jQuery objects, $___
  // console.log($div);

  // Converting jQuery object to DOM element
  // console.log($div.get(0), $div[0]);

  // Convert DOM element to jQuery object
  // console.log($(div));

  // --------------------------------------------
  // Using multiple selectors

  // console.log($("div, h2, img")); // union
  // console.log($("div .redDiv")); // intersection
  // console.log($("div .redDiv #red1")); // intersection

  // --------------------------------------------
  // Accessing text and HTML element content

  // const $allSelector = $(".all td:eq(0)");
  // console.log($allSelector);

  // differences between .text() and .html()

  // console.log("text:", $allSelector.text()); //innerText
  // console.log("html:", $allSelector.html()); //innerHTML

  // grabbing all the children
  // const $table = $("table");
  // console.log($table.html());

  // --------------------------------------------
  const $search = $("#search");
  const $searchBtn = $("#searchBtn");
  const $resetBtn = $("#resetBtn");

  // Accessing accessing input element values with .val()

  // $searchBtn.on("click", function () {
  //   alert($search.val());
  // });
  // $resetBtn.on("click", function () {
  //   $search.val("ethan");
  // });

  // Setting element styles

  // $resetBtn.css("backgroundColor", "green");
  // $searchBtn.css({
  //   backgroundColor: "yellow",
  //   padding: "5px",
  // });
  // $footer = $(".footer");
  // console.log($footer.hasClass("footer"));
  // $footer.addClass("footer-border");
  // $footer.removeClass();

  // --------------------------------------------
  // Getting and setting element attributes
  // const $img = $("img");
  // $img.on("click", function () {
  //   $img.attr("src", "google.png");
  //   $img.attr({ alt: "google", a: "aaa" });
  //   console.log(`alt: ${$img.attr("alt")}, a:${$img.attr("a")}`);
  // });
  // console.log($img.attr("alt"));

  // const $checkbox = $("#checkbox");
  // console.log($checkbox[0]);
  // $checkbox.on("change", function () {
  //   console.log($checkbox.attr("checked")); // checked
  //   console.log($checkbox.prop("checked")); // .prop() for bool
  // });

  // --------------------------------------------
  // Registering event handlers with jQuery

  // const $header = $("h2");
  // $header.on({
  //   mouseenter: function () {
  //     console.log("mouseenter");
  //   },
  //   click: function () {
  //     alert("you click the header");
  //     $(this).off("mouseenter"); // when clicked, unregister event
  //     $(window).trigger("myEvent"); // manually trigger custom event
  //   },
  // });

  // $(window).on("myEvent", function () {
  //   alert("my event");
  // });

  // Making list content appear and disappear on click
  // Keep this uncommented for the remaining demos
  let $firstLi = $("ul li:first");
  let $lastLi = $("ul li:last");
  let $firstDiv = $("#firstDiv");
  let $secondDiv = $("#secondDiv");
  // console.log($firstLi, $lastLi);

  $firstLi.on("click", function () {
    $firstDiv.css("display", "block");
    $secondDiv.css("display", "none");
  });

  $lastLi.on("click", function () {
    $firstDiv.css("display", "none");
    $secondDiv.css("display", "block");
  });


  let $addBtn = $("#addBtn");
  let $addInput = $("#addValue");
  let $li = $("ol li");
  // console.log($li);

  // // Hover list element to highlight red
  // // Using combinator selector and registering event handlers for each element
  // $li.on({
  //   mouseenter: function () {
  //     $(this).css("backgroundColor", "red");
  //   },
  //   mouseout: function () {
  //     $(this).css("backgroundColor", "white");
  //   },
  // });

  // // Using event delegation with the second onEvent parameter
  // $("ol").on("mouseenter", "li", function () {
  //   $(this).css("backgroundColor", "red");
  // });

  // $("ol").on("mouseout", "li", function () {
  //   $(this).css("backgroundColor", "white");
  // });


  // // Click add to add en element to the list
  // $addBtn.on("click", function () {
  //   let addNode = document.createElement("li");
  //   addNode.innerHTML = $addInput.val();
  //   $("ol").append(addNode);
  // });

  // --------------------------------------------
  // Creating animations on button clicks

  let $animationDiv = $("#animationDiv");
  $("#secondDiv button:eq(1)").on("click", function () {
    $animationDiv.show("slow", function () {
      console.log("show finish");
    });
  });
  $("#secondDiv button:eq(2)").on("click", function () {
    $animationDiv.hide("fast");
  });
  $("#secondDiv button:eq(3)").on("click", function () {
    $animationDiv.slideDown("normal");
  });
  $("#secondDiv button:eq(4)").on("click", function () {
    $animationDiv.slideUp();
  });
  $("#secondDiv button:eq(5)").on("click", function () {
    $animationDiv.fadeIn(2000);
  });
  $("#secondDiv button:eq(6)").on("click", function () {
    $animationDiv.fadeOut(500);
  });
  $("#secondDiv button:eq(7)").on("click", function () {
    $animationDiv.toggle("slow");
  });
  $("#secondDiv button:eq(8)").on("click", function () {
    $animationDiv.slideToggle("slow");
  });
  $("#secondDiv button:eq(9)").on("click", function () {
    $animationDiv.fadeToggle("slow");
  });
  $("#secondDiv button:eq(10)").on("click", function () {
    $animationDiv.animate(
      {
        opacity: "0.5",
        height: "150px",
        width: "150px",
      },
      1000,
      "linear"
    );
  });
  $("#secondDiv button:eq(11)").on("click", function () {
    $animationDiv.stop(true, true).toggle("slow");
  });

  // --------------------------------------------
  // Creating and sending AJAX requests

  $.ajax("https://jsonplaceholder.typicode.com/todos/1", {
    dataType: "json", // type of response data
    timeout: 500, // timeout milliseconds
    success: function (data, status, xhr) {
      console.log(data, status, xhr);
    },
    error: function (jqXhr, textStatus, errorMessage) {
      console.log(errorMessage);
    },
  });

  $.get("https://jsonplaceholder.typicode.com/todos/1",
    function (data, status, xhr) {
      console.log(data, status, xhr);
    }
  ).fail(function (error) {
    console.log(error);
  });
});
