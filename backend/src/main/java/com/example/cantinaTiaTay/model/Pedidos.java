package com.example.cantinatiatay.model;


import jakarta.persistence.*;
import org.hibernate.boot.jaxb.hbm.internal.RepresentationModeConverter;

import java.util.ArrayList;

@Entity
@Table(name="Pedidos")
//@PrimaryKeyJoinColumn(name = "idPedido")
public class Pedidos {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPedido;

    @ManyToOne
    @JoinColumn(name = "IdCliente")
    private Clientes cliente;

    @Column(name = "data")
    private String dataPedido;

    @OneToMany
    @JoinColumn(name= "itensPedidos")
    ArrayList<ItensPedidos> itensPedidos = new ArrayList<>();

    public Pedidos(Integer idPedido, Clientes cliente, String dataPedido, ArrayList<ItensPedidos> itensPedidos) {
        this.idPedido = idPedido;
        this.cliente = cliente;
        this.dataPedido = dataPedido;
        this.itensPedidos = itensPedidos;
    }

    public Pedidos(){

    }

    public Integer getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(Integer idPedido) {
        this.idPedido = idPedido;
    }

    public Clientes getCliente() {
        return cliente;
    }

    public void setCliente(Clientes cliente) {
        this.cliente = cliente;
    }

    public String getDataPedido() {
        return dataPedido;
    }

    public void setDataPedido(String dataPedido) {
        this.dataPedido = dataPedido;
    }

    public ArrayList<ItensPedidos> getItensPedidos() {
        return itensPedidos;
    }

    public void setItensPedidos(ArrayList<ItensPedidos> itensPedidos) {
        this.itensPedidos = itensPedidos;
    }
}
