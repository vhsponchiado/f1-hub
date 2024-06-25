import moment from "moment-timezone";
import { format } from "date-fns";

function getAtualYear() {
  var dataAtual = new Date();
  var anoAtual = dataAtual.getFullYear();
  return anoAtual;
}

function getTimeInBrazil(time: string, timeZone: string = "America/Sao_Paulo", includeSeconds: boolean = false) {
  const utcTime = time;

  const brasiliaMoment = moment.utc(utcTime, "HH:mm:ss").tz(timeZone);

  const formattedFormat = includeSeconds ? "HH:mm:ss" : "HH:mm";
  const formattedTime = brasiliaMoment.format(formattedFormat);

  return formattedTime;
}

function getFormattedDateInBrazil(date: string, timeZone: string = "America/Sao_Paulo") {
  const dataOriginal = date;

  const dataDate = new Date(dataOriginal);

  const dataFormatada = format(dataDate, "dd/MM/yyyy");

  return dataFormatada;
}

function getCurrentDate(): string {
  const dataAtual = new Date();
  
  const ano = dataAtual.getFullYear();
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
  const dia = String(dataAtual.getDate()).padStart(2, '0');

  const dataFormatada = `${ano}-${mes}-${dia}`;

  return dataFormatada;
}




export {
  getAtualYear,
  getTimeInBrazil,
  getFormattedDateInBrazil,
  getCurrentDate,

};