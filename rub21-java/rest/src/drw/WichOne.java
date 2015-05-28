/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package drw;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class WichOne implements ActionListener {

    JFrame frame;

    public static void main(String args[]) {
        WichOne w = new WichOne();
        w.go();
    }

    public void go() {
        frame = new JFrame("Which One?");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        MyDrawing drawPanel = new MyDrawing();
        JButton colorButton = new JButton("Color");
        JButton shapeButton = new JButton("Shape");
        colorButton.addActionListener(this);
        shapeButton.addActionListener(this);
        frame.getContentPane().add(BorderLayout.WEST, colorButton);
        frame.getContentPane().add(BorderLayout.CENTER, drawPanel);
        frame.getContentPane().add(BorderLayout.EAST, shapeButton);
        frame.setSize(300, 200);
        frame.setVisible(true);
    }

    public void actionPerformed(ActionEvent event) {
        frame.repaint();
    }
}

class MyDrawing extends JPanel {

    public void paintComponent(Graphics g) {
        g.setColor(Color.orange);
        g.fillRect(0, 0, getWidth(), getHeight());
        g.setColor(Color.red);
        g.fillOval(getWidth() / 4, getHeight() / 4, getWidth() / 2, getHeight() / 2);
    }
}
