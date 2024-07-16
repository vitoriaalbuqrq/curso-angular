import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/IAnimal';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: IAnimal[] = [];

  animalDetails = ''
   
  constructor(private listService: ListService) {
    this.getAnimals()
  }

  ngOnInit(): void {
  }

  showAge(animal: IAnimal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }

  removeAminal(animal: IAnimal){
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
