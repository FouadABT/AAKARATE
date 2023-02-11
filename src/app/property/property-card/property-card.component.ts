import { Component } from "@angular/core";

@Component({
    selector:'app-property-card',
    //template:'',
    templateUrl:'property-card.component.html',
    styleUrls:['property-card.component.css']
})
export class PropertyCardComponents{

    Property:any={
        id:0,
        name:"darlkheer",
        price:"300000",
        desc:"lorem ipsum dolem askldjf asldkjf skldfj asldkjf alsdk fjaslkdjf askldfj asdklfj ",
        created_Date:"12/12/2022 14:20",
        updated_Date:"",
        type:"Vente",
        image:"/assets/img1.jpeg"
    }
}