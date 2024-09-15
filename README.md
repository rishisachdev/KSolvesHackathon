Event Management System
The Event Management System is a platform designed to simplify the creation and management of events. The system offers a range of functionalities, including event creation, scheduling, RSVPs, attendee management, and notifications. Users can create, view, and delete events, as well as track RSVPs and attendee participation. The system also supports sending reminders to attendees and offers the option of in-app notifications or email alerts.
Tools and Technologies:
•	Frontend: ReactJS
•	Backend: Java, Spring, Maven
•	Database: MySQL

Problems Solved:
•	Event Creation & Management: Users can create, list, view, and delete events, with detailed information like date, location, and description.
•	RSVP System: Attendees can RSVP to events, marking their attendance status.
•	Scheduling: Upcoming events are displayed on a calendar or list, and reminders can be scheduled for participants.
•	Attendee Management: Event organizers can manage the list of attendees, including removing or banning participants.
•	Notifications & Reminders: The system sends reminders before events

Database Design:
Events Table
Column      	 Data Type    	 Description                            
 id          	 INT          	 Primary Key 
 title       	 VARCHAR(255) 	 Title of the event                     
 description 	 TEXT         	 Description of the event               
 date        	 DATE         	 Date of the event                      
 time        	 TIME         	 Time of the event                      
 location    	 VARCHAR(255) 	 Location of the event                  
 created_by  	 INT          	 Foreign Key to `users` (Admin)         
 updated_at  	 TIMESTAMP    	 Timestamp of the last update           

User Table
Column       	 Data Type    	 Description                                                
 id           	 INT          	 Primary Key (Auto Increment)                               
 event_id     	 INT          	 Foreign Key to `events`                                    
 user_id      	 INT          	 Foreign Key to `users` (Customer)                          
 status       	 ENUM         	 Status of attendance (`CONFIRMED`, `PENDING`, `DECLINED`)  
 responded_at 	 TIMESTAMP    	 Time of response                                           
		

Notifications
Column   	 Data Type    	 Description                                
----------	--------------	--------------------------------------------
 id       	 INT          	 Primary Key (Auto Increment)               
 user_id  	 INT          	 Foreign Key to `users`                     
 event_id 	 INT          	 Foreign Key to `events`                    
 message  	 TEXT         	 Notification message                       
 type     	 ENUM         	 Type of notification (`REMINDER`, `UPDATE`)
 status   	 ENUM         	 Status of notification (`SENT`, `PENDING`) 
 sent_at  	 TIMESTAMP    	 Time when the notification was sent        
		

Attendees
Column       	 Data Type    	 Description                                                
 id           	 INT          	 Primary Key (Auto Increment)                               
 event_id     	 INT          	 Foreign Key to `events`                                    
 user_id      	 INT          	 Foreign Key to `users` (Customer)                          
 status       	 ENUM         	 Status of attendance (`CONFIRMED`, `PENDING`, `DECLINED`)  
 responded_at 	 TIMESTAMP    	 Time of response      


 ![image](https://github.com/user-attachments/assets/a02502a9-e003-4287-bb49-cb49f61756cb)
![image](https://github.com/user-attachments/assets/7266a131-6e75-4819-bbcb-5337048d0d66)
![image](https://github.com/user-attachments/assets/cd8a1b8f-4203-4c01-9155-0546e3f0456a)
![image](https://github.com/user-attachments/assets/f66c4631-409c-4910-9e83-cd6d92fe98dd)
![image](https://github.com/user-attachments/assets/2dbeb9f3-ca24-493c-97fa-1954431963b5)
