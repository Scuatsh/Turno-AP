import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrestacionesPage } from './prestaciones.page';

describe('PrestacionesPage', () => {
  let component: PrestacionesPage;
  let fixture: ComponentFixture<PrestacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrestacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
