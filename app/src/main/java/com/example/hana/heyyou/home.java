package com.example.hana.heyyou;

import android.content.Intent;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;


public class home extends ActionBarActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_home, menu);
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
            //return super.onOptionsItemSelected(item);
        }
        switch(item.getItemId()){
            case R.id.action_me:    //return to home
                //openMe();
                return true;
            case R.id.action_roommates:
                openRoommates();
                return true;
            default:
                return true;
        }
    }

//    public void openMe(){
//        //open my own panel
//    }
    public void openRoommates(){
        //open roommates panel
        Intent intent = new Intent(this, roommates.class);
        startActivity(intent);

    }

    public void openCardActivity(View view){
        //open braintree activity
        Intent intent = new Intent(this, card.class);
        startActivity(intent);
    }
}
