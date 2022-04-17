<template>
  <div>
    <div class="container-md mb-5">
      <div class="row">
        <div class="col-9">
          <div class="row me-2">
            <div class="col-md-4 border">
              <div class="product-card">
                <img class="productImageSize mb-2" :src="productImage1" alt="">
                <div class="row cardFontSize d-flex flex-column">
                  <div class="col">
                    <p class="rounded">Name : {{product1.name}}</p>
                  </div>
                  <div class="col">
                    <p class="rounded">Price : {{product1.price}}</p>
                  </div>
                  <div class="col">
                    <p class="rounded">Discount : {{product1.discount}}</p>
                  </div>
                </div>
                <button class="btn btn-success buttonFontSize mb-3" @click="submit1">Add to Cart</button> 
              </div>
            </div>
            <div class="col-md-4 border">
              <div class="product-card">
                <img class="productImageSize mb-2" :src="productImage2" alt="">
                <div class="row cardFontSize d-flex flex-column">
                  <div class="col">
                    <p class="rounded">Name : {{product2.name}}</p>
                  </div>
                  <div class="col">
                    <p class="rounded">Price : {{product2.price}}</p>
                  </div>
                  <div class="col">
                    <p class="rounded">Discount : {{product2.discount}}</p>
                  </div>
                </div>
                <button class="btn btn-success buttonFontSize mb-3" @click="submit2">Add to Cart</button> 
              </div>
            </div>
            <div class="col-md-4 border">
              <div class="product-card">
                <img class="productImageSize mb-2" :src="productImage3" alt="">
                <div class="row cardFontSize d-flex flex-column">
                  <div class="col">
                    <p class="rounded">Name : {{product3.name}}</p>
                  </div>
                  <div class="col">
                    <p class="rounded">Price : {{product3.price}}</p>
                  </div>
                  <div class="col">
                    <p class="rounded">Discount : {{product3.discount}}</p>
                  </div>
                </div>
                <button class="btn btn-success buttonFontSize mb-3" @click="submit3">Add to Cart</button> 
              </div>
            </div>
            <div class="col-md-4 border">
              <div class="product-card">
                <img class="productImageSize mb-2" :src="productImage4" alt="">
                <div class="row cardFontSize d-flex flex-column">
                  <div class="col">
                    <p class="rounded">Name : {{product4.name}}</p>
                  </div>
                  <div class="col">
                    <p class="rounded">Price : {{product4.price}}</p>
                  </div>
                  <div class="col">
                    <p class="rounded">Discount : {{product4.discount}}</p>
                  </div>
                </div>
                <button class="btn btn-success buttonFontSize mb-3"  @click="submit4">Add to Cart</button> 
              </div>
            </div>
            <div class="col-md-4 border">
              <div class="product-card">
                <img class="productImageSize mb-2" :src="productImage5" alt="">
                <div class="row cardFontSize d-flex flex-column">
                  <div class="col">
                    <p class="rounded">Name : {{product5.name}}</p>
                  </div>
                  <div class="col">
                    <p class="rounded">Price : {{product5.price}}</p>
                  </div>
                  <div class="col">
                    <p class="rounded">Discount : {{product5.discount}}</p>
                  </div>
                </div>
                <button class="btn btn-success buttonFontSize mb-3" @click="submit5">Add to Cart</button> 
              </div>
            </div>
            <div class="col-md-4 border">
              <div class="product-card">
                <img class="productImageSize mb-2" :src="productImage6" alt="">
                <div class="row cardFontSize d-flex flex-column">
                  <div class="col">
                    <p class="rounded">Name : {{product6.name}}</p>
                  </div>
                  <div class="col">
                    <p class="rounded">Price : {{product6.price}}</p>
                  </div>
                  <div class="col">
                    <p class="rounded">Discount : {{product6.discount}}</p>
                  </div>
                </div>
                <button class="btn btn-success buttonFontSize mb-3" @click="submit6">Add to Cart</button> 
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 border cartItemBox overflow-scroll">
          <div class="border-bottom">
            <h1 class="mt-5 mb-5">Cart <i class="fas fa-shopping-cart"></i></h1>
          </div>
          <div class="border-bottom">
            <button class="btn btn-success m-3" @click="buyItems">Buy</button>
          </div>
          <div v-for="item in cart" :key="item.id" class="text-start m-3">
            <!-- <ul class="cartItemBox">
              <li>{{ item.name }}</li>
              <li>{{ item.price }}</li>
            </ul> -->
            <ul>
              <li class="listDecoration">
                <div class="row">
                  <div class="col-md-10">
                    Ürün : {{ item.name }} <br>Fiyat : {{ item.price }} <br> Adet : {{ item.itemCount }} <br> ID : {{ item.id }}
                  </div>
                  <div class="col-md-2 trashBox">
                    <i class="fas fa-trash-alt" @click="deleteItem(item.id)"></i>
                  </div>
                </div>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
    // You can set your default options here
};


Vue.use(Toast, options);
export default {
  data(){
    return {
      productImage1 : require('../assets/shoes-1.jpg'),
      productImage2 : require('../assets/spor-1.jpg'),
      productImage3 : require('../assets/vans-1.jpg'),
      productImage4 : require('../assets/shoes-2.jpg'),
      productImage5 : require('../assets/spor-2.jpg'),
      productImage6 : require('../assets/vans-2.jpg'),
      cart : [],
      count : 0,
      product1 : {
        id : 1,
        name : "shoesType1",
        price: "$100.00",
        discount : "%10",
        itemCount : 1
      },
      product2 : {
        id : 2,
        name : "shoesType2",
        price: "$150.00",
        discount : "%15",
        itemCount : 1
      },
      product3 : {
        id : 3,
        name : "shoesType3",
        price: "$200.00",
        discount : "%20",
        itemCount : 1
      },
      product4 : {
        id : 4,
        name : "shoesType4",
        price: "$250.00",
        discount : "%35",
        itemCount : 1
      },
      product5 : {
        id : 5,
        name : "shoesType5",
        price: "$300.00",
        discount : "%40",
        itemCount : 1
      },
      product6 : {
        id : 6,
        name : "shoesType6",
        price: "$350.00",
        discount : "%45",
        itemCount : 1
      },
    }
  },
  mounted() {
    const items = JSON.parse(localStorage.getItem('myCart'));
    console.log('items', items);
    this.cart = items;
  },
  computed: {
    cartItemsCount() {
      return this.cart.length;
    }
  },

  methods : {
    submit1() {
      var existingEntries = JSON.parse(localStorage.getItem("myCart")); // existingEntries içerisine localStorage'dan gelen verileri ekler.
      if(existingEntries == null) existingEntries = []; // existingEntries içi boş ise existingEntries i boş array olarak sıfırlar.
    
      var entry = { // entry isminde bir obje oluşturulup name, price vb. bilgileri product1'den alır. 
        name: this.product1.name,
        price: this.product1.price,
        discount: this.product1.discount,
        id : this.product1.id,
        itemCount : this.product1.itemCount,
      };
      localStorage.setItem("latestItem", JSON.stringify(entry)); // daha sonra entry objesine alınan verileri tekrar localStorage'a latesItem olarak geri yollar.
      existingEntries.push(entry); // existingEntries içerisine entry datalarını push ediyoruz.
         // Save allEntries back to local storage
        localStorage.setItem("myCart", JSON.stringify(existingEntries)); // existingEntries'i localStorage'a göndererek update ediyoruz.
        console.log('myCart', JSON.parse(localStorage.getItem('myCart')));
        this.cart = JSON.parse(localStorage.getItem('myCart')); // localStorage'dan alınan verileride girip cart içerisine atıyoruz.

    },
    submit2() {
      var existingEntries = JSON.parse(localStorage.getItem("myCart"));
      if(existingEntries == null) existingEntries = [];
    
      var entry = {
        name: this.product2.name,
        price: this.product2.price,
        discount: this.product2.discount,
        id : this.product2.id,
        itemCount : this.product2.itemCount,
      };
      localStorage.setItem("latestItem", JSON.stringify(entry));
      existingEntries.push(entry); // existingEntries içerisine entry datalarını push ediyoruz.
         // Save allEntries back to local storage
        localStorage.setItem("myCart", JSON.stringify(existingEntries)); // existingEntries'i localStorage'a göndererek update ediyoruz.
        console.log('myCart', JSON.parse(localStorage.getItem('myCart')));
        this.cart = JSON.parse(localStorage.getItem('myCart')); // localStorage'dan alınan verileride girip cart içerisine atıyoruz.
    },
    submit3() {
      var existingEntries = JSON.parse(localStorage.getItem("myCart"));
      if(existingEntries == null) existingEntries = [];
    
      var entry = {
        name: this.product3.name,
        price: this.product3.price,
        discount: this.product3.discount,
        id : this.product3.id,
        itemCount : this.product3.itemCount,
      };
      localStorage.setItem("latestItem", JSON.stringify(entry));
      existingEntries.push(entry); // existingEntries içerisine entry datalarını push ediyoruz.
         // Save allEntries back to local storage
        localStorage.setItem("myCart", JSON.stringify(existingEntries)); // existingEntries'i localStorage'a göndererek update ediyoruz.
        console.log('myCart', JSON.parse(localStorage.getItem('myCart')));
        this.cart = JSON.parse(localStorage.getItem('myCart')); // localStorage'dan alınan verileride girip cart içerisine atıyoruz.
    },
    submit4() {
      var existingEntries = JSON.parse(localStorage.getItem("myCart"));
      if(existingEntries == null) existingEntries = [];
    
      var entry = {
        name: this.product4.name,
        price: this.product4.price,
        discount: this.product4.discount,
        id : this.product4.id,
        itemCount : this.product4.itemCount,
      };
      localStorage.setItem("latestItem", JSON.stringify(entry));
      existingEntries.push(entry); // existingEntries içerisine entry datalarını push ediyoruz.
         // Save allEntries back to local storage
        localStorage.setItem("myCart", JSON.stringify(existingEntries)); // existingEntries'i localStorage'a göndererek update ediyoruz.
        console.log('myCart', JSON.parse(localStorage.getItem('myCart')));
        this.cart = JSON.parse(localStorage.getItem('myCart')); // localStorage'dan alınan verileride girip cart içerisine atıyoruz.
    },
    submit5() {
      var existingEntries = JSON.parse(localStorage.getItem("myCart"));
      if(existingEntries == null) existingEntries = [];
    
      var entry = {
        name: this.product5.name,
        price: this.product5.price,
        discount: this.product5.discount,
        id : this.product5.id,
        itemCount : this.product5.itemCount,
      };
      localStorage.setItem("latestItem", JSON.stringify(entry));
      existingEntries.push(entry); // existingEntries içerisine entry datalarını push ediyoruz.
         // Save allEntries back to local storage
        localStorage.setItem("myCart", JSON.stringify(existingEntries)); // existingEntries'i localStorage'a göndererek update ediyoruz.
        console.log('myCart', JSON.parse(localStorage.getItem('myCart')));
        this.cart = JSON.parse(localStorage.getItem('myCart')); // localStorage'dan alınan verileride girip cart içerisine atıyoruz.
    },
    submit6() {
      var existingEntries = JSON.parse(localStorage.getItem("myCart"));
      if(existingEntries == null) existingEntries = [];
    
      var entry = {
        name: this.product6.name,
        price: this.product6.price,
        discount: this.product6.discount,
        id : this.product6.id,
        itemCount : this.product6.itemCount,
      };
      localStorage.setItem("latestItem", JSON.stringify(entry));
      existingEntries.push(entry); // existingEntries içerisine entry datalarını push ediyoruz.
         // Save allEntries back to local storage
        localStorage.setItem("myCart", JSON.stringify(existingEntries)); // existingEntries'i localStorage'a göndererek update ediyoruz.
        console.log('myCart', JSON.parse(localStorage.getItem('myCart')));
        this.cart = JSON.parse(localStorage.getItem('myCart')); // localStorage'dan alınan verileride girip cart içerisine atıyoruz.
    },
    deleteItem(index){
      var existingEntries = JSON.parse(localStorage.getItem("myCart"));
      if(existingEntries == null) existingEntries = [];

      let tmpArr=existingEntries.filter(x => x.id == index);// bana index olarak gelen keye sahip olan objeyi diziden almak filter(x öylekii x'in key'i eşit olmalı index'e)->Bu dizi döner
      this.tmpObj=tmpArr[0];     //-> gelen dizinin ilk elemanını almak  (zaten başka olamaz herbiri uniqe key)
      let indis = existingEntries.indexOf(this.tmpObj) // listedeki key ile bize gelen gelen i karşılaştır. Aynı ise 
      existingEntries.splice(indis, 1);

      existingEntries.forEach(element => {
        var entry2 = {
            name : element.name,
            price : element.price,
            discount : element.discount,
            id : element.id,
            
        }
        console.log(entry2)
      });
      localStorage.setItem("myCart", JSON.stringify(existingEntries));
      this.cart = JSON.parse(localStorage.getItem('myCart'));
    },
    buyItems(){
      var existingEntries = JSON.parse(localStorage.getItem("myCart"));
      if(existingEntries == null){
        existingEntries = [];
        this.$toast.success("You need to add a product to the cart !");
      }else{
      localStorage.clear();
      this.$toast.success("Your purchase completed !")
      setTimeout(() => location.reload(), 5000);
      }
    }
  }
}
</script>

<style>
  .product-card{
    height: 450px;
    width: 270px;
    background-color: rgb(255, 251, 250);
    margin: 15px;
  }

  .productImageSize{
    width: 100%;
    height: 65%;
    padding: 15px;
  }

  .productImageSize:hover{
    border: 1px solid black;
  }

  .cardFontSize{
    font-size: 15px;
    padding: 4px;
  }

  .buttonFontSize{
    font-size: 14px;
    padding: 4px;
  }
  .cartItemBox{
    height: 963px!important;
  }
  .listDecoration{
    list-style-type: none;
    border-bottom:  1px solid black;
    padding: 10px;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  .trashBox{
    place-self: center;
  }
</style>