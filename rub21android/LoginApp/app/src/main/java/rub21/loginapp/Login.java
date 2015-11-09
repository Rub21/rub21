package rub21.loginapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class Login extends AppCompatActivity {

    private   static EditText username;
    private   static EditText password;
    private   static TextView attempts;
    private   static Button login_button;
    int attemp_counter=5;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        LoginButton();
    }

    public  void  LoginButton(){
        username=(EditText)findViewById(R.id.editText_user);
        password=(EditText)findViewById(R.id.editText_password);
        attempts=(TextView)findViewById(R.id.textView_attemt_count);
        login_button=(Button)findViewById(R.id.button_login);

        attempts.setText(Integer.toString(attemp_counter));
        login_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(username.getText().toString().equals("user") && password.getText().toString().equals("pass")){
                    Toast.makeText(Login.this,"ok user",Toast.LENGTH_SHORT).show();
                    Intent intent  = new Intent("rub21.loginapp.User");
                    startActivity(intent);
                }else{
                    Toast.makeText(Login.this,"Not Correct",Toast.LENGTH_SHORT).show();
                    attemp_counter--;
                    attempts.setText(Integer.toString(attemp_counter));
                    if(attemp_counter==0){
                        login_button.setEnabled(false);
                    }
                }
            }
        });
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_login, menu);
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
