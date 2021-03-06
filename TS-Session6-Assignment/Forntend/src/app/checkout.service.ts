import { Injectable } from '@angular/core';
import { Product } from './Product';
import { Headers,Http, RequestOptionsArgs } from '@angular/http';
import { UserService } from './user.service';
import { Order_Payement } from './order_payement';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CheckOutService {

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http : Http , private userService : UserService){}

    private PlaceOrder = 'http://localhost:8080/shoppinghibernate/rest/user/placeorder';

    private GetCartProducts = 'http://localhost:8080/shoppinghibernate/rest/user/getcart';
    private DeleteProductFromCart = 'http://localhost:8080/shoppinghibernate/rest/user/delete';

    static products : Product[] = [];


    makeOrder(curOrder : Order_Payement)
    {
        let userId = this.userService.getLoggedInUserId();
        curOrder.userId = userId;
        curOrder.total = this.userService.getTotalCost();
        curOrder.date = new Date();

        console.log(curOrder.cardNumber);
        console.log(curOrder.cvCode);

        const url = `${this.PlaceOrder}`;
        
        this.http.post( url , curOrder, {headers:this.headers} )
        .toPromise()
        .then(res => res.json());


    }



    getCartProducts() : Promise<Product[]>{

        let userId = this.userService.getLoggedInUserId();
        const url = `${this.GetCartProducts}/${userId}`;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Product[]);
        
    }

  
    deleteProductFromCart(product : Product){
        let userId = this.userService.getLoggedInUserId();
        const url = `${this.DeleteProductFromCart}`;
        let options: RequestOptionsArgs;
        options = {};
        options.headers = this.headers;
        options.body = JSON.stringify({
            productId : product.id , userId : userId 
        });
        return this.http.delete(url , options)
        .toPromise()
        .then((response)=> console.log(response.json()));
    }
}