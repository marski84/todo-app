import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigationLink } from '../models/navigationLink.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  activeLinkIndex = -1;
  navLinks: navigationLink[] = [
    { location: 'todo', label: 'ToDo list', active: false },
    { location: 'stats', label: 'Statistics', active: false },
  ];
  activeLink!: navigationLink;

  handleLinkActive(link: navigationLink) {
    this.navLinks.forEach((navLink) => (navLink.active = false));
    link.active = true;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.router.events.subscribe((res) => console.log(res));
  }
}
