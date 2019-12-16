// Portfolio Page

$(".fullStack-projects").hide();
$(".backend-projects").hide();
// $(".nodeJS-projects").hide();

// This function will hide the following projects.
function hideProjects() {
    $(".frontend-projects").hide();
    $(".backend-projects").hide();
    $(".fullStack-projects").hide();
}

// Frontend projects
$("#frontend").on("click", function(event) {
    event.preventDefault();

    hideProjects();
    $(".frontend-projects").show();
});

// Backend projects
$("#backend").on("click", function() {
    event.preventDefault();

    hideProjects();
    $(".backend-projects").show();
});

// Full Stack projects
$("#full-stack").on("click", function(event) {
    event.preventDefault();

    hideProjects();
    $(".fullStack-projects").show();
})