xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/listaRock.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

let bandas = xmlDoc.getElementsByTagName("banda");

tam = bandas.length;

function gerarWordSearch(){
  let y = 0;

  let wordSearch = new Array;

  wordSearch = [
    ['P','T','H','E','B','E','A','T','L','E','S','N','R','E','E','R','T','G'],
    ['H','A','E','R','O','S','M','I','T','H','T','R','F','D','S','O','E','S'],
    ['F','T','P','O','N','E','A','M','N','H','T','H','A','E','O','O','N','E'],
    ['E','M','I','R','O','N','M','A','I','D','E','N','I','R','O','E','O','T'],
    ['L','O','N','Y','Y','C','B','E','R','C','P','Y','I','O','O','H','I','R'],
    ['T','P','K','R','T','O','G','E','V','P','E','R','S','A','R','S','L','I'],
    ['O','O','F','R','N','L','A','O','A','F','N','T','I','D','T','H','N','Z'],
    ['N','H','L','S','D','D','E','E','N','S','A','Q','N','P','M','B','I','D'],
    ['J','O','O','R','D','P','O','R','A','V','S','U','I','R','C','S','A','N'],
    ['O','S','Y','W','E','L','E','O','T','I','D','E','E','E','G','H','I','U'],
    ['H','E','D','D','S','A','H','B','G','R','E','E','N','D','A','Y','O','H'],
    ['N','B','I','L','L','Y','I','D','O','L','I','N','A','E','P','G','E','B']
  ];

  document.write("<table border='3'>");
  for(let i = 0; i < 12; i++){
    document.write("<tr>");
    for(let j = 0; j < 18; j++){
      y++;
      document.write("<td id='" + y + "'>" + wordSearch[i][j] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");

  colorirPalavra();

}

function colorirPalavra(){
  for(let i = 0; i <= tam - 1; i++){
    let inicio = parseInt(bandas[i].getElementsByTagName("inicio")[0].childNodes[0].nodeValue);
    let fim = parseInt(bandas[i].getElementsByTagName("final")[0].childNodes[0].nodeValue);
    let incremento = parseInt(bandas[i].getElementsByTagName("incremento")[0].childNodes[0].nodeValue);
    let cor = bandas[i].getElementsByTagName("cor")[0].childNodes[0].nodeValue;

    console.log(inicio, fim, incremento, cor);

    for(let j = inicio; j <= fim; j += incremento){
      document.getElementById(j).style.background = cor;
    }
  }
}