function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (!username) {
        // this can be used to access a database and login properly however as this is a prototype this is sufficient.
        alert("Please input a username!");
    }

    document.cookie = "username=" + username;
    return false;
}

function setPrivacy(type) {
    document.cookie = "privacy=" + type;
}

function setRole(type) {
    document.cookie = "role=" + type;
}

function checkLoginOrRedirect() {
    if (document.cookie.indexOf("username=") >= 0) {
        alert("You are already logged in.. Redirecting...");
        document.location = "/selection.html";
    }
}

function logout() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function setObjective() {

    // There isn't a 'better' way of doing without the compromise on readability or efficiency.
    // also i can't be bothered to make string validation however it's rather easy if u want to add it urself :)
    if(!prompt("How many calories do you want to target?", "")) {
        alert("Objective cancelled!");
        return;
    }

    if(!prompt("How many minutes of exercise do you want to target? ", "")) {
        alert("Objective cancelled!");
        return;
    }

    if(!prompt("What time do you want to do it in? (minutes)", "")) {
        alert("Objective cancelled!");
        return;
    }

    alert("Objective set!");


}