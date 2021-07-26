import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturedComponent } from './components/featured/featured.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { SearchPropertyComponent } from './components/search-property/search-property.component';
import { PropertyDetailComponent } from './components/properties/property-detail/property-detail.component';

const routes: Routes = [
  {path: '', component:SearchPropertyComponent},
  {path: 'nav-bar', component: NavBarComponent},
  {path: 'home', component: HomeComponent},
  {path:'featured-properties', component: FeaturedComponent},
  {path: 'properties', component:PropertiesComponent},
  {path: 'property-details', component:PropertyDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
