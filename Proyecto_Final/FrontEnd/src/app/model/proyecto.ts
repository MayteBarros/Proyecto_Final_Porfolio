export class Proyecto {
  id: number;
  nombreE: string;
  descripcionE: string;
  imagenE: string;

  constructor(nombreE: string, descripcionE: string, imagenE: string){
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.imagenE = imagenE;
  }
}
