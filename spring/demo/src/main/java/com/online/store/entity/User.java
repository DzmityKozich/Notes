package com.online.store.entity;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "usr")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "usr_id")
    private Long idUser;

    @Column(name = "usr_name")
    private String name;

    @Column(name = "usr_password")
    private String password;

    @Column(name = "usr_email")
    private String email;

    @OneToMany(mappedBy = "user")
    private List<Note> note;

    @ManyToOne
    @JoinColumn(name = "usr_role")
    private Role role;

    public User() {
    }

    public User(String name, String password, String email, Role role) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.role = role;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return idUser.equals(user.idUser) &&
                name.equals(user.name) &&
                password.equals(user.password) &&
                email.equals(user.email) &&
                note.equals(user.note) &&
                role.equals(user.role);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idUser, name, password, email, note, role);
    }

    @Override
    public String toString() {
        return "User{" +
                "idUser=" + idUser +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", note=" + note +
                ", role=" + role +
                '}';
    }
}
