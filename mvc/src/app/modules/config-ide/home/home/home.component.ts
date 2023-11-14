import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/service/highlight.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private highlightService: HighlightService,
  ) { }

  code1 = `def suma(a, b):
  return a + b
def resta(a, b):
  return a - b
def multiplicacion(a, b):
  return a * b
def division(a, b):
  if b != 0:
      return a / b
  else:
      return "Error: División por cero"
operacion = input("Ingrese la operación (+, -, *, /): ")
num1 = float(input("Ingrese el primer número: "))
num2 = float(input("Ingrese el segundo número: "))
# Realizar la operación seleccionada
if operacion == "+":
  resultado = suma(num1, num2)
elif operacion == "-":
  resultado = resta(num1, num2)
elif operacion == "*":
  resultado = multiplicacion(num1, num2)
elif operacion == "/":
  resultado = division(num1, num2)
else:
  resultado = "Operación no válida"
# Imprimir el resultado
print(f"Resultado: {resultado}")`

  code2 = `def celsius_a_fahrenheit(celsius):
return (celsius * 9/5) + 32
temperatura_celsius = float(input("Ingrese la temperatura en grados Celsius: "))
temperatura_fahrenheit = celsius_a_fahrenheit(temperatura_celsius)
print(f"La temperatura en grados Fahrenheit es: {temperatura_fahrenheit}")`

  code3 = `from flask import Flask
  app = Flask(__name__)
  @app.route('/')
  def index():
      return '¡Bienvenido a mi primera aplicación web con Flask!'
  if __name__ == '__main__':
      app.run(debug=True)`

  code4 = `from flask import Flask, request
  app = Flask(__name__)
  @app.route('/saludo/<nombre>')
  def saludo(nombre):
      return f'¡Hola, {nombre}! Bienvenido a mi aplicación web con Flask.'
  if __name__ == '__main__':
      app.run(debug=True)`

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

}
