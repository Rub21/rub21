/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package drw;

import javax.swing.Box;
import javax.swing.JButton;
import javax.swing.JTextField;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

class fares extends JPanel {

    private static final long serialVersionUID = 1L;
    public static int xaxis1, xaxis2, yaxis3, yaxis4;

    public ControlsB(square) {

        final JButton btn1 = new JButton("Resize");

        final Box b = Box.createHorizontalBox();
        b.add(new JLabel("Please enter range:  "));
        Box b0 = Box.createVerticalBox();//create a vertical box to stack the controls

        Box b1 = Box.createHorizontalBox(); // create a horizontal box for the x-axis

        //x-axis
        b1.add(new JLabel("mark "));
        b1.add(new JLabel("for"));

        f1.setMaximumSize(new Dimension(100, 30));

        b1.add(f1);
        b1.add(new JLabel("till"));

        f2.setMaximumSize(new Dimension(100, 30));
        b1.add(f2);

    //y-axis
        //this code is not in use at the moment
        f4.setMaximumSize(new Dimension(100, 30));
        b2.add(f4);

        b0.add(b1);

        add(b);

        btn1.addActionListener(new ActionListener() {

            public void actionPerformed(ActionEvent event) {

                f = Integer.parseInt(f1.getText());

                invalidate();
                validate();
                paint(p);//this is not working...
            }
        });
        b.add(btn1);
    }
}
