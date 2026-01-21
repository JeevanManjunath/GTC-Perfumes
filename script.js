const items = document.querySelectorAll(".acc-item");

items.forEach((item) => {
    const head = item.querySelector(".acc-head");

    head.addEventListener("click", () => {
        items.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
    });
});

document.querySelectorAll(".plan-frags").forEach((row) => {
    row.addEventListener("click", (e) => {
        const card = e.target.closest(".mini-card");
        if (!card) return;

        row.querySelectorAll(".mini-card").forEach((c) => c.classList.remove("selected"));
        card.classList.add("selected");
    });
});
document.querySelector(".newsletter-form button").addEventListener("click", () => {
    alert("Thank you for subscribing!");
});