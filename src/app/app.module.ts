import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {BooksComponent} from "./books/books.component";
import {BookComponent} from "./book/book.component";
import {CartComponent} from "./cart/cart.component";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [AppComponent, BooksComponent, BookComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  bootstrap: [AppComponent]
})
export class AppModule {

}
