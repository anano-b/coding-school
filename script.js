const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("brightside-theme");

const navigation = document.querySelector("nav");
if (navigation && !navigation.querySelector('a[href="about.html"]')) {
	const vibeLink = navigation.querySelector('a[href="vibe.html"]');
	if (vibeLink) vibeLink.insertAdjacentHTML("afterend", '<a href="about.html">ჩვენ შესახებ</a>');
}

if (navigation) {
	const menuLabels = {
		"courses.html": "კურსები",
		"vibe.html": "ჩვენი ხედვა",
		"about.html": "ჩვენ შესახებ"
	};
	navigation.querySelectorAll("a").forEach((link) => {
		const href = link.getAttribute("href");
		if (menuLabels[href]) link.textContent = menuLabels[href];
		if (href === "join.html") link.innerHTML = 'შემოგვიერთდი <span aria-hidden="true">↗</span>';
	});
}

if (savedTheme === "dark") document.body.classList.add("dark-mode");

function updateThemeToggle() {
	const isDark = document.body.classList.contains("dark-mode");
	themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
	themeToggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
}

themeToggle.addEventListener("click", () => {
	document.body.classList.toggle("dark-mode");
	localStorage.setItem("brightside-theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
	updateThemeToggle();
});

updateThemeToggle();
