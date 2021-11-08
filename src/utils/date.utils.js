export function formatDate(dateObject) {
	if (!(dateObject instanceof Date)) {
		return {
			date: 'unset',
			time: ''
		}
	}
	const daysOfWeek = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday'
	]
	const day = daysOfWeek[dateObject.getDay() - 1],
		date = `0${dateObject.getDate()}`.slice(-2),
		month = `0${dateObject.getMonth() + 1}`.slice(-2),
		year = dateObject.getFullYear(),
		minutes = `0${dateObject.getMinutes()}`.slice(-2),
		hours = `0${dateObject.getHours()}`.slice(-2)

	return {
		date: `${date}.${month}.${year}`,
		time: ` ${hours}:${minutes}`,
		serializedDate: `${year}.${month}.${date}`
	}
}

  export const startOfDay = '00:00'
  export const endOfDay = '23:59'

  export function modifyDate(target, day, time = '') {
        const value = new Date(day)
        const hours = time.slice(0, 2) || target?.getHours()
        const minutes = time.slice(-2) || target?.getMinutes()

        value.setHours(hours, minutes)

        console.log(value.toString())

        return value
    }