document.addEventListener("DOMContentLoaded", function() {
    var emCartazLink = document.getElementById("emCartaz");
    var emBreveLink = document.getElementById("emBreve");

    emCartazLink.addEventListener("click", function() {
        emCartazLink.classList.add("active");
        emBreveLink.classList.remove("active");
    });

    emBreveLink.addEventListener("click", function() {
        emBreveLink.classList.add("active");
        emCartazLink.classList.remove("active");
    });
});
