import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduYexpComponent } from './edu-yexp.component';

describe('EduYexpComponent', () => {
  let component: EduYexpComponent;
  let fixture: ComponentFixture<EduYexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduYexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduYexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
