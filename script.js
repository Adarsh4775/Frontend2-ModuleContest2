let recipecontainer = document.getElementById("recipecontainer");
const recipes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];
function displayRecipes() {
    recipecontainer.innerHTML = "";
    recipes.forEach((recipe) => {
        let card = document.createElement("div");
        card.classList.add("recipe-card");

        let img = document.createElement("img");
        img.src = recipe.imageSrc;
        img.alt = recipe.name;
        card.appendChild(img);

        const name = document.createElement("h3");
        name.textContent = recipe.name;
        card.appendChild(name);

        const type = document.createElement("p");
        type.textContent = `Type: ${recipe.type}`;
        card.appendChild(type);

        const time = document.createElement("p");
        time.textContent = `Time: ${recipe.time}`;
        card.appendChild(time);

        const rating = document.createElement("p");
        rating.textContent = `Rating: ${recipe.rating}`;
        card.appendChild(rating);

        let likeButton = document.createElement("button");
        likeButton.classList.add("like-button");
        likeButton.textContent = "LIKE";

        likeButton.addEventListener("click", function () {
            toggleLike(index);
        });
        card.appendChild(likeButton);
        recipecontainer.appendChild(card);
    });
}

function toggleLike(index) {
    recipes[index].isLiked = !recipes[index].isLiked;
    displayRecipes();
}

function filterRecipes(filterType) {
    const filteredRecipes = (filterType === 'all') ? recipes : recipes.filter(recipe => recipe.type === filterType);
    displayRecipes(filteredRecipes);
}

displayRecipes();

// JavaScript code

// Assume this JavaScript code is after the existing code

document.addEventListener('DOMContentLoaded', function () {
    // ... existing code

    // Additional code for toggle buttons
    const toggleButtonsContainer = document.querySelector('.toggle-buttons');

    // Function to add 'active' class to the clicked button and remove it from others
    function setActiveButton(clickedButton) {
        const buttons = toggleButtonsContainer.querySelectorAll('button');
        buttons.forEach(button => button.classList.remove('active'));
        clickedButton.classList.add('active');
    }

    // Add event listeners to the toggle buttons
    const toggleButtons = toggleButtonsContainer.querySelectorAll('button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            setActiveButton(this);
            filterRecipes(this.innerText.trim()); // Assuming the button text is the filter type
        });
    });

    // Additional code for rating filters (assuming radio buttons)
    const ratingFilters = document.querySelectorAll('input[name="ratingFilter"]');
    ratingFilters.forEach(filter => {
        filter.addEventListener('change', function () {
            const filterValue = this.value;
            // Additional logic to filter recipes based on the selected rating filter
        });
    });
});

console.log(1,2,3);