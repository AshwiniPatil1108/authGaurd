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
import { AuthGaurd } from "./shared/service/auth.gaurd";
import { UserRoleGuard } from "./shared/service/user-role.guard";
import { CompDeactivateGuard } from "./shared/service/comp-deactivate.guard";
import { AdminDashboardComponent } from "./shared/component/admin-dashboard/admin-dashboard.component";
import { ProductResolverService } from "./shared/service/productResolver.service";

const appRoutes:Routes = [
    {
        path:'',
        component:AuthComponent
      
    },
    {
        path:'home',
        component:HomeComponent,
        canActivate:[AuthGaurd, UserRoleGuard],
        title:"DashBoard",
        data : {
            userRoles :["ADMIN", "BUYER", "SUPER_ADMIN"]
        }
    },
    {
        path:'users',
        component:UsersComponent,
        canActivate:[AuthGaurd, UserRoleGuard],
        title:"users",
        data : {
            userRoles :["ADMIN", "SUPER_ADMIN"]
        },
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
        canActivate:[AuthGaurd, UserRoleGuard],
        title:"products",
        data : {
            userRoles :["ADMIN", "BUYER", "SUPER_ADMIN"]
        },
         resolve:{productData:ProductResolverService},
        children:[
            {
                path:'addProduct',
                component:ProdutFormComponent,
                
            },
            {
                path:':productId',
                component:ProductComponent,
                 resolve :{productObj : ProductResolverService}
            },
            {
                path:':productId/edit',
                component:ProdutFormComponent,
                canDeactivate:[CompDeactivateGuard ]
            },
        ]
    },
  
    {
        path:'fairs',
        component:FairsComponent,
        canActivateChild:[AuthGaurd, UserRoleGuard],
        title:'fairs',
        data : {
            userRoles :["ADMIN", "BUYER", "SUPER_ADMIN"]
        },
        children :[
            {
                path:':fairId',
                component : FairDetailComponent,
             
            }
        ]
    },
    {
        path:'admin',
        component:AdminDashboardComponent,
        title:'Admins',
        canActivate:[AuthGaurd],
        data : {
            userRoles :["SUPER_ADMIN"]
        },
    },
    {
        path:'page-not-found',
        component:PageNotFoundComponent,
        canActivate:[AuthGaurd],
        title:'page-not-found',
        data:{
            msg :`Page not Found (using Static Data of routing!!!!)`
        }
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