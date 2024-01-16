function validar(user, pass) {
  if (user == "pedro" && pass == "123") {
    return true;
  } else {
    return false;
  }
}

let usuario = "pedro";
let senha = "123";
let validacao = validar(usuario, senha);
if (validacao) {
  console.log("Acesso concedido.");
} else {
  console.log("Acesso NEGADO!");
}
