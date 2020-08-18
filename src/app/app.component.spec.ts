import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LaunchDataDashboardComponent } from './launch-dashboard/launch-data-dashboard/launch-data-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule, MatToolbarModule, MatButtonModule,
          ScrollingModule, HttpClientModule,
      ],
      declarations: [
        AppComponent,
        LaunchDataDashboardComponent

      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Space-X-Assignment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Space-X-Assignment');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
  });
});
