import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Paciente } from "src/app/classes/paciente";


@Component({
  selector: "app-detail-paciente",
  templateUrl: "./detail-paciente.page.html",
  styleUrls: ["./detail-paciente.page.scss"],
})
export class DetailPacientePage implements OnInit {
  public uid;
  public selected: Paciente;
  public pacientes: Array<Paciente>;
  constructor(private activatedRoute: ActivatedRoute) {
    this.uid = this.activatedRoute.snapshot.paramMap.get("uid");
    this.cargar();
  }

  ngOnInit() {}

  cargar() {
    this.pacientes = new Array<Paciente>();
    let data = JSON.parse(window.localStorage.getItem("pacientes"));
    if (data) {
      this.pacientes = data;
      this.selected = this.pacientes.filter((usr) => usr.uid == this.uid)[0];
    }
  }

  ionViewWillEnter() {
    this.cargar();
  }

  eliminarPrestacion(element){
    this.selected.tareas = this.selected.tareas.filter(obj => obj !== element);
    let data = this.pacientes.filter((usr) => usr.uid != this.uid)
    data.push(this.selected);
    window.localStorage.setItem("pacientes", JSON.stringify(this.pacientes));
  }
}
