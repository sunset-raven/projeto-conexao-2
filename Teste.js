const Pessoa = require("./Pessoa/Pessoa");
const Paciente = require("./Paciente/Paciente");
const Profissional = require("./Profissional/Profissional");

pessoa1 = new Paciente();
pessoa1.cadastrarPaciente(
  "Andréa",
  "15/12/1984",
  "2198989898",
  "Rio de Janeiro",
  "paciente",
  "sim",
  "sim",
  "TDAH e depressão",
  "sim"
);

pessoa2 = new Profissional();
pessoa2.cadastrarProfissional(
  "Lucia",
  "03/05/1958",
  "2187878787",
  "Rio de Janeiro",
  "profissional",
  "sim",
  "arquiteta",
  "urbanismo"
);


console.log(pessoa2.cadastrarConsulta("terça", "11:00", "Andréa"));
console.log(pessoa2);
// console.log(pessoa1.consultasMarcadas);
console.log(pessoa1.cancelarConsulta("terça", "11:00", "Lucia"));
// console.log(pessoa2.cancelarConsulta("terça", "11:00"));

// console.log(pessoa2.agenda[1]);
// console.log(pessoa1.consultasMarcadas);