import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatemodalpopupPage } from './updatemodalpopup.page';

describe('UpdatemodalpopupPage', () => {
  let component: UpdatemodalpopupPage;
  let fixture: ComponentFixture<UpdatemodalpopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemodalpopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatemodalpopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
