// Lógica interactiva para la App Ágil y Tablero Kanban
document.addEventListener('DOMContentLoaded', () => {
    console.log("Tablero Ágil inicializado correctamente.");

    // Lógica para el conmutador de tema oscuro (Dark Theme Toggle)
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Recuperar preferencia guardada en localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Modo Claro';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = 'Modo Claro';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = 'Modo Oscuro';
        }
    });
});
