import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/Storage';
import { NavParams} from '@ionic/angular';

@Component({
  selector: 'app-updatemodalpopup',
  templateUrl: './updatemodalpopup.page.html',
  styleUrls: ['./updatemodalpopup.page.scss'],
})
export class UpdatemodalpopupPage implements OnInit {


  note_id:number;
  note_text:string = "";

  constructor(

    private route: ActivatedRoute,
    public modalController: ModalController,
    public postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage,
    public navParams: NavParams


  ) { }

  ngOnInit() {


    this.note_id = this.navParams.get('note_id');
    this.note_text = this.navParams.get('note_text');

    //console.log('note_id:  '+this.note_id);


  }

  update_note(){

    if (this.note_text == ""){

      this.presentToast("Note text is blank");


    }

    else{
      let body = {
        note_id:  this.note_id,
        note_text: this.note_text
       
      };
  
  
      this.postPvdr.postData(body, 'update_note.php').subscribe((res: any) => {
          
        console.log(res);
    
        if(res.success){
          this.modalController.dismiss();
           }
        
        else{
          this.presentToast("Something went wrong");
        }
  
       
  
     
      
      }); //postPvdr




    }


  }//update note


  closeModal(){


    this.modalController.dismiss();
  }


  async presentToast(a){

    const toast = await this.toastCtrl.create({
      message: a,
      duration: 3000
    });
    toast.present();

  }

}
