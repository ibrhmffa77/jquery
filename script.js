
let counter = 0;
$("#plus").on("click", function () {
    counter++
    $("#div").html(counter)
})
$("#minus").on("click", function () {
    counter--
    $("#div").html(counter)
})
$("#reset").on("click", function () {
    counter = 0
    $("#div").text(counter)
})