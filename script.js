let search = document.querySelector(".search");
let button = document.querySelector(".btn");
let search_result  = document.querySelector(".search-result");
let last_button = document.querySelector(".end_button");
let page_number = 1

async function fetchimages() {
    const search_value = search.value.toLowerCase();
    console.log(search_value);
    try{
        const response = await fetch(`https://api.unsplash.com/search/photos?page=${page_number}&query=${search_value}&client_id=Zdr5glzJRVyzxuhICBHWWKZkOVcqEe9Pid9WQJE_Ork`)
        const {results} = await response.json();
        results.forEach((image) =>{
            search_result.innerHTML += `<img
            src="${image.urls.regular}"
            alt="image"
            />
            <a
            href="${image.links.html}"
            target="_blank"
            rel="noopener noreferrer"
            >${image.alt_description}</a
            >` ;
        })
        console.log(results);
    }catch(err){
        console.log(err);
    }
}
button.addEventListener( "click",fetchimages );
last_button.addEventListener("click",()=>{
    page_number +=1;
    fetchimages();
});