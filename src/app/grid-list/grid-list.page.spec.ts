import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridListPage } from './grid-list.page';

describe('GridListPage', () => {
  let component: GridListPage;
  let fixture: ComponentFixture<GridListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GridListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
