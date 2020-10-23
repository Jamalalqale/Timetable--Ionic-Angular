import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/Storage';
import { NavParams} from '@ionic/angular';


@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.page.html',
  styleUrls: ['./modalpopup.page.scss'],
})
export class ModalpopupPage implements OnInit {

  result: any;
  note_text_:string = "";
  course_id:number;

  public user_id=0;
  
  constructor(
    private route: ActivatedRoute,
    public modalController: ModalController,
    public postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage,
    public navParams: NavParams

  )
   {


    }

  ngOnInit() {

    // print the recieved value from previous page 
   
    this.course_id = this.navParams.get('course_id');
    console.log('course_id:  '+this.course_id);
  }

  add_note(){

    if (this.note_text_ == ""){

      this.presentToast("Note text is blank");


    }


    else
    {

      this.storage.get('login_session_json').then((val) => {
     
        this.result = val;   // get data in result variable
        this.result = JSON.stringify(this.result); // then convert data to json string     
        this.result = JSON.parse(this.result); // parse json data and pass json string
      
        this.user_id=this.result['user_id'];
  
        console.log('user_id: '+this.user_id); // got result of particular string

    let body = {
      student_id:  this.user_id,
      course_id: this.navParams.get('course_id'),// we get the course_value from previous page
      note_text: this.note_text_
     
    };


    this.postPvdr.postData(body, 'add_note.php').subscribe((res: any) => {
        
      console.log(res);
  
      if(res.success){
        this.modalController.dismiss();
         }
      
      else{
        this.presentToast("Somthing went wrong");
      }

     

   
    
    }); //postPvdr

  });// storage

  }// else


  }

  async presentToast(a){

    const toast = await this.toastCtrl.create({
      message: a,
      duration: 3000
    });
    toast.present();

  }


  closeModal(){


    this.modalController.dismiss();
  }

}
