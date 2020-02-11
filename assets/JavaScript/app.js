// Portfolio Page

// This function will hide the following projects.
hideProjects();

function hideProjects() {
    $(".frontend-projects").hide();
    $(".backend-projects").hide();
    $(".fullStack-projects").hide();
    $(".react-projects").hide();
}

// Frontend projects
$("#frontend").on("click", function() {
    $("#projectTitleName").text("Frontend");

    hideProjects();
    $(".frontend-projects").show();
});

// Backend projects
$("#backend").on("click", function() {
    $("#projectTitleName").text("Backend");

    hideProjects();
    $(".backend-projects").show();
});

// Full Stack projects
$("#full-stack").on("click", function() {
    $("#projectTitleName").text("Full Stack");

    hideProjects();
    $(".fullStack-projects").show();
});

// All React projects
$("#react").on("click", function() {
    $("#projectTitleName").text("React");

    hideProjects();
    $(".react-projects").show();
});