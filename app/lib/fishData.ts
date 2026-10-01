export interface FishSpecies {
  slug: string;
  commonName: string;
  scientificName: string;
  family: string;
  order: string;
  classname: string;
  phylum: string;
  kingdom: string;
  imagePath: string;
  imageCredit: string;
  conservationStatus: string;
  conservationLabel: string;
  habitat: string;
  diet: string;
  lifespan: string;
  size: string;
  weight: string;
  distribution: string;
  shortDescription: string;
  description: string;
  sections: {
    title: string;
    content: string;
  }[];
  category: string;
  featured?: boolean;
  didYouKnow?: string;
}

export const categories = [
  { name: "Freshwater Fish", slug: "freshwater", count: 0 },
  { name: "Saltwater Fish", slug: "saltwater", count: 0 },
  { name: "Sharks & Rays", slug: "sharks-rays", count: 0 },
  { name: "Tropical Fish", slug: "tropical", count: 0 },
  { name: "Deep Sea Fish", slug: "deep-sea", count: 0 },
  { name: "Endangered Species", slug: "endangered", count: 0 },
];

export const fishDatabase: FishSpecies[] = [
  {
    slug: "clownfish",
    commonName: "Clownfish",
    scientificName: "Amphiprioninae",
    family: "Pomacentridae",
    order: "Perciformes",
    classname: "Actinopterygii",
    phylum: "Chordata",
    kingdom: "Animalia",
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg",
    imageCredit: "Nick Hobgood, CC BY-SA 3.0, via Wikimedia Commons",
    conservationStatus: "LC",
    conservationLabel: "Least Concern",
    habitat: "Coral reefs in the Indian and Pacific Oceans",
    diet: "Omnivore — algae, zooplankton, small invertebrates",
    lifespan: "6–10 years",
    size: "7–13 cm (2.8–5.1 in)",
    weight: "Up to 250 g (8.8 oz)",
    distribution: "Indian Ocean, Red Sea, western Pacific Ocean",
    shortDescription: "The clownfish is a small, brightly colored fish best known for its symbiotic relationship with sea anemones.",
    description:
      "Clownfish or anemonefish are fishes from the subfamily Amphiprioninae in the family Pomacentridae. Thirty species are recognized: one in the genus Premnas, while the remaining are in the genus Amphiprion. In the wild, they all form symbiotic mutualisms with sea anemones. Depending on species, anemonefish are overall yellow, orange, or a reddish or blackish color, and many show white bars or patches.",
    sections: [
      {
        title: "Symbiosis with Sea Anemones",
        content:
          "Clownfish are notable for their mutualistic symbiosis with sea anemones, to which most clownfish species are specifically adapted. The sea anemone protects the clownfish from predators, as well as providing food through the scraps left from the anemone's meals and occasional dead anemone tentacles. In return, the clownfish defends the anemone from its predators and parasites. The anemone also picks up nutrients from the clownfish's excrement. The clownfish is protected from the anemone's sting by a layer of mucus on the surface of its body, which makes it immune to the anemone's toxins. A theory is that the biological composition of the clownfish's mucus, which lacks the substance N-acetylneuraminic acid, prevents the anemone from discharging its nematocysts.",
      },
      {
        title: "Reproduction and Social Hierarchy",
        content:
          "Clownfish are sequential hermaphrodites, meaning they develop into males first, and then change sex to become females. When the female clownfish is removed from the group, such as by death, one of the largest and most dominant males will become a female. The remaining males will move up a rank in the hierarchy. Clownfish lay eggs on any flat surface close to their host anemones. The male parent guards the eggs until they hatch. The eggs hatch at around six to eight days after being laid, typically two hours after dusk on the sixth to eighth day.",
      },
      {
        title: "In Popular Culture",
        content:
          'Clownfish gained significant popularity after the release of the animated film "Finding Nemo" (2003) and its sequel "Finding Dory" (2016), both produced by Pixar Animation Studios. The main character, Nemo, is an ocellaris clownfish (Amphiprion ocellaris). Following the release of the film, demand for clownfish as pets increased by up to 40%, leading to concerns about overharvesting from wild populations. Conservation efforts have since increased to protect these charismatic fish.',
      },
      {
        title: "Distribution and Habitat",
        content:
          "Clownfish are found in warm waters of the Indian and Pacific Oceans, including the Great Barrier Reef, the Red Sea, and Southeast Asia. They live at depths of 1 to 15 meters (3 to 49 ft) in sheltered reefs or in shallow lagoons. Clownfish are not found in the Atlantic Ocean, the Caribbean, or the Mediterranean Sea. Each species has a specific range, and some species overlap geographically.",
      },
    ],
    category: "tropical",
    featured: true,
    didYouKnow:
      "All clownfish are born male! The dominant male in a group can change sex to become the breeding female.",
  },
  {
    slug: "great-white-shark",
    commonName: "Great White Shark",
    scientificName: "Carcharodon carcharias",
    family: "Lamnidae",
    order: "Lamniformes",
    classname: "Chondrichthyes",
    phylum: "Chordata",
    kingdom: "Animalia",
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg",
    imageCredit: "Terry Goss, CC BY-SA 3.0, via Wikimedia Commons",
    conservationStatus: "VU",
    conservationLabel: "Vulnerable",
    habitat: "Coastal and offshore waters of all major oceans",
    diet: "Carnivore — marine mammals, fish, seabirds",
    lifespan: "70+ years",
    size: "4.0–6.1 m (13–20 ft), max 7 m (23 ft)",
    weight: "680–1,100 kg (1,500–2,430 lb)",
    distribution: "All major oceans, primarily temperate coastal waters",
    shortDescription: "The great white shark is the world's largest predatory fish, an apex predator found in coastal waters across all major oceans.",
    description:
      "The great white shark (Carcharodon carcharias), also known as the white pointer, white shark, or white death, is a species of large mackerel shark which can be found in the coastal surface waters of all the major oceans. It is notable for its size, with the largest preserved female specimen measuring 5.83 m (19.1 ft) in length and around 2,000 kg (4,410 lb) in weight at maturity. However, most are smaller; males measure 3.4 to 4.0 m (11 to 13 ft), and females measure 4.6 to 4.9 m (15 to 16 ft) on average.",
    sections: [
      {
        title: "Anatomy and Appearance",
        content:
          "The great white shark has a robust, large, conical snout. The upper and lower lobes on the tail fin are approximately the same size, which is similar to some mackerel sharks. A great white displays countershading, by having a white underside and a grey dorsal area that gives an overall mottled appearance. The coloration makes it difficult for prey to spot the shark because it breaks up the shark's outline when seen from the side. From above, the darker shade blends with the sea, and from below it exposes a minimal silhouette against the sunlight.",
      },
      {
        title: "Hunting and Diet",
        content:
          "Great white sharks are carnivorous and prey upon fish (e.g., tuna, rays, other sharks), cetaceans (dolphins, porpoises, whales), pinnipeds (seals, fur seals, sea lions), sea turtles, sea otters, and seabirds. Great whites have also been known to eat objects that they are unable to digest. Among the shark's most distinguishing characteristics is its teeth — 300 serrated, triangular teeth arranged in several rows. These teeth have evolved for seizing and tearing flesh rather than chewing; prey is usually swallowed in chunks.",
      },
      {
        title: "Behavior and Social Structure",
        content:
          "Despite their solitary reputation, great white sharks display surprisingly complex social behavior. They have a dominance hierarchy that is determined primarily by size, sex, and seniority. When two great whites approach each other, they may engage in a variety of interactions, from tail slapping to parallel swimming. Contrary to popular belief, great white sharks are curious animals that regularly interact with humans and other animals without aggression. Most attacks on humans are thought to be the result of the shark's exploratory behavior — they investigate unfamiliar objects by biting them.",
      },
      {
        title: "Conservation",
        content:
          "The great white shark is listed as Vulnerable by the IUCN Red List. It is included in Appendix II of CITES, meaning that international trade in the species requires a permit. Populations have declined due to overfishing, bycatch, shark finning, and habitat degradation. Several countries, including Australia, South Africa, and the United States, have enacted legal protections for the species. Research and monitoring programs continue to study great white populations and develop conservation strategies.",
      },
    ],
    category: "sharks-rays",
    didYouKnow:
      "Great white sharks can detect one drop of blood in 25 gallons (100 liters) of water and can sense even tiny amounts of blood in the water up to 3 miles (5 km) away.",
  },
  {
    slug: "betta-fish",
    commonName: "Betta Fish",
    scientificName: "Betta splendens",
    family: "Osphronemidae",
    order: "Anabantiformes",
    classname: "Actinopterygii",
    phylum: "Chordata",
    kingdom: "Animalia",
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/1/10/HM_Orange_M_Sarawut.jpg",
    imageCredit: "Sarawut Wongsombat, CC BY-SA 4.0, via Wikimedia Commons",
    conservationStatus: "VU",
    conservationLabel: "Vulnerable",
    habitat: "Rice paddies, floodplains, and shallow freshwater in Southeast Asia",
    diet: "Carnivore — insects, insect larvae, zooplankton",
    lifespan: "2–5 years",
    size: "5–8 cm (2–3 in)",
    weight: "Up to 5 g (0.18 oz)",
    distribution: "Thailand, Cambodia, Laos, Vietnam, Myanmar",
    shortDescription: "The Siamese fighting fish is famous for its brilliant colors, flowing fins, and the male's aggressive territorial behavior.",
    description:
      "The Siamese fighting fish (Betta splendens), commonly known as the betta, is a freshwater fish native to Southeast Asia, namely Cambodia, Laos, Myanmar, Malaysia, Indonesia, Thailand, and Vietnam. It is one of the most popular aquarium fish in the world. Bettas are well known for being highly territorial, with males in particular prone to attacking one another if housed in the same tank. Without the ability to escape, this may lead to the death of one or both fish. Female bettas can also become territorial towards each other if they are housed in too small a space.",
    sections: [
      {
        title: "Labyrinth Organ",
        content:
          "Bettas possess a special organ known as the labyrinth organ, which allows them to breathe air directly from the surface. This adaptation enables them to survive in low-oxygen environments such as stagnant ponds and rice paddies that other fish could not tolerate. The labyrinth organ is a folded suprabranchial accessory breathing organ. It is formed by a bony plate covered in a thin, highly vascularized respiratory epithelium. The labyrinth organ is not fully developed when the fish are young, and young bettas may not have full access to this organ until they are several weeks old.",
      },
      {
        title: "Breeding and Bubble Nests",
        content:
          "Male bettas build elaborate bubble nests at the surface of the water using saliva-coated air bubbles. When a female is ready to spawn, the male wraps his body around the female in what is called a nuptial embrace, during which the female releases eggs that the male fertilizes externally. The male then collects the eggs in his mouth and deposits them carefully into the bubble nest. He guards the nest fiercely, tending to it by replacing burst bubbles and retrieving any eggs that fall out, until the fry hatch in approximately 24 to 36 hours.",
      },
      {
        title: "Color Varieties",
        content:
          "Through selective breeding, bettas are now available in a wide range of colors and fin types. Wild bettas are typically less vivid, with duller green, brown, or grey coloring. Domesticated bettas, however, are available in vibrant shades of red, blue, turquoise, orange, yellow, green, purple, white, black, and multi-colored patterns. Fin varieties include veiltail, crowntail, combtail, half-moon, double tail, short-finned fighting-style, rosetail, and dumbo. Some rare color mutations, such as the marble betta, can change color over their lifetime.",
      },
      {
        title: "Cultural Significance",
        content:
          "In Thailand, bettas have been bred for centuries, initially for fighting and later for ornamental purposes. The practice of betta fighting was so popular that it was taxed and regulated by the King of Siam. The fish was named the national aquatic animal of Thailand in 2019. Today, betta fish are one of the most popular aquarium pets worldwide, with competitive shows held globally to judge specimens based on color, finnage, and overall condition.",
      },
    ],
    category: "freshwater",
    didYouKnow:
      "Male betta fish build intricate bubble nests on the water surface using saliva-coated air bubbles to protect their eggs!",
  },
  {
    slug: "blue-tang",
    commonName: "Blue Tang",
    scientificName: "Paracanthurus hepatus",
    family: "Acanthuridae",
    order: "Acanthuriformes",
    classname: "Actinopterygii",
    phylum: "Chordata",
    kingdom: "Animalia",
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Paracanthurus_hepatus.jpg",
    imageCredit: "Tenji, CC BY-SA 3.0, via Wikimedia Commons",
    conservationStatus: "LC",
    conservationLabel: "Least Concern",
    habitat: "Coral reefs in the Indo-Pacific",
    diet: "Omnivore — primarily plankton and algae",
    lifespan: "8–20 years",
    size: "12–38 cm (4.7–15 in)",
    weight: "Up to 600 g (1.3 lb)",
    distribution: "Indo-Pacific, from East Africa to Micronesia",
    shortDescription: "The blue tang is a vibrant surgeonfish famous for its stunning royal blue coloring and prominent black markings.",
    description:
      "The blue tang (Paracanthurus hepatus) is a species of Indo-Pacific surgeonfish. A popular fish in marine aquaria, it is the only member of the genus Paracanthurus. A number of common names are attributed to the species, including regal tang, palette surgeonfish, blue hippo tang, royal blue tang, hippo tang, flagtail surgeonfish, Pacific regal blue tang, and blue surgeonfish. It can be found throughout the Indo-Pacific and lives in pairs or small groups in coral reefs and inshore rocky or coral areas.",
    sections: [
      {
        title: "Distinctive Coloration",
        content:
          "The blue tang exhibits a vivid royal blue body with a bold black 'palette' marking on the body and a bright yellow tail and pectoral fin trim. Juveniles are primarily bright yellow with blue spots near the eyes, gradually transforming to the distinctive blue adult coloration as they mature. The fish can vary the intensity of its coloring from light blue to deep purple depending on mood, stress level, or time of day. At night, blue tangs can appear much paler than during the day.",
      },
      {
        title: "Defense Mechanisms",
        content:
          "Like all surgeonfish, blue tangs possess a sharp, modified scale called a 'caudal spine' or 'scalpel' on each side of the caudal peduncle (the base of the tail fin). When threatened, the fish can flick these spines outward like a switchblade, using them to defend against predators. The spines are coated in a mild toxin that can cause painful stings to predators and careless human handlers. Blue tangs also exhibit a behavior called 'playing dead' — when stressed, they will lie on their side on the ocean floor, which may deter some predators.",
      },
      {
        title: "Social Behavior and Schooling",
        content:
          "Blue tangs are generally found in pairs or small groups, though they can form large aggregations of over 100 individuals when feeding. These schools provide protection through numbers and increase foraging efficiency. Despite their social nature, blue tangs can be aggressive towards conspecifics (members of the same species), especially in the confined spaces of an aquarium. They establish territories and display dominance through fin displays and chasing behaviors.",
      },
    ],
    category: "tropical",
    didYouKnow:
      'The blue tang was made famous as "Dory" in Pixar\'s Finding Nemo (2003) and its sequel Finding Dory (2016).',
  },
  {
    slug: "anglerfish",
    commonName: "Anglerfish",
    scientificName: "Lophiiformes",
    family: "Lophiidae (and related families)",
    order: "Lophiiformes",
    classname: "Actinopterygii",
    phylum: "Chordata",
    kingdom: "Animalia",
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Humpback_anglerfish.png",
    imageCredit: "Javontaevious, CC BY-SA 3.0, via Wikimedia Commons",
    conservationStatus: "LC",
    conservationLabel: "Least Concern",
    habitat: "Deep ocean floors, bathypelagic and abyssopelagic zones",
    diet: "Carnivore — fish, crustaceans, cephalopods",
    lifespan: "Up to 30 years (deep-sea species)",
    size: "2–100 cm (0.8–39 in) depending on species",
    weight: "Up to 50 kg (110 lb) for monkfish species",
    distribution: "All major oceans, primarily deep waters",
    shortDescription: "The anglerfish is a bizarre deep-sea predator that uses a bioluminescent lure to attract prey in the pitch-black ocean depths.",
    description:
      "The anglerfish are fish of the teleost order Lophiiformes. They are bony fish named for their characteristic mode of predation, in which a modified luminescent fin ray (the esca or illicium) acts as a lure for other fish. The luminescence comes from symbiotic bacteria, which are thought to be acquired from seawater, that dwell in and around the esca. Some anglerfish are also notable for extreme sexual dimorphism and sexual symbiosis of the small male with the much larger female, as seen in the suborder Ceratioidei, the deep-sea anglerfish.",
    sections: [
      {
        title: "Bioluminescent Lure",
        content:
          "The most distinctive feature of the anglerfish is the modified dorsal fin spine (illicium) that protrudes from the head and acts as a fishing rod of sorts. At the tip of this appendage is a fleshy growth called the esca, which contains bioluminescent bacteria. The light produced by these bacteria attracts prey in the total darkness of the deep sea, where sunlight cannot reach. The anglerfish sits motionless, waving its lure to mimic the movements of small prey animals, and when a curious fish comes close enough, the anglerfish strikes with incredible speed — its jaws can snap shut in just 6 milliseconds.",
      },
      {
        title: "Sexual Dimorphism and Parasitic Males",
        content:
          "In many deep-sea anglerfish species, males are significantly smaller than females — sometimes only 1/10th the size. In the most extreme cases, the tiny male permanently fuses to the female's body in a process called sexual parasitism. When a male finds a female, he bites into her skin and releases an enzyme that dissolves the skin around his mouth and her body, fusing the pair together. The male's body then atrophies until it is little more than a pair of gonads, which release sperm in response to the female's hormonal signals. A single female can carry multiple males fused to her body.",
      },
      {
        title: "Adaptations to the Deep Sea",
        content:
          "Anglerfish have evolved numerous adaptations for life in the deep ocean. Their bodies are compressed laterally and their bones are thin and lightweight. Their enormous mouths and expandable stomachs allow them to swallow prey up to twice their own size — a crucial adaptation in an environment where meals are scarce. Some species can unhinge their jaws to accommodate even larger prey. Their dark coloration provides camouflage in the lightless depths, and their relatively low metabolic rate allows them to survive long periods between meals.",
      },
    ],
    category: "deep-sea",
    didYouKnow:
      "Male anglerfish permanently fuse to females and become parasites, losing their eyes, organs, and even their brain — living only to provide sperm!",
  },
  {
    slug: "goldfish",
    commonName: "Goldfish",
    scientificName: "Carassius auratus",
    family: "Cyprinidae",
    order: "Cypriniformes",
    classname: "Actinopterygii",
    phylum: "Chordata",
    kingdom: "Animalia",
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/6/65/Gold_fish1.jpg",
    imageCredit: "Benson Kua, CC BY-SA 2.0, via Wikimedia Commons",
    conservationStatus: "LC",
    conservationLabel: "Least Concern",
    habitat: "Freshwater — ponds, lakes, slow-moving rivers",
    diet: "Omnivore — algae, aquatic plants, insects, crustaceans",
    lifespan: "10–15 years (up to 40+ in ideal conditions)",
    size: "Up to 45 cm (18 in) in optimal conditions",
    weight: "Up to 2 kg (4.4 lb)",
    distribution: "Originally East Asia; now worldwide through introduction",
    shortDescription: "The goldfish is one of the earliest fish to be domesticated and remains one of the most commonly kept aquarium and pond fish.",
    description:
      "The goldfish (Carassius auratus) is a freshwater fish in the family Cyprinidae of order Cypriniformes. It is commonly kept as a pet in indoor aquariums, and is one of the most popular aquarium fish. Goldfish released into the wild have become an invasive pest in parts of North America. Native to East Asia, the goldfish is a relatively small member of the carp family. It was first selectively bred for color in imperial China more than 1,000 years ago, and several distinct breeds have since been developed.",
    sections: [
      {
        title: "History of Domestication",
        content:
          "Goldfish were first domesticated in China more than 1,000 years ago during the Tang Dynasty (618–907 AD). Originally, they were selectively bred from the Prussian carp (Carassius gibelio) for their golden coloration. By the Song Dynasty (960–1279 AD), keeping goldfish in ornamental pools became fashionable among the Chinese elite. The practice of keeping goldfish indoors in glass containers began in the Ming Dynasty. Goldfish were introduced to Japan around 1603 and to Europe in the 17th century, becoming one of the first ornamental fish to be traded internationally.",
      },
      {
        title: "Breeds and Varieties",
        content:
          "Through centuries of selective breeding, numerous goldfish varieties have been developed, differing in body shape, fin configuration, eye placement, coloration, and other physical characteristics. Popular varieties include the Common Goldfish, Comet, Fantail, Ryukin, Oranda (known for its prominent head growth called a 'wen'), Ranchu, Black Moor, Telescope, Bubble Eye, Celestial Eye, Lionhead, and Pearlscale. Colors range from the classic gold/orange to red, white, black, calico, chocolate, blue, and combinations thereof.",
      },
      {
        title: "Intelligence and Memory",
        content:
          "Contrary to the popular myth that goldfish have a 3-second memory, scientific studies have demonstrated that goldfish can remember things for at least five months. Researchers have trained goldfish to push levers, navigate mazes, and recognize their owners. Goldfish have demonstrated the ability to associate feeding times with particular sounds and can distinguish between different shapes, colors, and even musical pieces. They exhibit complex social behaviors and can be trained to perform tricks using positive reinforcement techniques.",
      },
    ],
    category: "freshwater",
    didYouKnow:
      "Goldfish don't have a 3-second memory — they can actually remember things for at least 5 months and can even be trained to perform tricks!",
  },
  {
    slug: "manta-ray",
    commonName: "Giant Oceanic Manta Ray",
    scientificName: "Mobula birostris",
    family: "Mobulidae",
    order: "Myliobatiformes",
    classname: "Chondrichthyes",
    phylum: "Chordata",
    kingdom: "Animalia",
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/d/df/Manta_birostris-Thailand4.jpg",
    imageCredit: "jon hanson, CC BY-SA 2.0, via Wikimedia Commons",
    conservationStatus: "EN",
    conservationLabel: "Endangered",
    habitat: "Open oceans, coastal areas, coral reefs",
    diet: "Filter feeder — zooplankton, small fish",
    lifespan: "Up to 50 years",
    size: "Up to 7 m (23 ft) wingspan",
    weight: "Up to 1,350 kg (2,980 lb)",
    distribution: "Tropical and subtropical waters worldwide",
    shortDescription: "The giant oceanic manta ray is the largest ray species in the world, known for its graceful underwater flight and remarkable intelligence.",
    description:
      "The giant oceanic manta ray (Mobula birostris) is the largest species of ray and one of the largest fishes in the world. It can grow to a disc size of up to 7 m (23 ft) with a weight of about 1,350 kg (2,980 lb), but average size commonly observed is 4.5 m (15 ft). It is found in tropical and subtropical waters and can also be found in temperate waters. Despite their enormous size, manta rays are gentle, graceful creatures that feed on tiny plankton by filter feeding.",
    sections: [
      {
        title: "Intelligence and Brain Size",
        content:
          "Manta rays have the largest brain-to-body ratio of any cold-blooded fish, and they have demonstrated remarkable intelligence in scientific studies. They are one of the few animals that can pass the mirror test, suggesting a level of self-awareness. Manta rays have been observed engaging in play behavior, curiously approaching divers, and remembering specific dive sites and cleaning stations. Individual manta rays can be identified by the unique spot patterns on their undersides, much like human fingerprints.",
      },
      {
        title: "Filter Feeding",
        content:
          "Despite their massive size, manta rays are filter feeders that consume vast quantities of zooplankton, including copepods, mysid shrimp, crab larvae, and mollusk larvae. They use their cephalic fins (the horn-like projections on either side of the head) to funnel water into their wide mouths. Manta rays can consume up to 60 pounds of plankton per day. They are often seen performing somersaults and barrel rolls while feeding, creating a vortex that concentrates their food.",
      },
      {
        title: "Conservation Challenges",
        content:
          "Giant oceanic manta rays are listed as Endangered by the IUCN. They face threats from targeted fishing for their gill plates (used in traditional Chinese medicine), bycatch in fishing nets, ocean pollution, and climate change affecting their plankton food sources. Their low reproductive rate — females typically give birth to just one pup every two to five years — makes population recovery especially slow. Marine protected areas and international fishing bans have been established to help protect these magnificent creatures.",
      },
    ],
    category: "sharks-rays",
    featured: true,
    didYouKnow:
      "Manta rays have the largest brain-to-body ratio of any cold-blooded fish and are one of the few animals that can recognize themselves in a mirror!",
  },
  {
    slug: "pufferfish",
    commonName: "Pufferfish",
    scientificName: "Tetraodontidae",
    family: "Tetraodontidae",
    order: "Tetraodontiformes",
    classname: "Actinopterygii",
    phylum: "Chordata",
    kingdom: "Animalia",
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/9/90/Arothron_hispidus_1.jpg",
    imageCredit: "Brocken Inaglory, CC BY-SA 3.0, via Wikimedia Commons",
    conservationStatus: "LC",
    conservationLabel: "Least Concern (most species)",
    habitat: "Tropical and subtropical oceans, some freshwater species",
    diet: "Omnivore — algae, invertebrates, shellfish",
    lifespan: "4–10 years",
    size: "2.5–61 cm (1–24 in) depending on species",
    weight: "Up to 13 kg (29 lb) for largest species",
    distribution: "Tropical and subtropical oceans worldwide; some freshwater species in rivers of South America, Africa, and Southeast Asia",
    shortDescription: "Pufferfish are famous for their ability to inflate themselves into a ball shape and for being one of the most toxic vertebrates on Earth.",
    description:
      "Tetraodontidae is a family of primarily marine and estuarine fish of the order Tetraodontiformes. The family includes many familiar species variously called pufferfish, puffers, balloonfish, blowfish, blowies, bubblefish, globefish, swellfish, toadfish, toadies, honey toads, sugar toads, and sea squab. They are morphologically similar to the closely related porcupinefish, which have large external spines. The scientific name refers to the four large teeth, fused into an upper and lower plate, which are used for crushing the hard shells of crustaceans and mollusks.",
    sections: [
      {
        title: "Inflation Defense Mechanism",
        content:
          "The pufferfish's most distinctive defense mechanism is its ability to rapidly inflate itself into a spherical shape by swallowing water (or air if removed from water). This is achieved by the fish's extremely elastic stomach, which can expand to several times its normal size. The inflation makes the fish appear much larger and more difficult for predators to swallow. Some species are also covered with spines that become erect when the fish inflates, providing an additional deterrent. The inflation process takes just a few seconds and the fish can return to normal size once the threat has passed.",
      },
      {
        title: "Tetrodotoxin",
        content:
          "Most pufferfish species contain tetrodotoxin (TTX), one of the most potent toxins found in nature — up to 1,200 times more poisonous than cyanide. A single pufferfish contains enough toxin to kill 30 adult humans, and there is no known antidote. The toxin is concentrated in the liver, ovaries, skin, and intestines. Despite this extreme toxicity, pufferfish is considered a delicacy in Japan, where it is known as 'fugu.' Only specially trained and licensed chefs are permitted to prepare fugu, as improper preparation can be fatal. Several deaths from fugu poisoning are reported each year.",
      },
      {
        title: "Underwater Crop Circles",
        content:
          "Male white-spotted pufferfish (Torquigener albomaculosus) create elaborate geometric patterns on the sandy ocean floor as part of their courtship display. These intricate 'underwater crop circles' can be up to 2 meters (6.5 ft) in diameter and take about a week to construct. The male works tirelessly day and night, using his fins to carve radial furrows and ridges in the sand. The structure serves to attract females and also functions to channel water currents that concentrate fine sand particles in the center, where the female will lay her eggs. This remarkable behavior was only discovered in 2011.",
      },
    ],
    category: "saltwater",
    didYouKnow:
      "A single pufferfish contains enough tetrodotoxin to kill 30 adult humans — yet it's served as a delicacy called 'fugu' in Japan!",
  },
  {
    slug: "seahorse",
    commonName: "Seahorse",
    scientificName: "Hippocampus",
    family: "Syngnathidae",
    order: "Syngnathiformes",
    classname: "Actinopterygii",
    phylum: "Chordata",
    kingdom: "Animalia",
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Lined_Seahorse_front.jpg",
    imageCredit: "Line1, CC BY-SA 3.0, via Wikimedia Commons",
    conservationStatus: "VU",
    conservationLabel: "Vulnerable (many species)",
    habitat: "Shallow tropical and temperate waters, seagrass beds, coral reefs",
    diet: "Carnivore — small crustaceans, plankton, brine shrimp",
    lifespan: "1–5 years (species dependent)",
    size: "1.5–35 cm (0.6–14 in)",
    weight: "Up to 200 g (7 oz)",
    distribution: "Tropical and temperate waters worldwide",
    shortDescription: "Seahorses are unique fish with a horse-like head, upright swimming posture, and the remarkable trait of male pregnancy.",
    description:
      "Seahorse is the name given to 46 species of small marine fish in the genus Hippocampus. Having a head and neck suggestive of a horse, seahorses also feature segmented bony armour, an upright posture and a curled prehensile tail. Along with the closely related pipefish, they form the family Syngnathidae. Seahorses are found in shallow tropical and temperate salt water throughout the world, from about 45°S to 45°N. They live in sheltered areas such as seagrass beds, estuaries, coral reefs, and mangroves.",
    sections: [
      {
        title: "Male Pregnancy",
        content:
          "Seahorses are the only animal species in which the male becomes pregnant and gives birth. The female deposits her eggs into the male's brood pouch (a specialized structure on the ventral side), where he fertilizes them internally. The male carries the developing embryos for 9 to 45 days (depending on species and water temperature), during which time the pouch provides nutrients and oxygen through a network of capillaries. When ready, the male undergoes muscular contractions to expel the fully formed miniature seahorses — he can give birth to anywhere from 5 to 2,500 young in a single brood, depending on species.",
      },
      {
        title: "Unique Swimming and Anatomy",
        content:
          "Seahorses are exceptionally poor swimmers — they are the slowest-moving of all fish species. The dwarf seahorse (Hippocampus zosterae) has a recorded top speed of only 1.5 meters per hour (5 feet per hour). They propel themselves using a small dorsal fin that beats 30-70 times per second and steer using tiny pectoral fins behind their eyes. Their upright posture and prehensile tail make them unique among fish. They lack scales and instead have a thin skin stretched over bony plates arranged in rings throughout their body. Their eyes can move independently, like a chameleon's.",
      },
      {
        title: "Feeding and Hunting",
        content:
          "Seahorses are ambush predators that rely on stealth and patience. Their elongated snout acts like a pipette, creating a powerful suction to draw in tiny crustaceans and zooplankton. They can consume up to 3,000 brine shrimp per day due to their lack of a stomach — food passes through their digestive system so quickly that they must eat almost constantly to stay alive. Seahorses have no teeth and swallow their food whole. They are remarkably effective hunters, successfully catching prey about 90% of the time, compared to the average predatory fish success rate of about 30%.",
      },
    ],
    category: "saltwater",
    didYouKnow:
      "Male seahorses are the ones who get pregnant and give birth — they can deliver up to 2,500 babies in a single brood!",
  },
  {
    slug: "whale-shark",
    commonName: "Whale Shark",
    scientificName: "Rhincodon typus",
    family: "Rhincodontidae",
    order: "Orectolobiformes",
    classname: "Chondrichthyes",
    phylum: "Chordata",
    kingdom: "Animalia",
    imagePath: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Whale_shark_Georgia_aquarium.jpg",
    imageCredit: "Zac Wolf, CC BY-SA 2.5, via Wikimedia Commons",
    conservationStatus: "EN",
    conservationLabel: "Endangered",
    habitat: "Open tropical and warm-temperate oceans",
    diet: "Filter feeder — plankton, fish eggs, small fish, squid",
    lifespan: "70–130 years (estimated)",
    size: "Up to 18.8 m (61.7 ft)",
    weight: "Up to 34,000 kg (75,000 lb)",
    distribution: "Tropical and warm-temperate oceans worldwide",
    shortDescription: "The whale shark is the largest living fish species, a gentle filter-feeding giant that can reach lengths of nearly 19 meters.",
    description:
      "The whale shark (Rhincodon typus) is a slow-moving, filter-feeding carpet shark and the largest known extant fish species. The largest confirmed individual had a length of 18.8 m (61.7 ft). The whale shark holds many records for sheer size in the animal kingdom, most notably being by far the largest living nonmammalian vertebrate. Despite its enormous size, the whale shark is a docile, gentle creature that feeds primarily on plankton by filter feeding — it poses no significant danger to humans.",
    sections: [
      {
        title: "Size and Physical Characteristics",
        content:
          "Whale sharks are truly enormous fish, typically reaching lengths of 9-12 meters (30-40 feet) with some individuals growing to over 18 meters (60 feet). Their mouths alone can be up to 1.5 meters (5 feet) wide, containing over 300 rows of tiny teeth that play no role in feeding. The whale shark's flattened head bears a distinctive pattern of white spots and stripes on a dark blue-grey background — this pattern is unique to each individual, functioning like a fingerprint for identification purposes. Despite their name, whale sharks are true sharks, not whales.",
      },
      {
        title: "Filter Feeding",
        content:
          "Whale sharks are one of only three known filter-feeding shark species (alongside the basking shark and megamouth shark). They feed by opening their enormous mouths and drawing in vast quantities of water, which is then filtered through specialized gill rakers that trap plankton, fish eggs, small fish, and squid. A whale shark can filter over 6,000 liters (1,585 gallons) of water per hour. They exhibit several feeding behaviors including ram filtration (swimming forward with mouth open), active suction feeding (vertically bobbing at the surface), and bottom feeding.",
      },
      {
        title: "Conservation Status",
        content:
          "The whale shark is classified as Endangered by the IUCN Red List. Major threats include targeted fishing in some regions, bycatch, boat strikes, and ocean pollution (particularly microplastics). Their slow reproductive rate and late maturity make them especially vulnerable to population decline. International trade in whale sharks is regulated under CITES Appendix II. Many countries have established legal protections, and whale shark tourism has become an important economic incentive for conservation in places like the Philippines, Mexico, Maldives, and Australia.",
      },
    ],
    category: "sharks-rays",
    featured: true,
    didYouKnow:
      "Whale sharks can live for over 100 years and their spot patterns are as unique as human fingerprints — no two are alike!",
  },
];

// Update category counts
categories.forEach((cat) => {
  cat.count = fishDatabase.filter((f) => f.category === cat.slug).length;
});

export function getFishBySlug(slug: string): FishSpecies | undefined {
  return fishDatabase.find((f) => f.slug === slug);
}

export function getFishByCategory(categorySlug: string): FishSpecies[] {
  return fishDatabase.filter((f) => f.category === categorySlug);
}

export function getFeaturedFish(): FishSpecies[] {
  return fishDatabase.filter((f) => f.featured);
}

export function searchFish(query: string): FishSpecies[] {
  const lowerQuery = query.toLowerCase();
  return fishDatabase.filter(
    (f) =>
      f.commonName.toLowerCase().includes(lowerQuery) ||
      f.scientificName.toLowerCase().includes(lowerQuery) ||
      f.description.toLowerCase().includes(lowerQuery) ||
      f.family.toLowerCase().includes(lowerQuery)
  );
}
