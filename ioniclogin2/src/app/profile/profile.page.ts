import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

import { ModalController } from '@ionic/angular';
import { ModalpopupPage } from '../modalpopup/modalpopup.page';
import { UpdatemodalpopupPage } from '../updatemodalpopup/updatemodalpopup.page';
import { AlertController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  
  public profile_info= [];
  public single_course= [];
  course_id: number;
  result: any;
  public user_id=0;


  constructor(
    
    private router: Router,
    public postPvdr: PostProvider,
    private storage: Storage,
    private route: ActivatedRoute,
    public toastCtrl: ToastController,
    public modalController: ModalController,
    public alertController: AlertController



  ) { }

  ngOnInit() {



    

    this.storage.get('login_session_json').then((val) => {
     
      this.result = val;   // get data in result variable
      this.result = JSON.stringify(this.result); // then convert data to json string     
      this.result = JSON.parse(this.result); // parse json data and pass json string
    
      this.user_id=this.result['user_id'];

      console.log('user_id from cash: '+this.user_id); // got result of particular string


    let body = {
      student_id: this.user_id

    };


    this.postPvdr.postData(body, 'get_profile.php').subscribe((data: any) => {
        
      console.log(data.result);
    /*  for(let datas of data.result){
        this.items.push(datas);
      }*/

      this.profile_info=data.result;

   
    
    });

  });




  }

}
