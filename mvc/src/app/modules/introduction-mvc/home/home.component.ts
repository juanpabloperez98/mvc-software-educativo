import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/service/highlight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  code1 = `from flask_sqlalchemy import SQLAlchemy

  db = SQLAlchemy()

  class Usuario(db.Model):
      id = db.Column(db.Integer, primary_key=True)
      nombre = db.Column(db.String(80), nullable=False)
      email = db.Column(db.String(120), unique=True, nullable=False)
      contrasena = db.Column(db.String(120), nullable=False)
      publicaciones = db.relationship('Publicacion', backref='autor', lazy=True)

  class Publicacion(db.Model):
      id = db.Column(db.Integer, primary_key=True)
      contenido = db.Column(db.Text, nullable=False)
      usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)
  `

  code2 = `<h1>{{ usuario.nombre }}</h1>
  <p>Email: {{ usuario.email }}</p>
  <h2>Publicaciones</h2>
  {% for publicacion in usuario.publicaciones %}
      <p>{{ publicacion.contenido }}</p>
  {% endfor %}`

  code3 = `<h1>Feed de Noticias</h1>
  {% for publicacion in publicaciones %}
      <p>{{ publicacion.autor.nombre }}: {{ publicacion.contenido }}</p>
  {% endfor %}
  `

  code4 = `from flask import Flask, render_template
  from modelos import db, Usuario, Publicacion

  app = Flask(__name__)
  app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///redsocial.db'
  db.init_app(app)

  @app.route('/perfil/<int:usuario_id>')
  def perfil(usuario_id):
      usuario = Usuario.query.get(usuario_id)
      return render_template('perfil.html', usuario=usuario)

  @app.route('/feed')
  def feed():
      publicaciones = Publicacion.query.all()
      return render_template('feed.html', publicaciones=publicaciones)

  if __name__ == '__main__':
      app.run()
  `

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

}
