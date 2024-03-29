export function link() {
    document.querySelectorAll(".nav__link").forEach((anchor) => {
        if (!anchor.classList.contains('nav__link--login')) {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();

                const targetId = this.getAttribute("href");
                console.log(targetId)
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            });
        }

    });
}