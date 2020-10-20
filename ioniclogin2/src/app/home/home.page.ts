import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items= [];
  constructor(
    private router: Router,
    public postPvdr: PostProvider,
    private storage: Storage,
  	public toastCtrl: ToastController

  ) {}

  ngOnInit() {


  }


  timetable(){
  	this.router.navigate(['/timetable']);
  }

  news(){
  	this.router.navigate(['/news']);
  }


profile(){
  this.router.navigate(['/profile']);
}

}
