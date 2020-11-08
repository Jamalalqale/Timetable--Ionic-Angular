import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-fri',
  templateUrl: './fri.page.html',
  styleUrls: ['./fri.page.scss'],
})
export class FriPage implements OnInit {

 
  public timetable= [];
  public x;
  public user_id=0;
  result: any;
  constructor(

    private router: Router,
    public postPvdr: PostProvider,
    private storage: Storage,
  	public toastCtrl: ToastController

  ) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
  

    this.bringTimetable();

  }


  bringTimetable(){


    
    this.storage.get('login_session_json').then((val) => {
     
      this.result = val;   // get data in result variable
      this.result = JSON.stringify(this.result); // then convert data to json string     
      this.result = JSON.parse(this.result); // parse json data and pass json string
    
      this.user_id=this.result['user_id'];

      console.log('user_id: '+this.user_id); // got result of particular string





    let body = {
      day: 'fri',
      student_id: this.user_id
      //aksi: 'getdata'
    };


    this.postPvdr.postData(body, 'get_timetable.php').subscribe((data: any) => {
        
      console.log(data.result);
    /*  for(let datas of data.result){
        this.items.push(datas);
      }*/

      this.timetable=data.result;

   
    
    });

    });



  }

  course(course_id: number){

    //console.log('course_id = ' + course_id);



    let navigationExtras: NavigationExtras = {
      queryParams: {
        course_id: course_id
      }
    };

    this.router.navigate(['/course'],navigationExtras);

  }



  teacher(teacher_id: number){



    let navigationExtras: NavigationExtras = {
      queryParams: {
        teacher_id: teacher_id
      }
    };

    this.router.navigate(['/teacher'],navigationExtras);


  }



  
  favtable(timetable_id: number){


 



   
  this.storage.get('login_session_json').then((val) => {     
        this.result = val;   // get data in result variable
    this.result = JSON.stringify(this.result); // then convert data to json string     
    this.result = JSON.parse(this.result); // parse json data and pass json string
  
    this.user_id=this.result['user_id'];

  

  let body = {
    student_id: this.user_id,
    timetable_id: timetable_id
  };


  //console.log('timetable_id = ' + timetable_id);
  //console.log('this.user_id = ' + this.user_id);

  this.postPvdr.postData(body, 'favtable.php').subscribe((data: any) => {
        
    console.log(data);


    // call the function again to refresh the page
    
    if (data.success)    
    this.bringTimetable();

    else
    this.presentToast("Somthing wonrg");




 
  
  });

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
