package com.example.cantinaTiaTay;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CantinaTiaTayApplication {

	public static void main(String[] args) {
		SpringApplication.run(CantinaTiaTayApplication.class, args);
	}

}




//RELACIONAMENTOS - PRODUTO X ITEMpEDIDO ____ Pedido x ItemPedido ____ Pedido x Cliente   ManyToOne  JoinColumn
//idComposto
//dto
//repository
//controller
// p cada model há uma classe dentro do controller, repository e dto
//crud
//