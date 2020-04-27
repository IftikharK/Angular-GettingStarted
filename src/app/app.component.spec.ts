// import { TestBed, async } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'APM'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('APM');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('.content span').textContent).toContain('APM app is running!');
//   });
// });


describe('AppComponent', () => {
  let app: AppComponent;

  beforeEach(() => {
    app = new AppComponent();
  });

  it('should create an app', () => {
   expect(app).toBeTruthy();
  });

  it(`should have as title 'Acme Product Management'`, () => {
    //const fixture = TestBed.createComponent(AppComponent);
    //const app = fixture.componentInstance;
    expect(app.pageTitle).toEqual('Acme Product Management');
  });
});
