/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package paccallback;

/**
 *
 * @author ruben
 */
public class Register {

    public static void register(CallBack callback) {
        for (int i = 0; i < 10000; i++) {
            System.out.println(i);
        }
        callback.methodToCallBack();
    }
}
