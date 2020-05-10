
let timeout;

loader();

// Set timeout of loader
function loader() {
    timeout = setTimeout(showPage, 2000);
}

function showPage() {
    $(".loaderContainer").hide();
    $(".hideSection").show();
}


// Portfolio Page
// This function will hide the following projects.
hideProjects();

// When user enters my portfolio section show the frontend projects first
$(".frontend-projects").show();

function hideProjects() {
    $(".frontend-projects").hide();
    $(".mern-projects").hide();
    $(".fullStack-projects").hide();
    $(".react-projects").hide();
}

// Frontend projects
$("#frontend").on("click", function () {
    $("#projectTitleName").text("Frontend");

    hideProjects();
    $(".frontend-projects").show();
});

// MERN projects
$("#mern").on("click", function () {
    $("#projectTitleName").text("MERN");

    hideProjects();
    $(".mern-projects").show();
});

// Full Stack projects
$("#full-stack").on("click", function () {
    $("#projectTitleName").text("Full Stack");

    hideProjects();
    $(".fullStack-projects").show();
});

// All React projects
$("#react").on("click", function () {
    $("#projectTitleName").text("React");

    hideProjects();
    $(".react-projects").show();
});