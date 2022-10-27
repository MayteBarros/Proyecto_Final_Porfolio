import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  imagenE: string;

  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombreE, this.descripcionE, this.imagenE);
    this.proyectoS.save(proyecto).subscribe(
      data =>{
        alert("El Proyecto fue añadido correctamente.");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló carga de Proyecto.");
        this.router.navigate(['']);
      }
    )
  }

}
