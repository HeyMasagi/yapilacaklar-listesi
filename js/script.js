document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskValue}</span> 
                        <button class="check-btn">✔</button> 
                        <button class="delete-btn">Sil</button>`;
        document.getElementById('taskList').appendChild(li);
        taskInput.value = "";

        // Silme işlevi
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });

        // Tamamlama işlevi
        li.querySelector('.check-btn').addEventListener('click', function() {
            li.classList.toggle('completed'); // Tamamlandığında üstünü çizer
        });
    }
});

document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('addTaskBtn').click(); // "Ekle" butonuna tıklanması gibi
    }
});
