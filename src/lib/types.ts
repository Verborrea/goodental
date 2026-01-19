export interface Cita {
	id: number,
	doc: string
	title: string
	date: string
	from: string
	to: string
	finished: boolean
	notes?: string
}

export interface ServiceType {
	slug: string
	img: string
	name: string
	text: string
}