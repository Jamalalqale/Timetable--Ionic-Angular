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
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {
  teacher_id: number;

  public result= [];
  public office_houres_result= [];
  public teacher_courses_result= [];
  constructor(



    private router: Router,
    public postPvdr: PostProvider,
    private storage: Storage,
    private route: ActivatedRoute,
    public toastCtrl: ToastController,
    public modalController: ModalController,
    public alertController: AlertController

  ) { 



    this.route.queryParams.subscribe(params => {
      if (params && params.teacher_id) {
        this.teacher_id = params.teacher_id;// we get the variable from pervious page 
      }
    });


  }

  ngOnInit() {


    this.getInfo();
    this.get_oficceHoures();
    this.get_teacher_courses();








  }


  getInfo(){

    console.log('teacher_id = ' + this.teacher_id);

    let body = {
      teacher_id: this.teacher_id
      //aksi: 'getdata'
    };


    this.postPvdr.postData(body, 'get_teacher.php').subscribe((data: any) => {
        
      console.log(data.result);
  

      if(data.success){

        this.result=data.result;
      }
      else
      {
        this.presentToast("Something went wrong");

      }
  

   
    
    });

  }
  get_oficceHoures(){

    //console.log('teacher_id = ' + this.teacher_id);

    let body = {
      teacher_id: this.teacher_id
      //aksi: 'getdata'
    };


    this.postPvdr.postData(body, 'get_office_houres.php').subscribe((data: any) => {
        
      console.log(data.result);
  

      if(data.success){

        this.office_houres_result=data.result;
      }
      else
      {
        this.presentToast("Something went wrong");

      }
  

   
    
    });

  }


  get_teacher_courses(){

    //console.log('teacher_id = ' + this.teacher_id);

    let body = {
      teacher_id: this.teacher_id
      //aksi: 'getdata'
    };


    this.postPvdr.postData(body, 'get_teacher_courses.php').subscribe((data: any) => {
        
      console.log(data.result);
  

      if(data.success){

        this.teacher_courses_result=data.result;
      }
      else
      {
        this.presentToast("Something went wrong");

      }
  

   
    
    });

  }

  async presentToast(a){

    const toast = await this.toastCtrl.create({
      message: a,
      duration: 3000
    });
    toast.present();

  }

}
