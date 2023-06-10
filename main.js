window.addEventListener("scroll", onScroll);

const navigation = document.getElementById("navigation");
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);

  changeLogoColor();
}

function changeLogoColor() {
  const logoHeader = document.getElementById("header-logo");
  console.log(logoHeader);

  if (scrollY > 0) {
    logoHeader.setAttribute("src", "./assets/logoHeaderJovs.svg");
  } else {
    logoHeader.setAttribute("src", "./assets/logoHeader.svg");
  }
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  // topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  // Verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  // a sessão termina onde?
  const sectionEndsAt = sectionTop + sectionHeight;

  //o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

  // limites da sessão
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .cards,
  #about,
  #about header,
  #about .content`);
