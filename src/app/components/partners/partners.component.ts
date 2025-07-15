import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  @ViewChild('partnersSection', { static: true }) partnersSection!: ElementRef;

  partners = [
    {
      name: 'BioMérieux',
      logo: 'assets/images/partner-1.png',
      description: 'Світовий лідер у сфері мікробіологічної діагностики'
    },
    {
      name: 'MedTech',
      logo: 'assets/images/partner-2.png',
      description: 'Інноваційні рішення для медичних лабораторій'
    },
    {
      name: 'LabSystem',
      logo: 'assets/images/partner-3.png',
      description: 'Професійне лабораторне обладнання'
    },
    {
      name: 'Diagnostics Plus',
      logo: 'assets/images/partner-4.png',
      description: 'Комплексні діагностичні рішення'
    }
  ];

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngOnInit(): void {
    this.scrollAnimationService.observeElement(this.partnersSection.nativeElement);
  }

  navigateToMainSite(): void {
    window.open('https://imd.com.ua', '_blank');
  }
}