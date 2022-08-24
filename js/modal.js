(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-contact-open]"),
        closeModalBtn: document.querySelector("[data-modal-contact-close]"),
        contactModal: document.querySelector("[contactModal]"),

        openNavBtn: document.querySelector("[data-modal-nav-open]"),
        closeNavBtn: document.querySelector("[data-modal-nav-close]"),
        navModal: document.querySelector("[data-modal-nav]"),
    };

    refs.openModalBtn.addEventListener("click", SlideIn);
    refs.closeModalBtn.addEventListener("click", SlideOut);
    refs.openNavBtn.addEventListener("click", Show);
    refs.closeNavBtn.addEventListener("click", Hide);

    function SlideIn() {
        refs.contactModal.className = "modal-box in";
    }

    function SlideOut() {
        refs.contactModal.classList.add("out");
    }

    function Show() {
        refs.navModal.classList.remove("isHidden");
    }

    function Hide() {
        refs.navModal.classList.add("isHidden");
    }
})();
