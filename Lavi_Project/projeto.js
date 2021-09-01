const Modal = {
    open() {
        //abrir modal
        //adicionar  class ative ao modal
        document
            .querySelector(".modal-overlay")
            .classList
            .add("active")
    },
    close() {
        //afechar modal
        //remover class ative ao modal
        document
            .querySelector(".modal-overlay")
            .classList.remove("active")
    }
}