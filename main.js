let quizdata = [
    { question :"What is the capital of Japan?",
      options :["Tokyo","Beijing","Seoul","Bangkok"],
      correct : "Tokyo",
    },
    { question :" What does Ichthyology deal with? ",
        options :["Study of reptiles and amphibians ","Study of fish","Study of birds "," Study of insects"],
        correct : "Study of fish",
    },
      {
         question :" Who emerged victorious in ‘The Siege of Arcot’ in 1751 AD? ",
        options :[" French ","Dutch ","Portuguese ","British"],
        correct : "British",
      },
      {
         question :"83. Which part of the Constitution of India deals with the duties of citizens? ",
        options :["Part IVA","Part II "," Part X  ","Part III"],
        correct : "Part IVA",
      },
      { 
        question :"'Thalinomics' was introduced in the Economic Survey for ______. ",
        options :["2017-18","2019-20","2016-17"," 2018-19"],
        correct : "2019-20",
      }, 
      { 
        question :"Cheraw Dance is a traditional dance form of which state?",
        options :["Assam","Mizoram","Sikkim","Arunachal Pradesh"],
        correct : "Mizoram",
      },
      { 
        question :" Which is the smallest bone in the human body?",
        options :["Stapes","Phalanges","Humerus"," Pelvis"],
        correct : "Stapes",
      },
      { 
        question :"In which year was the National Archives of India established? ",
        options :["1840","1830","1891","1835"],
        correct : "1891",
      }, 
      
      { 
        question :" Which of the following is NOT a type of blood cell made by the bone marrow? ",
        options :["Osteoclasts","Red blood cells","Platelet","White blood cells "],
        correct : "Osteoclasts",
      },
      { 
        question :" What is the loss of bone density and strength known as?",
        options :["Osteoporosis","Acromegaly","Fibrous dysplasia","Fracture"],
        correct : "Osteoporosis",
      },   
      { 
        question :" What does Article 32 of the Indian Constitution deal with?",
        options :["Right to Life","Right to Property","Right to Constitutional Remedies","Financial Emergency"],
        correct : "Right to Constitutional Remedies",
      },   
      { 
        question :"Litti Chokha is a famous cuisine of which of the following states?",
        options :["Maharashtra","Bihar","Gujarat","Odisha"],
        correct : "Bihar",
      },
      { 
        question :"Who is the author of the book ‘Shame’?",
        options :["Salman Rushdie","Charles Dickens","Rudyard Kipling","ric ESegal"],
        correct : "Salman Rushdie",
      },   
      { 
        question :"______ is caused when a child’s growing bones fail to develop due to a lack of vitamin D.",
        options :["Night blindness","Rickets","Goitre","Scurvy "],
        correct : "Rickets",
      }, 
      {
        question: "Who was the first President of India?",
        options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sarvepalli Radhakrishnan", "Indira Gandhi"],
        correct: "Dr. Rajendra Prasad"
    },
    {
        question: "Which river is known as the 'Sorrow of Bengal'?",
        options: ["Ganga", "Brahmaputra", "Kosi", "Yamuna"],
        correct: "Kosi"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "Vietnam"],
        correct: "Japan"
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
        correct: "Canberra"
    },
    {
        question: "Who is known as the 'Father of the Nation' in India?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "B.R. Ambedkar"],
        correct: "Mahatma Gandhi"
    },
    {
        question: "Which is the largest continent in the world?",
        options: ["Asia", "Africa", "North America", "Europe"],
        correct: "Asia"
    },
    {
        question: "Which gas is known as 'laughing gas'?",
        options: ["Nitrous oxide", "Carbon dioxide", "Methane", "Oxygen"],
        correct: "Nitrous oxide"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Isaac Newton"],
        correct: "Alexander Fleming"
    },
    {
        question: "In which year did India gain independence?",
        options: ["1942", "1945", "1947", "1950"],
        correct: "1947"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yen", "Won", "Dollar", "Euro"],
        correct: "Yen"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    },
    {
        question: "Who wrote the Indian National Anthem?",
        options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Lata Mangeshkar", "A.R. Rahman"],
        correct: "Rabindranath Tagore"
    },
    {
        question: "Which is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "Nauru", "Malta"],
        correct: "Vatican City"
    },
    {
        question: "Who is known as the 'Iron Man of India'?",
        options: ["Mahatma Gandhi", "Sardar Vallabhbhai Patel", "B.R. Ambedkar", "Jawaharlal Nehru"],
        correct: "Sardar Vallabhbhai Patel"
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Ganga"],
        correct: "Nile"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Pb"],
        correct: "Au"
    },
    {
        question: "Which country is known for the Great Wall?",
        options: ["India", "China", "Japan", "Russia"],
        correct: "China"
    },
    {
        question: "Who was the first woman to fly in space?",
        options: ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Eileen Collins"],
        correct: "Valentina Tereshkova"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correct: "Blue Whale"
    },
    {
        question: "Which is the most spoken language in the world?",
        options: ["English", "Mandarin", "Spanish", "Hindi"],
        correct: "Mandarin"
    },
    {
        question: "Which festival is known as the Festival of Lights?",
        options: ["Holi", "Diwali", "Eid", "Christmas"],
        correct: "Diwali"
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Bangalore"],
        correct: "New Delhi"
    },
    {
        question: "Which instrument is used to measure atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        correct: "Barometer"
    },
    {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: "Pacific Ocean"
    },
    {
        question: "Who is the author of 'Harry Potter' series?",
        options: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin"],
        correct: "J.K. Rowling"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
        correct: "Mitochondria"
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Saturn"
    },
    {
        question: "Which Indian state is famous for its tea gardens?",
        options: ["Assam", "Punjab", "Kerala", "Uttar Pradesh"],
        correct: "Assam"
    },
    {
        question: "What is the official language of the United Nations?",
        options: ["English", "French", "Spanish", "All of the above"],
        correct: "All of the above"
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi"],
        correct: "Jawaharlal Nehru"
    },
    {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correct: "Carbon dioxide"
    },
    {
        question: "What is the main component of the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
        correct: "Nitrogen"
    },
    {
        question: "Which is the highest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        correct: "Mount Everest"
    },
    {
        question: "Which Indian city is known as the Silicon Valley of India?",
        options: ["Bangalore", "Hyderabad", "Pune", "Chennai"],
        correct: "Bangalore"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
        correct: "Hydrogen"
    },
    {
        question: "Who wrote 'A Farewell to Arms'?",
        options: ["Ernest Hemingway", "Mark Twain", "F. Scott Fitzgerald", "William Faulkner"],
        correct: "Ernest Hemingway"
    },
    
    {
        question: "Which is the largest desert in the world?",
        options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
        correct: "Sahara"
    },
    {
        question: "What is the main language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "English", "French"],
        correct: "Portuguese"
    },
    {
        question: "Which instrument measures earthquakes?",
        options: ["Barometer", "Seismometer", "Thermometer", "Anemometer"],
        correct: "Seismometer"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correct: "Ottawa"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: "Leonardo da Vinci"
    },

  {
      question: "Which is the largest country in the world by area?",
      options: ["Canada", "China", "Russia", "USA"],
      correct: "Russia"
  },
  {
      question: "In which year did World War II begin?",
      options: ["1935", "1939", "1941", "1945"],
      correct: "1939"
  },
  {
      question: "What is the capital of Nepal?",
      options: ["Kathmandu", "Thimphu", "Dhaka", "Delhi"],
      correct: "Kathmandu"
  },
  {
      question: "Who is known as the 'Nightingale of India'?",
      options: ["Sarojini Naidu", "Indira Gandhi", "Lata Mangeshkar", "Sita Devi"],
      correct: "Sarojini Naidu"
  },
  {
      question: "Which gas is used in the refrigerator?",
      options: ["Chlorofluorocarbon", "Nitrogen", "Oxygen", "Hydrogen"],
      correct: "Chlorofluorocarbon"
  },
  {
      question: "Who invented the telephone?",
      options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
      correct: "Alexander Graham Bell"
  },
  {
      question: "Which is the largest gland in the human body?",
      options: ["Pancreas", "Thyroid", "Liver", "Spleen"],
      correct: "Liver"
  },
  {
      question: "What is the currency of the United Kingdom?",
      options: ["Dollar", "Pound", "Euro", "Yen"],
      correct: "Pound"
  },
  {
      question: "Which planet is closest to the Sun?",
      options: ["Earth", "Venus", "Mercury", "Mars"],
      correct: "Mercury"
  },
  {
      question: "Who is the author of the book 'The God of Small Things'?",
      options: ["Arundhati Roy", "Kiran Desai", "Salman Rushdie", "Vikram Seth"],
      correct: "Arundhati Roy"
  },
  {
      question: "Which Indian state is known for the dance form Kathakali?",
      options: ["Karnataka", "Kerala", "Tamil Nadu", "Maharashtra"],
      correct: "Kerala"
  },
  {
      question: "What is the main ingredient of 'sushi'?",
      options: ["Fish", "Rice", "Noodles", "Vegetables"],
      correct: "Rice"
  },
  {
      question: "Which planet is known as the 'Blue Planet'?",
      options: ["Earth", "Neptune", "Uranus", "Saturn"],
      correct: "Earth"
  },
  {
      question: "What is the chemical formula for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      correct: "H2O"
  },
  {
      question: "Who was the first woman to win a Nobel Prize?",
      options: ["Marie Curie", "Rosalind Franklin", "Jane Addams", "Barbara McClintock"],
      correct: "Marie Curie"
  },
  {
      question: "Which is the smallest bone in the human body?",
      options: ["Femur", "Stapes", "Humerus", "Tibia"],
      correct: "Stapes"
  },
  {
      question: "What is the capital city of Egypt?",
      options: ["Cairo", "Alexandria", "Giza", "Luxor"],
      correct: "Cairo"
  },
  {
      question: "Which Indian festival marks the beginning of the new year in some states?",
      options: ["Holi", "Diwali", "Pongal", "Makar Sankranti"],
      correct: "Pongal"
  },
  {
      question: "What is the powerhouse of the plant cell?",
      options: ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"],
      correct: "Chloroplast"
  },
  {
      question: "Who is known as the 'Father of Modern Physics'?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      correct: "Albert Einstein"
  },
  {
      question: "Which instrument is used to measure temperature?",
      options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
      correct: "Thermometer"
  },
  {
      question: "What is the capital of South Korea?",
      options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
      correct: "Seoul"
  },
  {
      question: "Who was the first Indian woman to climb Mount Everest?",
      options: ["Bachendri Pal", "Premlata Agarwal", "Samina Baig", "Junko Tabei"],
      correct: "Bachendri Pal"
  },
  {
      question: "Which is the largest animal on land?",
      options: ["Asian Elephant", "African Elephant", "Giraffe", "Hippopotamus"],
      correct: "African Elephant"
  },
  {
      question: "What is the main ingredient of hummus?",
      options: ["Chickpeas", "Lentils", "Beans", "Peas"],
      correct: "Chickpeas"
  },
  {
      question: "Who painted the ceiling of the Sistine Chapel?",
      options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Botticelli"],
      correct: "Michelangelo"
  },
  {
      question: "Which organ in the human body is primarily responsible for detoxification?",
      options: ["Kidney", "Liver", "Lungs", "Heart"],
      correct: "Liver"
  },
  {
      question: "Who discovered the law of gravity?",
      options: ["Galileo", "Newton", "Einstein", "Kepler"],
      correct: "Newton"
  },
  {
      question: "What is the capital of the United States?",
      options: ["New York", "Los Angeles", "Washington, D.C.", "Chicago"],
      correct: "Washington, D.C."
  },
  {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correct: "Nitrogen"
  },
  {
      question: "Who is the current Secretary-General of the United Nations?",
      options: ["Antonio Guterres", "Ban Ki-moon", "Kofi Annan", "Boutros Boutros-Ghali"],
      correct: "Antonio Guterres"
  },
  {
      question: "What is the highest civilian award in India?",
      options: ["Bharat Ratna", "Padma Bhushan", "Padma Vibhushan", "Jawaharlal Nehru Award"],
      correct: "Bharat Ratna"
  },
  {
      question: "Which city is known as the 'Big Apple'?",
      options: ["Los Angeles", "New York", "Chicago", "Miami"],
      correct: "New York"
  },
  {
      question: "What is the primary function of white blood cells?",
      options: ["Transport oxygen", "Fight infections", "Clot blood", "Carry nutrients"],
      correct: "Fight infections"
  },
  {
      question: "Which is the capital city of Spain?",
      options: ["Barcelona", "Madrid", "Seville", "Valencia"],
      correct: "Madrid"
  },
  {
      question: "What is the main language spoken in Argentina?",
      options: ["Spanish", "Portuguese", "English", "French"],
      correct: "Spanish"
  },
  {
      question: "Which planet has the most moons?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: "Jupiter"
  },
  {
      question: "What is the chemical symbol for iron?",
      options: ["Fe", "Ir", "I", "In"],
      correct: "Fe"
  },
  {
      question: "Who was the first person to walk on the Moon?",
      options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Michael Collins"],
      correct: "Neil Armstrong"
  },
  {
      question: "What is the capital of Bangladesh?",
      options: ["Dhaka", "Kathmandu", "Islamabad", "Colombo"],
      correct: "Dhaka"
  },
  {
      question: "Which is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: "Jupiter"
  },
  {
      question: "What is the primary component of the sun?",
      options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
      correct: "Hydrogen"
  },
  {
      question: "Which Indian state is known as 'The Land of Five Rivers'?",
      options: ["Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh"],
      correct: "Punjab"
  },
  {
      question: "What is the capital of Italy?",
      options: ["Rome", "Venice", "Florence", "Milan"],
      correct: "Rome"
  },
]
    let aptitudeQuizData =[
        
    
        {
            question: "If a car travels 60 km in 1 hour, how far will it travel in 3 hours?",
            options: ["120 km", "180 km", "150 km", "240 km"],
            correct: "180 km"
        },
        {
            question: "What is 15% of 200?",
            options: ["20", "25", "30", "35"],
            correct: "30"
        },
        {
            question: "A train leaves a station at 2 PM and travels at a speed of 80 km/h. What time will it arrive at a station 200 km away?",
            options: ["4 PM", "5 PM", "6 PM", "7 PM"],
            correct: "5 PM"
        },
        {
            question: "If a book costs $10 and you buy 3 books, how much will you pay?",
            options: ["$20", "$25", "$30", "$35"],
            correct: "$30"
        },
        {
            question: "What is the sum of the angles in a triangle?",
            options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
            correct: "180 degrees"
        },
        {
            question: "If a recipe requires 3 cups of flour to make 12 cookies, how much flour is needed for 36 cookies?",
            options: ["6 cups", "7 cups", "8 cups", "9 cups"],
            correct: "9 cups"
        },
        {
            question: "What is the area of a rectangle with length 5 cm and width 3 cm?",
            options: ["8 cm²", "10 cm²", "15 cm²", "18 cm²"],
            correct: "15 cm²"
        },
        {
            question: "A person buys a shirt for $40 and sells it for $50. What is the profit percentage?",
            options: ["20%", "25%", "30%", "50%"],
            correct: "25%"
        },
        {
            question: "If a train travels 120 km in 2 hours, what is its average speed?",
            options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
            correct: "60 km/h"
        },
        {
            question: "What is the value of 7 squared?",
            options: ["14", "21", "49", "56"],
            correct: "49"
        },
        {
            question: "If a bicycle travels 15 km in 1 hour, how far will it travel in 4 hours?",
            options: ["30 km", "45 km", "60 km", "75 km"],
            correct: "60 km"
        },
        {
            question: "What is the least common multiple (LCM) of 4 and 5?",
            options: ["10", "20", "15", "30"],
            correct: "20"
        },
        {
            question: "A person has $200 and spends $50 each week. How many weeks will it last?",
            options: ["2 weeks", "3 weeks", "4 weeks", "5 weeks"],
            correct: "4 weeks"
        },
        {
            question: "What is the next number in the sequence: 2, 4, 8, 16, ____?",
            options: ["20", "24", "32", "36"],
            correct: "32"
        },
        {
            question: "If a box contains 12 chocolates and you eat 3, how many chocolates are left?",
            options: ["7", "8", "9", "10"],
            correct: "9"
        },
        {
            question: "What is 10% of 250?",
            options: ["15", "20", "25", "30"],
            correct: "25"
        },
        {
            question: "If a piece of rope is 40 meters long and you cut it into 4 equal pieces, how long is each piece?",
            options: ["5 m", "10 m", "15 m", "20 m"],
            correct: "10 m"
        },
        {
            question: "What is the perimeter of a rectangle with length 6 cm and width 4 cm?",
            options: ["20 cm", "24 cm", "30 cm", "32 cm"],
            correct: "20 cm"
        },
        {
            question: "If a train leaves the station at 3 PM and arrives at 5 PM, how long is the journey?",
            options: ["1 hour", "2 hours", "3 hours", "4 hours"],
            correct: "2 hours"
        },
        {
            question: "What is the probability of flipping a coin and getting heads?",
            options: ["0", "0.25", "0.5", "1"],
            correct: "0.5"
        },
        {
            question: "If 5 workers can complete a task in 10 days, how long will it take 10 workers to complete the same task?",
            options: ["5 days", "10 days", "15 days", "20 days"],
            correct: "5 days"
        },
        {
            question: "What is the volume of a cube with a side length of 3 cm?",
            options: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
            correct: "27 cm³"
        },
        {
            question: "If a car costs $20,000 and depreciates by 15% each year, what is its value after one year?",
            options: ["$15,000", "$16,000", "$17,000", "$18,000"],
            correct: "$17,000"
        },
        {
            question: "What is the value of 3! (3 factorial)?",
            options: ["3", "6", "9", "12"],
            correct: "6"
        },
        {
            question: "If a jacket costs $60 after a 25% discount, what was the original price?",
            options: ["$70", "$75", "$80", "$90"],
            correct: "$80"
        },
        {
            question: "What is the value of x in the equation 3x + 4 = 10?",
            options: ["1", "2", "3", "4"],
            correct: "2"
        },
        {
            question: "If the price of a book is $15 and you buy 4 books, how much do you spend?",
            options: ["$45", "$50", "$60", "$75"],
            correct: "$60"
        },
        {
            question: "What is the next number in the series: 1, 3, 6, 10, ____?",
            options: ["12", "13", "15", "16"],
            correct: "15"
        },
        {
            question: "A car travels 120 km in 1.5 hours. What is its average speed?",
            options: ["70 km/h", "80 km/h", "90 km/h", "100 km/h"],
            correct: "80 km/h"
        },
        {
            question: "What is the total cost of 5 notebooks at $2 each?",
            options: ["$5", "$10", "$15", "$20"],
            correct: "$10"
        },
        {
            question: "If a rectangle has a length of 10 cm and a width of 5 cm, what is its area?",
            options: ["25 cm²", "50 cm²", "75 cm²", "100 cm²"],
            correct: "50 cm²"
        },
        {
            question: "If a class has 30 students and 18 are boys, how many are girls?",
            options: ["12", "14", "16", "18"],
            correct: "12"
        },
        {
            question: "A box contains 20 red balls and 30 blue balls. What is the probability of picking a red ball?",
            options: ["1/2", "2/3", "1/3", "3/5"],
            correct: "2/5"
        },
        {
            question: "What is the next number in the series: 5, 10, 20, 40, ____?",
            options: ["50", "60", "70", "80"],
            correct: "80"
        },
        {
            question: "If the ratio of boys to girls in a class is 2:3 and there are 20 boys, how many girls are there?",
            options: ["25", "30", "35", "40"],
            correct: "30"
        },
        {
            question: "If a train travels at a speed of 90 km/h, how far can it travel in 2.5 hours?",
            options: ["200 km", "225 km", "250 km", "275 km"],
            correct: "225 km"
        },
        {
            question: "A pencil costs $0.50. How many pencils can you buy for $10?",
            options: ["15", "20", "25", "30"],
            correct: "20"
        },
        {
            question: "What is the area of a circle with a radius of 7 cm? (Use π ≈ 3.14)",
            options: ["50.24 cm²", "153.86 cm²", "154 cm²", "147 cm²"],
            correct: "153.86 cm²"
        },
      
        {
            question: "What will be 20% of 150?",
            options: ["30", "25", "35", "40"],
            correct: "30"
        },
        {
            question: "If a person walks 12 km in 3 hours, what is their speed in km/h?",
            options: ["3 km/h", "4 km/h", "5 km/h", "6 km/h"],
            correct: "4 km/h"
        },
        {
            question: "The average of five numbers is 20. If one number is removed, the average becomes 18. What was the number removed?",
            options: ["30", "25", "20", "35"],
            correct: "30"
        },
        {
            question: "A car travels at 60 km/h for 2 hours and then at 80 km/h for the next 3 hours. What is the total distance traveled?",
            options: ["280 km", "300 km", "320 km", "350 km"],
            correct: "320 km"
        },
        {
            question: "The ratio of two numbers is 3:4 and their sum is 70. Find the numbers.",
            options: ["30 and 40", "40 and 50", "20 and 50", "35 and 45"],
            correct: "30 and 40"
        },
        {
            question: "If 5x = 25, then what is the value of x?",
            options: ["2", "3", "4", "5"],
            correct: "5"
        },
        {
            question: "Find the simple interest on $800 at a 5% rate per annum for 3 years.",
            options: ["$120", "$100", "$130", "$110"],
            correct: "$120"
        },
        {
            question: "A train covers 180 km in 3 hours. What is the speed of the train?",
            options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
            correct: "60 km/h"
        },
        {
            question: "If the cost price of an item is $50 and the selling price is $60, what is the profit percentage?",
            options: ["20%", "25%", "15%", "30%"],
            correct: "20%"
        },
        {
            question: "A number is divided by 5 and gives a remainder of 2. What is the number if it lies between 30 and 40?",
            options: ["32", "33", "34", "37"],
            correct: "32"
        },
        {
            question: "If a sum becomes four times itself in 6 years under compound interest, in how many years will it become eight times?",
            options: ["8 years", "12 years", "10 years", "15 years"],
            correct: "12 years"
        },
        {
            question: "A man spends 30% of his income on rent and 20% on food. If he saves $500, which is 50% of his income, find his income.",
            options: ["$1000", "$1200", "$1500", "$2000"],
            correct: "$1000"
        },
        {
            question: "Find the LCM of 15 and 20.",
            options: ["30", "45", "60", "75"],
            correct: "60"
        },
        {
            question: "What is the area of a triangle with base 10 cm and height 6 cm?",
            options: ["30 cm²", "40 cm²", "50 cm²", "60 cm²"],
            correct: "30 cm²"
        },
        {
            question: "A boat can go 8 km downstream in 40 minutes. The speed of the boat in still water is 12 km/h. What is the speed of the stream?",
            options: ["2 km/h", "3 km/h", "4 km/h", "5 km/h"],
            correct: "2 km/h"
        },
        {
            question: "The sum of two numbers is 15, and their product is 56. Find the numbers.",
            options: ["7 and 8", "6 and 9", "5 and 10", "4 and 11"],
            correct: "7 and 8"
        },
        {
            question: "If A’s salary is 20% more than B’s and B’s salary is $200, what is A’s salary?",
            options: ["$220", "$240", "$250", "$260"],
            correct: "$240"
        },
        {
            question: "A man covers a distance of 50 km at 5 km/h. How long does it take?",
            options: ["10 hours", "12 hours", "8 hours", "15 hours"],
            correct: "10 hours"
        },
        {
            question: "A shopkeeper marks an item at $500 and offers a discount of 10%. Find the selling price.",
            options: ["$450", "$400", "$350", "$420"],
            correct: "$450"
        },
        {
            question: "If 3x - 5 = 16, then what is the value of x?",
            options: ["7", "8", "6", "9"],
            correct: "7"
        },
        {
            question: "A fruit seller buys oranges at $20 per dozen and sells at $25 per dozen. What is his profit percentage?",
            options: ["10%", "15%", "20%", "25%"],
            correct: "25%"
        },
        {
            question: "What is the HCF of 36 and 60?",
            options: ["4", "6", "8", "12"],
            correct: "12"
        },
        {
            question: "If 75% of a number is 150, find the number.",
            options: ["100", "150", "200", "250"],
            correct: "200"
        },
        {
            question: "A man travels 20 km in 2 hours and 15 minutes. What is his speed in km/h?",
            options: ["8.5", "9", "8", "9.5"],
            correct: "8.5"
        },
        {
            question: "The average of first five prime numbers is:",
            options: ["5.6", "6.4", "7.8", "4.4"],
            correct: "5.6"
        },
        {
            question: "A pipe fills a tank in 6 hours, and another empties it in 8 hours. How long to fill the tank if both work together?",
            options: ["20 hours", "12 hours", "24 hours", "10 hours"],
            correct: "24 hours"
        },
        {
            question: "If a car travels 45 km in 1 hour and 15 minutes, what is its speed in km/h?",
            options: ["36 km/h", "48 km/h", "42 km/h", "60 km/h"],
            correct: "36 km/h"
        },
        {
            question: "A and B can do a work in 8 days and 12 days, respectively. Working together, how many days will they take?",
            options: ["4.8 days", "5 days", "4.5 days", "5.4 days"],
            correct: "4.8 days"
        },
        {
            question: "If a shirt is sold for $450 at a loss of 10%, what was its cost price?",
            options: ["$480", "$500", "$520", "$490"],
            correct: "$500"
        },
        {
            question: "Two angles of a triangle are 50° and 60°. What is the third angle?",
            options: ["80°", "70°", "60°", "90°"],
            correct: "70°"
        },
        {
            question: "If a number is increased by 20%, it becomes 144. What was the number?",
            options: ["120", "140", "110", "115"],
            correct: "120"
        },
        {
            question: "A person sold a watch at a 10% profit for $220. What was the cost price?",
            options: ["$200", "$210", "$190", "$180"],
            correct: "$200"
        },
        {
            question: "In what time will $3000 amount to $3450 at 5% p.a. simple interest?",
            options: ["2 years", "3 years", "4 years", "5 years"],
            correct: "3 years"
        },
        {
            question: "If the perimeter of a square is 20 cm, what is its area?",
            options: ["20 cm²", "25 cm²", "16 cm²", "24 cm²"],
            correct: "25 cm²"
        },
        {
            question: "How many numbers between 1 and 100 are divisible by both 3 and 5?",
            options: ["7", "8", "9", "10"],
            correct: "6"
        },
        {
            question: "The sum of two consecutive numbers is 55. What are the numbers?",
            options: ["27 and 28", "26 and 27", "28 and 29", "25 and 26"],
            correct: "27 and 28"
    }
      
    
]
let reasoningQuizData = [
    
        {
            question: "Which of the following numbers is the largest?",
            options: ["12", "23", "34", "45"],
            correct: "45"
        },
        {
            question: "If A is taller than B, and B is taller than C, who is the shortest?",
            options: ["A", "B", "C", "Cannot be determined"],
            correct: "C"
        },
        {
            question: "What is the missing number in the sequence: 2, 4, 8, __, 32?",
            options: ["16", "20", "24", "28"],
            correct: "16"
        },
        {
            question: "In a certain code language, if 'CAT' is written as '3120', how will 'DOG' be written?",
            options: ["4157", "4715", "4175", "4156"],
            correct: "4157"
        },
        {
            question: "Which word does not belong to the group?",
            options: ["Apple", "Banana", "Carrot", "Mango"],
            correct: "Carrot"
        },
        {
            question: "If all roses are flowers and some flowers fade quickly, which of the following is true?",
            options: ["Some roses fade quickly", "No roses fade quickly", "All flowers are roses", "Some flowers are not roses"],
            correct: "Some flowers are not roses"
        },
        {
            question: "If 6 cats can catch 6 mice in 6 minutes, how many cats are needed to catch 100 mice in 50 minutes?",
            options: ["30", "20", "15", "10"],
            correct: "20"
        },
        {
            question: "What is the odd one out?",
            options: ["Triangle", "Square", "Circle", "Cube"],
            correct: "Cube"
        },
        {
            question: "If the day after tomorrow is Wednesday, what day is today?",
            options: ["Monday", "Tuesday", "Thursday", "Friday"],
            correct: "Monday"
        },
        {
            question: "Which of the following is not a primary color?",
            options: ["Red", "Blue", "Green", "Yellow"],
            correct: "Yellow"
        },
        {
            question: "If A is coded as 1, B as 2, and C as 3, what is the code for CAB?",
            options: ["6", "5", "7", "4"],
            correct: "6"
        },
        {
            question: "Which letter is in the middle of the alphabet?",
            options: ["M", "N", "O", "P"],
            correct: "M"
        },
        {
            question: "If 'P' is the 16th letter of the alphabet, what is the 19th letter?",
            options: ["S", "R", "T", "U"],
            correct: "S"
        },
        {
            question: "What is the next number in the series: 1, 1, 2, 3, 5, ____?",
            options: ["6", "7", "8", "9"],
            correct: "8"
        },
        {
            question: "If you rearrange the letters 'CIFAIPC', you would have the name of a(n):",
            options: ["City", "Animal", "Ocean", "Country"],
            correct: "Ocean"
        },
        {
            question: "Which number does not belong to this series: 2, 3, 5, 7, 11, 14?",
            options: ["2", "3", "5", "14"],
            correct: "14"
        },
        {
            question: "What will come next in the series: A, C, E, G, ____?",
            options: ["I", "H", "K", "J"],
            correct: "I"
        },
        {
            question: "In a family of six members A, B, C, D, E, and F, there are two married couples. B is a doctor and is married to D. A is the sister of C, who is the brother of E. F is the child of A. How is C related to F?",
            options: ["Father", "Mother", "Uncle", "Aunt"],
            correct: "Uncle"
        },
        {
            question: "If all bloops are razzies and all razzies are lorp, which of the following statements is true?",
            options: ["All bloops are lorp", "No bloops are lorp", "Some lorp are bloops", "Some razzies are bloops"],
            correct: "All bloops are lorp"
        },
        {
            question: "What is the relation between 25 and 5?",
            options: ["Addition", "Subtraction", "Multiplication", "Division"],
            correct: "Multiplication"
        },
        {
            question: "Which number will replace the question mark? 4, 9, 16, 25, ?",
            options: ["36", "49", "64", "81"],
            correct: "36"
        },
        {
            question: "If 7 = 29, 8 = 36, then 9 = ?",
            options: ["45", "54", "63", "72"],
            correct: "45"
        },
        {
            question: "In a certain code, 'LATE' is written as 'MAVF'. How is 'GOOD' written in that code?",
            options: ["HPPE", "HPPC", "HPQC", "HPPD"],
            correct: "HPPE"
        },
        {
            question: "What is the missing term in the sequence: 5, 10, 20, 40, ____?",
            options: ["50", "60", "70", "80"],
            correct: "80"
        },
        {
            question: "If the first day of the year 2022 is Saturday, what day will be the last day of the year 2022?",
            options: ["Saturday", "Sunday", "Monday", "Tuesday"],
            correct: "Saturday"
        },
        {
            question: "Which is the odd one out?",
            options: ["Circle", "Square", "Rectangle", "Triangle"],
            correct: "Circle"
        },
        {
            question: "In a certain code language, 'BOOK' is written as 'CQQM'. How is 'PEN' written?",
            options: ["QFO", "RGO", "RFP", "QEQ"],
            correct: "QFO"
        },
        {
            question: "What is the next letter in the series: A, D, G, J, ____?",
            options: ["M", "K", "L", "N"],
            correct: "M"
        },
        {
            question: "If 3 is to 9, then 5 is to:",
            options: ["10", "15", "20", "25"],
            correct: "15"
        },
        {
            question: "What is the relationship between the words 'OCEAN' and 'WATER'?",
            options: ["Synonyms", "Antonyms", "Part to Whole", "Whole to Part"],
            correct: "Whole to Part"
        },
        {
            question: "If A = 1, B = 2, C = 3, then what is the value of 'CAB'?",
            options: ["6", "7", "8", "9"],
            correct: "6"
        },
        {
            question: "Which of the following shapes does not belong to the group?",
            options: ["Triangle", "Square", "Circle", "Oval"],
            correct: "Circle"
        },
        {
            question: "If all teachers are students and all students are learners, which of the following is true?",
            options: ["All teachers are learners", "No teacher is a learner", "Some students are teachers", "Some learners are not students"],
            correct: "All teachers are learners"
        },
        {
            question: "What is the next number in the series: 1, 4, 9, 16, ____?",
            options: ["20", "25", "30", "36"],
            correct: "25"
        },
        {
            question: "If 9 is to 81, then 10 is to:",
            options: ["90", "100", "110", "120"],
            correct: "100"
        },
        {
            question: "Which of the following is a synonym for 'HAPPY'?",
            options: ["Sad", "Joyful", "Angry", "Upset"],
            correct: "Joyful"
        },
        {
            question: "If A is the sister of B, and B is the brother of C, how is A related to C?",
            options: ["Sister", "Brother", "Cousin", "None of the above"],
            correct: "Sister"
        },
        {
            question: "Which number is different from the rest?",
            options: ["2", "3", "4", "5"],
            correct: "4"
        },
     {
      question: "If A is the brother of B, and B is the sister of C, how is C related to A?",
        options: ["Brother", "Sister", "Uncle", "Cousin"],
        correct: "Brother"
    },
    {
        question: "Find the missing term in the series: 2, 6, 12, 20, ___, 42.",
        options: ["30", "32", "36", "40"],
        correct: "30"
    },
    {
        question: "Choose the odd one out: 2, 5, 10, 17, 26.",
        options: ["2", "5", "10", "17"],
        correct: "2"
    },
    {
        question: "If DOG is coded as 4157 and CAT as 312, then how is BAT coded?",
        options: ["213", "2134", "2135", "2145"],
        correct: "213"
    },
    {
        question: "Select the one that does not belong: ACE, BDF, GHI, JKL.",
        options: ["ACE", "BDF", "GHI", "JKL"],
        correct: "GHI"
    },
    {
        question: "A clock shows 9:30. If it gains 1 minute every hour, what is the actual time after 12 hours?",
        options: ["9:30", "10:00", "9:18", "10:06"],
        correct: "9:18"
    },
    {
        question: "Arrange the words in alphabetical order: Rat, Rabbit, Rose, Ring.",
        options: ["Rabbit, Rat, Ring, Rose", "Rabbit, Ring, Rat, Rose", "Rabbit, Rose, Rat, Ring", "Rat, Rabbit, Ring, Rose"],
        correct: "Rabbit, Rat, Ring, Rose"
    },
    {
        question: "If TABLE is written as ELBAT, how is CHAIR written?",
        options: ["RIAHC", "HCAIR", "CHARI", "HRAIC"],
        correct: "RIAHC"
    },
    {
        question: "Which of the following will replace the question mark (?) in the series: 1, 4, 9, 16, 25, ?",
        options: ["30", "35", "36", "40"],
        correct: "36"
    },
    {
        question: "Which number is next in the sequence: 4, 9, 16, 25, 36, ?",
        options: ["42", "47", "49", "54"],
        correct: "49"
    },
    {
        question: "In a certain code language, 'APPLE' is coded as 'ELPPA'. What is 'ORANGE' coded as?",
        options: ["EGNARO", "ORANGE", "EANGOR", "ROAGNE"],
        correct: "EGNARO"
    },
    {
        question: "If the day before yesterday was Tuesday, what will be the day after tomorrow?",
        options: ["Saturday", "Friday", "Thursday", "Sunday"],
        correct: "Saturday"
    },
    {
        question: "Choose the odd one out: Mango, Banana, Carrot, Apple.",
        options: ["Mango", "Banana", "Carrot", "Apple"],
        correct: "Carrot"
    },
    {
        question: "Complete the series: 5, 11, 17, 23, ___, 35.",
        options: ["27", "29", "31", "33"],
        correct: "29"
    },
    {
        question: "If 'PAPER' is coded as 'OZODQ', what is the code for 'PENCIL'?",
        options: ["ODMBHK", "ODMEHL", "ODMBGL", "ODNBHL"],
        correct: "ODMEHL"
    },
    {
        question: "Pointing to a photograph, a man said, 'She is the daughter of my grandfather's only son.' How is the girl related to the man?",
        options: ["Sister", "Cousin", "Daughter", "Mother"],
        correct: "Sister"
    },
    {
        question: "If BIND is coded as 4932, what is the code for FIND?",
        options: ["5932", "4923", "5432", "5933"],
        correct: "5932"
    },
    {
        question: "Which of the following is different from the others? 2, 9, 16, 23, 29.",
        options: ["2", "9", "16", "29"],
        correct: "2"
    },
    {
        question: "Select the missing number in the sequence: 3, 8, 15, 24, ___, 48.",
        options: ["29", "33", "35", "41"],
        correct: "35"
    },
    {
        question: "If CAT is coded as XZG, then how is DOG coded?",
        options: ["WLT", "WTL", "TLW", "LWT"],
        correct: "WLT"
    }
]

      

let englishQuizData = [
    {
        question: "Choose the correct synonym for 'HAPPY'.",
        options: ["Joyful", "Sad", "Angry", "Displeased"],
        correct: "Joyful"
    },
    {
        question: "What is the antonym of 'DANGER'?",
        options: ["Safety", "Risk", "Threat", "Harm"],
        correct: "Safety"
    },
    {
        question: "Choose the correct word: She is the ___ of the two sisters.",
        options: ["elder", "older", "more elder", "more older"],
        correct: "elder"
    },
    {
        question: "What is the meaning of the phrase 'to break the ice'?",
        options: ["To break something", "To start a conversation", "To cause trouble", "To end a relationship"],
        correct: "To start a conversation"
    },
    {
        question: "Select the correctly spelled word.",
        options: ["Recieve", "Receive", "Recive", "Receeve"],
        correct: "Receive"
    },
    {
        question: "Choose the correct preposition: She is interested ___ learning new languages.",
        options: ["in", "on", "at", "for"],
        correct: "in"
    },
    {
        question: "Identify the error in the sentence: She don't like coffee.",
        options: ["She", "don't", "like", "coffee"],
        correct: "don't"
    },
    {
        question: "Choose the correct option: He runs ___ fast that he always wins the race.",
        options: ["so", "such", "very", "too"],
        correct: "so"
    },
    {
        question: "What is the passive voice of the sentence: 'The chef cooked a delicious meal'?",
        options: ["A delicious meal was cooked by the chef", "The chef was cooked a delicious meal", "A delicious meal was cooking by the chef", "The meal was deliciously cooked"],
        correct: "A delicious meal was cooked by the chef"
    },
    {
        question: "Choose the correct option: If I ___ you, I would apologize.",
        options: ["am", "were", "was", "be"],
        correct: "were"
    },
    {
        question: "What does the word 'METICULOUS' mean?",
        options: ["Careless", "Careful", "Reckless", "Casual"],
        correct: "Careful"
    },
    {
        question: "Choose the correct conjunction: I wanted to go for a walk, ___ it started raining.",
        options: ["but", "and", "or", "so"],
        correct: "but"
    },
    {
        question: "Identify the meaning of the idiom: 'Cost an arm and a leg'.",
        options: ["Very cheap", "Very expensive", "Of great value", "Affordable"],
        correct: "Very expensive"
    },
    {
        question: "Choose the correct tense: She ___ to the market yesterday.",
        options: ["goes", "going", "went", "gone"],
        correct: "went"
    },
    {
        question: "Select the correct option: Neither of the answers ___ correct.",
        options: ["are", "is", "be", "were"],
        correct: "is"
    },
    {
        question: "What is the meaning of the word 'ABATE'?",
        options: ["To increase", "To decrease", "To continue", "To stop"],
        correct: "To decrease"
    },
    {
        question: "Identify the error: He has went to the store.",
        options: ["He", "has", "went", "to"],
        correct: "went"
    },
    {
        question: "Choose the correct sentence.",
        options: ["She enjoys to read books.", "She enjoys reading books.", "She enjoy to read books.", "She enjoy reading books."],
        correct: "She enjoys reading books."
    },
    {
        question: "What is the opposite of 'NOISY'?",
        options: ["Quiet", "Loud", "Silent", "Calm"],
        correct: "Quiet"
    },
    {
        question: "Choose the correct option: He is taller ___ his brother.",
        options: ["than", "then", "from", "to"],
        correct: "than"
    },
    {
        question: "What is the meaning of 'to kill two birds with one stone'?",
        options: ["To fail at two things", "To achieve two goals with one action", "To cause trouble", "To waste time"],
        correct: "To achieve two goals with one action"
    },
    {
        question: "Select the correctly punctuated sentence.",
        options: ["Lets eat Grandma.", "Let's eat, Grandma.", "Lets eat, Grandma.", "Lets' eat Grandma."],
        correct: "Let's eat, Grandma."
    },
    {
        question: "Choose the correct form of the verb: She ___ a beautiful song.",
        options: ["sing", "sang", "sings", "sung"],
        correct: "sings"
    },
    {
        question: "What is the synonym of 'EASY'?",
        options: ["Difficult", "Simple", "Complicated", "Hard"],
        correct: "Simple"
    },
    {
        question: "Choose the correct option: He had not seen her since he ___ school.",
        options: ["leaves", "left", "has left", "was leaving"],
        correct: "left"
    },
    {
        question: "What is the meaning of 'BITE THE BULLET'?",
        options: ["To avoid a difficult situation", "To face a difficult situation", "To give up", "To try something new"],
        correct: "To face a difficult situation"
    },
    {
        question: "Select the correct word: She speaks English very ___.",
        options: ["good", "well", "better", "best"],
        correct: "well"
    },
    {
        question: "Identify the error: Everyone have a book.",
        options: ["Everyone", "have", "a", "book"],
        correct: "have"
    },
    {
        question: "What does 'a piece of cake' mean?",
        options: ["Difficult task", "Simple task", "Delicious food", "A slice of cake"],
        correct: "Simple task"
    },
    {
        question: "Choose the correct form of the word: The teacher was very ___.",
        options: ["know", "knew", "knowledge", "knowledgeable"],
        correct: "knowledgeable"
    },
    {
        question: "Select the correct sentence.",
        options: ["She is more smarter than her brother.", "She is smarter than her brother.", "She is the most smartest.", "She is the smart."],
        correct: "She is smarter than her brother."
    },
    {
        question: "What is the antonym of 'BRAVE'?",
        options: ["Cowardly", "Fearless", "Courageous", "Daring"],
        correct: "Cowardly"
    },
    {
        question: "Choose the correct preposition: The cat jumped ___ the table.",
        options: ["on", "in", "under", "over"],
        correct: "on"
    },
    {
        question: "What is the meaning of 'to turn a blind eye'?",
        options: ["To ignore something", "To see clearly", "To be unaware", "To be cautious"],
        correct: "To ignore something"
    },
    {
        question: "Select the correct option: He has been working here ___ five years.",
        options: ["since", "for", "from", "during"],
        correct: "for"
    },
    {
        question: "Identify the error in the sentence: She did not went to the party.",
        options: ["She", "did", "not", "went"],
        correct: "went"
    },
    {
        question: "Choose the correct word: I can't wait to see you ___.",
        options: ["soon", "later", "never", "always"],
        correct: "soon"
    },
    {
        question: "What is the synonym of 'STRANGE'?",
        options: ["Odd", "Familiar", "Normal", "Common"],
        correct: "Odd"
    },
    {
        question: "Choose the correct conjunction: I like tea, ___ I don't like coffee.",
        options: ["but", "and", "or", "so"],
        correct: "but"
    },
    {
        question: "What does 'burn the midnight oil' mean?",
        options: ["To stay up late working", "To waste time", "To work hard", "To relax"],
        correct: "To stay up late working"
    },
    {
        question: "Select the correct form: If it ___ tomorrow, we will cancel the trip.",
        options: ["rains", "rain", "rained", "will rain"],
        correct: "rains"
    },
    {
        question: "What is the opposite of 'RICH'?",
        options: ["Wealthy", "Poor", "Affluent", "Prosperous"],
        correct: "Poor"
    },
    {
        question: "Choose the correct option: She is interested ___ music.",
        options: ["to", "in", "on", "for"],
        correct: "in"
    }, 
    {
        question: "Choose the correct synonym of the word 'Abundant':",
        options: ["Scarce", "Plentiful", "Rare", "Insufficient"],
        correct: "Plentiful"
    },
    {
        question: "Choose the correct antonym of the word 'Virtue':",
        options: ["Vice", "Goodness", "Integrity", "Purity"],
        correct: "Vice"
    },
    {
        question: "Identify the part of speech of the underlined word: 'She quickly finished her homework.'",
        options: ["Noun", "Adjective", "Verb", "Adverb"],
        correct: "Adverb"
    },
    {
        question: "Find the error in the sentence: 'Each of the students have completed their assignments on time.'",
        options: ["Each", "students", "have", "No error"],
        correct: "have"
    },
    {
        question: "Choose the correct form of the word to complete the sentence: 'The movie was more ________ than I expected.'",
        options: ["interesting", "interestingly", "interested", "interest"],
        correct: "interesting"
    },
    {
        question: "Select the correct meaning of the idiom 'To turn a blind eye':",
        options: ["To ignore something", "To look closely", "To face reality", "To watch carefully"],
        correct: "To ignore something"
    },
    {
        question: "Choose the correct sentence:",
        options: [
            "She gone to the market.",
            "She has went to the market.",
            "She has gone to the market.",
            "She have gone to the market."
        ],
        correct: "She has gone to the market."
    },
    {
        question: "Fill in the blank: 'She is ____ intelligent student in her class.'",
        options: ["a", "an", "the", "no article needed"],
        correct: "an"
    },
    {
        question: "Identify the correct passive form: 'The teacher is teaching the students.'",
        options: [
            "The students were taught by the teacher.",
            "The students are taught by the teacher.",
            "The students are being taught by the teacher.",
            "The teacher has taught the students."
        ],
        correct: "The students are being taught by the teacher."
    },
    {
        question: "Select the correct word to complete the analogy: 'Wisdom : Foolishness :: Bravery : ____'",
        options: ["Courage", "Timidity", "Strength", "Fearlessness"],
        correct: "Timidity"
    },
    {
        question: "Choose the correct meaning of the phrasal verb 'Look up to':",
        options: ["Admire", "Search for", "Ignore", "Analyze"],
        correct: "Admire"
    },
    {
        question: "Identify the correct indirect speech for: 'She said, \"I am reading a book.\"'",
        options: [
            "She said that she is reading a book.",
            "She said that she was reading a book.",
            "She says that she is reading a book.",
            "She said that I am reading a book."
        ],
        correct: "She said that she was reading a book."
    },
    {
        question: "Choose the word that best fits in the blank: 'The manager approved the proposal ________ hesitation.'",
        options: ["without", "by", "with", "from"],
        correct: "without"
    },
    {
        question: "Identify the part of the sentence that contains an error: 'Neither of the answers are correct.'",
        options: ["Neither", "of the", "answers", "are"],
        correct: "are"
    },
    {
        question: "Choose the word that is closest in meaning to 'Benevolent':",
        options: ["Kind", "Cruel", "Ambitious", "Greedy"],
        correct: "Kind"
    },
    {
        question: "Select the word that correctly completes the sentence: 'Her behavior was ________ as unusual.'",
        options: ["noted", "notice", "noting", "noticeable"],
        correct: "noted"
    },
    {
        question: "Identify the figure of speech: 'Time flies when you’re having fun.'",
        options: ["Metaphor", "Personification", "Simile", "Hyperbole"],
        correct: "Personification"
    },
    {
        question: "Fill in the blank with the correct preposition: 'He is very good _______ mathematics.'",
        options: ["in", "at", "on", "with"],
        correct: "at"
    },
    {
        question: "Select the correct synonym of 'Conceal':",
        options: ["Hide", "Reveal", "Show", "Explain"],
        correct: "Hide"
    },
    {
        question: "Choose the correct form of the verb: 'She _______ to the gym every day.'",
        options: ["go", "gone", "goes", "going"],
        correct: "goes"
    }


]
  


    const quizContainer = document.querySelector(".quiz-container");
    const question = document.querySelector(".quiz-container .question");
    const options = document.querySelector(".quiz-container .options");
    const nextBtn = document.querySelector(".quiz-container .btn-next");
    const quizResult = document.querySelector(".quiz-result");

    const quizContainerRe = document.querySelector(".quiz-container-re");
    const questionRe = document.querySelector(".quiz-container-re .question");
    const optionsRe = document.querySelector(".quiz-container-re .options");
    const nextBtnRe = document.querySelector(".quiz-container-re .btn-next");
    const quizResultRe = document.querySelector(".quiz-result");

    const quizContainerAp = document.querySelector(".quiz-container-ap");
    const questionAp = document.querySelector(".quiz-container-ap .question");
    const optionsAp = document.querySelector(".quiz-container-ap .options");
    const nextBtnAp = document.querySelector(".quiz-container-ap .btn-next");
    const quizResultAp = document.querySelector(".quiz-result");

    const quizContainerEn = document.querySelector(".quiz-container-en");
    const questionEn = document.querySelector(".quiz-container-en .question");
    const optionsEn = document.querySelector(".quiz-container-en .options");
    const nextBtnEn = document.querySelector(".quiz-container-en .btn-next");
    const quizResultEn = document.querySelector(".quiz-result");



    const startBtnContainerGK = document.querySelector(".start-btn-container-gk");
    const startBtnGk = document.querySelector(".start-btn-container-gk .start-btn");
    const backBtngk = document.querySelector(".start-btn-container-gk .back-Btn");

    const startBtnContainerRE = document.querySelector(".start-btn-container-re");
    const startBtnRe = document.querySelector(".start-btn-container-re .start-btn");
    const backBtnRe = document.querySelector(".start-btn-container-re .back-Btn");

    const startBtnContainerAP = document.querySelector(".start-btn-container-ap");
    const startBtnAp = document.querySelector(".start-btn-container-ap .start-btn");
    const backBtnAp = document.querySelector(".start-btn-container-ap .back-Btn");

    const startBtnContainerEN = document.querySelector(".start-btn-container-en");
    const startBtnEn = document.querySelector(".start-btn-container-en .start-btn");
    const backBtnEn = document.querySelector(".start-btn-container-en .back-Btn");

    const homeContainer = document.querySelector(".home");
    const homeHeading = document.querySelector(".home .heading"); 
    const gkBtn = document.querySelector(".home .GK"); 
    const reasoningBtn = document.querySelector(".home .reasoning"); 
    const aptitudeBtn = document.querySelector(".home .aptitude"); 
    const englishBtn = document.querySelector(".home .english"); 

    let QuestionNumber = 0;
    let QuestionNumberRe = 0;
    let QuestionNumberAp = 0;
    let QuestionNumberEn = 0;

    const max_questions = 5;
    const max_questionsRe = 5;
    const max_questionsAp = 5;
    const max_questionsEn = 5;

    let score = 0;
    let scoreRe = 0;
    let scoreAp = 0;
    let scoreEn = 0;

    let timerInterval;
    let timerIntervalRe;
    let timerIntervalAp;
    let timerIntervalEn;

    const shuffleArray = array => {
      return array.slice().sort(() => Math.random() -0.5)
    };
     quizdata = shuffleArray(quizdata);

     const shuffleArrayRe = array => {
        return array.slice().sort(() => Math.random() -0.5)
      };
       reasoningQuizData = shuffleArrayRe(reasoningQuizData);
       const shuffleArrayAp = array => {
        return array.slice().sort(() => Math.random() -0.5)
      };
       aptitudeQuizData = shuffleArrayAp(aptitudeQuizData);
       const shuffleArrayEn = array => {
        return array.slice().sort(() => Math.random() -0.5)
      };
       englishQuizData = shuffleArrayEn(englishQuizData);


     const resetlocalStroage = () => {
      for (i = 0; i < max_questions; i++) {
        localStorage.removeItem(`userAnswer_${i}`);
      }
     };
     resetlocalStroage();

     const resetlocalStroageRe = () => {
        for (i = 0; i < max_questionsRe; i++) {
          localStorage.removeItem(`userAnswerRe_${i}`);
        }
       };
       resetlocalStroageRe();

       const resetlocalStroageAp = () => {
        for (i = 0; i < max_questionsAp; i++) {
          localStorage.removeItem(`userAnswerAp_${i}`);
        }
       };
       resetlocalStroageAp();

       const resetlocalStroageEn = () => {
        for (i = 0; i < max_questionsEn; i++) {
          localStorage.removeItem(`userAnswerEn_${i}`);
        }
       };
       resetlocalStroageEn();


     const checkAnswer = (e) => {
      let userAnswer = e.target.textContent;
      if (userAnswer === quizdata[QuestionNumber].correct) {
        score++;
        e.target.classList.add("correct");
      }
      else {
        e.target.classList.add("incorrect");
      }
    
      localStorage.setItem(`userAnswer_${QuestionNumber}`,userAnswer );  
      let allOptions = document.querySelectorAll(".quiz-container .option");
      allOptions.forEach((o) => {
        o.classList.add("disabled");
      });
      
     }

     const checkAnswerRe = (e) => {
        let userAnswer = e.target.textContent;
        if (userAnswer === reasoningQuizData[QuestionNumberRe].correct) {
          scoreRe++;
          e.target.classList.add("correct");
        }
        else {
          e.target.classList.add("incorrect");
        }
      
        localStorage.setItem(`userAnswerRe_${QuestionNumberRe}`,userAnswer );  
        let allOptions = document.querySelectorAll(".quiz-container-re .option");
        allOptions.forEach((o) => {
          o.classList.add("disabled");
        });
        
       }
       const checkAnswerAp = (e) => {
        let userAnswer = e.target.textContent;
        if (userAnswer === aptitudeQuizData[QuestionNumberAp].correct) {
          scoreAp++;
          e.target.classList.add("correct");
        }
        else {
          e.target.classList.add("incorrect");
        }
      
        localStorage.setItem(`userAnswerAp_${QuestionNumberAp}`,userAnswer );  
        let allOptions = document.querySelectorAll(".quiz-container-ap .option");
        allOptions.forEach((o) => {
          o.classList.add("disabled");
        });
        
       }

       const checkAnswerEn = (e) => {
        let userAnswer = e.target.textContent;
        if (userAnswer === englishQuizData[QuestionNumberEn].correct) {
          scoreEn++;
          e.target.classList.add("correct");
        }
        else {
          e.target.classList.add("incorrect");
        }
      
        localStorage.setItem(`userAnswerEn_${QuestionNumberEn}`,userAnswer );  
        let allOptions = document.querySelectorAll(".quiz-container-en .option");
        allOptions.forEach((o) => {
          o.classList.add("disabled");
        });
        
       }


    const createQuestion = () => {

        clearInterval(timerInterval);
        let secondsLeft = 29;
        const timerDisplay = document.querySelector(".quiz-container .timer");
        timerDisplay.classList.remove("danger");
        timerDisplay.textContent = `Time Left : 30 seconda`;
        timerInterval = setInterval(() => {
           timerDisplay.textContent = `Time Left :${secondsLeft.toString().padStart(2,'0')} seconds`;
           secondsLeft--;
           if(secondsLeft<3)
            {
                timerDisplay.classList.add("danger");
            }
            if(secondsLeft< 0) {
                clearInterval(timerInterval);
                displayNextQuestion();
            }
        
        }, 1000);
      

      options.innerHTML = "";
      question.innerHTML= `<span class='question-number'>${QuestionNumber+1}/${max_questions} </span> ${quizdata[QuestionNumber].question}`;

      const shuffleOptions =shuffleArray(quizdata[QuestionNumber].options);

      shuffleOptions.forEach((o) => {
        const option = document.createElement("button");
        option.classList.add("option");
        option.innerHTML = o;
        option.addEventListener("click",(e) => {
          checkAnswer(e);
        });
        options.appendChild(option);
      })   
    };
    
    const retakeQuiz = () => {
      QuestionNumber = 0;
      score = 0;
      quizdata = shuffleArray(quizdata);
      resetlocalStroage();

      createQuestion();
      quizResult.style.display = "none";
      quizContainer.style.display = "block";
       
    } 

    const createQuestionRe = () => {

        clearInterval(timerIntervalRe);
        let secondsLeftRe = 29;
        const timerDisplayRe = document.querySelector(".quiz-container-re .timer");
        timerDisplayRe.classList.remove("danger");
        timerDisplayRe.textContent = `Time Left : 30 seconda`;
        timerIntervalRe = setInterval(() => {
           timerDisplayRe.textContent = `Time Left :${secondsLeftRe.toString().padStart(2,'0')} seconds`;
           secondsLeftRe--;
           if(secondsLeftRe<3)
            {
                timerDisplayRe.classList.add("danger");
            }
            if(secondsLeftRe< 0) {
                clearInterval(timerInterval);
                displayNextQuestionRe();
            }
        
        }, 1000);
      

      optionsRe.innerHTML = "";
      questionRe.innerHTML= `<span class='question-number'>${QuestionNumberRe+1}/${max_questionsRe} </span> ${reasoningQuizData[QuestionNumberRe].question}`;

      const shuffleOptionsRe =shuffleArrayRe(reasoningQuizData[QuestionNumberRe].options);

      shuffleOptionsRe.forEach((o) => {
        const option = document.createElement("button");
        option.classList.add("option");
        option.innerHTML = o;
        option.addEventListener("click",(e) => {
          checkAnswerRe(e);
        });
        optionsRe.appendChild(option);
      })   
    };
    
    const retakeQuizRe = () => {
      QuestionNumberRe = 0;
      scoreRe = 0;
      reasoningQuizData= shuffleArray(reasoningQuizData);
      resetlocalStroageRe();

      createQuestionRe();
      quizResultRe.style.display = "none";
      quizContainerRe.style.display = "block";
       
    } 

    const createQuestionAp = () => {

        clearInterval(timerIntervalAp);
        let secondsLeftAp = 29;
        const timerDisplayAp = document.querySelector(".quiz-container-ap .timer");
        timerDisplayAp.classList.remove("danger");
        timerDisplayAp.textContent = `Time Left : 30 seconda`;
        timerIntervalAp = setInterval(() => {
           timerDisplayAp.textContent = `Time Left :${secondsLeftAp.toString().padStart(2,'0')} seconds`;
           secondsLeftAp--;
           if(secondsLeftAp<3)
            {
                timerDisplayAp.classList.add("danger");
            }
            if(secondsLeftAp< 0) {
                clearInterval(timerInterval);
                displayNextQuestionAp();
            }
        
        }, 1000);
      

      optionsAp.innerHTML = "";
      questionAp.innerHTML= `<span class='question-number'>${QuestionNumberAp+1}/${max_questionsAp} </span> ${aptitudeQuizData[QuestionNumberAp].question}`;

      const shuffleOptionsAp =shuffleArrayAp(aptitudeQuizData[QuestionNumberAp].options);

      shuffleOptionsAp.forEach((o) => {
        const option = document.createElement("button");
        option.classList.add("option");
        option.innerHTML = o;
        option.addEventListener("click",(e) => {
          checkAnswerAp(e);
        });
        optionsAp.appendChild(option);
      })   
    };
    
    const retakeQuizAp = () => {
      QuestionNumberAp = 0;
      scoreAp = 0;
      aptitudeQuizData= shuffleArray(aptitudeQuizData);
      resetlocalStroageAp();

      createQuestionAp();
      quizResultAp.style.display = "none";
      quizContainerAp.style.display = "block";
       
    } 

    
    const createQuestionEn = () => {

        clearInterval(timerIntervalEn);
        let secondsLeftEn = 29;
        const timerDisplayEn = document.querySelector(".quiz-container-en .timer");
        timerDisplayEn.classList.remove("danger");
        timerDisplayEn.textContent = `Time Left : 30 seconda`;
        timerIntervalEn = setInterval(() => {
           timerDisplayEn.textContent = `Time Left :${secondsLeftEn.toString().padStart(2,'0')} seconds`;
           secondsLeftEn--;
           if(secondsLeftEn<3)
            {
                timerDisplayEn.classList.add("danger");
            }
            if(secondsLeftEn< 0) {
                clearInterval(timerInterval);
                displayNextQuestionEn();
            }
        
        }, 1000);
      

      optionsEn.innerHTML = "";
      questionEn.innerHTML= `<span class='question-number'>${QuestionNumberEn+1}/${max_questionsEn} </span> ${englishQuizData[QuestionNumberEn].question}`;

      const shuffleOptionsEn =shuffleArrayEn(englishQuizData[QuestionNumberEn].options);

      shuffleOptionsEn.forEach((o) => {
        const option = document.createElement("button");
        option.classList.add("option");
        option.innerHTML = o;
        option.addEventListener("click",(e) => {
          checkAnswerEn(e);
        });
        optionsEn.appendChild(option);
      })   
    };
    
    const retakeQuizEn = () => {
      QuestionNumberEn = 0;
      scoreEn = 0;
      englishQuizData= shuffleArray(englishQuizData);
      resetlocalStroageEn();

      createQuestionEn();
      quizResultEn.style.display = "none";
      quizContainerEn.style.display = "block";
       
    } 

    


    const displayQuizResult = () => {
      quizResult.style.display = "flex";
      quizContainer.style.display = "none";
      homeContainer.style.display = "none";
      quizResult.innerHTML ="";

      const resultHeading = document.createElement("h2");
      resultHeading.innerHTML= `you have scored ${score} out of  ${max_questions}`;
      if(score === max_questions){
        resultHeading.innerHTML= ` Hey! congratulations you have scored ${score} out of  ${max_questions} keep going on....`;

        resultHeading.style.background ="green";
        resultHeading.style.color ="white";
        resultHeading.style.padding ="40px";
        resultHeading.style.fontStyle="italic";
        
      }
      quizResult.appendChild(resultHeading)
     
      for(let i = 0;i< max_questions ; i++) {
        const resultItem = document.createElement("div");
        resultItem.classList.add("question-container");

        const userAnswer = localStorage.getItem(`userAnswer_${i}`);
        const correctAnswer = quizdata[i].correct;
        let answerCorrectly = userAnswer === correctAnswer;
        if (!answerCorrectly) {
          resultItem.classList.add("incorrect");
        }
        
        let answerWrongly = userAnswer != correctAnswer;
        
        resultItem.innerHTML = `<div class="question">Question ${i + 1}: ${quizdata[i].question}</div>
            <div class="user-answer">Your answer:${userAnswer || "Not Answered"}</div>
            <div class="correct-answer">Correct answer: ${correctAnswer}</div>`;
            quizResult.appendChild(resultItem);
      }
      const retakeBtn = document.createElement("button");
      retakeBtn.classList.add("retake-btn");
      retakeBtn.innerHTML = "Retake Quiz";
      retakeBtn.addEventListener("click",retakeQuiz);
      quizResult.appendChild(retakeBtn); 

      const backHomeBtn = document.createElement("button");
backHomeBtn.classList.add("back-Btn");
backHomeBtn.innerHTML = "BACK";
backHomeBtn.style.padding = "10px 20px";

backHomeBtn.addEventListener("click", () => {
    quizResult.style.display = "none";
    homeContainer.style.display = "flex";
    startBtnContainerGK.style.display = "none";
    startBtnContainerRE.style.display = "none";
    startBtnContainerAP.style.display = "none";
    startBtnContainerEN.style.display = "none";

    QuestionNumber = 0;
    score =0;
    resetlocalStroage();

});


quizResult.appendChild(backHomeBtn);
    if (QuestionNumber >= max_questions - 1) {
        displayQuizResult();
        return;
    }
    QuestionNumber++;
    createQuestion();

    };


    const displayQuizResultRe = () => {
        quizResultRe.style.display = "flex";
        quizContainerRe.style.display = "none";
        homeContainer.style.display = "none";
        quizResultRe.innerHTML ="";
  
        const resultHeadingRe = document.createElement("h2");
        resultHeadingRe.innerHTML= `you have scored ${scoreRe} out of  ${max_questionsRe}`;
        if(scoreRe === max_questionsRe){
          resultHeadingRe.innerHTML= ` Hey! congratulations you have scored ${scoreRe} out of  ${max_questionsRe} keep going on....`;
  
          resultHeadingRe.style.background ="green";
          resultHeadingRe.style.color ="white";
          resultHeadingRe.style.padding ="40px";
          resultHeadingRe.style.fontStyle="italic";
          
        }
        quizResultRe.appendChild(resultHeadingRe)
       
        for(let i = 0;i< max_questionsRe ; i++) {
          const resultItemRe = document.createElement("div");
          resultItemRe.classList.add("question-container");
  
          const userAnswerRe = localStorage.getItem(`userAnswerRe_${i}`);
          const correctAnswerRe = reasoningQuizData[i].correct;
          let answerCorrectlyRe = userAnswerRe === correctAnswerRe;
          if (!answerCorrectlyRe) {
            resultItemRe.classList.add("incorrect");
          }
          
          let answerWronglyRe = userAnswerRe != correctAnswerRe;
          
          resultItemRe.innerHTML = `<div class="question">Question ${i + 1}: ${reasoningQuizData[i].question}</div>
              <div class="user-answer">Your answer:${userAnswerRe || "Not Answered"}</div>
              <div class="correct-answer">Correct answer: ${correctAnswerRe}</div>`;
              quizResultRe.appendChild(resultItemRe);
        }
        const retakeBtnRe = document.createElement("button");
        retakeBtnRe.classList.add("retake-btn");
        retakeBtnRe.innerHTML = "Retake Quiz";
        retakeBtnRe.addEventListener("click",retakeQuizRe);
        quizResultRe.appendChild(retakeBtnRe); 
  
        const backHomeBtnRe = document.createElement("button");
  backHomeBtnRe.classList.add("back-Btn");
  backHomeBtnRe.innerHTML = "BACK";
  backHomeBtnRe.style.padding = "10px 20px";
  
  backHomeBtnRe.addEventListener("click", () => {
      quizResultRe.style.display = "none";
      homeContainer.style.display = "flex";
      startBtnContainerGK.style.display = "none";
      startBtnContainerRE.style.display = "none";
      startBtnContainerAP.style.display = "none";
      startBtnContainerEN.style.display = "none";
  
      QuestionNumberRe = 0;
      scoreRe=0;
      resetlocalStroageRe();
  
  });
  
  
  quizResultRe.appendChild(backHomeBtnRe);
      if (QuestionNumberRe >= max_questionsRe - 1) {
          displayQuizResultRe();
          return;
      }
      QuestionNumberRe++;
      createQuestionRe();
  
      };

      const displayQuizResultAp = () => {
        quizResultAp.style.display = "flex";
        quizContainerAp.style.display = "none";
        homeContainer.style.display = "none";
        quizResultAp.innerHTML ="";
  
        const resultHeadingAp = document.createElement("h2");
        resultHeadingAp.innerHTML= `you have scored ${scoreAp} out of  ${max_questionsAp}`;
        if(scoreAp === max_questionsRe){
          resultHeadingAp.innerHTML= ` Hey! congratulations you have scored ${scoreAp} out of  ${max_questionsAp} keep going on....`;
  
          resultHeadingAp.style.background ="green";
          resultHeadingAp.style.color ="white";
          resultHeadingAp.style.padding ="40px";
          resultHeadingAp.style.fontStyle="italic";
          
        }
        quizResultAp.appendChild(resultHeadingAp);
       
        for(let i = 0;i< max_questionsAp ; i++) {
          const resultItemAp = document.createElement("div");
          resultItemAp.classList.add("question-container");
  
          const userAnswerAp = localStorage.getItem(`userAnswerAp_${i}`);
          const correctAnswerAp = aptitudeQuizData[i].correct;
          let answerCorrectlyAp = userAnswerAp === correctAnswerAp;
          if (!answerCorrectlyAp) {
            resultItemAp.classList.add("incorrect");
          }
          
          let answerWronglyAp = userAnswerAp != correctAnswerAp;
          
          resultItemAp.innerHTML = `<div class="question">Question ${i + 1}: ${aptitudeQuizData[i].question}</div>
              <div class="user-answer">Your answer:${userAnswerAp || "Not Answered"}</div>
              <div class="correct-answer">Correct answer: ${correctAnswerAp}</div>`;
              quizResultAp.appendChild(resultItemAp);
        }
        const retakeBtnAp = document.createElement("button");
        retakeBtnAp.classList.add("retake-btn");
        retakeBtnAp.innerHTML = "Retake Quiz";
        retakeBtnAp.addEventListener("click",retakeQuizAp);
        quizResultAp.appendChild(retakeBtnAp); 
  
        const backHomeBtnAp = document.createElement("button");
  backHomeBtnAp.classList.add("back-Btn");
  backHomeBtnAp.innerHTML = "BACK";
  backHomeBtnAp.style.padding = "10px 20px";
  
  backHomeBtnAp.addEventListener("click", () => {
      quizResultAp.style.display = "none";
      homeContainer.style.display = "flex";
      startBtnContainerGK.style.display = "none";
      startBtnContainerRE.style.display = "none";
      startBtnContainerAP.style.display = "none";
      startBtnContainerEN.style.display = "none";
  
      QuestionNumberAp = 0;
      scoreAp=0;
      resetlocalStroageAp();
  
  });
  
  
  quizResultAp.appendChild(backHomeBtnAp);
      if (QuestionNumberAp >= max_questionsAp - 1) {
          displayQuizResultAp();
          return;
      }
      QuestionNumberAp++;
      createQuestionAp();
  
      };


      const displayQuizResultEn = () => {
        quizResultEn.style.display = "flex";
        quizContainerEn.style.display = "none";
        homeContainer.style.display = "none";
        quizResultEn.innerHTML ="";
  
        const resultHeadingEn = document.createElement("h2");
        resultHeadingEn.innerHTML= `you have scored ${scoreEn} out of  ${max_questionsEn}`;
        if(scoreEn === max_questionsEn){
          resultHeadingEn.innerHTML= ` Hey! congratulations you have scored ${scoreEn} out of  ${max_questionsEn} keep going on....`;
  
          resultHeadingEn.style.background ="green";
          resultHeadingEn.style.color ="white";
          resultHeadingEn.style.padding ="40px";
          resultHeadingEn.style.fontStyle="italic";
          
        }
        quizResultEn.appendChild(resultHeadingEn)
       
        for(let i = 0;i< max_questionsEn ; i++) {
          const resultItemEn = document.createElement("div");
          resultItemEn.classList.add("question-container");
  
          const userAnswerEn = localStorage.getItem(`userAnswerEn_${i}`);
          const correctAnswerEn = englishQuizData[i].correct;
          let answerCorrectlyEn = userAnswerEn === correctAnswerEn;
          if (!answerCorrectlyEn) {
            resultItemEn.classList.add("incorrect");
          }
          
          let answerWronglyEn = userAnswerEn != correctAnswerEn;
          
          resultItemEn.innerHTML = `<div class="question">Question ${i + 1}: ${englishQuizData[i].question}</div>
              <div class="user-answer">Your answer:${userAnswerEn || "Not Answered"}</div>
              <div class="correct-answer">Correct answer: ${correctAnswerEn}</div>`;
              quizResultEn.appendChild(resultItemEn);
        }
        const retakeBtnEn = document.createElement("button");
        retakeBtnEn.classList.add("retake-btn");
        retakeBtnEn.innerHTML = "Retake Quiz";
        retakeBtnEn.addEventListener("click",retakeQuizEn);
        quizResultEn.appendChild(retakeBtnEn); 
  
        const backHomeBtnEn = document.createElement("button");
  backHomeBtnEn.classList.add("back-Btn");
  backHomeBtnEn.innerHTML = "BACK";
  backHomeBtnEn.style.padding = "10px 20px";
  
  backHomeBtnEn.addEventListener("click", () => {
      quizResultEn.style.display = "none";
      homeContainer.style.display = "flex";
      startBtnContainerGK.style.display = "none";
      startBtnContainerRE.style.display = "none";
      startBtnContainerAP.style.display = "none";
      startBtnContainerEN.style.display = "none";
  
      QuestionNumberEn = 0;
      scoreEn=0;
      resetlocalStroageEn();
  
  });
  
  
  quizResultEn.appendChild(backHomeBtnEn);
      if (QuestionNumberEn >= max_questionsEn - 1) {
          displayQuizResultEn();
          return;
      }
      QuestionNumberEn++;
      createQuestionEn();
  
      };
    
 
    const displayNextQuestion = () => {
      if(QuestionNumber >= max_questions - 1) {
        displayQuizResult();
        return;
       }
      QuestionNumber++;  
      createQuestion();
    };

    const displayNextQuestionRe = () => {
        if(QuestionNumberRe >= max_questionsRe - 1) {
          displayQuizResultRe();
          return;
         }
        QuestionNumberRe++;
        createQuestionRe();
      };

      const displayNextQuestionAp = () => {
        if(QuestionNumberAp >= max_questionsAp - 1) {
          displayQuizResultAp();
          return;
         }
        QuestionNumberAp++;
        createQuestionAp();
      };

      const displayNextQuestionEn = () => {
        if(QuestionNumberEn >= max_questionsEn - 1) {
          displayQuizResultEn();
          return;
         }
        QuestionNumberEn++;
        createQuestionEn();
      };


  nextBtn.addEventListener("click",displayNextQuestion);
  nextBtnRe.addEventListener("click",displayNextQuestionRe);
  nextBtnAp.addEventListener("click",displayNextQuestionAp);
  nextBtnEn.addEventListener("click",displayNextQuestionEn);
  startBtnGk.addEventListener("click",() => {
     startBtnContainerGK.style.display = "none";
     quizContainer.style.display = "block";
     QuestionNumber=0;
     createQuestion();
  })

  startBtnRe.addEventListener("click",() => {
    startBtnContainerRE.style.display = "none";
    quizContainerRe.style.display = "block";
    QuestionNumberRe = 0;
    createQuestionRe();
 })

 startBtnAp.addEventListener("click",() => {
    startBtnContainerAP.style.display = "none";
    quizContainerAp.style.display = "block";
    QuestionNumberAp = 0;
    createQuestionAp();
 })

 startBtnEn.addEventListener("click",() => {
    startBtnContainerEN.style.display = "none";
    quizContainerEn.style.display = "block";
    QuestionNumberEn = 0;
    createQuestionEn();
 })
  backBtngk.addEventListener("click",() => {
    startBtnContainerGK.style.display = "none";
    homeContainer.style.display = "flex";

 })
 backBtnRe.addEventListener("click",() => {
    startBtnContainerRE.style.display = "none";
    homeContainer.style.display = "flex";

 })
 backBtnAp.addEventListener("click",() => {
    startBtnContainerAP.style.display = "none";
    homeContainer.style.display = "flex";
 })
 backBtnEn.addEventListener("click",() => {
    startBtnContainerEN.style.display = "none";
    homeContainer.style.display = "flex";

 })
  gkBtn.addEventListener("click", () => {
    homeContainer.style.display = "none";
    startBtnContainerGK.style.display = "flex";
  })
  reasoningBtn.addEventListener("click", () => {
    homeContainer.style.display = "none";
    startBtnContainerRE.style.display = "flex";
  })
  aptitudeBtn.addEventListener("click", () => {
    homeContainer.style.display = "none";
    startBtnContainerAP.style.display = "flex";
  })
  englishBtn.addEventListener("click", () => {
    homeContainer.style.display = "none";
    startBtnContainerEN.style.display = "flex";

  })
 
  
  


 

