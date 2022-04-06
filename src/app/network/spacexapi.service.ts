
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class spacexApiService{
    
    constructor(private httpclient: HttpClient){}
    getMission():Observable<any>{
        return this.httpclient.get("https://api.spacexdata.com/v3/launches")
    }

    getMissionById(id: any):Observable<any>{
        return this.httpclient.get(`https://api.spacexdata.com/v3/launches/${id}`);
    }
}