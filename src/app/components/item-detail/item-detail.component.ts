import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAnimal } from 'src/app/IAnimal';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {
  animal?: IAnimal ;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal()
  }

  ngOnInit(): void {
  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }

}
