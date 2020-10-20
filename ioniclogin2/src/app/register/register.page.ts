import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { HAMMER_LOADER } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  username: string = "";
  password: string = "";
  confirm_password: string = "";
  constructor(
  	private router: Router,
  	private postPvdr: PostProvider,
  	private storage: Storage,
  	public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async prosesRegister(){
    // validation done
    if(this.username==""){
        const toast = await this.toastCtrl.create({
          message: 'Username is required',
          duration: 3000
        });
        toast.present();
    }else if(this.password==""){
        const toast = await this.toastCtrl.create({
          message: 'Password is required',
          duration: 3000
        });
        toast.present();
    }else if(this.password!=this.confirm_password){
        const toast = await this.toastCtrl.create({
          message: 'Invalid password',
          duration: 3000
        });
        toast.present();
    }else{

      let body = {
        username: this.username,
        password: this.password,
        aksi: 'register'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe((res:any) =>{
     
        if(res.success){
          this.router.navigate(['/login']);
          this.presentToast(res.msg);
          
        }else{
          this.presentToast("timeout");
        }
      });

    }
  
  }



  async presentToast(a){

    const toast = await this.toastCtrl.create({
      message: 'Register succesful',
      duration: 3000
    });
    toast.present();

  }





  formLogin(){
  	this.router.navigate(['/login']);
  }

}
