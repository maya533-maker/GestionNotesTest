import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEntrepreneurComponent } from './profil-entrepreneur.component';

describe('ProfilEntrepreneurComponent', () => {
  let component: ProfilEntrepreneurComponent;
  let fixture: ComponentFixture<ProfilEntrepreneurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilEntrepreneurComponent]
    });
    fixture = TestBed.createComponent(ProfilEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
