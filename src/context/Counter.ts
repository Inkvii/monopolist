import {observable} from "mobx"


export interface Counter {
	count: number
}

export const counter: Counter = observable({
	count: 0
})

export interface CounterHolder {
	counters: Counter[]
}

export const counterHolder: CounterHolder = observable({
	counters: [{count: 0}]
})

