function main(){
    search()
}



function search(){
    let button = document.getElementById("searchButton");
    button.addEventListener("click", async()=>{
        let searchInput =  document.getElementById("searchInput").value;        
        
        const titleFilm = await getFilm(searchInput);

        let image = document.getElementById('image');
        let title = document.getElementById('title');
        let genre = document.getElementById('genre');
        let tahun = document.getElementById('years');
        let produksi = document.getElementById('production')
        let plot = document.getElementById('plot');

        image.setAttribute("src", titleFilm.Poster);
        title.innerHTML = titleFilm.Title;
        genre.innerHTML = titleFilm.Genre;
        tahun.innerHTML = titleFilm.Year;
        produksi.innerHTML = titleFilm.Production;
        plot.innerHTML = titleFilm.Plot

        // let showContent = document.createElement('div');
        // document.body.appendChild(showContent);
        // console.dir(showContent)

        document.getElementById('content').style.display = "block";


    })
}

function getFilm(title){
    return new Promise((resolve, reject)=>{
        try {
            let URL = `http://www.omdbapi.com/?i=tt3896198&apikey=b35121f&t=${title}`            
            fetch(URL)
                .then((result) => result.json())                
                .then(data => {                    
                    let user = data;
                    resolve(user);                    
                })                                
        } catch (error) {
            reject(error)
        }

    })
}





main();