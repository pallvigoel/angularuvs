export class book{
public name:string;
public volume:number;
public author:string;
public description:string;
public version:number;
public price:number;
public title:string;
public subjectCategory:string;
public entryDate:any;
constructor(title:string,author:string,date?:any){
    this.title=title;
    this.author=author;
this.entryDate=date;
}
}