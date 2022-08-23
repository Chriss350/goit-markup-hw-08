(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-contact-open]"),
        closeModalBtn: document.querySelector("[data-modal-contact-close]"),
        contactModal: document.querySelector("[contactModal]"),
        navModal: document.querySelector("[data-modal-nav]"),
    };

    refs.openModalBtn.addEventListener("click", SlideIn);
    refs.closeModalBtn.addEventListener("click", SlideOut);

    function SlideIn() {
        refs.contactModal.className = "modal-box in";
    }

    function SlideOut() {
        refs.contactModal.classList.add("out");
    }
})();
