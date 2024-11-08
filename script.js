// Função para exibir o conteúdo da aba selecionada
function showContent(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Exibe a seção selecionada
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}

// A primeira aba será carregada automaticamente ao abrir a página
document.addEventListener('DOMContentLoaded', function () {
    showContent('nossa-historia');
});
