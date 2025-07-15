import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('footerSection', { static: true }) footerSection!: ElementRef;

  currentYear = new Date().getFullYear();

  contactInfo = {
    phone: '+380 44 123 45 67',
    email: 'info@imd.com.ua',
    address: 'вул. Медична, 123, Київ, Україна',
    workingHours: 'Пн-Пт: 8:00-18:00, Сб: 9:00-15:00'
  };

  socialLinks = [
    {
      name: 'Facebook',
      icon: 'facebook',
      url: 'https://facebook.com/imd.ukraine'
    },
    {
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://instagram.com/imd.ukraine'
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://linkedin.com/company/imd-ukraine'
    },
    {
      name: 'YouTube',
      icon: 'youtube',
      url: 'https://youtube.com/imd-ukraine'
    }
  ];

  quickLinks = [
    { name: 'Про нас', anchor: 'about' },
    { name: 'Послуги', anchor: 'services' },
    { name: 'Технології', anchor: 'technology' },
    { name: 'Партнери', anchor: 'partners' }
  ];

  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngOnInit(): void {
    this.scrollAnimationService.observeElement(this.footerSection.nativeElement);
  }

  makeCall(): void {
    window.open(`tel:${this.contactInfo.phone}`, '_self');
  }

  sendEmail(): void {
    window.open(`mailto:${this.contactInfo.email}`, '_self');
  }

  openSocialLink(url: string): void {
    window.open(url, '_blank');
  }

  scrollToSection(anchor: string): void {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  navigateToMainSite(): void {
    window.open('https://imd.com.ua', '_blank');
  }
}