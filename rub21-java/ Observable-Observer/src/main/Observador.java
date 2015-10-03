package main;

import java.util.Observable;
import java.util.Observer;


/**
 *
 * @author ruben
 */
public class Observador implements Observer{

    @Override
    public void update(Observable o, Object arg) {
        System.out.println("Nueva Actualizacion: "+o+" -> "+arg);
    }
    
}

