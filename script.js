/*moving some div to moblie version, and changing classlists */
if (innerWidth <= 767){
    const desc = document.querySelector('.header__desc');
    const img = document.querySelector('.header__img');
    const main = document.querySelector('.main');
    const padding70 = document.querySelectorAll('.py-60, .px-60');

    main.classList.remove("flex");
    img.parentNode.insertBefore(desc, img.nextSibling);
    desc.classList.add('py-30');
    padding70.forEach(element =>{
        element.classList.remove('py-60', 'px-60');
        element.classList.add('px-30', 'px-30');
    })
}
if ((innerWidth >= 400) && (innerWidth < 768)){
    const headerImg = document.querySelector('.header__img');
    const headerDesc = document.querySelector('.header__desc');
    const functionBtn = document.querySelector('.functionbtn');
    // Create a flex container
    const flexContainer = document.createElement('div');
    flexContainer.classList.add('flex');
    
    // Append the headerImg and headerDesc to the flex container
    flexContainer.appendChild(headerImg);
    flexContainer.appendChild(headerDesc);
    
    // Get the parent of functionBtn
    const functionBtnParent = functionBtn.parentNode;
    
    // Insert the flex container after the functionBtn
    functionBtnParent.insertBefore(flexContainer, functionBtn.nextSibling);
}

/*** darkmode ***/
const darkbtn = document.getElementById("darkbtn");

// Function to toggle dark mode
const toggleDarkMode = () =>{
    document.body.classList.toggle("darkmode");
    // Save value in localStorage
    localStorage.setItem('darkmode', document.body.classList.contains('darkmode')?'darkON':'darkOFF');
};

// Event listener on dark mode button
darkbtn.addEventListener("click", toggleDarkMode);

// Reading value from localStorage
const darkmodeS = localStorage['darkmode']

// Check dark mode value
if (darkmodeS ==='darkON'){
    toggleDarkMode();
}

/*** Language Switcher ***/
const switchLanguageBtn = document.getElementById("switch-language");

// Function to change language
const changeLanguage=()=>{
    const currentLanguage = document.documentElement.lang;

    if (currentLanguage ==="pl"){
        document.documentElement.lang = "en";
        localStorage.setItem('lang', 'en');
    } else{
        document.documentElement.lang ="pl";
        localStorage.setItem('lang', 'pl');
    }
    translatePage();
}

// Function to translate page based on stored language
const translatePage = () => {
    const lang = localStorage.getItem('lang') || "pl";
    if (lang === "pl") {
        translateToPolish();
    } else {
        translateToEnglish();
    }
};

// Function to translate to English
const translateToEnglish=()=>{
    const translations = {
        "langbtn":"PL",
        "contact": "Contact",
        "telephone":"Telephone",
        "city":"City",
        "city2":"Cracow",
        "skills":"SKILLS AND SPECIALTIES",
        "skills2":"Open to learn new methods of work",
        "skills3":"Ability to work in a team",
        "language":"Languages",
        "language2":"Polish: native",
        "language3":"English: B2+",
        "language4":"German: A2",
        "hobby":"INTERESTS",
        "hobby2":"I am fascinate about new technologies and the development of web applications, which is why I associate my professional future with the IT industry. During my free time I play sports and read books.",
        "desc":"Graduate of Computer Science and Econometrics at the Krakow Academy named after Andrzej Frycz Modrzewski. I’m looking for development opportunities as a web developer. I can communicate and work in English. Moreover I am willing to improve my skills and develop them.",
        "experience":"Experience",
        "experience2":"Practices/ Wave Brand",
        "experience3":"trzciana.pl (Trzciana Commune website):",
        "experience3-1":"Creating a website in accordance with the guidelines of WCAG accessibility standards",
        "experience3-2":"Content management by municipal staff through the implementation of the company's content managementsystem (CMS)",
        "experience3-3":"Using PHP to dynamically display items on a page, such as blog articles",
        "experience3-4":"Implementation of graphic design with Photoshop, using HTML, CSS, jQuery",
        "experience4":"a-trans.com.pl (A-Trans Transport Services Website):",
        "experience4-1":"Using jQuery technology to implement a photo carousel        ",
        "experience4-2":"Reproduction of the page from a template created in Photoshop, maintain the consistency and readability of the interface (UX)",
        "experience5":"pmwerbetechnik.at (Austrian business card website):        ",
        "experience5-1":"Optimizing the website for loading speed and performance, with minimal use of technologies such as HTML, CSS, taking into account the principles of responsive design (RWD)",
        "education":"Education",
        "education2":"Cracow Academy named after Andrzej Frycz Modrzewski",
        "education2-1":"Field of study: Computer science and econometrics",
        "education2-2":"Education level: Engineer",
        "education3":"School Complex No. 1 in Bochnia named after Stanisław Staszic",
        "education3-1":"Course: IT",
        "education3-2":"Education level: IT technician",
        "achievement":"training, courses, certificates",
        "achievement2":',,Project Challenge" - including creating a professional company website, techniques and methods of handling problematic customers',
        "rodo":"I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."

    };
    translateElements(translations);
}

// Function to translate to Polish
const translateToPolish=()=>{
    const translations = {
        "langbtn":"EN",
        "contact": "Kontakt",
        "telephone":"Telefon",
        "city":"Miasto",
        "city2":"Kraków",
        "skills":"UMIEJĘTNOŚCI I SPECJALNOŚCI",
        "skills2":"Otwartość na naukę i nowe metody pracy",
        "skills3":"Umiejętność pracy w zespole",
        "language":"Języki",
        "language2":"Polski: ojczysty",
        "language3":"Angielski: B2+",
        "language4":"Niemiecki: A2",
        "hobby":"ZAINTERESOWANIA",
        "hobby2":"Pasjonuję się nowymi technologiami oraz rozwojem aplikacji internetowych,dlatego swoją przyszłość zawodową wiążę z branżą IT. W wolnej chwili uprawiam sport oraz czytam książki.",
        "desc":"Absolwent Informatyki i Ekonometrii na Krakowskiej Akademii im. Andrzeja Frycza Modrzewskiego szuka możliwości rozwoju jako web developer. Znam język angielski, chętnie podnoszę swoje kwalifikacje, ucząc się i stawiając na rozwój.",
        "experience":"Doświadczenie zawodowe",
        "experience2":"Praktyki / Wave Brand",
        "experience3":"trzciana.pl (Strona Gminy Trzciana):",
        "experience3-1":"Tworzenie strony zgodnie z wytycznymi standardów dostępności WCAG",
        "experience3-2":"Zarządzanie treściami przez personel gminy poprzez implementacje firmowego systemu zarządzania treścią (CMS)",
        "experience3-3":"Wykorzystanie PHP do dynamicznego wyświetlania pozycji na stronie, takich jak artykuły bloga",
        "experience3-4":"Implementacja projektu graficznego z Photoshop, za pomocą HTML, CSS, jQuery",
        "experience4":"a-trans.com.pl (Strona Usług Transportowych A-Trans):",
        "experience4-1":"Wykorzystanie technologii jQuery do implementacji karuzeli zdjęć",
        "experience4-2":"Odwzorowanie strony z szablonu stworzonego w programie Photoshop, z dbałością o zachowanie spójności i czytelności interfejsu (UX)",
        "experience5":"pmwerbetechnik.at (Austriacka strona-wizytówka):",
        "experience5-1":"Zoptymalizowanie strony pod kątem szybkości ładowania i wydajności, przy minimalnym użyciu technologii takich jak HTML,CSS, uwzględniając zasady responsywnegoprojektowania (RWD)",
        "education":"Wykształcenie",
        "education2":"Krakowska Akademia im. Andrzeja Frycza Modrzewskiego",
        "education2-1":"Kierunek: informatyka i ekonometria",
        "education2-2":"Poziom wykształcenia: inżynier",
        "education3":"Zespół Szkół Nr 1 w Bochni im. Stanisława Staszica",
        "education3-1":"Kierunek: informatyk",
        "education3-2":"Poziom wykształcenia: technik informatyk",
        "achievement":"Szkolenia, kursy, certyfikaty",
        "achievement2":',,Project Challange" - min. tworzenie profesjonalnej strony firmowej, techniki i metody obsługi klienta problematycznego.',
        "rodo":"Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO)."
    };
    translateElements(translations);
}

// Function to translate elements
const translateElements=(translations)=>{
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element=>{
        const key = element.getAttribute('data-translate');
        if(translations[key]){
            element.textContent = translations[key];
        }
    })
}


// Event listener for language change button
const setInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('lang');
    if (savedLanguage) {
        document.documentElement.lang = savedLanguage;
    }
};

switchLanguageBtn.addEventListener('click', changeLanguage);

// Translate page on initial load
translatePage();
// Set initial language
setInitialLanguage();