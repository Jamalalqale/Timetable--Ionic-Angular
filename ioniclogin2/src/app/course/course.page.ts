import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

  public notes= [];
  public single_course= [];

  constructor(


    private router: Router,
    public postPvdr: PostProvider,
    private storage: Storage,
  	public toastCtrl: ToastController
  ) { }

  ngOnInit() {

    let body = {
      student_id: 1,
      course_id: 1,
      //aksi: 'getdata'
    };


    this.postPvdr.postData(body, 'get_notes.php').subscribe((data: any) => {
        
      console.log(data.result);
    /*  for(let datas of data.result){
        this.items.push(datas);
      }*/

      this.notes=data.result;

   
    
    });

    //--------------------------------------------------------------

let body2 = {
  course_id: 1,
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
