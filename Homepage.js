document.addEventListener('DOMContentLoaded', function(){
    const btnAddRecipe = document.getElementById('AddRecipe')
    const divRecipeLinkBox = document.getElementById('recipeLinkBox')
    function AddRecipeLink(url, title){
        let divNewlink = document.createElement('div')
        divNewlink.className = 'recipeLink'
        divRecipeLinkBox.appendChild(divNewlink)
        let Newlink = document.createElement('a')
        Newlink.innerHTML = title
        Newlink.href = url
        Newlink.className == 'link'
        divNewlink.appendChild(Newlink)
    }


    btnAddRecipe.addEventListener('click', function(){
        window.location.href = "AddRecipe.html"
    })


})