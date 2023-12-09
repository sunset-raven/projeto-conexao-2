class Agenda {
  dias = [
    {
      dia: "segunda",
      horario: {
        "09:00": undefined,
        "10:00": undefined,
        "11:00": undefined,
        "14:00": undefined,
        "15:00": undefined,
        "16:00": undefined,
      },
    },
    {
      dia: "terça",
      horario: {
        "09:00": undefined,
        "10:00": undefined,
        "11:00": undefined,
        "14:00": undefined,
        "15:00": undefined,
        "16:00": undefined,
      },
    },
    {
      dia: "quarta",
      horario: {
        "09:00": undefined,
        "10:00": undefined,
        "11:00": undefined,
        "14:00": undefined,
        "15:00": undefined,
        "16:00": undefined,
      },
    },
    {
      dia: "quinta",
      horario: {
        "09:00": undefined,
        "10:00": undefined,
        "11:00": undefined,
        "14:00": undefined,
        "15:00": undefined,
        "16:00": undefined,
      },
    },
    {
      dia: "sexta",
      horario: {
        "09:00": undefined,
        "10:00": undefined,
        "11:00": undefined,
        "14:00": undefined,
        "15:00": undefined,
        "16:00": undefined,
      },
    },
  ];

  buscarDia(dia) {
    const buscandoDia = this.dias.findIndex(
      (diaBuscado) => diaBuscado.dia === dia
    );
    return buscandoDia;
  }

  buscarPaciente(dia, horario) {
    return this.dias[dia].horario[horario];
  }

  alterarHorario(dia, horario, alteracao) {
    this.dias[dia].horario[horario] = alteracao;
  }
  
}

module.exports = Agenda;