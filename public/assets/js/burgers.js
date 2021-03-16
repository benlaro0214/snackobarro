$(document).ready(function() {

  // Add Burger to Database Button
  $("#addBurger").on("click", function(){
    

    // Create an Object to be Sent to the Backend
    let burger = {
      "burger_name": $(burgerName).val(),
      "devoured": $(burgerName).data("eaten")
    };

    $.post("/api/burger", burger).done((response)=>{
      location.reload();
    });

  }); // End of Create New Burger


  $(".burgerBlock").on("click", function(){


    const burgerID = $(this).data("id");
    const devoured = $(this).data("eaten");

    const burgerUpdate = {
      "devoured": devoured
    };

    console.log("button id is " + burgerID);

    $.ajax("/api/burger/" + burgerID, {
      type: "PUT",
      data: burgerUpdate
    }).done((response)=>{
      location.reload();
    });

  }); // End of Devour it Button

});
