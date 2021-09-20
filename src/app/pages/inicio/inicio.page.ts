import { Component, OnInit } from '@angular/core';

interface Componente {
  name: string,
  icon: string,
  redirectTo: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Componente[] = [
    {
      name: "Action Sheet",
      icon: "airplane-sharp",
      redirectTo: "/action-sheet"
    },
    {
      name: "Alert",
      icon: "alarm-sharp",
      redirectTo: "/alert"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
