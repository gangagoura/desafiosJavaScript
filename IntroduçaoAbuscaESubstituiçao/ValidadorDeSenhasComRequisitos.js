function validadorDeSenha(senha) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?!.*[_])\w{6,32}$/.test(senha)
  }
  
  let senha = "";
  
  do {
    senha = gets();
    if (senha !== "") {
      let valido = validadorDeSenha(senha);
      console.log("Senha " + (valido ? "valida." : "invalida."));
    }
  } while (senha !== "");
