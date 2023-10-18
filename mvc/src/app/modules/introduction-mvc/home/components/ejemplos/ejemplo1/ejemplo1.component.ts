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
  show1: boolean = true;
  show2: boolean = false;
  show3: boolean = false;

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
  ];

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

  }

  add_explain(): void {
    this.explain_txt = this.explain[this.current_line - 1];
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
    console.log(this.current_line);
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
    }
  }

}
