$("#food-list tr.burger").hide();
$("#food-list tr.warm-sand").hide();
$("#food-list tr.cold-sand").hide();
$("#food-list tr.pizza").show();
SellInfo();

$("#main-Category").change(function() {
  if ($(this).val() == "1") {
    $(".main-cat-img").attr("src", "Images/Pizza-PNG-Image.png");
    $("#food-list tr.burger").hide();
    $("#food-list tr.warm-sand").hide();
    $("#food-list tr.cold-sand").hide();
    $("#food-list tr.pizza").show();
    return;
  } else if ($(this).val() == "2") {
    $(".main-cat-img").attr("src", "Images/cold-sandwiche.png");
    $("#food-list tr.burger").hide();
    $("#food-list tr.warm-sand").hide();
    $("#food-list tr.cold-sand").show();
    $("#food-list tr.pizza").hide();
    return;
  } else if ($(this).val() == "3") {
    $(".main-cat-img").attr("src", "Images/warm-sandwiche.png");
    $("#food-list tr.burger").hide();
    $("#food-list tr.warm-sand").show();
    $("#food-list tr.cold-sand").hide();
    $("#food-list tr.pizza").hide();
    return;
  } else if ($(this).val() == "4") {
    $(".main-cat-img").attr("src", "Images/burger.png");
    $("#food-list tr.burger").show();
    $("#food-list tr.warm-sand").hide();
    $("#food-list tr.cold-sand").hide();
    $("#food-list tr.pizza").hide();
    return;
  } else {
    alert("Wrong choice");
  }
});

$(document).on("click", ".removeItem", function(e) {
  e.preventDefault();
  var value = parseInt(
    $(this)
      .closest("td")
      .parent()
      .find("td:eq(1)")
      .text()
  );
  if (value <= 1) {
    $(this)
      .closest("td")
      .parent()
      .remove();
  } else {
    $(this)
      .closest("td")
      .parent()
      .find("td:eq(1)")
      .text(--value);
  }
  SellInfo();
});

$(document).on("click", ".addItem", function(e) {
  e.preventDefault();
  Currow = $(this)
    .closest("td")
    .parent();
  var TheKindIndex = Currow.find("th").text();
  var isThereAnyOfIt = false,
    targetIndex;

  for (let index = 0; index < $("#order-list tbody tr").length; index++) {
    //const element = array[index];
    if (
      parseInt(TheKindIndex) ==
      parseInt(
        $("#order-list tbody tr:eq(" + index + ")")
          .find("th")
          .text()
      )
    ) {
      isThereAnyOfIt = true;
      targetIndex = index;
    }
  }

  if (isThereAnyOfIt) {
    var value = parseInt(
      $("#order-list tbody")
        .find("tr:eq(" + targetIndex + ") td:eq(1)")
        .text()
    );
    $("#order-list tbody")
      .find("tr:eq(" + targetIndex + ") td:eq(1)")
      .text(++value);
  } else {
    //if there wasn't even one
    $("#order-list tbody").append(
      "<tr>" +
        "<th  hidden scope='row'>" +
        Currow.find("th").text() +
        "</th>" +
        "<td>" +
        Currow.find("td:eq(0)").text() +
        "</td>" +
        "<td>" +
        "1" +
        "</td>" +
        "<td>" +
        Currow.find("td:eq(1)").text() +
        "</td>" +
        '<td class="removeItem btn-sm btn-danger">-</td>' +
        "</tr>"
    );
  }

  SellInfo();
});

function SellInfo() {
  var sum = 0,
    count = 0;
  $("#order-list tbody tr").each(function() {
    count = 1;
    count =
      count *
      parseInt(
        $(this)
          .find("td:eq(1)")
          .text()
      );
    sum += parseFloat(
      $(this)
        .find("td:eq(2)")
        .text() *
        parseInt(
          $(this)
            .find("td:eq(1)")
            .text()
        )
    );
  });
  $("#Price").text(sum);

  $("#final-price").text(parseFloat(sum) + parseFloat($("#send-cost").text()));
}
