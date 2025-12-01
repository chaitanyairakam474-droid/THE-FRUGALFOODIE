fetch("recipes.json")
    .then(response => response.json())
    .then(data => {
        displayRecipes(data);

        document.getElementById("searchInput").addEventListener("input", (e) => {
            const filtered = data.filter(recipe =>
                recipe.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            displayRecipes(filtered);
        });
    });

function displayRecipes(recipes) {
    const container = document.getElementById("recipeList");
    container.innerHTML = "";

    recipes.forEach(recipe => {
        container.innerHTML += `
            <div class="recipe-card">
                <h3>${recipe.name}</h3>
                <p><strong>Price:</strong> ${recipe.price}</p>
                <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                <p><strong>Time:</strong> ${recipe.time}</p>
            </div>
        `;
    });
}

