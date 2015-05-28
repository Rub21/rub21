/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package JSONPost;

import com.google.gson.Gson;

/**
 *
 * @author ruben
 */
public class Main {

    public static void main(String[] args) {

        String postUrl = "www.site.com";// put in your url
        Gson gson = new Gson();
        TrackBean trackBean = new TrackBean();
        trackBean.getAttributes().setAction("edit");
        trackBean.getAttributes().setEditor("josm");
        trackBean.getAttributes().setUser("Rub21");
        trackBean.getAttributes().setKey("d7870ef8b6c2898e0e1255b08ebf044d");
        String postingString = new String();

        HttpURLConnection httpcon = (HttpURLConnection) ((new URL("a url").openConnection()));
        httpcon.setDoOutput(true);
        httpcon.setRequestProperty("Content-Type", "application/json");
        httpcon.setRequestProperty("Accept", "application/json");
        httpcon.setRequestMethod("POST");
        httpcon.connect();

        byte[] outputBytes = "{'value': 7.5}".getBytes("UTF-8");
        OutputStream os = httpcon.getOutputStream();
        os.write(outputBytes);

        os.close();

    }

}
