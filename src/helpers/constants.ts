export const MINUTES = ['05', 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, '00'].map((a) => a.toString())
export const MINUTES_60 = Array.from(Array(60), (_, i) => (i + 1).toString())
export const HOURS_12 = Array.from(Array(12), (_, i) => (i + 1).toString())
export const HOURS_24 = Array.from(Array(23), (_, i) => (i + 1).toString()).concat('00')

export enum MODE {
	'MINUTES' = 'MINUTES',
	'HOURS_12' = 'HOURS_12',
	'HOURS_24' = 'HOURS_24',
}

/*
	- increments is how many splits on clock, visible or invisible
*/
export const CLOCK_VALUES = {
	[MODE.MINUTES]: {
		increments: 60,
		numbers: MINUTES,
		coarseIncrements: 5,
	},
	[MODE.HOURS_12]: {
		increments: 12,
		numbers: HOURS_12,
		coarseIncrements: 1,
	},
	[MODE.HOURS_24]: {
		increments: 12,
		numbers: HOURS_24.slice(12),
		numbersInner: HOURS_24.slice(0, 12),
		coarseIncrements: 1,
	},
}

// number of actual numbers to display
export const VISIBLE_NUMBERS_PER_CIRCLE = 12

// radius of clock, in px
export const CLOCK_RADIUS = 110
export const CLOCK_SIZE = CLOCK_RADIUS * 2

/*
	radius of invisible inner circle for 24 hour numbers
	- controls how far out the inner circle comes and
	how far in numbers come as well
 */
export const INNER_NUMBER_RADIUS = 77

// font sizes
const NUMBER_REGULAR_FONT_SIZE = 16
const HOUR_24_INNER_FONT_SIZE = 16
const HOUR_24_OUTER_FONT_SIZE = 14
export function getFontSize(hour24Mode: boolean, inner: boolean): number {
	if (!hour24Mode) {
		return NUMBER_REGULAR_FONT_SIZE
	}
	return inner ? HOUR_24_INNER_FONT_SIZE : HOUR_24_OUTER_FONT_SIZE
}

// size of circle surrounding individual numbers
// loosely based on font sizes above
export const NUMBER_RADIUS_REGULAR = 34
const NUMBER_RADIUS_HOUR_24_OUTER = 30
const NUMBER_RADIUS_HOUR_24_INNER = 28

// positioning of numbers
export const NUMBER_OUTER_POSITION = 22
const NUMBER_OUTER_POSITION_24_HOUR = 18 // controls how far out to move numbers during 24h mode
const NUMBER_INNER_POSITION_24_HOUR =
	CLOCK_RADIUS - INNER_NUMBER_RADIUS + NUMBER_RADIUS_HOUR_24_INNER / 2
export function getOuterNumberPosition(mode: MODE): number {
	return mode === MODE.HOURS_24 ? NUMBER_OUTER_POSITION_24_HOUR : NUMBER_OUTER_POSITION
}

// initial position of hours/minutes before animating to final position
export const INITIAL_HOUR_TRANSFORM = NUMBER_OUTER_POSITION - 30
export const INITIAL_MINUTE_TRANSFORM = NUMBER_OUTER_POSITION + 26

// clock hand stuff
export function getClockHandLength(mode: MODE, inner: boolean): number {
	if (mode !== MODE.HOURS_24) {
		return NUMBER_OUTER_POSITION
	}
	return inner ? NUMBER_INNER_POSITION_24_HOUR : NUMBER_OUTER_POSITION_24_HOUR
}

export function getClockHandCirclePosition(mode: MODE, inner: boolean): number {
	if (mode !== MODE.HOURS_24) {
		return NUMBER_OUTER_POSITION
	}
	return inner ? NUMBER_INNER_POSITION_24_HOUR : NUMBER_OUTER_POSITION_24_HOUR
}

export function getClockHandCircleRadius(mode: MODE, inner: boolean): number {
	if (mode !== MODE.HOURS_24) {
		return NUMBER_RADIUS_REGULAR / 2
	}
	return inner ? NUMBER_RADIUS_HOUR_24_INNER / 2 : NUMBER_RADIUS_HOUR_24_OUTER / 2
}

const animationChange = 22
export const INNER_NUMBER_POSITIONING = {
	exit: NUMBER_INNER_POSITION_24_HOUR + animationChange,
	enter: NUMBER_INNER_POSITION_24_HOUR,
}
