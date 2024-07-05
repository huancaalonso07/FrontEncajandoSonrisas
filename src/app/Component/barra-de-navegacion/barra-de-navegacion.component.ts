import { Component, Input, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/Dialogs/login/login.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { PersonaService } from 'src/app/Service/persona.service';

@Component({
  selector: 'app-barra-de-navegacion',
  templateUrl: './barra-de-navegacion.component.html',
  styleUrls: ['./barra-de-navegacion.component.css']
})
export class BarraDeNavegacionComponent implements OnInit{

  usuarioLogeado:string = "";

  modalRef: MdbModalRef<LoginComponent> | null = null;

  constructor(
    private modalService: MdbModalService,
    private personaService: PersonaService
  ) {}
  
  ngOnInit(): void {
    this.personaService.usuarioActual.subscribe(usuario => {
      this.usuarioLogeado = usuario;
    });
  }

  openModal() {
    this.modalRef = this.modalService.open(LoginComponent);
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }

}
