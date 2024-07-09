// Relatório de Estudo Diário

var xValues = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
var yValues = [1, 2, 4, 6, 6.5];
var barColors = ["blue", "pink", "yellow", "green", "orange"];
var disciplines = ["Matemática", "Português", "Ciências", "História", "Geografia"];

new Chart("byChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Relatório de Estudo Diário"
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var index = tooltipItem.index;
          return disciplines[index];
        }
      }
    }
  }
});

// Horas de Estudo por Semana e Disciplina 

var semanas = ["01/7 - 07/07", "08/07 - 14/07", "15/07 - 21/07 - 28/07", "29/07 - 31/07"];
var horasMatematica = [5, 10, 7, 8]; // Horas de Matemática por semana
var horasPortugues = [8, 7, 6, 9]; // Horas de Português por semana
var horasHistoria = [4, 5, 6, 3]; // Horas de História por semana
var horasGeografia = [6, 8, 7, 5]; // Horas de Geografia por semana
var horasCiencias = [3, 4, 5, 6]; // Horas de Ciências por semana

new Chart("myChart", {
  type: "bar",
  data: {
    labels: semanas,
    datasets: [
      {
        label: 'Matemática',
        backgroundColor: "pink",
        data: horasMatematica
      },
      {
        label: 'Português',
        backgroundColor: "blue",
        data: horasPortugues
      },
      {
        label: 'História',
        backgroundColor: "indigo",
        data: horasHistoria
      },
      {
        label: 'Geografia',
        backgroundColor: "green",
        data: horasGeografia
      },
      {
        label: 'Ciências',
        backgroundColor: "orange",
        data: horasCiencias
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Horas de Estudo por Semana e Disciplina"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// Resumo Total de Horas de Estudo por Mês
var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var horasMatematica = [30, 40, 35, 50, 45, 55, 60, 70, 75, 80, 85, 90]; // Horas de Matemática por mês
var horasPortugues = [25, 35, 30, 45, 40, 50, 55, 65, 70, 75, 80, 85]; // Horas de Português por mês
var horasHistoria = [20, 25, 28, 35, 30, 40, 45, 50, 55, 60, 65, 70]; // Horas de História por mês
var horasGeografia = [15, 20, 25, 30, 25, 35, 40, 45, 50, 55, 60, 65]; // Horas de Geografia por mês
var horasCiencias = [10, 15, 20, 25, 20, 30, 35, 40, 45, 50, 55, 60]; // Horas de Ciências por mês

new Chart("tyChart", {
  type: "line",
  data: {
    labels: meses,
    datasets: [
      {
        label: 'Matemática',
        borderColor: "blue",
        fill: false,
        data: horasMatematica
      },
      {
        label: 'Português',
        borderColor: "pink",
        fill: false,
        data: horasPortugues
      },
      {
        label: 'História',
        borderColor: "yellow",
        fill: false,
        data: horasHistoria
      },
      {
        label: 'Geografia',
        borderColor: "green",
        fill: false,
        data: horasGeografia
      },
      {
        label: 'Ciências',
        borderColor: "orange",
        fill: false,
        data: horasCiencias
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Resumo Total de Horas de Estudo por Mês"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});