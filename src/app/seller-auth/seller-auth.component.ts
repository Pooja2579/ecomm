import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
  imports: [FormsModule] 
})
export class SellerAuthComponent {

  signUp(data:object):void{
    // console.log("signUp method called");
    console.warn(data)

  }
}
