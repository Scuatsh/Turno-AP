import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Prestacion } from "src/app/classes/prestaciones";
import { Router, ActivatedRoute } from "@angular/router";
import { Paciente } from 'src/app/classes/paciente';

@Component({
  selector: 'app-add-prestacion',
  templateUrl: './add-prestacion.page.html',
  styleUrls: ['./add-prestacion.page.scss'],
})
export class AddPrestacionPage implements OnInit {
  public form: FormGroup;
  uid= this.activatedRoute.snapshot.paramMap.get("uid")
  
  constructor(private formBuilder: FormBuilder , private router: Router ,private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
    });
   
 
   }

  ngOnInit() {
  }


 

  add() {
    let dataPrestaciones = JSON.parse(
      window.localStorage.getItem("prestaciones")
    );
    dataPrestaciones.push(this.form.value);
    window.localStorage.setItem("prestaciones", JSON.stringify(dataPrestaciones));
    this.router.navigate(["/prestaciones",this.uid]);
  }

}
