import React from "react"

import Sketch from "react-p5"

import Tablero from '../images/Tablero.png'
import Dado1 from '../images/Dado_1.png'
import Dado2 from '../images/Dado_2.png'
import Dado3 from '../images/Dado_3.png'
import Dado4 from '../images/Dado_4.png'
import Dado5 from '../images/Dado_5.png'
import Dado6 from '../images/Dado_6.png'

//import TiroDeDados from '../soundtracks/TiroDados.wav'
//import FichaComida from '../soundtracks/FichaComida.ogg'
//import SonidoDeFondo from '../soundtracks/SonidoFondo.mp3'
//import MovimientoDeFicha from '../soundtracks/MovimientoFicha.ogg'

const PlaySketch = () => {

   let ImagenDados = []
   let BackgroundImage

   let ficha = []
   let colorDeFicha = ["#d9020f", "#0069b4", "#3aaa35", "#ffed00"]
   let posicionInicialX = [ 75, 106, 137, 168, 534, 565, 595, 626, 75, 106, 137, 168, 534, 565, 595, 626]
   let posicionInicialY = [158, 158, 158, 158, 158, 158, 158, 158, 564, 564, 564, 564, 564, 564, 564, 564]
                         //  1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16.

   let dado = [1, 1]

   const preload = p5 => {
      BackgroundImage = p5.loadImage(Tablero)
      
      ImagenDados[0] = p5.loadImage(Dado1)
      ImagenDados[1] = p5.loadImage(Dado2)
      ImagenDados[2] = p5.loadImage(Dado3)
      ImagenDados[3] = p5.loadImage(Dado4)
      ImagenDados[4] = p5.loadImage(Dado5)
      ImagenDados[5] = p5.loadImage(Dado6)

      //SonidoDeFondo = p5Sound.loadSound(SonidoDeFondo)

   }

   const setup = (p5, canvasParentRef) => {
      p5.createCanvas(720, 720).parent(canvasParentRef) // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
   
      for (var i = 0; i < 16; i++) {
         if (i >= 0 && i < 4) { ficha[i] = new Ficha(p5, posicionInicialX[i], posicionInicialY[i], colorDeFicha[0], i, "Rojo") }
         else if (i >= 4 && i < 8) { ficha[i] = new Ficha(p5, posicionInicialX[i], posicionInicialY[i], colorDeFicha[1], i, "Azul") }
         else if (i >= 8 && i < 12) { ficha[i] = new Ficha(p5, posicionInicialX[i], posicionInicialY[i], colorDeFicha[2], i, "Verde") }
         else { ficha[i] = new Ficha(p5, posicionInicialX[i], posicionInicialY[i], colorDeFicha[3], i, "Amarillo") }
         ficha[i].asignarPosiciones()
      }
   }

   const draw = p5 => {
      p5.imageMode(p5.CORNER)
      p5.background(BackgroundImage)
      p5.textFont('monospace')

      p5.textSize(15.5)
      p5.textAlign(p5.CENTER, p5.CENTER)
      p5.fill(255)
      p5.text('IVENS LEOS', 120, 29)
      p5.text('IVENS LEOS', 580, 29)
      p5.text('IVENS LEOS', 120, 694)
      p5.text('IVENS LEOS', 580, 694)

      p5.imageMode(p5.CENTER)
      p5.image(ImagenDados[dado[0] - 1], 336, 348, 50, 50)
      p5.image(ImagenDados[dado[1] - 1], 377, 384, 50, 50)

      for (var i = 0; i < ficha.length; i++) {
         ficha[i].mostrar()
      }
      
   }

   const mousePressed = p5 => {
      VerificarFichaSeleccionada(p5)
   }

   function Ficha(p5, x, y, colorfondo, id, color) {
      this.x = x
      this.y = y
      this.r = 13
      this.colorfondo = colorfondo
      this.id = id
      this.postx = x
      this.posty = y
      this.posicionesX = ''
      this.posicionesY = ''
      this.contadorDePosicion = 0
      this.prevPosicion = 0
      this.color = color

      this.mostrar = function () {
         p5.strokeWeight(1)
         p5.stroke("black")
         p5.fill(this.colorfondo)
         p5.ellipse(this.x, this.y, this.r * 2)
      }

      this.clickEnFicha = function (avance) {
         var proxavance = this.contadorDePosicion + avance
         if (proxavance > 72) {
            proxavance -= 72
            if (proxavance <= 7) {
               this.contadorDePosicion = (72 - proxavance)
               // Continuara...
            }
         }
         else { this.contadorDePosicion += avance }
      }

      this.asignarPosiciones = function () {
         if (this.id >= 0 && this.id <= 3) {
            this.posicionesX = [0, 234, 234, 234, 238, 220, 192, 164, 136, 108, 80, 51, 23, 23, 23, 51, 80, 108, 136, 164, 192, 220, 238, 234, 234, 234, 234, 234, 234, 234, 312, 390, 390, 390, 390, 390, 390, 390, 386, 404, 431, 459, 488, 516, 544, 572, 600, 600, 600, 572, 544, 516, 488, 459, 431, 404, 385, 390, 390, 390, 390, 390, 390, 390, 312, 312, 312, 312, 312, 312, 312, 312, 312]
            this.posicionesY = [0, 140, 169, 198, 226, 245, 240, 240, 240, 240, 240, 240, 240, 321, 401, 401, 401, 401, 401, 401, 401, 396, 416, 443, 472, 501, 530, 559, 588, 617, 617, 617, 588, 559, 530, 501, 472, 443, 416, 396, 401, 401, 401, 401, 401, 401, 401, 321, 240, 240, 240, 240, 240, 240, 240, 244, 226, 198, 169, 140, 111, 81, 53, 24, 24, 53, 81, 111, 140, 169, 198, 231, 268]
            //  0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,  50,  51,  52,  53,  54,  55,  56,  57,  58,  59,  60,  61,  62,  63,  64,  65,  66,  67,  68,  69,  70,  71,  72
         }
         else if (this.id >= 4 && this.id <= 7) {
            this.posicionesX = [0, 488, 459, 431, 404, 385, 390, 390, 390, 390, 390, 390, 390, 312, 234, 234, 234, 234, 234, 234, 234, 238, 220, 192, 164, 136, 108, 80, 51, 23, 23, 23, 51, 80, 108, 136, 164, 192, 220, 238, 234, 234, 234, 234, 234, 234, 234, 312, 390, 390, 390, 390, 390, 390, 390, 386, 404, 431, 459, 488, 516, 544, 572, 600, 600, 572, 544, 516, 488, 459, 431, 399, 363]
            this.posicionesY = [0, 240, 240, 240, 244, 226, 198, 169, 140, 111, 81, 53, 24, 24, 24, 53, 81, 111, 140, 169, 198, 226, 245, 240, 240, 240, 240, 240, 240, 240, 321, 401, 401, 401, 401, 401, 401, 401, 396, 416, 443, 472, 501, 530, 559, 588, 617, 617, 617, 588, 559, 530, 501, 472, 443, 416, 396, 401, 401, 401, 401, 401, 401, 401, 321, 321, 321, 321, 321, 321, 321, 321, 321]
            //  0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,  50,  51,  52,  53,  54,  55,  56,  57,  58,  59,  60,  61,  62,  63,  64,  65,  66,  67,  68,  69,  70,  71,  72
         }
         else if (this.id >= 8 && this.id <= 11) {
            this.posicionesX = [0, 136, 164, 192, 220, 238, 234, 234, 234, 234, 234, 234, 234, 312, 390, 390, 390, 390, 390, 390, 390, 386, 404, 431, 459, 488, 516, 544, 572, 600, 600, 600, 572, 544, 516, 488, 459, 431, 404, 385, 390, 390, 390, 390, 390, 390, 390, 312, 234, 234, 234, 234, 234, 234, 234, 238, 220, 192, 164, 136, 108, 80, 51, 23, 23, 51, 80, 108, 136, 164, 192, 224, 261]
            this.posicionesY = [0, 401, 401, 401, 396, 416, 443, 472, 501, 530, 559, 588, 617, 617, 617, 588, 559, 530, 501, 472, 443, 416, 396, 401, 401, 401, 401, 401, 401, 401, 321, 240, 240, 240, 240, 240, 240, 240, 244, 226, 198, 169, 140, 111, 81, 53, 24, 24, 24, 53, 81, 111, 140, 169, 198, 226, 245, 240, 240, 240, 240, 240, 240, 240, 321, 321, 321, 321, 321, 321, 321, 321, 321]
            //  0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,  50,  51,  52,  53,  54,  55,  56,  57,  58,  59,  60,  61,  62,  63,  64,  65,  66,  67,  68,  69,  70,  71,  72
         }
         else {
            this.posicionesX = [0, 390, 390, 390, 386, 404, 431, 459, 488, 516, 544, 572, 600, 600, 600, 572, 544, 516, 488, 459, 431, 404, 385, 390, 390, 390, 390, 390, 390, 390, 312, 234, 234, 234, 234, 234, 234, 234, 238, 220, 192, 164, 136, 108, 80, 51, 23, 23, 23, 51, 80, 108, 136, 164, 192, 220, 238, 234, 234, 234, 234, 234, 234, 234, 312, 312, 312, 312, 312, 312, 312, 312, 312]
            this.posicionesY = [0, 501, 472, 443, 416, 396, 401, 401, 401, 401, 401, 401, 401, 321, 240, 240, 240, 240, 240, 240, 240, 244, 226, 198, 169, 140, 111, 81, 53, 24, 24, 24, 53, 81, 111, 140, 169, 198, 226, 245, 240, 240, 240, 240, 240, 240, 240, 321, 401, 401, 401, 401, 401, 401, 401, 396, 416, 443, 472, 501, 530, 559, 588, 617, 617, 588, 559, 530, 501, 472, 443, 411, 373]
            //  0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,  50,  51,  52,  53,  54,  55,  56,  57,  58,  59,  60,  61,  62,  63,  64,  65,  66,  67,  68,  69,  70,  71,  72
         }
      }
   }

   function VerificarFichaSeleccionada(p5) {
      for (var i = 0; i < ficha.length; i++) {
         var d = p5.dist(p5.mouseX, p5.mouseY, ficha[i].x, ficha[i].y);
         if (d < ficha[i].r) {
            // if (ficha[i].id >= colorDeJugador[0] && ficha[i].id <= colorDeJugador[3] && ficha[i].contadorDePosicion != 72) {
            //    return alert(i)
            // }
            // La De Arriba Para Verificar Que Solo Pueda Seleccionar Las Fichas De Un Color...
            return console.log(i)
         }
      }
   }

   return <Sketch setup={setup} draw={draw} preload={preload} mousePressed={mousePressed} className="mx-auto mt-3" />
}

export default PlaySketch