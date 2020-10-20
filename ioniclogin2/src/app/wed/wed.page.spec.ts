import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WedPage } from './wed.page';

describe('WedPage', () => {
  let component: WedPage;
  let fixture: ComponentFixture<WedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
