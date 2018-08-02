$(document).ready(function () {
    var wanted;

    $("#submit-button").on("click", function (event) {
        event.preventDefault();
        wanted = $("#wanted-burger-input").val().trim();

        $("#wanted-burger-input").val("");

        $.post("/", { name: wanted }, function (data) {
            log("Data from events.js: ", data);
        }).then(function () {
            location.reload();
        });
    });

    $(".delete-burger").on("click", function () {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log(" events.js line: 30 | deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".eat-burger").on("click", function () {
        var id = $(this).data("id");
        log("eaten-id: ", id);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {}
        }).then(
            function () {
                console.log("changed sleep to");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});



