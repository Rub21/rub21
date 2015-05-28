package org.openstreetmap.josm.plugins.mainmenuplugin;

import java.awt.event.ActionEvent;
import static org.openstreetmap.josm.tools.I18n.marktr;

import java.awt.event.KeyEvent;
import javax.swing.AbstractAction;

import javax.swing.JMenu;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;

import org.openstreetmap.josm.Main;
import org.openstreetmap.josm.gui.MainMenu;
import org.openstreetmap.josm.plugins.Plugin;
import org.openstreetmap.josm.plugins.PluginInformation;

public class MainmenuPlugin extends Plugin {

    static JMenu jMenu;

    public MainmenuPlugin(PluginInformation info) {
        super(info);
        refreshMenu();
    }

    public static void refreshMenu() {
        MainMenu menu = Main.main.menu;

        if (jMenu == null) {
            jMenu = menu.addMenu(marktr("Main Menu Plugin"), KeyEvent.VK_COMMA, menu.getDefaultMenuPos(), "help");
        } else {
            jMenu.removeAll();
        }

        jMenu.addSeparator();
        
        jMenu.add(new JMenuItem(new AbstractAction("Temas") {
            
            @Override
            public void actionPerformed(ActionEvent e) {
                JOptionPane.showInputDialog("Ingresa un tema ");
            }
        }));
        setEnabledAll(true);
    }

    private static void setEnabledAll(boolean isEnabled) {
        for (int i = 0; i < jMenu.getItemCount(); i++) {
            JMenuItem item = jMenu.getItem(i);
            if (item != null) {
                item.setEnabled(isEnabled);
            }
        }
    }
}
