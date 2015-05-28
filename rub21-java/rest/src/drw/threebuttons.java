/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package drw;

import javax.swing.*;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.*;

public class threebuttons extends JFrame {

    JPanel p;
    public static JButton red;
    public static JButton green;
    public static JButton up;
    Color n;
    int w, l;

    public threebuttons() {
        w = 10;
        l = 10;

        p = new JPanel();

        paintclass handler = new paintclass();
        red = new JButton("Red");
        red.addActionListener(handler);

        green = new JButton("Green");
        green.addActionListener(handler);

        up = new JButton("Up");
        up.addActionListener(handler);

        p.add(red);
        p.add(green);
        p.add(up);

        getContentPane().add(p, BorderLayout.SOUTH);
        setSize(500, 500);
        setVisible(true);
        System.out.println("frame show");
    }

    public class paintclass implements ActionListener {

        public void actionPerformed(ActionEvent e) {
            if (e.getSource() == red) {
                n = Color.red;
                repaint(0, 0, getWidth(), getHeight());
            } else if (e.getSource() == green) {
                n = Color.green;
                repaint(0, 0, getWidth(), getHeight());

            } else if (e.getSource() == up) {
                l = l + 10;
                w = w + 10;
                System.out.println(l + " : " + w);
                repaint(0, 0, getWidth(), getHeight());
            }
        }
    }

    public void paint(Graphics g) {
        super.paint(g);
        g.setColor(n);
        g.fillRect(l, w, 100, 100);
    }

    public static void main(String[] args) {
        new threebuttons();
    }
}
