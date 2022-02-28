import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../model/Medicine';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
  medicines: Array<Medicine>;
  medicinesRecieved: Array<Medicine>;
  cartMedicines: any;
  cartItems: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }


  ngOnInit() {
    this.httpClientService.getMedicines().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartMedicines = JSON.parse(data);
    } else {
      this.cartMedicines = [];
    }
  }

  handleSuccessfulResponse(response) {
    this.medicines = new Array<Medicine>();
    this.medicinesRecieved = response;
    for (const medicine of this.medicinesRecieved) {

      const medicinewithRetrievedImageField = new Medicine();
      medicinewithRetrievedImageField.id = medicine.id;
      medicinewithRetrievedImageField.name = medicine.name;
      medicinewithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + medicine.picByte;
      medicinewithRetrievedImageField.company = medicine.company;
      medicinewithRetrievedImageField.price = medicine.price;
      medicinewithRetrievedImageField.picByte = medicine.picByte;
      this.medicines.push(medicinewithRetrievedImageField);
    }
  }
    



  addToCart(medicineId) {
    let medicine = this.medicines.find(medicine => {
      return medicine.id === +medicineId;
    });
    let cartData = [];
    let data = localStorage.getItem('cart');
    console.log(data);
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    console.log('hii');
   cartData.push(medicine);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    medicine.isAdded = true;
  }

  updateCartData(cartData) {
    this.cartMedicines = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartMedicines = [];
    localStorage.clear();
  }
  logout() {

    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    localStorage.removeItem('cart');
    alert('You Logged Out Successfully');

  }
  payment(){
    alert('Your Order Placed Succesfully') ;
  }
  quantity:number=1;
  i=1;
  plus()
  {
    if(this.i !=10){
      this.i++;
      this.quantity=this.i;
      
    }
  }
  minus()
  {
    if(this.i !=1)
    {
      this.i--;
      this.quantity=this.i;
    }
  }
}
  
