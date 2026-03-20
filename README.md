The Knotweed Detection Drone is an aerial system designed to identify Japanese Knotweed
using vibration-based analysis. The goal of this project is to create a more efficient and scalable
way to detect invasive plant species by combining drone flight, mechanical sensing, and
real-time GPS tracking into one system. This system is also intended to be used as an invasive species tracker for property, specifically to aid the visually impaired in keeping their houses safe as Knotweed can grow at a rapid pace in extremely large quantities. 

The code here is intended to serve as a guide of our program. As our software runs on the hardware pieces on the drone (the raspberry pi pico w, and the raspberry pi 5) it is here to show our methodoloy and how we implemented it into our systems. We have attatched pictures of our models and our graphs regarding our research, as well as explanations for each code file. 
(note-the files in the frontend are old and represent our regional idea, which is not the same as our idea for state. Our index.html outside of the frontend is the true application, which will require running it seperately as a basic html file which will be worked on tremendously). We have also included pictures of our model. 
Features

Flight Capability
The foundation of the project is a quad-propeller drone capable of stable, controlled flight. Each
motor has been calibrated with counterweights to improve thrust-to-weight balance and reduce
instability during operation. The drone is designed to provide enough power for lift and
maneuverability while maintaining a sustainable flight duration.
Vibration-Sensing Arm
The project includes a custom-built arm attachment that evaluates plant frequencies to
distinguish Japanese Knotweed from other species. The arm uses integrated motors to
generate consistent vibrations and measure how plant stalks respond. Because Japanese
Knotweed has a different structural response compared to other plants, the system can detect it
based on its oscillation patterns.
GPS Tracking and App Integration
A high-precision GPS module is included to ensure the drone can be tracked and recovered in
all situations. The GPS system connects directly to a mobile application that provides real-time
location data. A Raspberry Pi enables communication between the drone and the app, allowing
the user to monitor and control the drone during operation.
System Integration
All components of the project work together in a single system. Flight data, vibration analysis,
and GPS location are combined into one interface, allowing the user to view and interpret
information in real time. This integration makes the system more efficient and easier to use in
practical scenarios.
How It Works

The drone is flown over an area where plant detection is needed. The vibration-sensing arm
interacts with plant stalks and records how they respond to controlled vibrations. This data is
analyzed to determine whether the plant matches the characteristics of Japanese Knotweed. At
the same time, the drone’s GPS logs the exact location, which is displayed in the mobile
application for tracking and mapping.
Technologies Used
The project uses a quad-propeller drone system along with vibration motors and a GPS module.
A Raspberry Pi serves as the main processing and communication unit. The software includes a
custom-built  application that displays real-time data and allows user control. The sensing
system is based on frequency and vibration response.
Purpose and Impact
Japanese Knotweed is an invasive species that can damage ecosystems and infrastructure.
This project aims to improve the speed and accuracy of detection while reducing the need for
manual surveying. By automating the process and providing real-time data, the system offers a
practical solution for environmental monitoring.
Future Improvements
Future updates could include machine learning to improve detection accuracy, automated flight
paths for more efficient coverage, and an expanded plant database for broader environmental
analysis. Improvements to battery life and flight efficiency would also increase the system’s
effectiveness.

TSA Software Development Team (Saurish Srivastava, Jonathan No)

License
This project is created for educational purposes as part of the Technology Student Association.
