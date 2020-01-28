var tablero;
var imagenDados = [];
var ficha = [];
var colorDeFicha = ["#d9020f","#0069b4","#3aaa35","#ffed00"];
var posicionInicialX = [ 67,  94, 122, 149, 475, 502, 529, 557,  67,  94, 122, 149, 475, 502, 529, 557];
var posicionInicialY = [140, 140, 140, 140, 140, 140, 140, 140, 501, 501, 501, 501, 501, 501, 501, 501];
//  1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16.
var posicionesGeneralesX = [390, 390, 390, 390, 390, 390, 390, 386, 404, 431, 459, 488, 516, 544, 572, 600, 600, 600, 572, 544, 516, 488, 459, 431, 404, 385, 390, 390, 390, 390, 390, 390, 390, 312, 234, 234, 234, 234, 234, 234, 234, 238, 220, 192, 164, 136, 108,  80,  51,  23,  23,  23,  51,  80, 108, 136, 164, 192, 220, 238, 234, 234, 234, 234, 234, 234, 234, 312];
var posicionesGeneralesY = [617, 588, 559, 530, 501, 472, 443, 416, 396, 401, 401, 401, 401, 401, 401, 401, 321, 240, 240, 240, 240, 240, 240, 240, 244, 226, 198, 169, 140, 111,  81,  53,  24,  24, 24,   53,  81, 111, 140, 169, 198, 226, 245, 240, 240, 240, 240, 240, 240, 240, 321, 401, 401, 401, 401, 401, 401, 401, 396, 416, 443, 472, 501, 530, 559, 588, 617, 617];
//  1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,  50,  51,  52,  53,  54,  55,  56,  57,  58,  59,  60,  61,  62,  63,  64,  65,  66,  67,  68.
var segurosX = [390, 488, 600, 488, 390, 312, 234, 136,  23, 136, 234, 312];
var segurosY = [501, 401, 321, 240, 140,  24, 140, 240, 321, 401, 501, 617];
//  5,  12,  17,  22,  29,  34,  39,  46,  51,  56,  63,  68.
var velocidad = 1;
var colorDeJugador = [];
var dado = [1, 1];
var jugador = ["", "", "", ""];
var turno = 0;
var tirardados = false;
var tirodedados, sonidodefondo, movimientodeficha, fichacomida;
////////////////////////////////////////////////////////////////////////////////

function preload() {
  //tablero = loadImage("/Assets/Images/Tablero.png");
  //for (var i = 0; i < 6; i++) {imagenDados[i] = loadImage("/Assets/Images/Dado " + (i + 1) + ".png");}
  switch (Jugador) {
    case 1: colorDeJugador = [ 0,  1,  2,  3]; jugador[0] = NombreUsuario; break;
    case 2: colorDeJugador = [ 4,  5,  6,  7]; jugador[1] = NombreUsuario; break;
    case 3: colorDeJugador = [ 8,  9, 10, 11]; jugador[2] = NombreUsuario; break;
    case 4: colorDeJugador = [12, 13, 14, 15]; jugador[3] = NombreUsuario; break;
  }
  let data = { sala: Sala, jugador: Jugador, usuario: NombreUsuario, imagen: ImagenUsuario };
  socket.emit("NuevoJugador", data);

  // soundFormats("mp3", "ogg", "wav");
  tirodedados = loadSound("/Assets/Sounds/TiroDados.wav");
  fichacomida = loadSound("/Assets/Sounds/FichaComida.ogg");
  sonidodefondo = loadSound("/Assets/Sounds/SonidoFondo.mp3");
  movimientodeficha = loadSound("/Assets/Sounds/MovimientoFicha.ogg");
}

function setup() {
  //var canvas = createCanvas(640, 640);
  //canvas.parent("TableroDelJuego");

  // for (var i = 0; i < 16; i++) {
  //   if (i >= 0 && i < 4) {ficha[i] = new Ficha(posicionInicialX[i], posicionInicialY[i], colorDeFicha[0], i, "Rojo");}
  //   else if (i >= 4 && i < 8) {ficha[i] = new Ficha(posicionInicialX[i], posicionInicialY[i], colorDeFicha[1], i, "Azul");}
  //   else if (i >= 8 && i < 12) {ficha[i] = new Ficha(posicionInicialX[i], posicionInicialY[i], colorDeFicha[2], i, "Verde");}
  //   else {ficha[i] = new Ficha(posicionInicialX[i], posicionInicialY[i], colorDeFicha[3], i, "Amarillo");}
  //   ficha[i].asignarPosiciones();
  // }
  sonidodefondo.setVolume(0.05);
  sonidodefondo.loop();
  sonidodefondo.play();
}

function draw() {
  // background(tablero);

  //textFont("monospace");
  textSize(15.5);
  textAlign(CENTER, CENTER);
  fill(255);
  text(jugador[0].toUpperCase(), 107,  26);
  text(jugador[1].toUpperCase(), 515,  26);
  text(jugador[2].toUpperCase(), 107, 617);
  text(jugador[3].toUpperCase(), 515, 617);

  imageMode(CENTER);
  image(imagenDados[dado[0] - 1], 297, 307, 50, 50);
  image(imagenDados[dado[1] - 1], 338, 343, 50, 50);
  var verificar = false;

  for (var i = 0; i < ficha.length; i++) {
    ficha[i].mostrar();
    if (ficha[i].prevPosicion != ficha[i].contadorDePosicion) {
      if (ficha[i].postx === ficha[i].x && ficha[i].posty === ficha[i].y) {
        if (ficha[i].contadorDePosicion > ficha[i].prevPosicion) {
          ficha[i].postx = ficha[i].posicionesX[ficha[i].prevPosicion + 1];
          ficha[i].posty = ficha[i].posicionesY[ficha[i].prevPosicion + 1];
          ficha[i].prevPosicion += 1;
        }
        else {
          ficha[i].postx = ficha[i].posicionesX[ficha[i].prevPosicion - 1];
          ficha[i].posty = ficha[i].posicionesY[ficha[i].prevPosicion - 1];
          ficha[i].prevPosicion -= 1;
        }
      }
    }
    if (ficha[i].x < ficha[i].postx && ficha[i].x != ficha[i].postx) {
      if (ficha[i].postx - ficha[i].x >= 6) ficha[i].x += 5;
      else ficha[i].x += velocidad;
      verificar = true;
    }
    if (ficha[i].y < ficha[i].posty && ficha[i].y != ficha[i].posty) {
      if (ficha[i].posty - ficha[i].y >= 6) ficha[i].y += 5;
      else ficha[i].y += velocidad;
      ficha[i].y += velocidad;
      verificar = true;
    }
    if (ficha[i].x > ficha[i].postx && ficha[i].x != ficha[i].postx) {
      if (ficha[i].x - ficha[i].postx >= 6) ficha[i].x -= 5;
      else ficha[i].x -= velocidad;
      verificar = true;
    }
    if (ficha[i].y > ficha[i].posty && ficha[i].y != ficha[i].posty) {
      if (ficha[i].y - ficha[i].posty >= 6) ficha[i].y -= 5;
      else ficha[i].y -= velocidad;
      verificar = true;
    }
    if (verificar && ficha[i].contadorDePosicion != 0 && ficha[i].x === ficha[i].posicionesX[ficha[i].contadorDePosicion] && ficha[i].y === ficha[i].posicionesY[ficha[i].contadorDePosicion]) {
      for (var j = 0; j < ficha.length; j++) {
        if (ficha[i].x === ficha[j].x && ficha[i].y === ficha[j].y) {
          if (ficha[j].color != ficha[i].color) {ComerUnaFicha(j, i); break;}
        }
      }
    }
    verificar = false;
  }

  drawSprites();
  if (turno === Jugador) {
    stroke("rgba(0,0,0,0.5)");
    strokeWeight(4);
    if (tirardados === false && turno != 0) {
      if (dadoseleccionado === 0 || dadoutilizado === 0) {line(276, 286, 308, 315); line(276, 315, 308, 286);}
      if (dadoseleccionado === 1 || dadoutilizado === 1) {line(317, 322, 349, 351); line(317, 351, 349, 322);}
    }
    switch (Jugador) {
      case 1: text("Mi Turno", 107,  15); DibujarElTemporizador(185, 202); break;
      case 2: text("Mi Turno", 515,  15); DibujarElTemporizador(440, 202); break;
      case 3: text("Mi Turno", 107, 600); DibujarElTemporizador(185, 440); break;
      case 4: text("Mi Turno", 515, 600); DibujarElTemporizador(440, 440); break;
    }
  }
  else {if (temporizador) {clearInterval(temporizador);}}

  if (turno === 0) {textSize(36); fill(0); text("Esperando Jugadores...", 313, 325);}
}

socket.on("AsignarElementos", function(data) {
  data.map(function(elemento, index) {
    if (elemento.sala === Sala) {
      if (Jugadores === 2) {
        switch (elemento.jugador) {
          case 1: jugador[0] = elemento.usuario; document.getElementById("ImagenUsuario1").style.backgroundImage = `url("/Assets/UserImages/${elemento.imagen}")`; break;
          case 2: jugador[1] = elemento.usuario; document.getElementById("ImagenUsuario2").style.backgroundImage = `url("/Assets/UserImages/${elemento.imagen}")`;
          turno = 1;
          tirardados = true;
          ActivarTemporizador();
          break;
        }
      }
      else {
        switch (elemento.jugador) {
          case 1: jugador[0] = elemento.usuario; document.getElementById("ImagenUsuario1").style.backgroundImage = `url("/Assets/UserImages/${elemento.imagen}")`; break;
          case 2: jugador[1] = elemento.usuario; document.getElementById("ImagenUsuario2").style.backgroundImage = `url("/Assets/UserImages/${elemento.imagen}")`; break;
          case 3: jugador[2] = elemento.usuario; document.getElementById("ImagenUsuario3").style.backgroundImage = `url("/Assets/UserImages/${elemento.imagen}")`; break;
          case 4: jugador[3] = elemento.usuario; document.getElementById("ImagenUsuario4").style.backgroundImage = `url("/Assets/UserImages/${elemento.imagen}")`;
          turno = 1;
          tirardados = true;
          ActivarTemporizador();
          break;
        }
      }
    }
  });
});

// Al Meter Ficha En La Final Contar 10.
// Antes De Pasar El Turno Verficar Dobles Con Los Dados.

var primertiro = true;
var volveraseleccionar = false;
var seleccionarafuerza = false;
var cantidaddemovimientos = 0;
var dadoseleccionado = 0, dadoutilizado = 3;

var tiempomaximo = 150;
var temporizador, tiemporestante;

function DibujarElTemporizador(x, y) {
  textFont("monospace");
  textSize(15.5);
  textAlign(CENTER, CENTER);
  fill(150);
  text("00:" + nf(tiemporestante, 2), x,  y);
}

function ActivarTemporizador() {
  console.log("ActivarTemporizador");
  if (temporizador) {
    console.log("Hay Temporizador");
    clearInterval(temporizador);
  }
  tiemporestante = tiempomaximo;
  temporizador = setInterval(DescontarTiempo, 1000);
}

function DescontarTiempo() {
  console.log("DescontarTiempo");
  tiemporestante -= 1;
  if (turno === Jugador && tiemporestante === 0) {
    console.log("TemporizadorAcabado");
    tiemporestante = tiempomaximo;
    PasarElTurno();
  }
}

function mousePressed() {
  if (turno === Jugador) {
    if (dadoutilizado != 0 && dadoutilizado != 1 && seleccionarafuerza === false) SeleccionarDado();
    if (tirardados === true && turno === Jugador) TirarLosDados();
    if (primertiro === true) EvaluarPrimerTiro();
    if (turno === Jugador) {
      if (ficha[colorDeJugador[0]].contadorDePosicion === 0 && ficha[colorDeJugador[1]].contadorDePosicion === 0 && ficha[colorDeJugador[2]].contadorDePosicion === 0 && ficha[colorDeJugador[3]].contadorDePosicion === 0) {
        console.log(Jugador + ": Regla 1");
        if (dado[0] === 5 || dado[1] === 5) {
          var idficha = VerificarFichaSeleccionada();
          if (idficha || idficha === 0) {
            MoverUnaFicha(idficha, 1);
            // if (volveraseleccionar === false) PasarElTurno();
            volveraseleccionar = true;
          }
        }
        else {
          PasarElTurno();
        }
      }
      else if (cantidaddemovimientos === 1 && volveraseleccionar === true && dado[0] === 5 && dado[1] === 5) {
        console.log(Jugador + ": Regla 2");
        var idficha = VerificarFichaSeleccionada();
        if (idficha || idficha === 0) {
          if (ficha[idficha].contadorDePosicion === 0) {
            MoverUnaFicha(idficha, 1);
            PasarElTurno();
            volveraseleccionar = false;
          }
        }
      }
      else if (dado[0] === 5 || dado[1] === 5) {
        if (ficha[colorDeJugador[0]].contadorDePosicion === 0 || ficha[colorDeJugador[1]].contadorDePosicion === 0 || ficha[colorDeJugador[2]].contadorDePosicion === 0 || ficha[colorDeJugador[3]].contadorDePosicion === 0) {
          var idficha = VerificarFichaSeleccionada();
          if (idficha || idficha === 0) {
            if (ficha[idficha].contadorDePosicion === 0 && volveraseleccionar === false) {
              MoverUnaFicha(idficha, 1);
              volveraseleccionar = true;
            }
            else if (ficha[idficha].contadorDePosicion != 0 && volveraseleccionar === true) {
              var valorDeDados = dado[0] + dado[1] - 5;
              MoverUnaFicha(idficha, valorDeDados);
              PasarElTurno();
              volveraseleccionar = false;
            }
          }
        }
        else {
          var idficha = VerificarFichaSeleccionada();
          if (idficha || idficha === 0) {
            if (volveraseleccionar === false) {
              MoverUnaFicha(idficha, dado[dadoseleccionado]);
              volveraseleccionar = true;
            }
            else if (volveraseleccionar === true) {
              MoverUnaFicha(idficha, dado[dadoseleccionado]);
              PasarElTurno();
              volveraseleccionar = false;
            }
          }
        }
      }
      else {
        var idficha = VerificarFichaSeleccionada();
        if (idficha || idficha === 0) {
          if (volveraseleccionar === false) {
            if (ficha[idficha].contadorDePosicion != 0) {
              MoverUnaFicha(idficha, dado[dadoseleccionado]);
              volveraseleccionar = true;
            }
          }
          else if (volveraseleccionar === true) {
            MoverUnaFicha(idficha, dado[dadoseleccionado]);
            PasarElTurno();
            volveraseleccionar = false;
          }
        }
      }
    }
  }
}

function EvaluarPrimerTiro() {
  console.log(Jugador + ": EvaluarPrimerTiro");
  primertiro = false;
  if (dado[0] === 5 && dado[1] === 5) volveraseleccionar = true;
}

function CrearAnimacionTirarDado(jugador) {
  var sprite, x, y;
  tirodedados.play();
  if (jugador === 1) {sprite = createSprite(191, 197); x = 2.1; y = 2.5;}
  else if (jugador === 2) {sprite = createSprite(432, 197); x = -2.1; y = 2.5;}
  else if (jugador === 3) {sprite = createSprite(191, 445); x = 2.1; y = -2.5;}
  else if (jugador === 4) {sprite = createSprite(432, 445); x = -2.1; y = -2.5;}
  sprite.addAnimation("/Assets/Images/Dado 1.png", "/Assets/Images/Dado 6.png");
  sprite.scale = 0.4;
  sprite.velocity.x = x;
  sprite.velocity.y = y;
  sprite.rotateToDirection = true;
  sprite.life = 45;
}

function TirarLosDados() {
  console.log(Jugador + ": TirarLosDados");
  CrearAnimacionTirarDado(Jugador);
  dado[0] = ceil(random(6));
  dado[1] = ceil(random(6));
  if (dado[0] === 5) {
    if (ficha[colorDeJugador[0]].contadorDePosicion === 0 || ficha[colorDeJugador[1]].contadorDePosicion === 0 || ficha[colorDeJugador[2]].contadorDePosicion === 0 || ficha[colorDeJugador[3]].contadorDePosicion === 0) {
      seleccionarafuerza = true;
      dadoseleccionado = 0;
    }
  }
  if (dado[1] === 5) {
    if (ficha[colorDeJugador[0]].contadorDePosicion === 0 || ficha[colorDeJugador[1]].contadorDePosicion === 0 || ficha[colorDeJugador[2]].contadorDePosicion === 0 || ficha[colorDeJugador[3]].contadorDePosicion === 0) {
      seleccionarafuerza = true;
      dadoseleccionado = 1;
    }
  }
  tirardados = false;
  let data = { sala: Sala, dado1: dado[0], dado2: dado[1] };
  socket.emit("TiroDeDados1", data);
}

function SeleccionarDado() {
  var d = dist(mouseX, mouseY, 297, 307);
  var d2 = dist(mouseX, mouseY, 338, 343);
  if (d < 20) {console.log("Dado 1 Seleccionado."); dadoseleccionado = 0;}
  else if (d2 < 20) {console.log("Dado 2 Seleccionado."); dadoseleccionado = 1;}
}

socket.on("TiroDeDados2", function(data) {
  if (data.sala === Sala) {
    dado[0] = data.dado1;
    dado[1] = data.dado2;
  }
});

function PasarElTurno() {
  console.log(Jugador + ": PasarElTurno");
  dadoseleccionado = 0;
  dadoutilizado = 3;
  seleccionarafuerza = false;
  if (turno === Jugadores) turno = 1;
  else turno += 1;
  let data = { sala: Sala, turno, jugador: Jugador };
  socket.emit("PasarElTurno1", data);
}

socket.on("PasarElTurno2", function(data) {
  if (data.sala === Sala && data.jugador != Jugador) {
    turno = data.turno;
    if (turno === Jugador) {
      tirardados = true;
      ActivarTemporizador();
    }
    else {
      if (temporizador) {
        console.log("Hay Temporizador");
        clearInterval(temporizador);
      }
    }
  }
});

function VerificarFichaSeleccionada() {
  console.log(Jugador + ": VerificarFichaSeleccionada");
  for (var i = 0; i < ficha.length; i++) {
    var d = dist(mouseX, mouseY, ficha[i].x, ficha[i].y);
    if (d < ficha[i].r) {
      if (ficha[i].id >= colorDeJugador[0] && ficha[i].id <= colorDeJugador[3] && ficha[i].contadorDePosicion != 72) {
        return i;
        break;
      }
    }
  }
}

function MoverUnaFicha(id, avance) {
  console.log(Jugador + ": MoverUnaFicha");
  movimientodeficha.play();
  cantidaddemovimientos += 1;
  dadoutilizado = dadoseleccionado;
  if (dadoutilizado === 0) dadoseleccionado = 1;
  else dadoseleccionado = 0;
  let data = { sala: Sala, i: id, avance };
  socket.emit("MoverUnaficha1", data);
}

socket.on("MoverUnaficha2", function(data) {
  if (data.sala === Sala) {
    ficha[data.i].clickEnFicha(data.avance);
  }
});

function ComerUnaFicha(j, k) {
  var fueradeseguro = true;
  for (var i = 0; i < segurosX.length; i++) {
    if (segurosX[i] === ficha[j].x && segurosY[i] === ficha[j].y) {fueradeseguro = false;}
  }
  if (ficha[k].color === "Rojo" && ficha[j].x === segurosX[6] && ficha[j].y === segurosY[6]) {fueradeseguro = true;}
  if (ficha[k].color === "Azul" && ficha[j].x === segurosX[3] && ficha[j].y === segurosY[3]) {fueradeseguro = true;}
  if (ficha[k].color === "Verde" && ficha[j].x === segurosX[9] && ficha[j].y === segurosY[9]) {fueradeseguro = true;}
  if (ficha[k].color === "Amarillo" && ficha[j].x === segurosX[0] && ficha[j].y === segurosY[0]) {fueradeseguro = true;}
  if (fueradeseguro) {
    fichacomida.play();
    ficha[j].contadorDePosicion = 0;
    ficha[j].postx = posicionInicialX[j];
    ficha[j].posty = posicionInicialY[j];
    ficha[j].prevPosicion = ficha[j].contadorDePosicion;
  }
}
