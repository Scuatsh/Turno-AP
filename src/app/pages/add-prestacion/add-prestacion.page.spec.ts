import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPrestacionPage } from './add-prestacion.page';

describe('AddPrestacionPage', () => {
  let component: AddPrestacionPage;
  let fixture: ComponentFixture<AddPrestacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrestacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPrestacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
