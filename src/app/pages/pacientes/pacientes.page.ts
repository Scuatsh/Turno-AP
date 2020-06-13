import { Component, OnInit } from "@angular/core";
import { Paciente } from "src/app/classes/paciente";

@Component({
  selector: "app-pacientes",
  templateUrl: "./pacientes.page.html",
  styleUrls: ["./pacientes.page.scss"],
})
export class PacientesPage implements OnInit {
  pacientes: Array<Paciente>;
  search;
  constructor() {
    this.pacientes = new Array<Paciente>();
  }
  ngOnInit() {
    this.cargarPacientes();
  }
  ionViewWillEnter() {
    this.cargarPacientes();
  }
  cargarPacientes() {
    let data = JSON.parse(window.localStorage.getItem("pacientes"));
    if (data) {
      this.pacientes = data;
    }
  }
  eliminarPaciente(element){
    this.pacientes = this.pacientes.filter(obj => obj !== element);
    window.localStorage.setItem("pacientes", JSON.stringify(this.pacientes));
  }
}
