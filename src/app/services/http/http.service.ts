import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HttpService {

    constructor (private http:HttpClient) {

    }

    // getContent(url:string): Promise<string> {
    //
    //     return new Promise((resolve, reject) => {
    //         this.http.get(url).subscribe(data => console.log(data));;
    //
    //         let filePath = path.substring(0, path.lastIndexOf('/') + 1);
    //         let fileName = path.substring(path.lastIndexOf('/') + 1, path.length);
    //
    //         if (this.platform.is('android')) {
    //             console.log("FileService ANDROID");
    //             this.file.checkFile(filePath, fileName)
    //                 .then((result) => {
    //                     resolve(result);
    //                 })
    //                 .catch((error) => {
    //                     // alert(path + " " + error);
    //                     reject(error);
    //                 });
    //         }
    //         else {
    //             console.log("FileService NOT ANDROID");
    //             if (fileName !== "not a file") {
    //                 resolve(true);
    //             }else{
    //                 reject("not a file");
    //             }
    //         }
    //
    //     });
    //
    //     return "toto";
    // }

    // public getContent(url:string): string {
    public getJsonContent(url:string): Promise<string[]> {
        return new Promise((resolve, reject) => {
            this.http.get(url, {responseType: 'json'}).toPromise()
                .then(result => { resolve(result as string[]) ; })
                .catch(error => reject(error))
                //.subscribe(data => console.log(data))
                //.subscribe(result => { resolve(result as string[]) ; })
        });
        // return "toto";
    }

}