import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProperiesComponent } from './search-properies.component';

describe('SearchProperiesComponent', () => {
  let component: SearchProperiesComponent;
  let fixture: ComponentFixture<SearchProperiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchProperiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProperiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
