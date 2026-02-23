function loadHeader() {

    fetch("/header.html")
        .then(r => r.text())
        .then(html => {
            document.getElementById("header-placeholder").innerHTML = html;
            markActiveLink();
        });

}

function markActiveLink() {

    const currentPath = window.location.pathname.replace(/\/$/, "");

    const links = document.querySelectorAll("header a");

    links.forEach(link => {

        let linkPath = link.getAttribute("href");
        if (!linkPath) return;

        linkPath = linkPath.replace(/\/$/, "");

        // normale Seiten
        if (linkPath === currentPath) {
            link.classList.remove("btn");
            link.classList.add("btnselected");
        }

        // Blogübersicht aktiv bei Artikeln
        if (currentPath.startsWith("/blog/") && linkPath === "/blog.html") {
            link.classList.remove("btn");
            link.classList.add("btnselected");
        }

        // Dropdown aktiver Artikel
        if (currentPath === linkPath) {
            link.classList.add("active-dropdown");
        }
    });
}
