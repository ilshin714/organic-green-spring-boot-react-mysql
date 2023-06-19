package com.ecommerce.organicgreen.entity;
import com.ecommerce.organicgreen.model.Enums;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name ="user")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String address;
    private String city;
    private String province;
    private String postal;
    private String phone;
    private Enums.UserType userType;
    private String password;
}
