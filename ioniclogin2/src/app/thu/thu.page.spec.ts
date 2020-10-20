import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThuPage } from './thu.page';

describe('ThuPage', () => {
  let component: ThuPage;
  let fixture: ComponentFixture<ThuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
