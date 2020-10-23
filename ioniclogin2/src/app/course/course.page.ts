import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

import { ModalController } from '@ionic/angular';
import { ModalpopupPage } from '../modalpopup/modalpopup.page';


@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],



})
export class CoursePage implements OnInit {

  public notes= [];
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



  )
   { 

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.course_id = params.special;// we get the variable from pervious page 
      }
    });



   }


   
   add_note(){

     console.log('course_id = ' + this.course_id);
    this.modalController.create({
      component:ModalpopupPage,
      componentProps:{
        course_id:this.course_id // send value to the popup page (next page)
      }})
      .then((modalElement)=>{
      modalElement.present();


   

    
    })


    
    
  }

  ngOnInit() {

    // console.log('course_id = ' + this.course_id);


    this.storage.get('login_session_json').then((val) => {
     
      this.result = val;   // get data in result variable
      this.result = JSON.stringify(this.result); // then convert data to json string     
      this.result = JSON.parse(this.result); // parse json data and pass json string
    
      this.user_id=this.result['user_id'];

      console.log('user_id: '+this.user_id); // got result of particular string
     

 




    let body = {
      student_id: this.user_id,
      course_id: this.course_id
      //aksi: 'getdata'
    };


    this.postPvdr.postData(body, 'get_notes.php').subscribe((data: any) => {
        
      console.log(data.result);
    /*  for(let datas of data.result){
        this.items.push(datas);
      }*/

      this.notes=data.result;

   
    
    });

  });

 //--------------------------------------------------------------

let body2 = {
  course_id:  this.course_id
  //password: 'y',
  //aksi: 'getdata'
};


this.postPvdr.postData(body2, 'get_single_course.php').subscribe((data: any) => {
    
  console.log(data.result);
/*  for(let datas of data.result){
    this.items.push(datas);
  }*/

  this.single_course=data.result;



});



  }



}
