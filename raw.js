const five = require('johnny-five')

let board = new five.Board({ repl: false })
board.on('ready', function () {

  // Initialize I/O
  let sensor = new five.Sensor('A7')

  // Handle 'data' event
  sensor.on('data', function () {
    console.log(`Raw value ${this.value}`)
  })

})