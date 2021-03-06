// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newCharacter obj
  var newTeam = {
    // name from name input
    name: $("#name").val().trim(),
    // role from role input
    email: $("#email").val().trim(),
    // age from age input
    TeamMember1: $("#member1").val().trim(),
    // points from force-points input
    TeamMember2: $("#member2").val().trim(),
    TeamMember3: $("#member3").val().trim(),
    TeamMember4: $("#member4").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newTeam)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding Team...");
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#email").val("");
  $("#member1").val("");
  $("#member2").val("");
  $("#member3").val("");
  $("#member4").val("");

});
