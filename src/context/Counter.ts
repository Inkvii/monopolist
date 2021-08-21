import {makeAutoObservable} from "mobx"

export class Counter {
	private _count: number


	constructor(count: number) {
		this._count = count
		makeAutoObservable(this)
	}

	get count(): number {
		return this._count
	}

	set count(value: number) {
		this._count = value
	}
}

export class CounterHolder {
	private _counters: Counter[]


	constructor(counters: Counter[]) {
		this._counters = counters
		makeAutoObservable(this)
	}

	get counters(): Counter[] {
		return this._counters
	}

	set counters(value: Counter[]) {
		this._counters = value
	}
}
