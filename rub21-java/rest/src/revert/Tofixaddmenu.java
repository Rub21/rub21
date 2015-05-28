// License: GPL. See LICENSE file for details./*
package revert;
import static org.openstreetmap.josm.tools.I18n.tr;

import java.awt.event.ActionEvent;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Locale;

import org.openstreetmap.josm.Main;
import org.openstreetmap.josm.actions.JosmAction;
import org.openstreetmap.josm.data.osm.OsmPrimitive;
import org.openstreetmap.josm.data.preferences.StringProperty;
import org.openstreetmap.josm.io.remotecontrol.AddTagsDialog;
import org.openstreetmap.josm.tools.LanguageInfo;

public class Tofixaddmenu extends JosmAction {

    final StringProperty wikipediaLang = new StringProperty("Tofix.lang", LanguageInfo.getJOSMLocaleCode().substring(0, 2));

    public Tofixaddmenu() {
        super(tr("Add names from Wikipedia"), "dialogs/wikipedia",
                tr("Fetches interwiki links from Wikipedia in order to add several name tags"),
                null, true);
    }

        @Override
    public void actionPerformed(ActionEvent e) {

        List<String[]> tags = new ArrayList<>();
        tags.add(new String[]{"name 1" });
  tags.add(new String[]{"name 2" });


        if (Main.isDebugEnabled()) {
            Main.debug(tags.toString());
        }
        AddTagsDialog.addTags(tags.toArray(new String[tags.size()][]), "Wikipedia-tofix", Main.main.getCurrentDataSet().getSelected());
    }


    protected String getWikipediaValue() {
        if (getCurrentDataSet() == null || getCurrentDataSet().getSelected() == null || getCurrentDataSet().getSelected().size() != 1) {
            return null;
        } else {
            return getCurrentDataSet().getSelected().iterator().next().get("wikipedia-tofix");
        }
    }

    @Override
    protected void updateEnabledState() {
        setEnabled(getWikipediaValue() != null);
    }

    @Override
    protected void updateEnabledState(Collection<? extends OsmPrimitive> selection) {
        updateEnabledState();
    }
}
