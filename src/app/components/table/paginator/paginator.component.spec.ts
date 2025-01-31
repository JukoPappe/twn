import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginatorComponent } from './paginator.component';
import { PaginatorPagesPipe } from "../../../shared/pipes/paginator-pages.pipe";

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatorComponent, PaginatorPagesPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should always round up the number when setting _numberOfPages", () => {
    component.numberOfPages = 2.1;
    expect(component.numberOfPages).toBe(3);
    component.numberOfPages = 1.9;
    expect(component.numberOfPages).toBe(2);
  });

  it("should emit event while paginating", () => {
    jest.spyOn(component.paginateTo, "emit");
    expect(component.paginationIndex).toBe(1);

    component.paginate(4);
    expect(component.paginationIndex).toBe(4);
    expect(component.paginateTo.emit).toHaveBeenCalledWith(4);
  });
});
