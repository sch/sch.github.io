---
---

Content negotiation allows the same URL to return different types of resources.

Visiting the path `/recipes/chili` on a cooking website might return the html:

    <html>
      <body>
        <h1>Vegetarian Chili</h1>
        <h2>Ingredients</h2>
        <ul>
          <li>onion</li>
          <li>bell pepper</li>
          <li>2 cans of tomatoes</li>
          <li>1 can of pinto beans</li>
          <li>1 can of black beans</li>
          <li>2 tbsp chili powder</li>
        </ul>
        <ol>
          <li>Chop onion and peppers, brown in oil for five minutes.</li>
          <li>Add tomatoes, beans, chili powder, and 1 cup of water to pot.</li>
          <li>Bring to a boil, then simmer for 30 minutes.</li>
          <li>Add salt and pepper to taste, garnish with cheese and cilatro.</li>
        </ol>
      </body>
    </html>

What if you wanted JSON? Some sites might have a separate endpoint like
`/api/recipes/chili`, which might return a response like:

    {
      "title": "Vegetarian Chili",
      "ingredients": [
        { "item": "onion", "quantity": 1 },
        { "item": "bell pepper", "quantity": 1 },
        { "item": "tomatoes", "quantity": 2, "unit": "can" },
        { "item": "pinto beans", "quantity": 1, "unit": "can" },
        { "item": "black beans beans", "quantity": 1, "unit": "can" },
        { "item": "chili powder", "quantity": 2, "unit": "tbsp" },
      ],
      "steps": [
        "Chop onion and peppers, brown in oil for five minutes.",
        "Add tomatoes, beans, chili powder, and 1 cup of water to pot.",
        "Bring to a boil, then simmer for 30 minutes.",
        "Add salt and pepper to taste, garnish with cheese and cilatro."
      ]
    }


