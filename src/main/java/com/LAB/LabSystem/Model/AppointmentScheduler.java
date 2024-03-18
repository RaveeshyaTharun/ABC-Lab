package com.LAB.LabSystem.Model;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Data
@Document(collection="Appointments")
public class AppointmentScheduler {

    private static AppointmentScheduler instance;

    @Id
    private String UserID;
    @NotEmpty(message = "Name must not be Empty")
    private String ClientName;
    @NotEmpty(message = "Email must not be empty")
    private String ClientEmail;
    @NotEmpty(message = "Phone must not be empty")
    private String ClientPhone;
    @NotEmpty(message = "Date must not be empty")
    private String AppDate;
    @NotEmpty(message = "Time must not be empty")
    private String dateTime;
    @NotEmpty(message = "CheckingType must not be empty")
    private String CheckingType;

    // Private constructor to prevent instantiation from outside
    private AppointmentScheduler(String userID, String clientName, String clientEmail, String clientPhone,String date, String dateTime, String checkingType) {
        this.UserID = userID;
        this.ClientName = clientName;
        this.ClientEmail = clientEmail;
        this.ClientPhone = clientPhone;
        this.AppDate = date;
        this.dateTime = dateTime;
        this.CheckingType = checkingType;
    }

    // Static method to get the singleton instance
    public static synchronized AppointmentScheduler getInstance() {
        if (instance == null) {
            instance = new AppointmentScheduler();
        }
        return instance;
    }

    // Ensure no instance can be created from outside
    private AppointmentScheduler() {
    }

    @Override
    public String toString() {
        return "AppointmentScheduler{" +
                "UserID='" + UserID + '\'' +
                ", ClientName='" + ClientName + '\'' +
                ", ClientEmail='" + ClientEmail + '\'' +
                ", ClientPhone='" + ClientPhone + '\'' +
                ", AppDate='" + AppDate + '\'' +
                ", dateTime='" + dateTime + '\'' +
                ", CheckingType='" + CheckingType + '\'' +
                '}';
    }
}
