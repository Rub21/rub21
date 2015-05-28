package revert;

import org.openstreetmap.josm.Main;
import org.openstreetmap.josm.gui.MainMenu;
import org.openstreetmap.josm.gui.MapFrame;
import org.openstreetmap.josm.plugins.Plugin;
import org.openstreetmap.josm.plugins.PluginInformation;

/**
 * main class for the Tofix plugin.
 *
 */
public class TofixPlugin extends Plugin{

    public TofixPlugin(PluginInformation info) {
        super(info);
        new TofixCopyTemplate();
        MainMenu.add(Main.main.menu.dataMenu,new Tofixaddmenu());
    }

    /**
     * Called when the JOSM map frame is created or destroyed.
     */
    @Override
    public void mapFrameInitialized(MapFrame oldFrame, MapFrame newFrame) {
        if (newFrame != null) {

         newFrame.addToggleDialog(new TofixDialog());

        }
    }
}
