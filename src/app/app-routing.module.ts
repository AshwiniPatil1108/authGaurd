import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./shared/component/auth/auth.component";
import { HomeComponent } from "./shared/component/home/home.component";
import { UsersComponent } from "./shared/component/users/users.component";
import { UserFormComponent } from "./shared/component/users/user-form/user-form.component";
import { UserComponent } from "./shared/component/users/user/user.component";
import { ProductsComponent } from "./shared/component/products/products.component";
import { ProductComponent } from "./shared/component/products/product/product.component";
import { ProdutFormComponent } from "./shared/component/products/produt-form/produt-form.component";
import { FairsComponent } from "./shared/component/fairs/fairs.component";
import { FairDetailComponent } from "./shared/component/fairs/fair-detail/fair-detail.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";

const appRoutes:Routes = [
    {
        path:'',
        component:AuthComponent
       
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'users',
        component:UsersComponent,
        children :[
            {
                path:'addUser',
                component:UserFormComponent
            },
            {
                path:':userId',
                component:UserComponent
            },
            {
                path:':userId/edit',
                component:UserFormComponent
            },
        ]
    },
    {
        path:'products',
        component:ProductsComponent,
        children:[
            {
                path:'addProduct',
                component:ProdutFormComponent
            },
            {
                path:':productId',
                component:ProductComponent
            },
            {
                path:':productId/edit',
                component:ProdutFormComponent
            },
        ]
    },
  
    {
        path:'fairs',
        component:FairsComponent,
       
        children :[
            {
                path:':fairId',
                component : FairDetailComponent
            }
        ]
    },
    {
        path:'page-not-found',
        component:PageNotFoundComponent
    },
    {
        path:'**',
        redirectTo :'page-not-found'
    },
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}