import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonPage } from './mon.page';

describe('MonPage', () => {
  let component: MonPage;
  let fixture: ComponentFixture<MonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
