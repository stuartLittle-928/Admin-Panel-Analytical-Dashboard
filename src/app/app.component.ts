import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./components/layout/layout.component";
import { event } from 'jquery';
import { filter } from 'rxjs';
import { DataCommunicationService } from './services/data-communication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Routing-In-Angular';
  routeSubscription: any;
  currentRoute: any;
  constructor(private router: Router , private dataCommuncation: DataCommunicationService)
  {
    
  }
  ngOnInit() {
    this.routeSubscription = this.router.events.pipe(filter((event:any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;


        // setting currnt route to Service 
        this.dataCommuncation.setCurrentRoute(this.currentRoute);
        // this.dataCommuncation.se
      });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
