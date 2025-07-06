import { PetData } from "@/types/petData";

const petData: PetData = {
    dogs: [
        {
            id: 'dog1',
            name: 'Buddy',
            breed: 'Golden Retriever',
            age: '2.5 Years',
            description: 'Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. He is great with kids and other pets.',
            location: 'Lagos, Nigeria',
            temperament: 'Loyal, Intelligent, Friendly',
            health: 'Up-to-date on vaccinations, neutered, healthy.',
            adoptionFee: 350,
            imageUrl: '/images/dogs/retriever.jpg',
            funFact: 'Can learn over 200 commands.',

            agentId: 'agent2'
        },
        {
            id: 'dog2',
            name: 'Daisy',
            breed: 'Pembroke Welsh Corgi',
            age: '1 Year',
            description: 'Daisy is an adorable and playful Corgi with a big personality. She enjoys cuddles and short bursts of zoomies. Perfect for apartment living.',
            location: 'Abuja, Nigeria',
            temperament: 'Outgoing, Playful, Affectionate',
            health: 'Fully vaccinated, spayed, regular vet checks.',
            adoptionFee: 400,
            imageUrl: '/images/dogs/corgi.jpg',
            funFact: 'Known for their "sploot" sitting position.',
            agentId: 'agent1'
        },
        {
            id: 'dog3',
            name: 'Max',
            breed: 'Labrador Black',
            age: '2.5 Years',
            description: 'Max is a gentle giant, a calm and well-behaved black Labrador. He loves swimming and is very eager to please. Ideal for an active family.',
            location: 'Port Harcourt, Nigeria',
            temperament: 'Calm, Eager to Please, Good-natured',
            health: 'All shots, neutered, no known health issues.',
            adoptionFee: 300,
            imageUrl: '/images/dogs/labrador.webp',
            funFact: 'Excellent swimmers and retrievers.',
            agentId: 'agent3'
        },
        {
            id: 'dog4',
            name: 'Snowball',
            breed: 'American Eskimo',
            age: '1.2 Years',
            description: 'Snowball is a fluffy and intelligent American Eskimo dog. He is very social and loves being the center of attention. Needs regular grooming.',
            location: 'Kano, Nigeria',
            temperament: 'Intelligent, Social, Playful',
            health: 'Vaccinated, neutered, very healthy coat.',
            adoptionFee: 380,
            imageUrl: '/images/dogs/eskimo.jpg',
            funFact: 'Often mistaken for miniature Samoyeds.',
            agentId: 'agent4'
        },
        {
            id: 'dog5',
            name: 'Coco',
            breed: 'Shih Tzu',
            age: '10 Months',
            description: 'Coco is a charming and cuddly Shih Tzu puppy. She loves lap time and short walks. Perfect companion for a cozy home.',
            location: 'Enugu, Nigeria',
            temperament: 'Affectionate, Outgoing, Playful',
            health: 'Puppy shots complete, microchipped, very lively.',
            adoptionFee: 450,
            imageUrl: '/images/dogs/tzu.webp',
            funFact: 'Bred to be lap companions for Chinese royalty.',
            agentId: 'agent1'
        },
        {
            id: 'dog6',
            name: 'Rocky',
            breed: 'German Shepherd',
            age: '3 Years',
            description: 'Rocky is a loyal and protective German Shepherd who excels in obedience. Great for a home that loves structured activities.',
            location: 'Ibadan, Nigeria',
            temperament: 'Alert, Loyal, Confident',
            health: 'Fully vaccinated, neutered, and trained.',
            adoptionFee: 420,
            imageUrl: '/images/dogs/shepherd.jpg',
            funFact: 'Often used in military and police work for their intelligence.',
            agentId: 'agent3'
        },
        {
            id: 'dog7',
            name: 'Luna',
            breed: 'Beagle',
            age: '2 Years',
            description: 'Luna is an energetic Beagle with a powerful nose. She enjoys outdoor adventures and sniffing out hidden toys.',
            location: 'Benin City, Nigeria',
            temperament: 'Curious, Friendly, Determined',
            health: 'Healthy, dewormed, spayed.',
            adoptionFee: 300,
            imageUrl: '/images/dogs/beagle.webp',
            funFact: 'Beagles were bred for tracking scents and rarely tire of sniffing!',
            agentId: 'agent4'
        }
    ],
    cats: [
        {
            id: 'cat1',
            name: 'Whiskers',
            breed: 'Siamese',
            age: '3 Years',
            description: 'Whiskers is a vocal and affectionate Siamese cat who loves to "talk" and be involved in everything you do. She enjoys interactive toys.',
            location: 'Lagos, Nigeria',
            temperament: 'Vocal, Affectionate, Intelligent',
            health: 'Spayed, vaccinated, regular vet checks.',
            adoptionFee: 200,
            imageUrl: '/images/cats/siamese.jpg',
            funFact: 'Known for their striking blue almond-shaped eyes.',
            agentId: 'agent1'
        },
        {
            id: 'cat2',
            name: 'Shadow',
            breed: 'Bombay',
            age: '1.5 Years',
            description: 'Shadow is a sleek and playful Bombay cat, resembling a mini panther. He is very curious and loves to explore. Great for active households.',
            location: 'Abuja, Nigeria',
            temperament: 'Playful, Curious, Social',
            health: 'Neutered, vaccinated, healthy and energetic.',
            adoptionFee: 180,
            imageUrl: '/images/cats/bombay.webp',
            funFact: 'Often described as "velcro cats" due to their clinginess.',

            agentId: 'agent2'
        },
        {
            id: 'cat3',
            name: 'Cleo',
            breed: 'Maine Coon',
            age: '5 Years',
            description: 'Cleo is a majestic and gentle Maine Coon. Despite her large size, she is very sweet and loves to cuddle. Ideal for a calm home.',
            location: 'Port Harcourt, Nigeria',
            temperament: 'Gentle, Affectionate, Calm',
            health: 'Spayed, all shots, excellent health.',
            adoptionFee: 250,
            imageUrl: '/images/cats/coon.jpg',
            funFact: 'One of the largest domesticated cat breeds.',
            agentId: "agent1"
        },
        {
            id: 'cat4',
            name: 'Lily',
            breed: 'British Shorthair',
            age: '4 Years',
            description: 'Lily is a calm and independent British Shorthair who enjoys quiet environments. She loves to lounge and watch birds from the window.',
            location: 'Jos, Nigeria',
            temperament: 'Reserved, Quiet, Loyal',
            health: 'Spayed, vaccinated, well-groomed.',
            adoptionFee: 230,
            imageUrl: '/images/cats/shorthair.jpg',
            funFact: 'Their dense coat feels like plush teddy bear fur.',
            agentId: "agent4"
        },
        {
            id: 'cat5',
            name: 'Milo',
            breed: 'Abyssinian',
            age: '2.2 Years',
            description: 'Milo is an agile and inquisitive Abyssinian who thrives on activity. He loves climbing and playing with puzzle feeders.',
            location: 'Ibadan, Nigeria',
            temperament: 'Energetic, Smart, Curious',
            health: 'Neutered, regular check-ups, very fit.',
            adoptionFee: 220,
            imageUrl: '/images/cats/abyssinian.jpg',
            funFact: 'One of the oldest known cat breeds, thought to resemble cats in ancient Egypt.',

            agentId: 'agent2'
        }
    ],
    birds: [
        {
            id: 'bird1',
            name: 'Sky',
            breed: 'Cockatiel',
            age: '1 Year',
            description: 'Sky is a charming and playful cockatiel who loves to whistle tunes and mimic sounds. He enjoys human interaction and toys.',
            location: 'Lagos, Nigeria',
            temperament: 'Playful, Mimicking, Social',
            health: 'Healthy, regular vet check-ups, excellent plumage.',
            adoptionFee: 100,
            imageUrl: '/images/birds/cockatiel.jpg',
            funFact: 'Can be taught to mimic speech and songs.',
            agentId: 'agent1'
        },
        {
            id: 'bird2',
            name: 'Rio',
            breed: 'Budgerigar (Parakeet)',
            age: '8 Months',
            description: 'Rio is a vibrant and curious budgerigar. He is very active and loves to fly around his cage and interact with his reflection.',
            location: 'Abuja, Nigeria',
            temperament: 'Curious, Active, Social',
            health: 'Healthy, bright feathers, eats well.',
            adoptionFee: 50,
            imageUrl: '/images/birds/budgerigar.jpg',
            funFact: 'One of the most popular pet birds worldwide.',

            agentId: 'agent2'
        },
        {
            id: 'bird3',
            name: 'Kiwi',
            breed: 'Lovebird',
            age: '9 Months',
            description: 'Kiwi is a colorful and affectionate Lovebird who enjoys bonding closely with people. She is cheerful and always chirping.',
            location: 'Uyo, Nigeria',
            temperament: 'Affectionate, Vocal, Energetic',
            health: 'Healthy, with a bright plumage and active lifestyle.',
            adoptionFee: 60,
            imageUrl: '/images/birds/lovebird.jpg',
            funFact: 'Lovebirds often form deep pair bonds with mates or human companions.',
            agentId: 'agent3'
        },
        {
            id: 'bird4',
            name: 'Zeus',
            breed: 'African Grey Parrot',
            age: '4 Years',
            description: 'Zeus is a highly intelligent African Grey Parrot known for mimicking human speech. He enjoys solving puzzles and talking to everyone.',
            location: 'Calabar, Nigeria',
            temperament: 'Smart, Talkative, Social',
            health: 'In excellent health, eats a balanced diet, and has an enriched environment.',
            adoptionFee: 500,
            imageUrl: '/images/birds/parrot.jpg',
            funFact: 'Can learn over 1000 words and understand concepts.',
            agentId: "agent4"
        }
    ],
    rabbits: [
        {
            id: 'rabbit1',
            name: 'Thumper',
            breed: 'Holland Lop',
            age: '6 Months',
            description: 'Thumper is an adorable and gentle Holland Lop rabbit with floppy ears. He loves fresh greens and gentle petting. Litter trained.',
            location: 'Lagos, Nigeria',
            temperament: 'Gentle, Calm, Affectionate',
            health: 'Healthy, active, eats a balanced diet.',
            adoptionFee: 80,
            imageUrl: '/images/rabbits/holland.jpg',
            funFact: 'One of the smallest lop-eared rabbit breeds.',
            agentId: "agent2"
        },
        {
            id: 'rabbit2',
            name: 'Bunny',
            breed: 'Mini Rex',
            age: '1 Year',
            description: 'Bunny is a soft-furred Mini Rex rabbit, known for her velvety coat. She is quite playful and enjoys exploring safe spaces.',
            location: 'Enugu, Nigeria',
            temperament: 'Playful, Curious, Docile',
            health: 'Vaccinated, healthy teeth, very active.',
            adoptionFee: 70,
            imageUrl: '/images/rabbits/rex.jpg',
            funFact: 'Their fur is so soft it feels like velvet.',
            agentId: 'agent3'
        },
        {
            id: 'rabbit3',
            name: 'Oreo',
            breed: 'Dutch Rabbit',
            age: '1.5 Years',
            description: 'Oreo is a beautifully marked Dutch rabbit who loves to explore and munch on fresh veggies. Very calm and gentle.',
            location: 'Asaba, Nigeria',
            temperament: 'Friendly, Alert, Easygoing',
            health: 'Healthy with strong teeth and shiny coat.',
            adoptionFee: 65,
            imageUrl: '/images/rabbits/dutch.webp',
            funFact: 'Dutch Rabbits are one of the oldest domestic breeds, known for their distinctive color pattern.',
            agentId: 'agent1'
        },
        {
            id: 'rabbit4',
            name: 'Peanut',
            breed: 'English Angora',
            age: '2 Years',
            description: 'Peanut is a fluffy English Angora who requires regular grooming. He is gentle and enjoys relaxing in cozy spots.',
            location: 'Ilorin, Nigeria',
            temperament: 'Mellow, Gentle, Quiet',
            health: 'Vaccinated, brushed regularly, no health concerns.',
            adoptionFee: 90,
            imageUrl: '/images/rabbits/angora.jpg',
            funFact: "Angoras produce wool that's softer than cashmere.",
            agentId: 'agent4'
        }
    ]
};

export default petData