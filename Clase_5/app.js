const formReserva = document.getElementById('reserva')

const formName = document.getElementById('name')
const formDate = document.getElementById('fecha')

const turno = {
    name: '',
    date: '',
}

reserva.addEventListener("submit", (ev) => {
    ev.preventDefault()
    
    turno.name = formName.value
    turno.date = formDate.value
})


