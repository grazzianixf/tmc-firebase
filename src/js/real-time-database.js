var patchesList = document.getElementById('patchesList');
var descricaoInput = document.getElementById('descricaoInput');
var addButton = document.getElementById('addButton');

// Ao clicar no botão
addButton.addEventListener('click', function () {

    if (usuario) {
        create(descricaoInput.value);        
    } else {
        alert('Não está logado');        
    }
    
});

// Função para criar um registro no Firebase
function create(descricao) {
    var data = {
        descricao: descricao
    };

    return firebase.database().ref().child('patches').push(data);
}

firebase.database().ref('patches').on('value', function (snapshot) {
    patchesList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().descricao));
        patchesList.appendChild(li);
    });
});

if (usuario == null) {
    window.location = 'authentication.html';
}