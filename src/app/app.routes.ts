import { Routes } from '@angular/router';
import { ConsultHousesComponent } from './consult-houses/consult-houses.component';
import { DetailsAllComponent } from './details-all/details-all.component';
import { RoommatesComponent } from './roommates/roommates.component';
import { FirstListComponent } from './houses/first/first-list/first-list.component';
import { FormBigComponent } from './houses/forms/form-big/form-big.component';
import { HousesComponent } from './houses/houses.component';
import { FormsComponent } from './houses/forms/forms.component';
import { FirstComponent } from './houses/first/first.component';
import { OwnHousesComponent } from './houses/own-houses/own-houses.component';
import { DetailsLandlordComponent } from './houses/own-houses/detail-page/details-landlord/details-landlord.component';
import { FormupdateComponent } from './houses/own-houses/detail-page/formupdate/formupdate.component';
import { DetailPageComponent } from './houses/own-houses/detail-page/detail-page.component';
import { NotifcardComponent } from './notifcard/notifcard.component';
export const routes: Routes = [
    
    { path: 'details', component: DetailsAllComponent},
    { path: 'notif', component: NotifcardComponent},
    { path: '', component: ConsultHousesComponent },
    { path: 'roommates', component: RoommatesComponent},
    { path: 'list', component: HousesComponent,
        children:[
            { path: '', component: OwnHousesComponent, }, 
            { path: 'detailsLand', component: DetailPageComponent ,
                children:[
                    { path: '', component: DetailsLandlordComponent ,},
                    { path: 'formupdate', component: FormupdateComponent ,},
                ]
            },
            
            { path: 'F', component: FirstComponent ,
                children:[
                    { path: '', component: FirstListComponent ,},
                    { path: 'form', component: FormBigComponent,
             },
                ]
            },
            { path: 'form', component: FormBigComponent,
             },
        ]
    },
    
    
];
