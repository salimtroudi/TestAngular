import { Component } from '@angular/core';
import { Residence } from '../models/residence';
import { ActivatedRoute } from '@angular/router';
import { ResidenceServiceService } from '../services/residence-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
residence!: Residence;

  constructor(
    private route: ActivatedRoute,
    private suggservice: ResidenceServiceService
  ) {}

ngOnInit(): void {

  const id = this.route.snapshot.params['id'];

  this.suggservice.getSuggestionByIddetails(id)
    .subscribe((res: any) => {
      this.residence = res 
    });
}
}
