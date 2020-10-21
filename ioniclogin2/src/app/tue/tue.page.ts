import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-tue',
  templateUrl: './tue.page.html',
  styleUrls: ['./tue.page.scss'],
})
export class TuePage implements OnInit {
  public timetable= [];
  constructor(

    private router: Router,
    public postPvdr: PostProvider,
    private storage: Storage,
  	public toastCtrl: ToastController

  ) { }

  ngOnInit() {

    let body = {
      day: 'tue',
      //password: 'y',
      //aksi: 'getdata'
    };


    this.postPvdr.postData(body, 'get_timetable.php').subscribe((data: any) => {
        
      console.log(data.result);
    /*  for(let datas of data.result){
        this.items.push(datas);
      }*/

      this.timetable=data.result;

   
    
    });
  }


}
