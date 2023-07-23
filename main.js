// diğer js dosyasından geleneler


import Github from "./api.js";
import UI from "./ui.js";

// github UI class örn oluşturma
const github = new Github();

const ui= new UI();

console.log(github);

// ! htmlden gelenler

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const themeBtn=document.getElementById("theme-btn");
const body =document.querySelector('body');




// ! olay izleyicisi
searchButton.addEventListener('click', getInput);

searchInput.addEventListener('keypress', (e) => {
  if (e.code === 'Enter') {
    getInput();
  }
});


themeBtn.addEventListener('click', changeTheme)


// !metotlar
function getInput(){
  // *arama yeri boş değilse işlemleri yap
  if(searchInput.value !== ''){

// calue içindeki yazıya tekabul eder
    // alert(searchInput.value);
    // kullanıcı bilgileri api isteği at
    github.getUser(searchInput.value).then((data) => {
      // eğer kullanıcı yoksa hata göster
      if(data.profile.message===' Not Found'){
        ui.showAlert(
          'Aradığınız Kullanıcı Bulunamadı.',
          'alert-danger'
        );

      } else{
        ui.showAlert('Kullanıcı Başarıyla bulundu.', 'alert-success')
        ui.showProfile(data.profile);

     // repolar içimn api istedği at
     ui.showRepos(data.repos);
    }
    });
    return;


  }
  // arama yeri boş ise
  ui.showAlert('form alanı boş olamaz', 'alert-info');
    
      
}


function changeTheme(){
 
  //  arkaplanı değiştirme
body.classList.toggle('bg-dark');
body.classList.toggle('text-bg-dark');


// buton yazı değğiştirme
if(body.classList.contains("bg-dark")){
  themeBtn.innerText='Açık Mod';

}else{
  themeBtn.innerText='Koyu Mod';
}
}
