package com.senati.gotagota.repository;

import com.senati.gotagota.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//Anotacion @Repository INTERFAZ COMO LA CAPA DE ACCESO A LA BASE DE DATOS
@Repository

public interface ClienteRepository extends JpaRepository<Cliente , Long> {
    Long id(Long id);
// No necesitamos escribir nada aqui
    // JpaRepository ya tiene_todo_lo_basico



}
