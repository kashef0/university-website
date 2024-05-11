import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.scss'
})
export class NavmenuComponent {
  isMenuOpen: boolean = false;

  constructor() { }


  ngOnInit(): void {

  }

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

}
