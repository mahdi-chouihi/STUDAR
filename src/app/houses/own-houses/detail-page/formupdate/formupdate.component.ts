import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../../data.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formupdate',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './formupdate.component.html',
  styleUrl: './formupdate.component.css'
})
export class FormupdateComponent {
  constructor(private dataService: DataService,private http: HttpClient) {}
  item =this.dataService.selectedHouse;
  
  ngOnInit(): void {
      
    this.setUpdate()
    
  }

  
  setUpdate(): void {
    this.monthly_rent = 1500;
    this.security_deposit = 2000;
    this.bedrooms = 4;
    this.gender = "Male";
   
   
  
  } 
  
  isCheckedAC: boolean = false; // Variable to store the checkbox state
  a_c: number = 0; // Variable to store the value (1 if checked, 0 if not)
  selectedFile: any;
  updateValueAC() {
    this.a_c = 1;
  }
  isCheckedf: boolean = false; // Variable to store the checkbox state
  furnished: number = 0; // Variable to store the value (1 if checked, 0 if not)

  updateValuef() {
    this.furnished = 1;
  }
  
  isCheckedw: boolean = false; // Variable to store the checkbox state
  wifi: number = 0; // Variable to store the value (1 if checked, 0 if not)

  updateValuew() {
    this.wifi = 1;
  }

  isCheckede: boolean = false; // Variable to store the checkbox state
  waterelect: number = 0; // Variable to store the value (1 if checked, 0 if not)

  updateValuee() {
    this.waterelect = 1;
  }

  isCheckedb: boolean = false; // Variable to store the checkbox state
  balcony: number = 0; // Variable to store the value (1 if checked, 0 if not)

  updateValueb() {
    this.balcony = 1;
  }
 
  monthly_rent: number = 0;
  security_deposit: number = 0;
  bedrooms: number = 0;
  gender: string = '';
  date_available: Date | null = null;
  note: string = '';
  

updateHouse() {
  const houseData = {
    "user": 1,
    "monthly_rent": this.monthly_rent,
    "security_deposit": this.security_deposit,
    "bedrooms": this.bedrooms,
    "gender": this.gender,
    "date_available": this.date_available,
    "photo1": "bed.png",
    "photo2": "house_photo2.jpg",
    "photo3": "house_photo3.jpg",
    "note": this.note,
    "location": this.item.location,
    "Property_Type": "house",
    "university": this.item.university,
    "a_c": this.a_c,
    "furnished": this.furnished,
    "wifi": this.wifi,
    "balcony": this.balcony,
    "waterelect": this.waterelect
    
  };
  alert(JSON.stringify( houseData))

  const url = `http://127.0.0.1:8000/house/${this.item.id_house}`; // Include house ID in the URL

  this.http.put<any>(url, houseData)
    .subscribe({
      next: resultData => {
        console.log('House updated successfully:', resultData);
+        alert('House Updated Successfully!');
      },
      error: error => {
        console.error('Error updating house:', error);
        alert(houseData.wifi);
        
      }
    });
//   const houseData = {
    
//     "user": 1,
//     "monthly_rent": this.monthly_rent,
//     "security_deposit": this.security_deposit,
//     "bedrooms": this.bedrooms,
//     "gender": this.gender,
//     "date_available": this.date_available,
//     "photo1": "bed.png",
//     "photo2": "house_photo2.jpg",
//     "photo3": "house_photo3.jpg",
//     "note": this.note,
//     "location": this.item.location,
//     "Property_Type": this.item.property,
//     "university": this.item.university,
//     "a_c": this.a_c,
//     "furnished": this.furnished,
//     "wifi": this.wifi,
//     "balcony": this.balcony,
//     "waterelect": this.waterelect
  
  
// };
// const url = `http://127.0.0.1:8000/house/${this.item.id_house}`; // Replace with actual endpoint

//     this.http.delete(url).subscribe(() => {
//       console.log('House deleted successfully!');
//       // Optionally, update your local data if applicable (discussed later)
//     }, error => {
//       console.error('Error deleting house:', error);
//       // Handle potential errors
//     });
  

// this.http.post<any>('http://127.0.0.1:8000/house', houseData)
// .subscribe({
//   next: resultData => {
//     console.log('Data saved successfully:', resultData);
//   },
//   error: error => {
//     console.error('Error saving ad:', error);
//   }
// });

  }

}





// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { DataService } from '../../../../data.service';
// import { HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { FormsModule, NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-formupdate',
//   standalone: true,
//   imports: [RouterLink,CommonModule,FormsModule],
//   templateUrl: './formupdate.component.html',
//   styleUrl: './formupdate.component.css'
// })
// export class FormupdateComponent {
//   constructor(private dataService: DataService,private http: HttpClient) {}
//   item =this.dataService.selectedHouse;
  
//   isCheckedAC: boolean = false; // Variable to store the checkbox state
//   a_c: number = 0; // Variable to store the value (1 if checked, 0 if not)
//   selectedFile: any;
//   updateValueAC() {
//     this.a_c = 1;
//   }
//   isCheckedf: boolean = false; // Variable to store the checkbox state
//   furnished: number = 0; // Variable to store the value (1 if checked, 0 if not)

//   updateValuef() {
//     this.furnished = 1;
//   }
  
//   isCheckedw: boolean = false; // Variable to store the checkbox state
//   wifi: number = 0; // Variable to store the value (1 if checked, 0 if not)

//   updateValuew() {
//     this.wifi = 1;
//   }

//   isCheckede: boolean = false; // Variable to store the checkbox state
//   waterelect: number = 0; // Variable to store the value (1 if checked, 0 if not)

//   updateValuee() {
//     this.waterelect = 1;
//   }

//   isCheckedb: boolean = false; // Variable to store the checkbox state
//   balcony: number = 0; // Variable to store the value (1 if checked, 0 if not)

//   updateValueb() {
//     this.balcony = 1;
//   }
 
//   monthly_rent: number = 0;
//   security_deposit: number = 0;
//   bedrooms: number = 0;
//   gender: string = '';
//   date_available: Date | null = null;
//   note: string = '';

  

// updateHouse() {

//   const houseData = {
//     "user": 1,
//     "monthly_rent": this.monthly_rent,
//     "security_deposit": this.security_deposit,
//     "bedrooms": this.bedrooms,
//     "gender": this.gender,
//     "date_available": this.date_available,
//     "photo1": "bed.png",
//     "photo2": "house_photo2.jpg",
//     "photo3": "house_photo3.jpg",
//     "note": this.note,
//     "location": this.item.location,
//     "Property_Type": this.item.property,
//     "university": this.item.university,
//     "a_c": this.a_c,
//     "furnished": this.furnished,
//     "wifi": this.wifi,
//     "balcony": this.balcony,
//     "waterelect": this.waterelect
    
//   };

//   const url = http://127.0.0.1:8000/house/${this.item.id_house}; // Include house ID in the URL

//   this.http.put<any>(url, houseData)
//     .subscribe({
//       next: resultData => {
//         console.log('House updated successfully:', resultData);
//         alert('House Updated Successfully!');
//          this.monthly_rent = 0;
//          this.security_deposit= 0;
//         this.bedrooms= 0;
//          this.gender= '';
//          this.date_available= 0;
//          this.photo= '';
//          this.note= '';
//         this.location= '';
//          this.property_type= '';
//          this.university = '';
       
       
//       },
//       error: error => {
//         console.error('Error updating house:', error);
//         alert('Failed to update house. Please check the console for details.');
//       }
//     });

//   }

// }