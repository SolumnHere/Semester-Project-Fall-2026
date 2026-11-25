document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.querySelectorAll("ol.history-timeline li");
    const events = document.querySelectorAll(".history-event");

    timeline.forEach((item, index) => {
        item.addEventListener("click", () => {

            timeline.forEach(year => {
                year.removeAttribute("aria-current");
            });

            events.forEach(event => {
                event.classList.remove("active");
            });

            item.setAttribute("aria-current", "true");
            events[index].classList.add("active");
        });
    });
});