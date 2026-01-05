import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vozac } from './vozac/vozac.js'; 
import { DRIVERS } from '../db-data';
import {NgFor} from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Vozac, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('motogp');
  
  soul(){
    console.log("app comt trig");
  }
  Shoferi=DRIVERS;
}

