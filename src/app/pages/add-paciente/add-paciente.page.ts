import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Paciente } from "src/app/classes/paciente";
import { Router } from "@angular/router";
@Component({
  selector: "app-add-paciente",
  templateUrl: "./add-paciente.page.html",
  styleUrls: ["./add-paciente.page.scss"],
})
export class AddPacientePage implements OnInit {
  pacientes: Array<Paciente>;
  public todo: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.pacientes = new Array<Paciente>();
    let data = JSON.parse(window.localStorage.getItem("pacientes"));
    if (data) {
      this.pacientes = data;
    }
    this.todo = this.formBuilder.group({
      name: ["", Validators.required],
      bed: ["", Validators.required],
      room: ["", Validators.required],
    });
  }

  logForm() {
    this.todo.value.uid = new Date().getTime();
    this.pacientes.push(this.todo.value);
    window.localStorage.setItem("pacientes", JSON.stringify(this.pacientes));
    this.router.navigate(["/pacientes"]);
  }

  ngOnInit() {}
}
