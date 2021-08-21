import {BuildingResource} from "interfaces"

export default class Building {
	private _name: string
	private _image: string
	private _level: number
	private _isActive: boolean
	private _costToUpgrade: BuildingResource[]
	private _consumes: BuildingResource[]
	private _produces: BuildingResource[]


	constructor(name: string, image: string, costToUpgrade: BuildingResource[] = [], consumes: BuildingResource[] = [], produces: BuildingResource[] = []) {
		this._name = name
		this._image = image
		this._level = 1
		this._isActive = true
		this._costToUpgrade = costToUpgrade
		this._consumes = consumes
		this._produces = produces
	}


	get name(): string {
		return this._name
	}

	set name(value: string) {
		this._name = value
	}

	get image(): string {
		return this._image
	}

	set image(value: string) {
		this._image = value
	}

	get level(): number {
		return this._level
	}

	set level(value: number) {
		this._level = value
	}

	get isActive(): boolean {
		return this._isActive
	}

	set isActive(value: boolean) {
		this._isActive = value
	}

	get costToUpgrade(): BuildingResource[] {
		return this._costToUpgrade
	}

	set costToUpgrade(value: BuildingResource[]) {
		this._costToUpgrade = value
	}

	get consumes(): BuildingResource[] {
		return this._consumes
	}

	set consumes(value: BuildingResource[]) {
		this._consumes = value
	}

	get produces(): BuildingResource[] {
		return this._produces
	}

	set produces(value: BuildingResource[]) {
		this._produces = value
	}
}
