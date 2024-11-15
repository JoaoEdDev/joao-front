import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginUserPasswordComponent } from './login-user-password.component';

describe('LoginUserPasswordComponent', () => {
  let component: LoginUserPasswordComponent;
  let fixture: ComponentFixture<LoginUserPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginUserPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginUserPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
