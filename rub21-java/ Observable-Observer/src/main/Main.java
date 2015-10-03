/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main;

/**
 *
 * @author ruben
 */
public class Main {
//http://jonathanmelgoza.com/blog/observadores-en-java/
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Observado observado = new Observado();
        Observador observador = new Observador();

        observado.addObserver(observador);

        observado.cambiarMensaje("Cambio 1");
        observado.cambiarMensaje("Cambio 2");
        observado.cambiarMensaje("Cambio 3");

    }

}
