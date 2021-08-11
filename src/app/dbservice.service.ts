import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DbService {
  public  pyurlforservice = "http://localhost:82/" 

  constructor(private http: HttpClient) { }

  public GetVideo(data){
    var formData: any = new FormData();
    formData.append("data", data);
    console.log(formData,'formdata')
    return this.http.post(this.pyurlforservice + 'detectbyvideo', formData)
  }

    public GetWebCam(){
    return this.http.get(this.pyurlforservice + 'detectbyebcam' )
  }
  

}

