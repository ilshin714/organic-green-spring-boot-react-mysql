package com.ecommerce.organicgreen.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

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
