import machine
import utime


motor1 = machine.PWM(machine.Pin(0))
motor2 = machine.PWM(machine.Pin(1))
motor1.freq(50)
motor2.freq(50)

zone_1 = machine.ADC(26)
zone_2 = machine.ADC(27)


motor1.duty_u16(3276)
motor2.duty_u16(3276)

print("ESCs Armed. Get Ready!")
for i in range(5, 0, -1):
    print(f"TEST STARTING IN: {i}...")
    utime.sleep(1.0)

target_throttle = 4915 
motor1.duty_u16(target_throttle)
motor2.duty_u16(target_throttle)

test_duration_ms = 30000 
start_time = utime.ticks_ms()
total_vibe = 0
samples = 0

print(">> ENGINES ON: RECORDING DATA")

try:
    while True:
        current_ms = utime.ticks_diff(utime.ticks_ms(), start_time)
        
        if current_ms >= test_duration_ms:
            break 
            
        au1 = zone_1.read_u16()
        au2 = zone_2.read_u16()
        
        total_vibe += au2
        samples += 1
        
        p1 = au1 // 655
        p2 = au2 // 655

        print(f"T:{current_ms} A1:{au1} A2:{au2} | {p1}, {p2}, 0, 100")
        
        utime.sleep(0.05)

except KeyboardInterrupt:
    print("\n[!] Manual Emergency Stop")

motor1.duty_u16(0)
motor2.duty_u16(0)

print("\n" + "="*35)
print("         SESSION SUMMARY         ")
print("="*35)
if samples > 0:
    avg_vibe = total_vibe / samples
    print(f"TEST DURATION: {test_duration_ms/1000}s")
    print(f"TOTAL SAMPLES: {samples}")
    print(f"AVERAGE VIBRATION (A2): {avg_vibe:.2f} AU")
else:
    print("No data captured.")
print("="*35)