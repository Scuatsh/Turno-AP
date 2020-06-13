import { Component, OnInit } from "@angular/core";
import { Paciente } from "src/app/classes/paciente";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-prestaciones",
  templateUrl: "./prestaciones.page.html",
  styleUrls: ["./prestaciones.page.scss"],
})
export class PrestacionesPage implements OnInit {
  public uid;
  public selected: Paciente;
  public pacientes: Array<Paciente>;
  public prestaciones;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.uid = this.activatedRoute.snapshot.paramMap.get("uid");
    this.pacientes = new Array<Paciente>();
    let dataPaciente = JSON.parse(window.localStorage.getItem("pacientes"));
    let dataPrestaciones = JSON.parse(
      window.localStorage.getItem("prestaciones")
    );

    if (dataPaciente) {
      this.pacientes = dataPaciente;
      this.selected = this.pacientes.filter((usr) => usr.uid == this.uid)[0];
    }

    if (dataPrestaciones) {
      if (this.selected.tareas) {
        this.selected.tareas.forEach((task) => {
          let find = dataPrestaciones.filter(
            (prest) => prest.name == task.name
          )[0];
          if (find) {
            find.isChecked = true;
            console.log(find);
          }
        });
        console.log(dataPrestaciones);
      }

      this.prestaciones = dataPrestaciones;
    }
  }

  ngOnInit() {}

  select() {
    let selected = this.prestaciones.filter((prest) => prest.isChecked);
    this.selected.tareas = selected;
    window.localStorage.setItem("pacientes", JSON.stringify(this.pacientes));
    this.router.navigate(["/detail-paciente", this.uid]);
  }

  eliminarPrestacion(element){
    this.prestaciones = this.prestaciones.filter(obj => obj !== element);
    window.localStorage.setItem("prestaciones", JSON.stringify(this.prestaciones));
  }
}
