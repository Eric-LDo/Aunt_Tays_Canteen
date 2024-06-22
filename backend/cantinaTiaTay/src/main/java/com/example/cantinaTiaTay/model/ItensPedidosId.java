package com.example.cantinaTiaTay.model;

import jakarta.persistence.Embeddable;

import java.io.Serializable;
import jakarta.persistence.*;
//import javax.persistence.*;

@Embeddable
public class ItensPedidosId implements Serializable {

    private Long pedidoId;
    private Long clienteId;

    // Getters e Setters
    public Long getPedidoId() {
        return pedidoId;
    }

    public void setPedidoId(Long pedidoId) {
        this.pedidoId = pedidoId;
    }

    public Long getClienteId() {
        return clienteId;
    }

    public void setClienteId(Long clienteId) {
        this.clienteId = clienteId;
    }

    // hashCode and equals methods
    @Override
    public int hashCode() {
        int result = (pedidoId != null ? pedidoId.hashCode() : 0);
        result = 31 * result + (clienteId != null ? clienteId.hashCode() : 0);
        return result;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ItensPedidosId that = (ItensPedidosId) o;

        if (pedidoId != null ? !pedidoId.equals(that.pedidoId) : that.pedidoId != null) return false;
        return clienteId != null ? clienteId.equals(that.clienteId) : that.clienteId == null;
    }
}
