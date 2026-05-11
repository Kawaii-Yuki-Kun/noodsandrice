// Menu data for Noods N' Rice
// Badges: spicy, veg, vegan, gf (gluten-free), nuts, popular
const MENU_DATA = {
  soups: {
    title: "Soups",
    titleKo: "수프",
    icon: "soup",
    items: [
      { name: "Miso Soup Tofu Veg", price: 6.00, desc: "Dashi stock with kombu, wakame, spring onions and sesame oil", img: "assets/1-miso-soup.jpg", veg: true },
      { name: "Miso Soup Beef Shitake", price: 8.50, desc: "Dashi stock with kombu, beef slices, wakame, spring onions and sesame oil", img: "assets/1-miso-soup.jpg" },
      { name: "Miso Soup Shrimps Dumplings", price: 11.50, desc: "Dashi stock with kombu, shrimp dumplings, wakame, spring onions and sesame oil", img: "assets/1-miso-soup.jpg" },
      { name: "Miso Soup Salmon", price: 11.00, desc: "Dashi stock with kombu, poached fresh salmon, wakame, spring onions and sesame oil", img: "assets/1-miso-soup.jpg" },
      { name: "Corn Soup Veg", price: 6.50, desc: "Fresh chicken stock, blended sweet corn, spring onions and sesame oil", img: "assets/2-corn-soup.jpg", veg: true },
      { name: "Corn Soup Shredded Chicken", price: 7.50, desc: "Fresh chicken stock, shredded chicken, blended sweet corn, spring onions and sesame oil", img: "assets/2-corn-soup_1.jpg" },
      { name: "Tom Yum Soup Veg", price: 7.50, desc: "Spicy aromatic Thai bisque and coconut cream, spring onions, bean sprouts, fresh coriander, cherry tomato, shitake mushroom", img: "assets/3-tom-yum-soup.jpg", veg: true, vegan: true, spicy: true, gf: true },
      { name: "Tom Yum Soup Shrimp", price: 9.50, desc: "Spicy aromatic Thai bisque and coconut cream, boiled shrimps, spring onions, bean sprouts, fresh coriander, cherry tomato, shitake mushroom", img: "assets/3-tom-yum-soup_1.jpg", spicy: true, gf: true },
      { name: "Tom Yum Soup Salmon", price: 11.50, desc: "Spicy aromatic Thai bisque and coconut cream, poached fresh salmon, spring onions, bean sprouts, fresh coriander, cherry tomato, shitake mushroom", img: "assets/3-tom-yum-soup_1.jpg", spicy: true, gf: true }
    ]
  },
  appetizers: {
    title: "Appetizers",
    titleKo: "전채",
    icon: "appetizer",
    items: [
      { name: "Edamame", price: 6.50, desc: "Steamed soybeans seasoned with rock salt and soy sauce", img: "assets/edamame.jpg", veg: true, vegan: true },
      { name: "Shrimp Dumplings", price: 10.00, desc: "4pcs steamed shrimp dumplings served with house-made smoked ponzu sauce", img: "assets/shrimp-dumplings.jpg" },
      { name: "Dynamite Shrimps", price: 10.00, desc: "6pcs deep-fried, freshly battered shrimps glazed with spicy dynamite sauce and spring onions", img: "assets/dynamite-shrimp.jpg", spicy: true },
      { name: "Korean Kimchi Pickles 40g", price: 4.00, desc: "15 days homemade fermented napa cabbage, carrots and spring onions — sour, spicy and full of smoky flavour", img: "assets/kimchi-pikcles.jpg", spicy: true, veg: true, vegan: true, gf: true },
      { name: "Korean Kimchi Pickles 160g", price: 15.00, desc: "15 days homemade fermented napa cabbage, carrots and spring onions — sour, spicy and full of smoky flavour", img: "assets/kimchi-pikcles.jpg", spicy: true, veg: true, vegan: true, gf: true },
      { name: "KFC!", price: 9.00, desc: "6pcs crunchy chicken wings, glazed with spicy Korean gochujang sauce, topped with sesame seeds and spring onions", img: "assets/kfc.jpg", spicy: true, popular: true },
      { name: "Vegetable Spring Rolls", price: 7.50, desc: "4pcs classic vegetable rolls served with homemade sweet chilli sauce", img: "assets/vegetable-spring-rolls.jpg", veg: true, vegan: true }
    ]
  },
  salads: {
    title: "Salads",
    titleKo: "샐러드",
    icon: "salad",
    items: [
      { name: "Asian Crunch", price: 10.00, desc: "Refreshing crisp cabbage, carrots, cucumber, edamame, cashews, tossed with sour and spicy Korean dressing", img: "assets/asian-crunch.jpg", veg: true, vegan: true, spicy: true, nuts: true },
      { name: "Oishi Kani Salad", price: 12.50, desc: "Premium crabsticks, shredded cucumber, carrots and red cabbage, topped with crispy flakes and avocado, strawberry, mango mixed with Japanese Kani sauce", img: "assets/oishi-kani-salad.jpg" },
      { name: "Marinated Salmon", price: 17.00, desc: "Marinated fresh salmon cubes in a miso sour sauce, avocado, mango, sesame seeds & spring onions, topped with fried vermicelli noodles", img: "assets/marinated-salmon.jpg" },
      { name: "Crunchy Salmon", price: 17.00, desc: "Fresh salmon cubes mixed with crispy tempura flakes, tobiko and dynamite spicy mayo sauce", img: "assets/crunchy-salmon-salad.jpg", spicy: true },
      { name: "Exotic Salmon Poke Bowl — Small", price: 16.50, desc: "Sushi rice, fresh salmon cubes, mango, edamame, pickled ginger, carrots, red cabbage, crab mix, crispy. Sauce choice: spicy mayo, teriyaki, soy sauce, ponzu or miso sour", img: "assets/exotic-salmon-poke-bowl.jpg", popular: true },
      { name: "Exotic Salmon Poke Bowl — Medium", price: 18.50, desc: "Sushi rice, fresh salmon cubes, mango, edamame, pickled ginger, carrots, red cabbage, crab mix, crispy. Sauce choice: spicy mayo, teriyaki, soy sauce, ponzu or miso sour", img: "assets/exotic-salmon-poke-bowl_1.jpg", popular: true },
      { name: "Exotic Salmon Poke Bowl — Large", price: 21.00, desc: "Sushi rice, fresh salmon cubes, mango, edamame, pickled ginger, carrots, red cabbage, crab mix, crispy. Sauce choice: spicy mayo, teriyaki, soy sauce, ponzu or miso sour", img: "assets/exotic-salmon-poke-bowl_3.jpg", popular: true },
      { name: "Satay Crab Noodles", price: 14.50, desc: "Soba noodles mixed with peanut satay mayo sauce, premium crabsticks, red cabbage, cucumber and carrots, topped with crushed peanuts and sesame seeds", img: "assets/satay-crab-noodles.jpg", nuts: true }
    ]
  },
  bibimbap: {
    title: "Korean Bibimbap Bowl",
    titleKo: "비빔밥",
    icon: "bibimbap",
    items: [
      { name: "Chicken Bibimbap Bowl", price: 16.00, desc: "Wok charred fire chicken, marinated cucumber, carrots, bean sprouts, edamame, fried egg, kimchi pickles, steamed rice, side miso gochujang sauce", img: "assets/beef-bibimbap.jpg", spicy: true, popular: true },
      { name: "Beef Bibimbap Bowl", price: 17.00, desc: "Wok charred fire beef, marinated cucumber, carrots, bean sprouts, shitake mushroom, fried egg, kimchi pickles, steamed rice, side miso gochujang sauce", img: "assets/beef-bibimbap.jpg", spicy: true, popular: true },
      { name: "Shrimp Bibimbap Bowl", price: 18.00, desc: "Wok charred fire shrimp, marinated cucumber, carrots, bean sprouts, edamame, fried egg, kimchi pickles, steamed rice, side miso gochujang sauce", img: "assets/beef-bibimbap.jpg", spicy: true }
    ]
  },
  rice: {
    title: "Speciality Rice Mains",
    titleKo: "쌀 요리",
    icon: "rice",
    note: "Upgrade your side: basmati rice +$1.5 · egg fried rice +$3 · vegetable fried rice +$3 · plain noodles +$3 · vegetable noodles +$4.5",
    items: [
      { name: "Kung Pao Chicken", price: 16.00, desc: "Sichuan style wok charred meat, dried chili pepper, onions, pepper, celery & crunchy peanuts, glazed with our spicy sticky kung pao sauce with steamed rice", img: "assets/chicken-cashew.jpg", spicy: true, nuts: true },
      { name: "Kung Pao Beef", price: 17.00, desc: "Sichuan style wok charred meat, dried chili pepper, onions, pepper, celery & crunchy peanuts, glazed with our spicy sticky kung pao sauce with steamed rice", img: "assets/mongolian-beef.jpg", spicy: true, nuts: true },
      { name: "Kung Pao Shrimp", price: 18.00, desc: "Sichuan style wok charred meat, dried chili pepper, onions, pepper, celery & crunchy peanuts, glazed with our spicy sticky kung pao sauce with steamed rice", img: "assets/shrimp-teriyaki.jpg", spicy: true, nuts: true },
      { name: "Mongolian Chicken", price: 17.50, desc: "Traditional recipe from the Mongolian region of China — the perfect combination of sweet and savoury, caramelised meat tossed with crisp green onions and coated in our signature oyster sesame sauce with steamed rice", img: "assets/chicken-cashew.jpg" },
      { name: "Mongolian Beef", price: 21.50, desc: "Traditional recipe from the Mongolian region of China — the perfect combination of sweet and savoury, caramelised meat tossed with crisp green onions and coated in our signature oyster sesame sauce with steamed rice", img: "assets/mongolian-beef.jpg", popular: true },
      { name: "Mongolian Shrimp", price: 24.00, desc: "Traditional recipe from the Mongolian region of China — the perfect combination of sweet and savoury, caramelised meat tossed with crisp green onions and coated in our signature oyster sesame sauce with steamed rice", img: "assets/shrimp-teriyaki.jpg" },
      { name: "Cashew Nut Chicken", price: 16.00, desc: "Chinese stir-fried chicken with cashews, onions, pepper, served in an aromatic ginger oyster sauce, alongside rice", img: "assets/chicken-cashew.jpg", nuts: true },
      { name: "Cashew Nut Beef", price: 17.00, desc: "Chinese stir-fried beef with cashews, onions, pepper, served in an aromatic ginger oyster sauce, alongside rice", img: "assets/mongolian-beef.jpg", nuts: true },
      { name: "Cashew Nut Shrimp", price: 18.00, desc: "Chinese stir-fried shrimp with cashews, onions, pepper, served in an aromatic ginger oyster sauce, alongside rice", img: "assets/shrimp-teriyaki.jpg", nuts: true },
      { name: "Sweet & Sour Vegan Seitan", price: 15.00, desc: "Classic Chinese dish featuring wok fried vegetables and pineapple in a sweet and sour sauce served with steamed rice", img: "assets/sweet-and-sour-chicken.jpg", veg: true, vegan: true },
      { name: "Sweet & Sour Chicken", price: 15.00, desc: "Classic Chinese dish featuring wok fried vegetables and pineapple in a sweet and sour sauce served with steamed rice", img: "assets/sweet-and-sour-chicken.jpg" },
      { name: "Sweet & Sour Shrimp", price: 17.00, desc: "Classic Chinese dish featuring wok fried vegetables and pineapple in a sweet and sour sauce served with steamed rice", img: "assets/sweet-and-sour-chicken.jpg" },
      { name: "Butter Chicken", price: 17.00, desc: "A rich and authentic spiced tomato stew with chicken, drizzled with fresh cream, and served with aromatic basmati rice", img: "assets/butter-chicken.jpg", popular: true, gf: true },
      { name: "Teriyaki Vegan Seitan", price: 16.00, desc: "A Japanese teriyaki dish featuring stir-fried wok vegetables, topped with sesame seeds served with steamed rice", img: "assets/shrimp-teriyaki.jpg", veg: true, vegan: true },
      { name: "Teriyaki Chicken", price: 16.00, desc: "A Japanese teriyaki dish featuring stir-fried wok vegetables, topped with sesame seeds served with steamed rice", img: "assets/chicken-cashew.jpg" },
      { name: "Teriyaki Beef", price: 17.00, desc: "A Japanese teriyaki dish featuring stir-fried wok vegetables, topped with sesame seeds served with steamed rice", img: "assets/mongolian-beef.jpg" },
      { name: "Teriyaki Shrimp", price: 18.00, desc: "A Japanese teriyaki dish featuring stir-fried wok vegetables, topped with sesame seeds served with steamed rice", img: "assets/shrimp-teriyaki.jpg" },
      { name: "Teriyaki Salmon", price: 27.00, desc: "A Japanese teriyaki dish featuring stir-fried wok vegetables, topped with sesame seeds served with steamed rice", img: "assets/marinated-salmon.jpg", popular: true },
      { name: "Wok Charred Chicken", price: 16.00, desc: "Chinese savory dish featuring stir-fried wok vegetables, topped with sesame seeds in an aromatic oyster sauce served with steamed rice", img: "assets/chicken-cashew.jpg" },
      { name: "Wok Charred Beef", price: 17.00, desc: "Chinese savory dish featuring stir-fried wok vegetables, topped with sesame seeds in an aromatic oyster sauce served with steamed rice", img: "assets/mongolian-beef.jpg" },
      { name: "Wok Charred Shrimp", price: 18.00, desc: "Chinese savory dish featuring stir-fried wok vegetables, topped with sesame seeds in an aromatic oyster sauce served with steamed rice", img: "assets/shrimp-teriyaki.jpg" },
      { name: "Fried Rice Veg", price: 11.50, desc: "Fried aromatic rice with shallots, pepper, carrots, with scrambled egg and oyster sauce topped with seasoned nori and spring onions", img: "assets/vegetable-fried-rice.jpg", veg: true },
      { name: "Fried Rice Chicken", price: 13.50, desc: "Fried aromatic rice with shallots, pepper, carrots, with scrambled egg and oyster sauce topped with seasoned nori and spring onions", img: "assets/vegetable-fried-rice.jpg" },
      { name: "Fried Rice Beef", price: 14.50, desc: "Fried aromatic rice with shallots, pepper, carrots, with scrambled egg and oyster sauce topped with seasoned nori and spring onions", img: "assets/vegetable-fried-rice.jpg" },
      { name: "Fried Rice Shrimps", price: 15.50, desc: "Fried aromatic rice with shallots, pepper, carrots, with scrambled egg and oyster sauce topped with seasoned nori and spring onions", img: "assets/vegetable-fried-rice.jpg" },
      { name: "Fried Rice Combo", price: 17.50, desc: "Fried aromatic rice with shallots, pepper, carrots, with scrambled egg and oyster sauce topped with seasoned nori and spring onions", img: "assets/vegetable-fried-rice.jpg" }
    ]
  },
  noodles: {
    title: "Speciality Noodles",
    titleKo: "면 요리",
    icon: "noodles",
    items: [
      { name: "Pad Thai Noodles Veg", price: 11.50, desc: "A Thai classic noodle dish with scrambled egg, shallots, crushed peanuts, coriander, bean sprouts, spring onions, and a tangy tamarind sauce", img: "assets/pad-thai-noodles.jpg", veg: true, nuts: true },
      { name: "Pad Thai Noodles Chicken", price: 13.50, desc: "A Thai classic noodle dish with scrambled egg, shallots, crushed peanuts, coriander, bean sprouts, spring onions, and a tangy tamarind sauce", img: "assets/pad-thai-noodles_1.jpg", nuts: true },
      { name: "Pad Thai Noodles Beef", price: 14.50, desc: "A Thai classic noodle dish with scrambled egg, shallots, crushed peanuts, coriander, bean sprouts, spring onions, and a tangy tamarind sauce", img: "assets/pad-thai-noodles.jpg", nuts: true },
      { name: "Pad Thai Noodles Shrimp", price: 15.50, desc: "A Thai classic noodle dish with scrambled egg, shallots, crushed peanuts, coriander, bean sprouts, spring onions, and a tangy tamarind sauce", img: "assets/pad-thai-noodles_1.jpg", nuts: true },
      { name: "Pad Thai Noodles Chicken & Shrimp", price: 17.50, desc: "A Thai classic noodle dish with scrambled egg, shallots, crushed peanuts, coriander, bean sprouts, spring onions, and a tangy tamarind sauce", img: "assets/pad-thai-noodles_1.jpg", popular: true, nuts: true },
      { name: "Singapore-Style Noodles Veg", price: 11.50, desc: "Cantonese creation, stir-fried cooked rice vermicelli, curry powder, vegetables, scrambled egg", img: "assets/singapore-noodles.jpg", veg: true },
      { name: "Singapore-Style Noodles Chicken", price: 13.50, desc: "Cantonese creation, stir-fried cooked rice vermicelli, curry powder, vegetables, scrambled egg", img: "assets/singapore-noodles_1.jpg" },
      { name: "Singapore-Style Noodles Shrimp", price: 15.50, desc: "Cantonese creation, stir-fried cooked rice vermicelli, curry powder, vegetables, scrambled egg", img: "assets/singapore-noodles.jpg" },
      { name: "Singapore-Style Noodles Chicken & Shrimp", price: 17.50, desc: "Cantonese creation, stir-fried cooked rice vermicelli, curry powder, vegetables, scrambled egg", img: "assets/singapore-noodles_1.jpg" },
      { name: "Korean Udon Noodles Veg", price: 14.50, desc: "Udon noodles, topped with fried egg, stir fried kimchi pickles, spring onions, pepper, shiitake mushrooms glazed in a sweet and spicy Korean gochujang sauce topped with sunny side up egg", img: "assets/korean-udon.jpg", veg: true, spicy: true },
      { name: "Korean Udon Noodles Chicken", price: 16.50, desc: "Udon noodles, topped with fried egg, stir fried kimchi pickles, spring onions, pepper, shiitake mushrooms glazed in a sweet and spicy Korean gochujang sauce topped with sunny side up egg", img: "assets/korean-udon.jpg", spicy: true, popular: true },
      { name: "Korean Udon Noodles Beef", price: 17.50, desc: "Udon noodles, topped with fried egg, stir fried kimchi pickles, spring onions, pepper, shiitake mushrooms glazed in a sweet and spicy Korean gochujang sauce topped with sunny side up egg", img: "assets/korean-udon.jpg", spicy: true },
      { name: "Korean Udon Noodles Shrimp", price: 18.50, desc: "Udon noodles, topped with fried egg, stir fried kimchi pickles, spring onions, pepper, shiitake mushrooms glazed in a sweet and spicy Korean gochujang sauce topped with sunny side up egg", img: "assets/korean-udon.jpg", spicy: true },
      { name: "Lo Mein Noodles Veg", price: 11.50, desc: "Egg noodles stir fried with onions, bell pepper, carrots, mixed cabbage, shiitake mushrooms, celery and savory oyster sesame sauce", img: "assets/chicken-noodles.jpg", veg: true },
      { name: "Lo Mein Noodles Chicken", price: 13.50, desc: "Egg noodles stir fried with onions, bell pepper, carrots, mixed cabbage, shiitake mushrooms, celery and savory oyster sesame sauce", img: "assets/chicken-noodles.jpg" },
      { name: "Lo Mein Noodles Beef", price: 14.50, desc: "Egg noodles stir fried with onions, bell pepper, carrots, mixed cabbage, shiitake mushrooms, celery and savory oyster sesame sauce", img: "assets/chicken-noodles.jpg" },
      { name: "Lo Mein Noodles Shrimp", price: 15.50, desc: "Egg noodles stir fried with onions, bell pepper, carrots, mixed cabbage, shiitake mushrooms, celery and savory oyster sesame sauce", img: "assets/chicken-noodles.jpg" },
      { name: "Lo Mein Noodles Combo", price: 17.50, desc: "Egg noodles stir fried with onions, bell pepper, carrots, mixed cabbage, shiitake mushrooms, celery and savory oyster sesame sauce", img: "assets/chicken-noodles.jpg" }
    ]
  },
  sushi: {
    title: "Sushi",
    titleKo: "스시",
    icon: "sushi",
    items: [
      { name: "Salmon Sashimi", price: 8.00, desc: "3pcs imported Scottish salmon, pickled ginger, fresh wasabi", img: "assets/salmon-sashimi.jpg", gf: true },
      { name: "Tuna Sashimi", price: 8.00, desc: "3pcs imported yellow fin tuna, pickled ginger, fresh wasabi", img: "assets/tuna-sashimi.jpg", gf: true },
      { name: "Naked California", price: 6.50, desc: "4pcs tobiko wrap, cream cheese, crabsticks, avocado", img: "assets/naked-california.png" },
      { name: "Mango Berry", price: 7.50, desc: "4pcs mango wrap, crab mix, crab mix topping, crispy, strawberry coulis", img: "assets/mango-berry.png" },
      { name: "Spicy Salmon", price: 7.50, desc: "4pcs avocado wrap, cream cheese, spicy salmon", img: "assets/spicy-salmon.png", spicy: true },
      { name: "Royal Salmon", price: 6.50, desc: "4pcs salmon wrap, crab mix, kimchi mayo and crispy", img: "assets/royal-salmon.png" },
      { name: "Crispy Avocado", price: 5.50, desc: "4pcs crab mix wrap, avocado and crispy, kimchi mayo", img: "assets/crispy-avocado.png" },
      { name: "Avocado Blossom", price: 7.50, desc: "4pcs avocado wrap, crab mix, kimchi mayo, crab mix and shrimp topping, crispy", img: "assets/avocado-blossom.png" },
      { name: "Special Avocado", price: 6.50, desc: "4pcs avocado wrap, salmon, crab mix, teriyaki, sesame", img: "assets/special-avocado.png" },
      { name: "Tobiko Salmon", price: 7.50, desc: "4pcs tobiko wrap, cream cheese, salmon, avocado", img: "assets/tobiko-salmon.png" },
      { name: "Salmon Mango", price: 7.50, desc: "4pcs mango wrap, cream cheese, salmon, avocado", img: "assets/salmon-mango.png" },
      { name: "Sakura Roll", price: 7.50, desc: "4pcs tobiko wrap, crab mix, cream cheese, mango, crispy & salmon topping, teriyaki", img: "assets/sakura-roll.png", popular: true },
      { name: "Salmon Avocado", price: 8.50, desc: "4pcs avocado wrap, salmon, cream cheese, avocado", img: "assets/salmon-avocado.png" },
      { name: "Tobiko Crazy", price: 6.50, desc: "4pcs tobiko wrap, crab mix, crab mix topping", img: "assets/tobiko-crazy.png" },
      { name: "Dragon Eel", price: 8.50, desc: "4pcs eel wrap, shrimp tempura, cream cheese, avocado", img: "assets/dragon-eel.jpg" },
      { name: "Sesame California", price: 5.50, desc: "4pcs sesame wrap, crabsticks, avocado, cucumber", img: "assets/naked-california.png" },
      { name: "Crispy California", price: 5.50, desc: "4pcs crispy wrap, crabstick, cucumber, avocado", img: "assets/crispy-california.jpg" },
      { name: "Crispy Crazy", price: 6.50, desc: "4pcs crispy wrap, crab mix, crab mix topping", img: "assets/crispy-crazy-salmon.jpg" },
      { name: "Crispy Crazy Salmon", price: 7.00, desc: "4pcs crispy wrap, crab mix, crispy & salmon topping", img: "assets/crispy-crazy-salmon.jpg" },
      { name: "Crispy Phily Salmon", price: 7.00, desc: "4pcs crispy wrap, salmon, avocado, cream cheese", img: "assets/crispy-phily-salmon.jpg" },
      { name: "Crispy Spicy Tuna", price: 7.50, desc: "4pcs crispy wrap, tuna, avocado, crispy & tuna topping, spicy mayo", img: "assets/crispy-spicy-tuna.jpg", spicy: true },
      { name: "Double Crispy Salmon", price: 7.50, desc: "4pcs crispy wrap, salmon, avocado, crispy & salmon, teriyaki", img: "assets/double-crispy-salmon.jpg" },
      { name: "Crispy Dynamite", price: 7.50, desc: "4pcs crispy wrap, crab mix, shrimp dynamite topping", img: "assets/crispy-dynamite.jpg", spicy: true },
      { name: "Hoso Cucumber", price: 3.00, desc: "4pcs nori, sushi rice, cucumber", img: "assets/hosomaki.png", veg: true, vegan: true, gf: true },
      { name: "Hoso Avocado", price: 3.50, desc: "4pcs nori, sushi rice, avocado", img: "assets/hosomaki.png", veg: true, vegan: true, gf: true },
      { name: "Hoso Crab", price: 3.50, desc: "4pcs nori, sushi rice, crabstick", img: "assets/hosomaki.png" },
      { name: "Hoso Salmon", price: 4.00, desc: "4pcs nori, sushi rice, salmon", img: "assets/hosomaki.png", gf: true },
      { name: "Hoso Tuna", price: 4.00, desc: "4pcs nori, sushi rice, tuna", img: "assets/hosomaki.png", gf: true },
      { name: "Hoso Eel", price: 5.00, desc: "4pcs nori, sushi rice, eel", img: "assets/hosomaki.png" },
      { name: "Flamed Tuna", price: 19.00, desc: "8pcs flamed spicy tuna wrap, shrimp tempura, cream cheese, crab mix, avocado, teriyaki", img: "assets/volcano-kani-crab_1.jpg", spicy: true },
      { name: "Dynamite Roll", price: 19.00, desc: "8pcs sesame wrap, salmon, mango, avocado, cream cheese, dynamite shrimp topping", img: "assets/dynamite-roll.jpg", spicy: true },
      { name: "Baked Fresh Crab", price: 22.00, desc: "8pcs sesame wrap, mango, avocado, crispy, baked spicy fresh crab topping", img: "assets/volcano-kani-crab.jpg", spicy: true },
      { name: "Salmon Bliss", price: 20.00, desc: "8pcs sesame wrap, salmon, mango, avocado, cream cheese, spicy salmon tartar topping with crispy", img: "assets/salmon-bliss.jpg", spicy: true, popular: true },
      { name: "Volcano Kani Crab", price: 17.00, desc: "8pcs avocado and mango wrap, spicy mayo, kani crab salad topping, crispy, teriyaki", img: "assets/volcano-kani-crab.jpg", spicy: true },
      { name: "Crispy-Fornia Set — 12pcs", price: 16.50, desc: "Crispy California (4) · Crispy Crazy (4) · Crispy Crazy Salmon (4)", img: "assets/all-stars-40-pcs.jpg" },
      { name: "Salmon Addict Set — 15pcs", price: 25.00, desc: "Sashimi Salmon (3) · Hoso Salmon (4) · Tobiko Salmon (4) · Crispy Phily Salmon (4)", img: "assets/all-stars-40-pcs.jpg" },
      { name: "Crab Affair Set — 16pcs", price: 18.75, desc: "Sesame California (4) · Hoso Crab (4) · Crispy California (4) · Crispy Crazy (4)", img: "assets/all-stars-40-pcs.jpg" },
      { name: "Crave Mix Set — 20pcs", price: 29.00, desc: "Crispy California (4) · Crispy Crazy (4) · Crispy Crazy Salmon (4) · Royal Salmon (4) · Special Avocado (4)", img: "assets/crave-mix-20-pcs.jpg", popular: true },
      { name: "All Stars Set — 40pcs", price: 52.00, desc: "Sesame California (8) · Crispy California (8) · Crispy Crazy (4) · Crispy Crazy Salmon (4) · Tobiko Salmon (4) · Crispy Avocado (4) · Royal Salmon (4) · Special Avocado (4)", img: "assets/all-stars-40-pcs.jpg", popular: true },
      { name: "California Crab Burrito", price: 12.00, desc: "Premium nori, sushi rice, crab mix, avocado, crispy, teriyaki, choice of spicy or Japanese mayo", img: "assets/california-crab-burrito.jpg" },
      { name: "Crazy Salmon Burrito", price: 15.00, desc: "Premium nori, sushi rice, salmon, crab mix, avocado, crispy, teriyaki, choice of spicy or Japanese mayo", img: "assets/crazy-salmon-burrito.jpg" },
      { name: "Crazy Tuna Burrito", price: 15.00, desc: "Premium nori, sushi rice, tuna, crab mix, avocado, crispy, teriyaki, choice of spicy or Japanese mayo", img: "assets/crazy-salmon-burrito.jpg" },
      { name: "Salmon Protein Boost Burrito", price: 20.00, desc: "Premium nori, sushi rice, salmon, avocado, crispy, teriyaki, choice of spicy or Japanese mayo", img: "assets/salmon-protein-boost.jpg" },
      { name: "The Shrimp Pop Burrito", price: 16.50, desc: "Premium nori, sushi rice, shrimp tempura, crab mix, avocado, crispy, teriyaki, choice of spicy or Japanese mayo", img: "assets/the-shrimp-pop-burrito.jpg" },
      { name: "Ultimate Shrimp Mango Burrito", price: 16.50, desc: "Premium nori, sushi rice, boiled shrimp, mango, crispy, teriyaki, choice of spicy or Japanese mayo", img: "assets/the-shrimp-pop-burrito.jpg" },
      { name: "Red Kiss Tuna Burrito", price: 20.00, desc: "Premium nori, sushi rice, tuna, avocado, crispy, teriyaki, choice of spicy or Japanese mayo", img: "assets/crazy-salmon-burrito.jpg" }
    ]
  },
  sushiExtras: {
    title: "Sushi Add-ons",
    titleKo: "추가",
    icon: "extras",
    items: [
      { name: "Add cream cheese",    price: 2.50, desc: "" },
      { name: "Add mango",            price: 3.00, desc: "", veg: true, vegan: true },
      { name: "Add avocado",          price: 3.00, desc: "", veg: true, vegan: true },
      { name: "Add crispy",           price: 1.00, desc: "" },
      { name: "Add tobiko",           price: 2.50, desc: "" },
      { name: "Add fresh salmon",     price: 6.50, desc: "75 g portion" },
      { name: "Add fresh tuna",       price: 6.50, desc: "75 g portion" },
      { name: "Add shrimp tempura",   price: 5.00, desc: "4 pcs" },
      { name: "Add crab mix",         price: 3.50, desc: "75 g portion" },
      { name: "Add boiled shrimps",   price: 5.00, desc: "75 g portion" },
      { name: "Add strawberry",       price: 2.00, desc: "", veg: true, vegan: true },
      { name: "Extra teriyaki sauce", price: 2.00, desc: "" },
      { name: "Extra spicy mayo dip", price: 2.00, desc: "", spicy: true },
      { name: "Extra soy sauce dip",  price: 0.50, desc: "" },
      { name: "Extra fresh wasabi",   price: 2.00, desc: "25 g, freshly grated" },
      { name: "Extra ginger cup",     price: 0.85, desc: "" }
    ]
  },
  sides: {
    title: "Sides",
    titleKo: "사이드",
    icon: "sides",
    items: [
      { name: "Steamed Rice",        price: 5.00, desc: "Steamed sticky rice", img: "assets/steamed-rice.jpg", veg: true, vegan: true, gf: true },
      { name: "Basmati Rice",        price: 5.50, desc: "Premium aromatic fragrant basmati rice", img: "assets/basmati-rice.jpg", veg: true, vegan: true, gf: true },
      { name: "Egg Fried Rice",      price: 6.50, desc: "Egg and rice with spring onions and soy sauce", img: "assets/vegetable-fried-rice_1.jpg", veg: true },
      { name: "Vegetable Fried Rice",price: 6.50, desc: "Vegetables and rice with sesame and soy sauce", img: "assets/vegetable-fried-rice.jpg", veg: true, vegan: true },
      { name: "Plain Noodles",       price: 6.50, desc: "Plain noodles with oyster sesame sauce", img: "assets/chicken-noodles.jpg", veg: true },
      { name: "Add Egg",             price: 1.50, desc: "Your choice of sunny side up or scrambled", veg: true, gf: true },
      { name: "Add Cashew Nut",      price: 1.50, desc: "A handful of crunchy cashews", veg: true, vegan: true, nuts: true, gf: true }
    ]
  },
  dips: {
    title: "Dips & Sauces",
    titleKo: "소스",
    icon: "dips",
    items: [
      { name: "Teriyaki Sauce",       price: 2.00, desc: "Sweet, savoury and glossy" },
      { name: "Dynamite Sauce",       price: 2.00, desc: "Spicy mayo with a kick", spicy: true },
      { name: "Kimchi Mayo Sauce",    price: 2.00, desc: "Tangy, creamy, fermented heat" },
      { name: "Miso Sauce",           price: 2.00, desc: "Earthy umami" },
      { name: "Gochujang Sauce",      price: 2.00, desc: "Korean red chili paste — sweet, savoury, spicy", spicy: true },
      { name: "Miso Gochujang Sauce", price: 2.00, desc: "Smoky umami meets gentle heat", spicy: true },
      { name: "Sweet & Sour Sauce",   price: 2.00, desc: "Bright and tangy classic", veg: true, vegan: true, gf: true },
      { name: "Ponzu Sauce",          price: 2.00, desc: "Citrus soy with smoky depth" },
      { name: "Sriracha Sauce",       price: 2.00, desc: "Garlicky chili heat", spicy: true, veg: true, vegan: true, gf: true },
      { name: "Japanese Mayo Sauce",  price: 2.00, desc: "Rich, silky kewpie-style mayo", veg: true, gf: true }
    ]
  },
  beverages: {
    title: "Soft Bar & Drinks",
    titleKo: "음료",
    icon: "drinks",
    items: [
      { name: "Still Water — Small",            price: 2.00, desc: "Via Tannourine", veg: true, vegan: true, gf: true },
      { name: "Still Water — Large",            price: 4.00, desc: "Via Tannourine", veg: true, vegan: true, gf: true },
      { name: "Sparkling Water",                price: 2.50, desc: "Via Tannourine", veg: true, vegan: true, gf: true },
      { name: "Pepsi",                          price: 2.75, desc: "", veg: true, vegan: true, gf: true },
      { name: "Diet Pepsi",                     price: 2.75, desc: "", veg: true, vegan: true, gf: true },
      { name: "Pepsi Max",                      price: 2.75, desc: "", veg: true, vegan: true, gf: true },
      { name: "7up",                            price: 2.75, desc: "", veg: true, vegan: true, gf: true },
      { name: "Diet 7up",                       price: 2.75, desc: "", veg: true, vegan: true, gf: true },
      { name: "Miranda",                        price: 2.75, desc: "", veg: true, vegan: true, gf: true },
      { name: "Miranda Diet",                   price: 2.75, desc: "", veg: true, vegan: true, gf: true },
      { name: "Ice Tea Peach",                  price: 2.50, desc: "", veg: true, vegan: true, gf: true },
      { name: "Ice Tea Peach Zero",             price: 2.50, desc: "", veg: true, vegan: true, gf: true },
      { name: "Ice Tea Lemon",                  price: 2.50, desc: "", veg: true, vegan: true, gf: true },
      { name: "Ice Tea Lemon Zero",             price: 2.50, desc: "", veg: true, vegan: true, gf: true },
      { name: "Fresh Lemongrass & Kaffir Lime Ice Tea", price: 4.00, desc: "House-brewed, aromatic and bright", veg: true, vegan: true, gf: true, popular: true },
      { name: "Hata Ramune",                    price: 6.50, desc: "Choice of cola, cherry blossom, pineapple, blueberry, strawberry, original, lychee, melon, orange, yoghurt, yuzu", veg: true, vegan: true, gf: true },
      { name: "Fresh Orange Juice",             price: 4.00, desc: "Squeezed to order", veg: true, vegan: true, gf: true },
      { name: "Espresso",                       price: 2.50, desc: "", veg: true, vegan: true, gf: true }
    ]
  },
  sake: {
    title: "Sake",
    titleKo: "사케",
    icon: "sake",
    items: [
      { name: "Mio Sparkling Sake",        price: 20.00, desc: "Sparkling, gently sweet", gf: true },
      { name: "Hana Awaka Sparkling Sake", price: 18.00, desc: "Light, floral and effervescent", gf: true },
      { name: "Kikusui Sake",              price: 15.00, desc: "Better served warm", gf: true },
      { name: "Ryujin Sake",               price: 18.00, desc: "Better served warm", gf: true },
      { name: "Shochikubai Sake",          price: 21.00, desc: "Classic dry junmai", gf: true },
      { name: "Josen Sake",                price: 20.00, desc: "Smooth and balanced", gf: true }
    ]
  },
  beer: {
    title: "Beer",
    titleKo: "맥주",
    icon: "beer",
    items: [
      { name: "Sapporo Beer",       price: 10.00, desc: "Japanese premium beer" },
      { name: "Almaza Beer",        price: 6.50,  desc: "Lebanese pilsner classic" },
      { name: "Almaza Light Beer",  price: 6.50,  desc: "Easy-drinking Lebanese light lager" }
    ]
  },
  wine: {
    title: "Wine & Prosecco",
    titleKo: "와인",
    icon: "wine",
    items: [
      { name: "Red Wine — Glass",            price: 7.00,  desc: "Ask your server for today's pour", gf: true },
      { name: "White Wine — Glass",          price: 7.00,  desc: "Ask your server for today's pour", gf: true },
      { name: "Rosé Wine — Glass",           price: 7.00,  desc: "Ask your server for today's pour", gf: true },
      { name: "Piccini Prosecco Extra Dry",  price: 33.00, desc: "Bottle · crisp Italian sparkling", gf: true }
    ]
  },
  soju: {
    title: "Soju",
    titleKo: "소주",
    icon: "soju",
    items: [
      { name: "Soju — Original",   price: 18.00, desc: "Smooth, clean Korean classic", gf: true },
      { name: "Soju — Strawberry", price: 18.00, desc: "Sweet, fruity Korean soju", gf: true },
      { name: "Soju — Peach",      price: 18.00, desc: "Soft, juicy Korean soju", gf: true },
      { name: "Soju — Plum",       price: 18.00, desc: "Tangy plum-infused Korean soju", gf: true }
    ]
  },
  spirits: {
    title: "Whisky & Gin",
    titleKo: "위스키 · 진",
    icon: "spirits",
    items: [
      { name: "Tenjaku — Glass",   price: 13.50, desc: "Japanese blended whisky", gf: true },
      { name: "Taketsuru — Glass", price: 18.50, desc: "Nikka pure malt", gf: true },
      { name: "Hatozaki — Glass",  price: 11.50, desc: "Japanese blended whisky", gf: true },
      { name: "Roku — Glass",      price: 9.50,  desc: "Suntory Japanese craft gin", gf: true },
      { name: "Etsu — Glass",      price: 14.50, desc: "Japanese small-batch dry gin", gf: true }
    ]
  },
  desserts: {
    title: "Desserts",
    titleKo: "디저트",
    icon: "dessert",
    items: [
      { name: "Packman Mochi Icecream", price: 9.00,  desc: "Small mochis with 5 flavours: melon, fuji apple, caramel, custard, strawberry", img: "assets/packman-mochi.jpg", veg: true, popular: true },
      { name: "Big One Mochi Icecream", price: 7.00,  desc: "Large mochi icecream — choose one flavour: blueberry cheesecake, bahamas banana choco, mango coconut, mint chocolate, cookies n' cream", img: "assets/big-one-mochi.jpg", veg: true },
      { name: "Miso Fudge Brownie",     price: 10.00, desc: "Double chocolate 70% dark Poulain, vanilla icecream, miso caramel", img: "assets/miso-fudge-brownie.jpg", veg: true, popular: true },
      { name: "Matcha Fondant",         price: 10.00, desc: "Matcha fondant, coconut icecream, red fruits coulis", img: "assets/matcha-fondant.jpg", veg: true },
      { name: "Molten Coco Choco",      price: 10.00, desc: "Chocolate fondant, coconut condensed cream", img: "assets/molten-coco-choco.jpg", veg: true, vegan: true },
      { name: "Icecream Scoop",         price: 2.00,  desc: "Choice of vanilla or coconut", veg: true }
    ]
  }
};

const RESTAURANT = {
  name: "Noods N' Rice",
  nameKo: "누들 앤 라이스",
  tagline: "Fresh Asian modern aromas with the highest & freshest quality products",
  address: "Abi Ghosn Center, Byblos, Jbeil",
  phone: "81 126 472",
  phoneTel: "+96181126472",
  whatsapp: "https://wa.me/96181126472",
  instagram: "https://instagram.com/noodsnrice"
};
