import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ArticleComponent } from './article.component';
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { getArticleData } from "../../store/selectors/app.selectors";
import { Article } from "../../shared/model/article";
import { loadArticle } from "../../store/actions/app.actions";

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let store: MockStore<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleComponent],
      providers: [provideMockStore({
        selectors: [
          { selector: getArticleData, value: { id: "12345" } as Article }
        ]
      })]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    jest.spyOn(store, "dispatch");

    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define articleData',done => {
    component.articleData.subscribe(data => {
      expect(data?.id).toBe("12345");
      done();
    })
  });

  it("should expect dispatch to have been called", () => {
    expect(store.dispatch).toHaveBeenCalledWith(loadArticle());
  });
});
