import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TuePage } from './tue.page';

describe('TuePage', () => {
  let component: TuePage;
  let fixture: ComponentFixture<TuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
