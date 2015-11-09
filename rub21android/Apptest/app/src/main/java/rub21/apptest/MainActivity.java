package rub21.apptest;

import android.app.ActionBar;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.media.Rating;
import android.support.v7.app.ActionBarActivity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import  android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RatingBar;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends ActionBarActivity {

    public static Button button_sbm;




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        onButtonClickListner();
        
    }

public void onButtonClickListner(){
    button_sbm= (Button) findViewById(R.id.button);
    button_sbm.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            AlertDialog.Builder a_buBuilder = new AlertDialog.Builder(MainActivity.this);
            a_buBuilder.setMessage("Do you want anything?")
                    .setCancelable(false)
                    .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            finish();
                        }
                    }).setNegativeButton("No", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface dialog, int which) {
                    dialog.cancel();
                }
            });

            AlertDialog alert= a_buBuilder.create();
            alert.setTitle("Alert!!");
            alert.show();


        }
    });
}

}
