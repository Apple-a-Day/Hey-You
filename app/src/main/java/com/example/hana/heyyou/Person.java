package com.example.hana.heyyou;

public class Person {
    private String name;
    private double balance;
    private String clientToken;

    public Person() {
        this.name = "Jennie Cheung";
        this.balance = 0.0;
    }
    public void setClientToken(String token){
        this.clientToken = token;
    }
    public String getClientToken(){
        return this.clientToken;
    }
}
