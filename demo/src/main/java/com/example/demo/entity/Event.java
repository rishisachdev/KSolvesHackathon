	package com.example.demo.entity;

	import jakarta.persistence.*;
	import java.sql.Date;
	import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

	@Entity
	@Table(name = "events")
	public class Event {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;

	    private String title;

	    @Column(columnDefinition = "TEXT")
	    private String description;

	    private LocalDate date;

	    private LocalTime time;

	    private String location;

	    @ManyToOne
	    @JoinColumn(name = "created_by")
	    private User createdBy;

	    private java.sql.Timestamp updatedAt;

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public LocalDate getDate() {
			return date;
		}

		public void setDate(LocalDate date) {
			this.date = date;
		}

		public LocalTime getTime() {
			return time;
		}

		public void setTime(LocalTime time) {
			this.time = time;
		}

		public String getLocation() {
			return location;
		}

		public void setLocation(String location) {
			this.location = location;
		}

		public User getCreatedBy() {
			return createdBy;
		}

		public void setCreatedBy(User createdBy) {
			this.createdBy = createdBy;
		}

		public java.sql.Timestamp getUpdatedAt() {
			return updatedAt;
		}

		public void setUpdatedAt(java.sql.Timestamp updatedAt) {
			this.updatedAt = updatedAt;
		}

	    // Getters and Setters
}
