import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

export function hoursLoad( { date }) {
    const opening = openingHours.map((hour) => {
        console.log(hour)
        // Recupera somente a hora.
        const [scheduleHour] = hour.split(":")

        // Adiciona a hora na date e verifica se está no passado.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
        // Retorna se o horário está disponível
        return {
            hour,
            available: isHourPast
        }
    })
    console.log(opening)
}