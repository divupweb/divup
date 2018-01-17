import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DbService{
    constructor(private http:Http){

    }
    getPortfolio(){
        return this.http.get('http://divup.ru/database-connection.php').map((response:Response)=>response.json()).catch((error:Response)=>Observable.throw('Ошибка соединения с базой данных'));
    }

}