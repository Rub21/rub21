/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package rest;

import com.google.gson.Gson;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;


/**
 *
 * @author ruben
 */
public class Rest {

    private static String readUrl(String urlString) throws Exception {
        BufferedReader reader = null;
        try {
            URL url = new URL(urlString);
            reader = new BufferedReader(new InputStreamReader(url.openStream()));
            StringBuffer buffer = new StringBuffer();
            int read;
            char[] chars = new char[1024];
            while ((read = reader.read(chars)) != -1) {
                buffer.append(chars, 0, read);
            }

            return buffer.toString();
        } finally {
            if (reader != null) {
                reader.close();
            }
        }
    }

    static class Item {

        String title;
        String link;
        String description;
    }

    static class Page {

        String status;

    }

    public static void main(String[] args) throws Exception {

        String json = readUrl("http://54.147.184.23:8000/status");

        Gson gson = new Gson();
        Page page = gson.fromJson(json, Page.class);

        System.out.println(page.status);

    }
    
}




