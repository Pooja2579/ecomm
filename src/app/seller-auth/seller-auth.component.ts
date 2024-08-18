import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
  imports: [FormsModule] 
})
export class SellerAuthComponent {
  constructor(private seller: SellerService){}

  signUp(data:object):void{
    // console.log("signUp method called");
    console.warn(data);
    this.seller.userSignUp(); 

  }
}
