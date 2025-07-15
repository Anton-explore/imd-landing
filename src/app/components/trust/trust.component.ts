import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-trust',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './trust.component.html',
  styleUrls: ['./trust.component.scss']
})
export class TrustComponent implements OnInit {
  @ViewChild('trustSection', { static: true }) trustSection!: ElementRef;

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngOnInit() {
    this.scrollAnimationService.observeElement(this.trustSection.nativeElement);
  }

  // Navigate to main website
  navigateToMainSite() {
    window.open('https://imd.ua/', '_blank');
  }
}