void setup() {
  Serial.begin(9600); // Configure serial port
}

void loop() {
  Serial.print("Sensor reading: ");
  Serial.println(analogRead(A7)); // Send sensor value to serial console
  delay(100);
}