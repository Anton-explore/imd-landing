import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @ViewChild('servicesSection', { static: true }) servicesSection!: ElementRef;

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngOnInit() {
    this.scrollAnimationService.observeElement(this.servicesSection.nativeElement);
  }

  // Contact actions
  makeCall() {
    window.location.href = 'tel:+380443334455';
  }

  // Navigate to main website
  navigateToMainSite() {
    window.open('https://imd.ua/', '_blank');
  }
}