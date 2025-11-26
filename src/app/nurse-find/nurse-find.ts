import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
	selector: 'app-nurse-find',
	standalone: true,
	imports: [RouterLink, FormsModule, CommonModule],
	templateUrl: './nurse-find.html',
	styleUrls: ['./nurse-find.css']
})
export class NurseFind {
	imageUrl = 'assets/img/nurseIcon.jpg';
	title = 'Nurse Find Component';

	username: string = '';
	searchResults: Array<{ name: string, img: string }> = [];

	onSearch() {
		const name = this.username?.trim();
		if (!name) {
			// limpiar o mostrar mensaje; por ahora salimos
			this.searchResults = [];
			return;
		}

		// demo: si el nombre contiene 'ana' devolvemos un resultado ficticio
		if (name.toLowerCase().includes('ana')) {
			this.searchResults = [{ name: 'Ana Martínez', img: this.imageUrl }];
		} else {
			this.searchResults = []; // sin resultados
		}
	}
}
