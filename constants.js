// Options the user could type in
const prompts = [
  ["hi","hello","hlo","hai","Hi","hii",
  "Is anyone there?",
  "Hello",
  "Good day",
  "Whats up",
  "how are ya",
  "heyy",
  "whatsup"],["cya",
  "see you",
  "bye bye",
  "See you later",
  "Goodbye",
  "I am Leaving",
  "Bye",
  "Have a Good day",
  "talk to you later",
  "tyyl",
  "i got to go",
  "gtg"],[

    "what is the name of your developers",
    "what is the name of your creators",
    "what is the name of the developers",
    "what is the name of the creators",
    "who created you",
    "your developers",
    "your creators",
    "who are your developers",
    "developers",
    "you are made by",
    "you are made by whom",
    "who created you",
    "who create you",
    "creators",
    "who made you",
    "who designed you"
],[
  "name",
  "your name",
  "do you have a name",
  "what are you called",
  "what is your name",
  "what should I call you",
  "whats your name?",
  "what are you",
  "who are you",
  "who is this",
  "what am i chatting to",
  "who am i taking to",
  "what are you","what about u","what about you"
],["college","what is college address","college address","address of college","where is the college located",
"college is located at",
"where is college",
"where is college located",
"address of college",
"how to reach college",
"college location",
"college address",
"wheres the college",
"how can I reach college",
"whats is the college address",
"what is the address of college",
"address",
"location"],["chairman","Chairman"] ,["Principle","principle","what is the name of principal",
"whatv is the principal name",
"principal name",
"Who is college principal",
"Where is principal's office",
"name of principal"],["who is cse hod","cse hod","Cse hod",
  "Who is Computer HOD",
  "Where is  Computer HOD",
  "computer hod",
  "name of computer hod"
],["who is ece hod","ece hod","Ece hod"], [
  "Who is Civil HOD",
  "Where is civil HOD",
  "civil hod",
  "name of civil hod"
],[
  "Who is Mechanical HOD",
  "Where is  mechanical HOD",
  "mechanical hod",
  "name of mechanical hod"
],[
  "Who is Electrical HOD",
  "Where is Electrical HOD",
  "electrical hod",
  "name of electrical hod","EEE hod","who is eee hod"
],
["canteen","Canteen","food facilities",
"canteen facilities",
"canteen facility",
"is there any canteen",
"Is there a cafetaria in college",
"Does college have canteen",
"Where is canteen",
"where is cafetaria",
"canteen",
"Cafetaria"],["results"],
["College timings",,"timings of college", 
  "timing of college",
  "what is college timing",
  "working days",
  "when are you guys open",
  "what are your hours",
  "hours of operation",
  "when is the college open",
  "college timing",
  "what about college timing",
  "is college open on saturday",
  "tell something about college timing",
  "what is the college  hours",
  "when should i come to college",
  "when should i attend college",
  "what is my college time",
  "college timing",
  "timing college","what are the college timings"
],["more info",
"contact info",
"how to contact college",
"college telephone number",
"college number",
"What is your contact no",
"Contact number?",
"how to call you",
"College phone no?",
"how can i contact you",
"Can i get your phone number",
"how can i call you",
"phone number",
"phone no",
"call"],
  ["number of branches","how many branches available","Branches","branches available","list of courses",
  "list of courses offered",
  "list of courses offered in Ideal",
  "what are the courses offered in your college?",
  "courses?",
  "courses offered",
  "courses offered in Ideal institute of technology",
  "courses you offer",
  "branches?",
  "courses available at Ideal?",
  "branches available at Ideal?",
  "what are the courses in Ideal?",
  "what are branches in Ideal?",
  "what are courses in Ideal?",
  "branches available in Ideal?",
  "can you tell me the courses available in Ideal?",
  "can you tell me the branches available in Ideal?",
  "Civil engineering?",
  "Computer engineering?",
  "IT engineering?",
  "Automobile engineering?",
  "Mechanical engineering?",
  "EXTC engineering?",
  "Electrical engineering?",
  "civil",
  "it",
  "IT",
  "Computer",
  "Automobile",
  "Mechanical",
  "EXTC",
  "Electrical",
  "Comps",
  "Auto",
  "Mech",
  "extc"],[
    "information about fee",
    "information on fee",
    "tell me the fee",
    "college fee",
    "fee per semester",
    "what is the fee of each semester",
    "what is the fees of each year",
    "what is fee",
    "what is the fees",
    "how much is the fees",
    "fees for first year",
    "fees",
    "about the fees",
    "tell me something about the fees",
    "fees fe",
    "fees se",
    "fees te",
    "fees be",
    "fees me",
    "fees comps",
    "fees it",
    "fees mech",
    "fees auto",
    "fees extc",
    "fees electrical",
    "fees computer",
    "fees mechanical",
    "fees automobile",
    "fees open fe",
    "fees open se",
    "fees open te",
    "fees open be","where is the office room","office room","Office room","where to pay fee","How fee can be paid","where is office","fee structure","fee","office"
],[
  "hostel facility","is there hostel facility for the college",
  "hostel servive",
  "hostel location",
  "hostel address",
  "hostel facilities",
  "hostel fees",
  "Does college provide hostel",
  "Is there any hostel",
  "Where is hostel",
  "do you have hostel",
  "do you guys have hostel",
  "hostel",
  "hostel capacity",
  "what is the hostel fee",
  "how to get in hostel",
  "what is the hostel address",
  "how far is hostel from college",
  "hostel college distance",
  "where is the hostel",
  "how big is the hostel",
  "distance between college and hostel",
  "distance between hostel and college"
],["infrastructure",
"building",
"number of floors in bulding",
"college infrastructure",
"departments and labs",
"departments",
"labs",
"canteen",
"infrastructure ideal",
"tell me about infrastructure",
"what about infrastructure","area of college","college area","college building"
],[
  "events organised",
  "list of events",
  "list of events organised in college",
  "list of events conducted in college",
  "What events are conducted in college",
  "Are there any event held at college",
  "Events?",
  "functions",
  "what are the events",
  "tell me about events",
  "what about events","events","Events","Events in the college","events conducted in college","events in college","events conducted every year","NSS","NSS events","nss","nss events"
], [
  "Syllabus for CSE","Syllabus for ECE","Syllabus for EEE","Syllabus for MECH","Syllabus for CIVIL","Syllabus for cse","Syllabus for eee","Syllabus for ece","Syllabus for mech","Syllabus for civil",
  "what is the Information Technology syllabus",
  "syllabus",
  "timetable",
  "what is CSE syllabus",
  "Syllabus",
  "What is next lecture"
],["holidays"],["CSE Staff","cse staff"],["ECE Staff","ece staff"],["EEE Staff","eee staff"],["MECHANICAL Staff","mechanical staff"],
  ["CIVIL Staff","civil staff"],["HBS staff","hbs staff","first year staff"],["Transportation","transport","Trasport","bus facility","bus facility"],
  ["library","Library", 
    "is there any library",
    "library facility",
    "library facilities",
    "do you have library",
    "does the college have library facility",
    "college library",
    "where can i get books",
    "book facility",
    "Where is library",
    "Library",
    "Tell me about library",
    "how many libraries"
],[
  "food menu",
  "food in canteen",
  "Whats there on menu",
  "what is available in college canteen",
  "what foods can we get in college canteen","I wanted to eat something"
],["parking","Parking"],["placements","Placements","What is college placement",
"Which companies visit in college",
"What is average package",
"companies visit",
"package",
"placement",
"recruitment",
"companies"],["ground","Ground","Playground","playground"],["how are you","How are you"],[
  "okk",
  "okie",
  "nice work",
  "well done",
  "good job",
  "thanks for the help",
  "Thank You",
  "its ok",
  "Thanks",
  "k",
  "ok",
  "okay","very good","well done"
],["NAAC grade for this college","what is the naac grade of this college","NAAC grade","NAAC","naac grade","NAAC Grade","what is the NAAC grade of this college","what is the naac grade of this college?" ],
["labs","lab","cse labs","mech labs","ece labs","eee labs","civil labs","labs in ground floor","labs in first floor","CSE labs","MECH labs","ECE labs","EEE labs","CIVIL labs","Mechanical labs","mechanical labs"],["SPORTS","sports","sports events","sports events in college"]


]

// Possible responses, in corresponding 

const replies = [
  ["Hello","Hey!","Hii","Hello!",
  "Good to see you again!",
  "Hi there, how can I help?"], [
    "Sad to see you go :(",
    "Talk to you later",
    "Goodbye!",
    "Come back soon"
],[
  "Tarak, Sangeetha,Vidya and tarun developed me in 2023, for their project"
],[
  "You can call me Ideal Chatbot.",
  "I'm College Enquiry Chatbot",
  "I'm IDEAL Chatbot alias College Enquiry Chatbot"
],["Ideal institute of technology, vidyutnagar,Kakinada - 533003,approved by aicte-new delhi&affilated by JNTU-KAKINADA"],["Dr. Paruchuri Krishna Rao M.Sc., Ph.D."],["Dr. T. Srikanth,Ph.D. is college principal who is available on ground floor. To know more visit https://www.idealtech.edu.in/principal.php"
],
  ["Mr. M.S.R.S. Prasad M.Tech.[Ph.D] is the HOD of Computer Science Engineering Department who is available on first floor. To know more visit https://www.idealtech.edu.in/cse.php"],["Mr. N. Rajesh Babu has taken charge of this prestigious department in the year 2021 who is available on 1st floor. To know more visit https://www.idealtech.edu.in/ece.php"
],  ["Mr. Srinivas Angadi is the HOD of Civil Engineering Department who is available on third floor. To know more visit https://www.idealtech.edu.in/civil.php"],
 ["Mr. K.L.N. Murthy is the HOD of Mechanical Engineering Department who is available on second floor. To know more visit <a target=\"_blank\" href=\"https://www.idealtech.edu.in/mech.php\">here</a>"],
 ["Mr. A.Ramesh M.Tech, (Ph.D), is the HOD of Electrical Engineering Department who is available on third floor. To know more visit https://www.idealtech.edu.in/eee.php/"],["Ideal has canteen with variety of food available. https://www.idealtech.edu.in/canteen.php"],["you need to paste this url in browser https://www.results.idealtech.edu.in/"],
  ["College is open 9:30 AM to 4:10 PM Monday to saturday except second saturday."],[
    "You can contact at : 0884-2363345,46,48"
],
  ["Number of Branches : 5 -CSE(AI),CSE(ML),ECE,EEE,MECH","Bachelors Programmes provided are Civil Engineering, Computer Engineering, Electrical Engineering, Electronics and Telecommunications Engineering, Mechanical Engineering.For more details visit https://www.idealtech.edu.in/coursesoffered.php"
],["Visit office room in ground floor.For Fee details visit https://www.idealtech.edu.in/Fee_Structure.php",],[
  "Ideal provides safe and affordable hostel facilities for boys and girls. For more details visit https://www.idealtech.edu.in/hostel.php"
                                            
     ],[
      " College area is 11 acres For campus tour please visit the following link https://www.idealtech.edu.in/campusgallery.php",
      ],[
        "Our college organizes various events during academics.Our Ideal institue of technology organizes TECH-FEST every year.Many Events are useful for technical skils and placements activities.There are many events which are held by deparments https://www.idealtech.edu.in/events.php"
],[ "Syllabus of all years and departments is available in the link below. https://www.idealtech.edu.in/syllabus.php"],
["Every second saturday and sunday is holiday and all the public holidays are given"],["Sri. Merla Sri Ravi Sankara Prasad,Smt. P. Radhika Krupalini,Sri R S V V Prasad Rao,Smt. R.V.V.Gani Lakshmi,Smt M Jayasree,Smt S Jyothirmayee,Mr. M. V. V. Chowdary,Mr. K. Ramesh,Mrs. P. Usha Visweswari,MR. S. V. V. S. Gangadhar,Ms. P. Sai Sowjanya,Ms. P. Viswajyothi,Ms.A. Meghana"],
  ["Sri. N. Rajesh Babu,Sri. Bh V S R K Ayyappa Kumar,Sri. B V Kalyan Ram,Sri Ch.Venkata Prakash,Sri. V.K.A.S. Krishnan,Smt.D.Vijaya Lakshmi,Sri P S J Sreeram,Sri. Mortha Varaprasad,Smt. T. Adi Varalakshmi Devi"],
  ["Sri A.Ramesh,Sri. D.Madhu,Sri. Madaka jagadeesh,Kum N Raja Veni,Smt. Bhusam Lalita Kumari,Sri. G. Kiran Kumar,Sri Tammanapudi Veerababu"],
  ["Dr. Tayi Srikanth,K.L.N.Murthy,Sri. Gorsa Ravi Kumar,Smt. R. Vijaya Lakshmi,Sri. Ch.Raju,Sri N. D. Kameswara Rao,Ms. P. Anusha,Mr. P. Rambabu,Mr. M. Nirmal Devi Kiran"],
  ["Mr. Angadi Srinivas,Ms. Kothara Santhi,Smt T B N Satya Sirisha,Sri Sayyed Nazeer Ahmed,Sri. R. Kiran Kumar,Kum.Madireddy Geeta Sri,Kum. V.T.D. Kalyani,Sri. M.T.Ramesh Naidu,Smt M. Neelima"],
  ["Dr. Chodisetty V V S N Murthy,Dr. K Srihari Varma,Smt. K. Vijaya. Lakshmi,Smt. Kanakam Akella,Smt. M. Bhagyalakshmi,Smt. S. Surya Kumari Padala,Kum. V.S.G. Aiswarya,Sri N Rahul Khanna,Smt. Sirisha Meenavalli,Sri M Jahir Khadarir,Sri. K Saibabu,Sri. Gampala Kasiyya,Ms. K. Geethika,Ms. S. Divya,Smt K Anooradha"],["the college has employed qualified and experienced drivers.As there are limited buses/seats transport facility will be provided on first come first serve,"],
  ["Ideal has a huge and spacious library on the second floor. For more details visit <a target=\"_blank\" href=\"https://www.idealtech.edu.in/library.php\"> here</a>"],
  ["The college canteen serves Egg puff,chicken puff on wednesday,curry puff,samosa,sweetcorn samosa,onion samosa,veg fried rice,chicken fried rice,Chicken Biryani,soft drinks,Ice creams,Milkshakes,snacks"],["parking facility available"],
  ["Various companies are coming to recruite our students and offer maximum packages.MAIN RECRUITERS are TCS,Wipro,Infosys etc.For more information visit https://www.idealtech.edu.in/placements.ph",
  "Our college oragnise various activities related to placements.For latest update visit https://idealtech.edu.in/placementcell.php"
],["A vast playground with provisions for playing outdoor games like cricket,volleybal,shuttle are in place"],["i'm great😊! how can i help you"],[
  "I am glad I helped you",
  "welcome, anything else i can assist you with?"
],["Ideal Institue of technology is accredited with NAAC A+"],["Ideal has a very well equipped labs for all branches and to know more about labs please find the link below  CSE Labs - https://www.idealtech.edu.in/cse_labs.php, ECE Labs - https://www.idealtech.edu.in/ece_labs.php, EEE Labs - https://www.idealtech.edu.in/eee_labs.php,CIVIL Labs - https://www.idealtech.edu.in/civil_labs.php,MECH Labs - https://www.idealtech.edu.in/mech_labs.php"],
["sports events are conducted in our college to encourage stuudents in extra cirricular activities .To know more https://www.idealtech.edu.in/sports.php"]
]

// Random for any other user input

const alternative = [
  ["sorry i don't understand"],
  ["I don't understand :/"],["Please try again"]
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]