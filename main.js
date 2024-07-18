/*----------DARK MODE--------*/
// const toggleBtn = document.getElementById('toggle-mode');
// const body = document.body;

// toggleBtn.addEventListener("click", function(){
//     body.classList.toggle("darkmode")
//     if (toggleBtn.textContent === "Modo Claro") {
//         toggleBtn.textContent = "Modo Escuro";
//     } else {
//         toggleBtn.textContent = "Modo Claro";
//     }
// })
const toggleBtn = document.getElementById('toggle-mode');
        const body = document.body;

        // Verificar se há preferência salva no Local Storage ao carregar a página
        window.onload = function() {
            const theme = localStorage.getItem('theme');
            if (theme === 'dark') {
                enableDarkMode();
                toggleBtn.textContent = "Modo Claro";
            }
        }

        toggleBtn.addEventListener("click", function(){
            // Alternar entre dark mode e light mode
            if (body.classList.contains("darkmode")) {
                body.classList.remove("darkmode");
                localStorage.setItem('theme', 'light'); // Salvar preferência no Local Storage
                toggleBtn.textContent = "Modo Escuro";
            } else {
                enableDarkMode();
                localStorage.setItem('theme', 'dark'); // Salvar preferência no Local Storage
                toggleBtn.textContent = "Modo Claro";
            }
        });

        function enableDarkMode() {
            body.classList.add("darkmode");
        }
/*----------DARK MODE FINAL--------*/
