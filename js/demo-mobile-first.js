// Menu Hambúrguer
const hamburger = document.getElementById("hamburger")
const nav = document.getElementById("nav")
const overlay = document.getElementById("overlay")
const navLinks = nav.querySelectorAll("a")
function toggleMenu() {
	hamburger.classList.toggle("active")
	nav.classList.toggle("active")
	overlay.classList.toggle("active")
	document.body.style.overflow = nav.classList.contains("active")
		? "hidden"
		: ""
}
function closeMenu() {
	hamburger.classList.remove("active")
	nav.classList.remove("active")
	overlay.classList.remove("active")
	document.body.style.overflow = ""
}
hamburger.addEventListener("click", toggleMenu)
overlay.addEventListener("click", closeMenu)
// Fecha menu ao clicar em um link
navLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		if (window.innerWidth < 768) {
			closeMenu()
		}
		e.preventDefault()
		const target = document.querySelector(link.getAttribute("href"))
		if (target) {
			target.scrollIntoView({
				behavior: "smooth",
				block: "start",
			})
		}
	})
})
// Fecha menu ao redimensionar para tablet/desktop
window.addEventListener("resize", () => {
	if (window.innerWidth >= 768) {
		closeMenu()
	}
})
// Informações do viewport no console
function mostrarInfoViewport() {
	const largura = window.innerWidth
	let dispositivo
	if (largura < 768) {
		dispositivo = "Smartphone (Menu Hambúrguer)"
	} else if (largura < 1024) {
		dispositivo = "Tablet (Menu Horizontal)"
	} else {
		dispositivo = "Desktop (Menu Horizontal)"
	}
	console.log(`Largura: ${largura}px | Dispositivo: ${dispositivo}`)
}
mostrarInfoViewport()
window.addEventListener("resize", mostrarInfoViewport)
