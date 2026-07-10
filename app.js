/* ==========================================================
   KRISHNA CERAMICS STORE ERP
   Professional Invoice Generator
   Version 1.0
========================================================== */

"use strict";

/* ==========================================================
   Live Date & Time
========================================================== */

const dateBox = document.getElementById("currentDate");
const timeBox = document.getElementById("currentTime");

function updateDateTime() {

    const now = new Date();

    const date = now.toLocaleDateString("en-IN", {

        day: "2-digit",
        month: "short",
        year: "numeric"

    });

    const time = now.toLocaleTimeString("en-IN", {

        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"

    });

    if (dateBox) dateBox.textContent = date;
    if (timeBox) timeBox.textContent = time;

}

updateDateTime();

setInterval(updateDateTime, 1000);

/* ==========================================================
   Dashboard Cards
========================================================== */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", () => {

        const title = card.querySelector("h3").textContent;

        alert(title + "\n\nComing Soon 🚀");

    });

});

/* ==========================================================
   Console
========================================================== */

console.log(
"%cKRISHNA CERAMICS STORE ERP v1.0",
"background:#17375E;color:#fff;padding:8px 15px;border-radius:6px;font-size:14px;font-weight:bold;"
);

console.log("Dashboard Loaded Successfully");
