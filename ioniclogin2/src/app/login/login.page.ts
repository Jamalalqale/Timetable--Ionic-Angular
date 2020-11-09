import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  username: string;
  password: string;
  public x: string;


  public homePage : number = null;

  constructor(
  	private router: Router,
  	public postPvdr: PostProvider,
  	private storage: Storage,
  	public toastCtrl: ToastController
  ) 
  {

   }

  ngOnInit() {


  }


  async prosesLogin(){
    if (this.username != "" && this.username != ""){
      let body = {
        username: this.username,
        password: this.password
      };

      this.postPvdr.postData(body, 'login.php').subscribe((data: any) => {
        
      console.log(data);
     
   
        if (data.success){
          this.storage.set('login_session_json', data.result);

         
          this.router.navigate(['/home']);
         this.presentToast("Successfull Login");

		  //this.username = "";
		 // this.password = "";
       
        }else{
          this.presentToast("somthing wonrg");
        }
      });

    }else{
      this.presentToast("invalid user or pass");
    }
  }


  async presentToast(a){

    const toast = await this.toastCtrl.create({
      message: a,
      duration: 3000
    });
    toast.present();

  }

      

  formRegister(){
  	this.router.navigate(['/register']);
  }

}
