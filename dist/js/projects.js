// js/projects.js
export function initProjects() {
    document.querySelectorAll('[data-modal-target]').forEach(item => {
        item.addEventListener('click', e => {
            const modal = document.querySelector(e.target.dataset.modalTarget);
            modal.style.display = 'flex';
        });
    });

    document.querySelectorAll('.close-button').forEach(item => {
        item.addEventListener('click', e => {
            const modal = document.querySelector(e.target.dataset.closeTarget);
            modal.style.display = 'none';
        });
    });
}