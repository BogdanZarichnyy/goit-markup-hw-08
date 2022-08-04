(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const bodyMenuRef = document.querySelector("[data-body]"); // це утилітка яка забороняє прокрутку контенту поза бекдропом при відкритому модальному вікні

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    bodyMenuRef.classList.toggle("is-overflow"); // забороняємо прокрутку контенту поза менюшки

    mobileMenuRef.classList.toggle("is-open");
  });
})();