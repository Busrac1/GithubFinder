//  bilgilerive fonksiyonlar burada tur


// ! bunun için class ları kullan.
 class Github {
    // api ye istek attık ve bilgileri altık
    // gerekli bilgileri burda tutmak için
    constructor(){
        this.clientId = 'b1f16ff032fad60dc1e1';
        this.clientSecret='256d807258ca6976d00d8fde7a92de9270ba6168';
        this.perPage= 10;
        this.sort= 'asc';
    }
    // kullanıcı bilg almak için
    // veri çekmemisteği: fetch
    async getUser(username){

       const profilRes= await fetch
        // ? ekstra bilgiler içermesi için, kim olduğumuzu yaz

        (
            `https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
          );
        // repo bilgiler
        const repoRes = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=${this.perPage}&sort=${this.sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
          );
        // gelen cevap jsona cevirme

        const profile= await profilRes.json();
        const repos= await repoRes.json();
        

        // çağrıldığı yere göndermek proile ve repo gönder
        return{
         profile,
         repos,
        };
    }
}

// her api cevap vermeye biliri. bu yüzden istek atmamız lazım 
export default Github;
