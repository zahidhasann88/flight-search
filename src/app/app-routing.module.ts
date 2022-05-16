import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { BookingComponent } from "./components/booking/booking.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: "home", component: HomeComponent },
    { path: "booking", component: BookingComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }