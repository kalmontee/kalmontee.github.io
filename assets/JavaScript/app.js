let timeout;

loader();
updateYear();

// Portfolio Page
// This function will hide the following projects.
hideProjects();

// function for updating the year automatically in the footer
function updateYear() {
    let date = new Date();
    let currentYear = date.getFullYear();
    $("#year").html(currentYear);
}

// Set timeout of loader
function loader() {
    timeout = setTimeout(showPage, 1200);
}

function showPage() {
    $(".loaderContainer").hide();
    $(".hideSection").show();
}


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