import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-entrepreneur',
  templateUrl: './dash-entrepreneur.component.html',
  styleUrls: ['./dash-entrepreneur.component.css']
})
export class DashEntrepreneurComponent {
  constructor() { }

  ngOnInit(): void {
    
    this.setupGalleryEventHandlers();
  }

  private setupGalleryEventHandlers(): void {
    const galleryItems = document.querySelectorAll('.gallery ul li a');
    const closeBtn = document.querySelector('.close');

    if (galleryItems && closeBtn) {
      galleryItems.forEach(item => {
        item.addEventListener('click', this.handleGalleryItemClick.bind(this));
      });

      closeBtn.addEventListener('click', this.handleCloseClick.bind(this));
    }
  }

  private handleGalleryItemClick(event: Event): void {
    event.preventDefault();
    const itemID = (event.target as HTMLAnchorElement).getAttribute('href');
    document.querySelector('.gallery ul')?.classList.add('item_open');
    document.querySelector(itemID!)?.classList.add('item_open');
  }

  private handleCloseClick(event: Event): void {
    event.preventDefault();
    const portAndGallery = document.querySelectorAll('.port, .gallery ul');
    portAndGallery.forEach(element => {
      element.classList.remove('item_open');
    });
  }
}
