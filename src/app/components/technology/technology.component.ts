import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  @ViewChild('technologySection', { static: true }) technologySection!: ElementRef;

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngOnInit() {
    this.scrollAnimationService.observeElement(this.technologySection.nativeElement);
  }

  // Contact actions
  makeCall() {
    window.location.href = 'tel:+380443334455';
  }
}