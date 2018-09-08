$(function() {
    $("#button").on("click", function(){
        event.preventDefault();

        console.log($("#burger").val().trim())

        var newBurger = {
            name: $("#burger").val().trim(),
            devoured: 0
        };

        console.log(newBurger);

        $.ajax("/api/burgers",{
            type:"POST",
            data: newBurger
        }).then(function(){
            console.log("new burger");
            location.reload();
        })
    });

    $(".change-burger").on("click", function(){
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourTrue = {
            devoured: "true"
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourTrue
        }).then(function(){
            location.reload();
        })
    })

    var hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
}

window.onload = function() {
    doStuff();
};
});