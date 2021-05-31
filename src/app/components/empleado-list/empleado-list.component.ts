import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css'],
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: Empleado[] = [
    {
      legajo: 1,
      nombre: 'Alondra',
      apellido: 'López',
      sexo: 'Femenino',
      salario: 25000,
    },
    {
      legajo: 2,
      nombre: 'Ramiro',
      apellido: 'Sánchez',
      sexo: 'Masculino',
      salario: 20000,
    },
    {
      legajo: 3,
      nombre: 'Reyna',
      apellido: 'Landa',
      sexo: 'Femenino',
      salario: 22000,
    },
    {
      legajo: 4,
      nombre: 'Ana',
      apellido: 'Sánchez',
      sexo: 'Femenino',
      salario: 25000,
    },
    {
      legajo: 5,
      nombre: 'Dario',
      apellido: 'Landa',
      sexo: 'Masculino',
      salario: 20000,
    },
  ];

  radioButtonSeleccionado = 'Todos';

  constructor() {}

  ngOnInit(): void {}

  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter((list) => list.sexo === 'Femenino').length;
  }
  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter((list) => list.sexo === 'Masculino')
      .length;
  }

  empleadoCountRadioButtonChange(radioButtonSelect: string): void {
    this.radioButtonSeleccionado = radioButtonSelect;
  }
}
