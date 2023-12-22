import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumEntrepreneurComponent } from './forum-entrepreneur.component';

describe('ForumEntrepreneurComponent', () => {
  let component: ForumEntrepreneurComponent;
  let fixture: ComponentFixture<ForumEntrepreneurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumEntrepreneurComponent]
    });
    fixture = TestBed.createComponent(ForumEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
