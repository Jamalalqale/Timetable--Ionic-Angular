import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FriPage } from './fri.page';

describe('FriPage', () => {
  let component: FriPage;
  let fixture: ComponentFixture<FriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
