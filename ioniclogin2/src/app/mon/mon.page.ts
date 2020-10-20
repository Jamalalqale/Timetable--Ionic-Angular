import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-mon',
  templateUrl: './mon.page.html',
  styleUrls: ['./mon.page.scss'],
})
export class MonPage implements OnInit {
  public timetable= [];
  constructor(

    private router: Router,
    public postPvdr: PostProvider,
    private storage: Storage,
  	public toastCtrl: ToastController

  ) { }

  ngOnInit() {

    let body = {
      //username: 'y',
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
