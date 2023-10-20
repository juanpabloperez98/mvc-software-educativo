import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/service/highlight.service';

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
  show1: boolean = true;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;

  // Variables de código 1
  code = `from flask_sqlalchemy import SQLAlchemy
  db = SQLAlchemy()
  class Hotel(db.Model):
      id = db.Column(db.Integer, primary_key=True)
      nombre = db.Column(db.String(100), nullable=False)
      ubicacion = db.Column(db.String(100), nullable=False)
      habitaciones_disponibles = db.Column(db.Integer, nullable=False)
  class Reserva(db.Model):
      id = db.Column(db.Integer, primary_key=True)
      hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'), nullable=False)
      huésped = db.Column(db.String(100), nullable=False)
      fecha_inicio = db.Column(db.Date, nullable=False)
      fecha_fin = db.Column(db.Date, nullable=False)
  `
  max_line = 13
  explain: string[] = [
    'Esta línea importa el objeto SQLAlchemy desde el paquete flask_sqlalchemy. SQLAlchemy es un ORM (Object-Relational Mapper) para Python, y Flask-SQLAlchemy proporciona herramientas útiles para integrar SQLAlchemy con Flask.',
    'Aquí estamos creando una instancia de SQLAlchemy, que será el punto central para trabajar con bases de datos a través de SQLAlchemy en nuestra aplicación Flask.',
    'Estamos definiendo una clase Hotel que hereda de db.Model. Esto nos permite tratar las instancias de esta clase como registros de una tabla Hotel en la base de datos.',
    'Esto define una columna id en la tabla Hotel. Es una columna de enteros y actúa como la clave primaria, lo que significa que cada valor en esta columna debe ser único.',
    'Esto define una columna nombre en la tabla Hotel, que almacenará el nombre del hotel. La columna es de tipo string con una longitud máxima de 100 caracteres. nullable=False indica que cada registro (fila) en la tabla debe tener un valor para esta columna.',
    'Similar a la columna nombre, esto define una columna ubicacion que almacenará la ubicación del hotel.',
    'Esto define una columna para almacenar el número de habitaciones disponibles en el hotel. Es de tipo entero y es obligatorio (no puede ser nulo).',
    'Estamos definiendo una segunda clase, Reserva, que también hereda de db.Model. Representará una tabla Reserva en la base de datos.',
    'Similar a la clase Hotel, definimos una columna id que actúa como la clave primaria.',
    'Aquí, estamos definiendo una columna hotel_id que almacenará la clave foránea. Esta columna se refiere a la columna id de la tabla Hotel, estableciendo así una relación entre las dos tablas. Esto significa que cada reserva estará asociada con un hotel específico.',
    'Esta columna almacena el nombre del huésped que hizo la reserva.',
    'Esta columna almacena la fecha de inicio de la reserva.',
    'Finalmente, esta columna almacena la fecha de finalización de la reserva.',
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

  // Variables de código 2
  code2 = `<h1>{{ hotel.nombre }}</h1>
  <p>Ubicación: {{ hotel.ubicacion }}</p>
  <p>Habitaciones Disponibles: {{ hotel.habitaciones_disponibles }}</p>
  `

  // Variables de código 3
  code3 = `<h1>Confirmación de Reserva</h1>
  <p>Huésped: {{ reserva.huésped }}</p>
  <p>Hotel: {{ reserva.hotel.nombre }}</p>
  <p>Desde: {{ reserva.fecha_inicio }} Hasta: {{ reserva.fecha_fin }}</p>
  `

  // Variables de código 4
  code4 = `from flask import Flask, render_template, request, redirect, url_for
  from modelos import db, Hotel, Reserva
  app = Flask(__name__)
  app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///hoteles.db'
  db.init_app(app)
  @app.route('/hotel/<int:hotel_id>')
  def hotel_detalle(hotel_id):
      hotel = Hotel.query.get(hotel_id)
      return render_template('hotel.html', hotel=hotel)
  @app.route('/reserva/<int:hotel_id>', methods=['POST'])
  def reserva_hotel(hotel_id):
      hotel = Hotel.query.get(hotel_id)
      if hotel.habitaciones_disponibles > 0:
          huésped = request.form['nombre_huesped']
          fecha_inicio = request.form['fecha_inicio']
          fecha_fin = request.form['fecha_fin']
          reserva = Reserva(hotel_id=hotel_id, huésped=huésped, fecha_inicio=fecha_inicio, fecha_fin=fecha_fin)
          db.session.add(reserva)
          hotel.habitaciones_disponibles -= 1
          db.session.commit()
          return render_template('reserva.html', reserva=reserva)
      else:
          return "No hay habitaciones disponibles."
  if __name__ == '__main__':
      app.run()
  `

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

  reset_vars_code2 = () => {
    this.start = false;
    this.finish = true;
    this.top_style = '';
    this.line_style = 'display:none';
    this.current_line = 1;
    this.top = 16;
    this.explain_txt = '';
    // ----------------------------------------------
    this.max_line = 3
    this.explain = [
      'explain1',
      'explain2',
      'explain3',
    ];
    this.lines = [
      'line1',
      'line2',
      'line3',
    ]
  }

  reset_vars_code3 = () => {

    this.start = false;
    this.finish = true;
    this.top_style = '';
    this.line_style = 'display:none';
    this.current_line = 1;
    this.top = 16;
    this.explain_txt = '';
    // ----------------------------------------------
    this.max_line = 4
    this.explain = [
      'explain1',
      'explain2',
      'explain3',
      'explain4',
    ];
    this.lines = [
      'line1',
      'line2',
      'line3',
      'line4',
    ]
  }

  reset_vars_code4 = () => {

    this.start = false;
    this.finish = true;
    this.top_style = '';
    this.line_style = 'display:none';
    this.current_line = 1;
    this.top = 16;
    this.explain_txt = '';
    // ----------------------------------------------
    this.max_line = 25
    this.explain = [
      'explain1',
      'explain2',
      'explain3',
      'explain4',
      'explain5',
      'explain6',
      'explain7',
      'explain8',
      'explain9',
      'explain10',
      'explain11',
      'explain12',
      'explain13',
      'explain14',
      'explain15',
    ];
    this.lines = [
      'line1',
      'line2',
      'line3',
      'line4',
      'line5',
      'line6',
      'line7',
      'line8',
      'line9',
      'line10',
      'line11',
      'line12',
      'line13',
      'line14',
      'line15',
    ]
  }

  add_explain(): void {
    this.explain_txt = this.explain[this.current_line - 1];
    this.explain_line = this.lines[this.current_line - 1];
  }

  onStart = (): void => {
    this.start = !this.start
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

  showView = (status: number): void => {

    switch(status){
      case 1:{
        this.show1 = false
        this.show2 = true
        this.reset_vars_code2()
        break
      }
      case 2:{
        this.show2 = false
        this.show3 = true
        this.reset_vars_code3()
        break
      }
      case 3:{
        this.show3 = false
        this.show4 = true
        this.reset_vars_code4()
        break
      }
    }
  }

}
