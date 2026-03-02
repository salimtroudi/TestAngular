import { Component } from '@angular/core';
import { Residence } from '../models/residence';
import { ResidenceServiceService } from '../services/residence-service.service';

@Component({
  selector: 'app-list-res-salim-troudi',
  templateUrl: './list-resSalimTroudi.component.html',
  styleUrl: './list-resSalimTroudi.component.css'
})
export class ListResSalimTroudiComponent {

//********************Partie Backend**************************** */
listresidencesdb: Residence[] = [];
//injection pour partie back
constructor(private suggservice:ResidenceServiceService){}
  ngOnInit(): void {
  this.suggservice.showallsugg().subscribe((data:any)=>{
    this.listresidencesdb=data
  })
  }

  search = '';

searchbytiltle()
{
  return this.listresidencesdb.filter(r=>r.name.toLowerCase().includes(this.search.toLowerCase()))
}

deleteSuggestion(id:any){
    this.suggservice.delsugg(id).subscribe(()=>{
      this.ngOnInit()
      console.log('deleted');
    });
  }
}
