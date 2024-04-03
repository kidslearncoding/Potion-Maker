console.log("🧪 Welcome to the Potion Maker game!");
console.log("You are a young wizard apprentice tasked with creating magical potions.");

// Introduce the ingredients with their magical properties
let water = 10; // Water from the Enchanted Spring
let fireDust = 5; // Fire Dust from the Phoenix Nest
let iceShard = 3; // Ice Shards from the Eternal Glacier
let windBreath = 7; // Wind Breath captured during the Great Storm

console.log("Your magical ingredients are:");
console.log(`- Enchanted Spring Water: ${water} drops`);
console.log(`- Phoenix Nest Fire Dust: ${fireDust} pinches`);
console.log(`- Eternal Glacier Ice Shard: ${iceShard} pieces`);
console.log(`- Great Storm Wind Breath: ${windBreath} gusts`);

// Task 1: Healing Potion
console.log("\nTask 1: Create a Healing Potion by mixing the ingredients!");

// The apprentice needs to figure out the correct mix for a healing potion
// Let's say the correct mix is:
// 2 parts water, 1 part fire dust, 2 parts ice shard, 0 parts wind breath
// The apprentice decides to try the following mixture:
let healingPotion = water * 2 + fireDust * 1 + iceShard * 2 + windBreath * 0;
console.log("You mix the ingredients for the Healing Potion and...");
console.log("Healing Potion strength: " + healingPotion);


// Task 2: Elixir of Fire
console.log("\nTask 2: Brew an Elixir of Fire to withstand the cold!");

// The correct mix for the Elixir of Fire might be:
// 0 parts water, 3 parts fire dust, 0 parts ice shard, 1 part wind breath
// The apprentice decides to try the following mixture:
let elixirOfFire = water * 0 + fireDust * 3 + iceShard * 0 + windBreath * 1;
console.log("You mix the ingredients for the Elixir of Fire and...");
console.log("Elixir of Fire heat: " + elixirOfFire);


// Task 3: Potion of Frost
console.log("\nTask 3: Concoct a Potion of Frost to freeze your enemies!");

// The correct mix for the Potion of Frost could be:
// 1 part water, 0 parts fire dust, 3 parts ice shard, 0 parts wind breath
// The apprentice decides to try the following mixture:
let potionOfFrost = water * 1 + fireDust * 0 + iceShard * 3 + windBreath * 0;
console.log("You mix the ingredients for the Potion of Frost and...");
console.log("Potion of Frost chill: " + potionOfFrost);


// Task 4: Whisper of Wind
console.log("\nTask 4: Formulate a Whisper of Wind for swift movement!");

// The correct mix for the Whisper of Wind might be:
// 0 parts water, 0 parts fire dust, 0 parts ice shard, 2 parts wind breath
// The apprentice decides to try the following mixture:
let whisperOfWind = water * 0 + fireDust * 0 + iceShard * 0 + windBreath * 2;
console.log("You mix the ingredients for the Whisper of Wind and...");
console.log("Whisper of Wind speed: " + whisperOfWind);


// Conclusion and Results
console.log("\n📜 Potion Mixing Results 📜");
console.log("Healing Potion: " + (healingPotion > 50 ? "Perfect!" : "Needs more work."));
console.log("Elixir of Fire: " + (elixirOfFire > 20 ? "Blazing success!" : "Too weak, try again."));
console.log("Potion of Frost: " + (potionOfFrost > 30 ? "Frosty and ready!" : "Not cold enough."));
console.log("Whisper of Wind: " + (whisperOfWind > 10 ? "Swift as the wind!" : "Barely a breeze."));

// Instructions for replaying
console.log("\nTo try mixing potions again, change the numbers you multiply each ingredient by and run the program again to see what you create!");