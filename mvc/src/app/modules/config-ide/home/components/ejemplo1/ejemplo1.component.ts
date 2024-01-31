import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/service/highlight.service';


import Swal from 'sweetalert2';


@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.scss']
})
export class Ejemplo1Component implements OnInit {

  // Variables 1
  start: boolean = false;
  finish: boolean = true;
  top_style: string = '';
  line_style: string = 'display:none';
  current_line: number = 1;
  top = 16;
  explain_txt: string = '';
  explain_line: string = '';
  valueInput: string = '';
  showValueInput: boolean = false;

  // Variables de código 1
  code = `inicio = int(input("Ingrese el número de inicio: "))
  fin = int(input("Ingrese el número de fin: "))
  print(f"Números primos en el rango de {inicio} a {fin}:")
  for num in range(inicio, fin + 1):
      if num < 2:
          continue
      es_primo = True
      for i in range(2, int(num**0.5) + 1):
          if num % i == 0:
              es_primo = False
              break
      if es_primo:
          print(num, end=' ')
  `
  max_line = 13
  explain: string[] = [
    'Solicita al usuario que ingrese el número de inicio del rango y almacena el valor como un entero en la variable inicio.',
    'Solicita al usuario que ingrese el número de fin del rango y almacena el valor como un entero en la variable fin.',
    'Imprime un mensaje indicando el rango de números primos que se mostrarán, utilizando los valores ingresados por el usuario para el inicio y el fin del rango.',
    'Inicia un bucle que itera a través de cada número en el rango desde inicio hasta fin (inclusive) y asigna cada número a la variable num.',
    'Verifica si el número actual (num) es menor que 2.',
    'Si el número es menor que 2, salta a la siguiente iteración del bucle sin ejecutar las líneas restantes, ya que los números menores a 2 no son primos.',
    'Supone que el número actual (num) es primo hasta que se demuestre lo contrario.',
    'Inicia un bucle interno que itera desde 2 hasta la raíz cuadrada de num (más 1).',
    'Verifica si num es divisible por i.',
    'Si num es divisible por i, se actualiza la variable ',
    'indicando que el número no es primo.',
    'Sale del bucle interno, ya que no es necesario verificar más divisores si ya se encontró uno.',
    'Verifica si es_primo sigue siendo True después del bucle interno.',
    'Si el número es primo, lo imprime en la misma línea, separado por un espacio. El argumento end=" " se utiliza para evitar que se imprima un salto de línea después de cada número, manteniendo todos los números en la misma línea.',
  ];
  lines: string[] = [
    "",
    "db = SQLAlchemy()",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void {
    this.top_style = `${top}px`;
  }


  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  // Funciones
  add_explain(): void {
    this.explain_txt = this.explain[this.current_line - 1];
    this.explain_line = this.lines[this.current_line - 1];
  }

  onStart = (): void => {
    this.start = !this.start
    this.showValueInput = !this.showValueInput
    this.line_style = 'display:inline-block';
    this.add_explain();
  }

  back = (): void => {

    if (this.current_line <= 1) {
      return
    } else {
      this.top -= 24;
      this.top_style = `${this.top}px`;
      this.current_line--;
      this.add_explain();
    }

  }

  validateNextInputValue() {
    if(this.showValueInput && this.valueInput == ""){

    }
  }

  next = (): void => {
    if (this.current_line >= this.max_line) {
      this.finish = false;
      return;
    }
    if (this.current_line >= this.max_line - 1) {
      this.finish = false;
    }
    this.top += 24;
    this.top_style = `${this.top}px`;
    this.current_line++;
    this.add_explain();
  }

}
