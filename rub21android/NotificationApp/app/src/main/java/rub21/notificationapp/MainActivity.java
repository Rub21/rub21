package rub21.notificationapp;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    Button btn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btn=(Button)findViewById(R.id.button);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent= new Intent();
                PendingIntent pendingIntent = PendingIntent.getActivity(MainActivity.this,0,intent,0);
                Notification noti = new Notification.Builder(MainActivity.this)
                        .setTicker("TickerTitle")
                        .setContentTitle("Content Title")
                        .setContentText("Content test lalallalala")
                        .setSmallIcon(R.drawable.logo_32x32x32)
                        .setContentIntent(pendingIntent)
                        .getNotification();

                noti.flags =Notification.FLAG_AUTO_CANCEL;
                NotificationManager nm=  (NotificationManager)getSystemService(NOTIFICATION_SERVICE);
                nm.notify(0,noti);

            }
        });
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
