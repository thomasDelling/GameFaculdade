function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active')
}

document.addEventListener('click', function (event){
    const sidebar = document.querySelector('.sidebar');
    const botao = document.querySelector('.menuBotao');
    
    if(
        sidebar.classList.contains('active') &&
        !sidebar.contains(event.target) &&
        !botao.contains(event.target)
    ){
        sidebar.classList.remove('active');
    }
});
