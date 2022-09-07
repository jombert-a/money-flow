package com.example.moneycontroller

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import androidx.fragment.app.Fragment
import com.google.android.material.bottomnavigation.BottomNavigationView

class MainActivity : AppCompatActivity() {
    private val home = HomeFragment();
    private val categories = CategoriesFragment();

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        replaceFragment(home)

        val navigation : BottomNavigationView = findViewById(R.id.bottom_navigation);

        navigation.setOnItemSelectedListener {
            when (it.itemId) {
                R.id.ic_home -> replaceFragment(home);
                R.id.ic_categories -> replaceFragment(categories)
            }
            true;
        }

    }

    private fun replaceFragment(fragment: Fragment) {
        val transaction = supportFragmentManager.beginTransaction();
        transaction.replace(R.id.fragment_container, fragment);
        transaction.commit();
    }
}