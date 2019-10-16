import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCourseComponent } from './details-course.component';
import { DurationPipe } from '../pipes/duration.pipe';
import { HttpClientModule } from '@angular/common/http';

describe('DetailsCourseComponent', () => {
  let component: DetailsCourseComponent;
  let fixture: ComponentFixture<DetailsCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsCourseComponent, DurationPipe],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
