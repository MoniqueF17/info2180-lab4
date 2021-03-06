var loser = false;  // if the user touches a wall

function startClick() {
    "use strict";
    loser = false;
    ("status").textContent = "Find the end!";
    var i, boundaries;
    boundaries  = ("div#maze div.boundary");
    for (i = 0; i < boundaries.length; i += 1) {
        boundaries[i].removeClassName("you lose");
    }
}

function overEnd() {
    "use strict";
    if (!loser) {
        ("status").textContent = "You win! :]";
    }
}

function overBoundary() {
    "use strict";
    var i, boundaries;
    loser = true;
    ("status").textContent = "You lose!";
    boundaries = ("div#maze div.boundary");
    for (i = 0; i < boundaries.length; i += 1) {
        boundaries[i].addClassName("youlose");
    }
}

function window() {
    "use strict";
}

window.onload = function () {
    "use strict";
    var i, boundaries;
    ("start").onclick = startClick;
    ("end").onmouseover = overEnd;
    boundaries = ("div#maze div.boundary");
    for (i = 0; i < boundaries.length; i += 1) {
        boundaries[i].onmouseover = overBoundary;
    }
};