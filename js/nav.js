(() => {
    const refs = {
        openNavBtn: document.querySelector("[data-modal-nav-open]"),
        closeNavBtn: document.querySelector("[data-modal-nav-close]"),
        navModal: document.querySelector("[data-modal-nav]"),
    };

    refs.openNavBtn.addEventListener("click", Show);
    refs.closeNavBtn.addEventListener("click", Hide);

    function Show() {
        refs.navModal.classList.remove("isHidden");
    }

    function Hide() {
        refs.navModal.classList.add("isHidden");
    }
})();
