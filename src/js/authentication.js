// Buttons
var authEmailPassButton = document.getElementById('authEmailPassButton');
var authFacebookButton = document.getElementById('authFacebookButton');
var authTwitterButton = document.getElementById('authTwitterButton');
var authGoogleButton = document.getElementById('authGoogleButton');
var authGitHubButton = document.getElementById('authGitHubButton');
var authAnonymouslyButton = document.getElementById('authAnonymouslyButton');
var createUserButton = document.getElementById('createUserButton');
var logOutButton = document.getElementById('logOutButton');

// Inputs
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

// DIVs
var divLogin = document.getElementById('divLogin');
var divLogout = document.getElementById('divLogout');

// Criar novo usuário
createUserButton.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function () {
            alert('Bem vindo ' + emailInput.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.')
        });
});

// Autenticar com E-mail e Senha
authEmailPassButton.addEventListener('click', function () {
    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function (result) {
            console.log(result);
            alert('Autenticado ' + emailInput.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao autenticar, verifique o erro no console.')
        });
});

// Logout
logOutButton.addEventListener('click', function () {
    firebase
        .auth()
        .signOut()
        .then(function () {
            alert('Você se deslogou');
            //obterUsuarioAssincrono(ajustarVisibilidadeFormularioAutenticacao);
        }, function (error) {
            console.error(error);
        });
});

// Autenticar Anônimo
authAnonymouslyButton.addEventListener('click', function () {
    firebase
        .auth()
        .signInAnonymously()
        .then(function (result) {
            console.log(result);
            alert('Autenticado Anonimamente');
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao autenticar, verifique o erro no console.')
        });
});

// Autenticar com GitHub
authGitHubButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.GithubAuthProvider();
    signIn(provider);
});

// Autenticar com Google
authGoogleButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
});

// Autenticar com Facebook
authFacebookButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.FacebookAuthProvider();
    signIn(provider);
});

// Autenticar com Twitter
authTwitterButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.TwitterAuthProvider();
    signIn(provider);
});

function signIn(provider) {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {
            console.log(result);
            var token = result.credential.accessToken;
        }).catch(function (error) {
            console.log(error);
            alert('Falha na autenticação');
        });
}

obterUsuarioAssincrono(ajustarVisibilidadeFormularioAutenticacao);

function ajustarVisibilidadeFormularioAutenticacao(usuario) {
    console.log("ajustarVisibilidadeFormularioAutenticacao");
    if (usuario == null) { //Deslogado    
        console.log("deslogado");

        divLogin.hidden = false;
        divLogout.hidden = true;
    } else { //Logado
        console.log("logado");

        divLogin.hidden = true;
        divLogout.hidden = false;        
    }
}