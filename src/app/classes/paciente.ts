export class Paciente {
  uid: string;
  name: string;
  room: string;
  bed: string;
  tareas: any[];

  constructor() {
    this.tareas = new Array<any>();
  }
}
