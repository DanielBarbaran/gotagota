package com.senati.gotagota.service;
import com.senati.gotagota.entity.Cliente;
import com.senati.gotagota.repository.ClienteRepository;
import org.springframework.stereotype.Service;


import java.util.List;

//Importamos la anotacion @service
//Esto es la capa de la logica de negocio, aqui van las validaciones, calculos ,etc.
@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public List<Cliente> listarTodos(){
        return clienteRepository.findAll();

    }
//CREAR CLIENTE
    public Cliente crearCliente(Cliente cliente){
        return clienteRepository.save(cliente);
    }

//Elimina el cliente por ID
    public void eliminarCliente(Long id) {
        clienteRepository.deleteById(id);
    };
}








