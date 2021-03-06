import { Component, Input } from '@angular/core'

@Component({
	selector: 'pokemon-evolution',
	template: `
		<div class="text-center" *ngFor="let evolution of pokemon.evolution, let last = last">
                  <a [routerLink]="['/pokemon', evolution ]">
                    <img src="{{evolution | imageify}}" width="160">
                    <p>
                      <strong>{{evolution}}</strong>
                    </p>
                  </a>
                  <span *ngIf="!last" class="glyphicon glyphicon-arrow-down"></span>
                </div>
	`
})

export class PokemonEvolutionComponent {
	@Input() pokemon:Object = {}
}