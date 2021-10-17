const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Mint" },
    { name: "Damaged" },
    { name: "Slightly Played" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Pikachu",
      description: `Card Number / Rarity:115 / Secret Rare
      Card Type / HP / Stage:Lightning / 60 / Basic
      Attack 1: L Energize - Attach a L Energy card from your discard pile to this Pokemon.
      Attack 2: 2L Thunderbolt (80) Discard all Energy attached to this Pokemon.
      Weakness / Resistance / Retreat Cost:Fx2 / / 1 `,
      image:
        "https://res.cloudinary.com/kevin-cloud/image/upload/v1634495623/Pikachu.jpg",
      category: categories[2]._id,
      price: "31.50",
      quantity: "4",
    },
    {
      name: "Charizard",
      description: `Card Number / Rarity:4 / Holo Rare
      Card Type / HP / Stage:Fire / 120 / Stage 2
      Card Text:Pokemon Power: Burn
      As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed.
      Attack 1:[RRRR] Fire Spin (100)
      Discard 2 Energy cards attached to Charizard in order to use this attack.
      Weakness / Resistance / Retreat Cost:W / F-30 / 3`,
      image:
        "https://res.cloudinary.com/kevin-cloud/image/upload/v1634495346/Charizard.jpg",
      category: categories[0]._id,
      price: "351.51",
      quantity: "2",
    },
    {
      name: "Zapdos",
      description: `Card Number / Rarity:42 / Holo Rare
      Card Type / HP / Stage:Lightning / 110 / Basic
      Attack 1:[2LL] Thunder (90)
      This Pokemon does 30 damage to itself.
      Attack 2:[LLLL] Thunderbolt (170)
      Discard all Energy attached to this Pokemon.
      Weakness / Resistance / Retreat Cost:None / F-20 / 2`,
      image:
        "https://res.cloudinary.com/kevin-cloud/image/upload/v1634495346/Zapdos.jpg",
      category: categories[1]._id,
      price: "3.32",
      quantity: "14",
    },
    {
      name: "Squirtle",
      description: `Card Number / Rarity:112 / Common
      Card Type / HP / Stage:Water / 50 / Basic
      Attack 1:[0] Bubble - Flip a coin. If heads, the Defending Pokemon is now Paralyzed.
      Attack 2:[1W] Aqua Tail (20+) Flip a coin for each W Energy attached to Squirtle. This attack does 20 damage plus 10 more damage for each heads.
      Weakness / Resistance / Retreat Cost:L+10 / / 1`,
      image:
        "https://res.cloudinary.com/kevin-cloud/image/upload/v1634495346/Squirtle.jpg",
      category: categories[1]._id,
      price: "2.21",
      quantity: "12",
    },
    {
      name: "Mewtwo",
      description: `Card Number / Rarity:10 / Holo Rare
      Card Type / HP / Stage:Psychic / 60 / Basic
      Attack 1:[1P] Psychic (10+)
      Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokemon.
      Attack 2:[PP] Barrier
      Discard 1 Psychic Energy card attached to Mewtwo in order to use this attack. During your opponent's next turn, prevent all effects of attacks, including damage, done to Mewtwo.
      Weakness / Resistance / Retreat Cost:P / None / 3`,
      image:
        "https://res.cloudinary.com/kevin-cloud/image/upload/v1634495346/Mewtwo.jpg",
      category: categories[0]._id,
      price: "29.96",
      quantity: "4",
    },
    {
      name: "Snorlax",
      description: `Card Number / Rarity:131/185 / Holo Rare
      Card Type / HP / Stage:Colorless / 130 / Basic
      Card Text:Ability — Gormandize
      Once during your turn, if this Pokemon is in the Active Spot, you may draw cards until you have 7 cards in your hand. If you use this Ability, your turn ends.
      Attack 1:[4] Body Slam (100)
      Flip a coin. If heads, your opponent's Active Pokemon is now Paralyzed.
      Weakness / Resistance / Retreat Cost:Fx2 / / 3`,
      image:
        "https://res.cloudinary.com/kevin-cloud/image/upload/v1634495346/Snorlax.jpg",
      category: categories[2]._id,
      price: "2.19",
      quantity: "27",
    },
    {
      name: "Clefairy",
      description: `Card Number / Rarity:5 / Holo Rare
      Card Type / HP / Stage:Colorless / 40 / Basic
      Attack 1:[1] Sing
      Flip a coin. If heads, the Defending Pokemon is now Asleep.
      Attack 2:[3] Metronome
      Choose 1 of the Defending Pokemon's attacks. Metronome copies that attack except for its Energy costs and anything else required in order to use that attack, such as discarding Energy cards. (No matter what type the Defending Pokemon is, Clefairy's type is still Colorless.)
      Weakness / Resistance / Retreat Cost:F / P-30 / 1`,
      image:
        "https://res.cloudinary.com/kevin-cloud/image/upload/v1634495346/Clefairy.jpg",
      category: categories[0]._id,
      price: "349.99",
      quantity: "1",
    },
    {
      name: "Articuno",
      description: `Card Number / Rarity:2 / Holo Rare
      Card Type / HP / Stage:Water / 70 / Basic
      Attack 1:[WWW] Freeze Dry (30)
      Flip a coin. If heads, the Defending Pokemon is now Paralyzed.
      Attack 2:[WWWW] Blizzard (50)
      Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokemon. If tails, this attack does 10 damage to each of your own Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)
      Weakness / Resistance / Retreat Cost:None / F / 2`,
      image:
        "https://res.cloudinary.com/kevin-cloud/image/upload/v1634495346/Articuno.jpg",
      category: categories[2]._id,
      price: "24.99",
      quantity: "1",
    },
    {
      name: "Eevee",
      description: `Card Number / Rarity:11 / Promo
      Card Type / HP / Stage:Colorless / 30 / Basic
      Card Text:Pokemon Power: Chain Reaction
      This power can only be used when a Pokemon evolves. Search your deck for a card that evolves from Eevee and attach it to Eevee. This counts as evolving Eevee. Shuffle your deck afterward. This power can't be used if Eevee is Asleep, Confused, or Paralyzed.
      Attack 1:[1] Bite (20)
      Weakness / Resistance / Retreat Cost:F / P / 0`,
      image:
        "https://res.cloudinary.com/kevin-cloud/image/upload/v1634495346/Eevee.jpg",
      category: categories[2]._id,
      price: "19.71",
      quantity: "18",
    },
    {
      name: "Mew",
      description: `Card Number / Rarity:10 / Holo Rare
      Card Type / HP / Stage:Psychic / 70 / Basic
      Card Text:Poke-POWER Type Change
      Once during your turn (before your attack), you may choose 1 of the Defending Pokemon. Mew is the same type as that Pokemon (all if that Pokemon is more than 1 type) until the end of your turn. This power can't be used if Mew is affected by a Special Condition.
      Attack 1:[1P] Link Blast (50)
      If Mew and the Defending Pokemon have a different amount of Energy attached to them, this attack's base damage is 20 instead of 50.
      Weakness / Resistance / Retreat Cost:P / / 1`,
      image:
        "https://res.cloudinary.com/kevin-cloud/image/upload/v1634495346/Mew.jpg",
      category: categories[0]._id,
      price: "200.99",
      quantity: "1",
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    username: "admin",
    email: "admin@email.com",
    password: "admin",
  });

  console.log("users seeded");

  process.exit();
});
