import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  public items= [];



  constructor(
    private router: Router,
    public postPvdr: PostProvider,
    private storage: Storage,
  	public toastCtrl: ToastController

  ) {}

  ngOnInit() {

    let body = {
      //username: 'y',
      //password: 'y',
      //aksi: 'getdata'
    };


    this.postPvdr.postData(body, 'get_news.php').subscribe((data: any) => {
        
   
    /*  for(let datas of data.result){
        this.items.push(datas);
      }*/

      this.items=data.result;

      console.log(data.result);
    
    });
  }


  

  trimString(string, length) {
    return string.length > length ? 
           string.substring(0, length) + '...' :
           string;
}


}
