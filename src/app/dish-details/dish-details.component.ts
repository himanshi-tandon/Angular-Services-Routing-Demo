import { Component, OnInit} from '@angular/core';
import{Params, ActivatedRoute } from '@angular/router';
import{Dish} from '../shared/dish';
import { Location } from '@angular/common';
import{DishService} from '../service/dish.service';
@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {

  dish:Dish;
constructor(private dishservice: DishService,
  private route: ActivatedRoute,
  private location: Location){}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }
  goBack(): void {
    this.location.back();
  }

}
