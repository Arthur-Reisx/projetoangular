import { Component, OnInit } from '@angular/core';
import { GuitarService } from '../../services/guitar.service';

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.css']
})
export class GuitarListComponent implements OnInit {
  guitars: any[] = [];

  constructor(private guitarService: GuitarService) {}

  ngOnInit(): void {
    this.guitarService.getGuitars().subscribe((data) => {
      this.guitars = data;

      // Adicionando manualmente o campo imageUrl a cada guitarra
      this.guitars.forEach(guitar => {
        // Defina a URL da imagem para cada guitarra
        if (guitar.name === 'Fender Stratocaster') {
          guitar.imageUrl = 'C:\Users\arthu\loja-guitarras\src\assets\images\guitar.jpeg'; 
        } else if (guitar.name === 'Gibson Les Paul') {
          guitar.imageUrl = 'assets/images/lp.jpg'; 
        } else if (guitar.name === 'Ibanez RG') {
          guitar.imageUrl = 'assets/images/ibanez-rg.jpg'; 
        }
      });
    });
  }

  selectGuitar(guitar: any): void {
    console.log('Selecionado:', guitar);
  }
}
