function somar(numer1, numero2) {
  if (typeof numer1 !== "number") {
    return "Erro";
  }
  return numer1 + numero2;
}

exports.somar = somar;
