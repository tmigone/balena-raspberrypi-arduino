const five = require('johnny-five')

let board = new five.Board({ repl: false })
board.on('ready', function () {

  // Initialize I/O
  let led = new five.Led(13)      // Use built-in led 
  let sensor = new five.Sensor({
    pin: 'A7',                    // Sensor connected to pin A7
    freq: 50,                     // Take samples every 50 milliseconds
    threshold: 50                 // Emit 'change' event when ADC values change by +/- 50
  })

  // Handle 'change' event
  sensor.on('change', function () {
    if (this.value < 30) {
      console.log('Shoe was picked up!')

      // Blink led for a while then stop
      led.blink(100)
      board.wait(1000, function () {
        led.stop().off()
      })
    }
  })

})