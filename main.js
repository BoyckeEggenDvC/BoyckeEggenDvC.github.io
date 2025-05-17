json = {
  "wie_was_ik": [
    "Onzeker",
    "Reactief, vooral inspelend op de situatie",
    "Hoge verwachting van student",
    "Compleet afhankelijk van intrinsieke motivatie",
    "Student was compleet in charge",
    "Super gefocust op autonomie van de student",
    "Als ik wat klassikaal deed, deed ik dit vooral als 'presentatie'",
    "Vind dat ik alles al moet kunnen, elke situatie adequaat benaderen",
    "Analyseren en studenten laten praten kon ik al",
    "Ging koud op een onderwerp in, zonder kapstokje",
    "Beginsituatie redelijk individueel kunnen inschatten",
    "Toetsing over gehele modules meer summatief dan formatief",
    "Feedback geven, maar dan ook meteen uitleggen hoe het heurt",
    "Op zoek naar structuur en de norm",
    "Goed in de gaten houden of iemand voor zichzelf goed bezig is",
    "Vooral uitleg hoe het technisch moet",
    "Differentiatie op cognitie",
    "Gat benoemen tussen uiteindelijk doel en huidige situatie, maar lastig op te splitsen in subdoelen"
  ],
  "mijn_ideale_docent": [
    "Kan een boeiend verhaal vertellen als het onderwerp dat nodig heeft",
    "Kan de noodzaak van het verhaal uitleggen door doelen te benoemen",
    "Heeft humor en kan middels humor lesstof overbrengen",
    "Kan ook met humor motiveren",
    "Weet de correcte werkvorm te vinden bij de situatie en lesstof",
    "Neemt zichzelf niet zo serieus",
    "Laat iemand tegen de muur lopen, totdat!",
    "Hoeft nauwelijks te belonen en/of te straffen",
    "Begrijpt hoe je nieuwe informatie kan laten landen en hangen",
    "Herkent het disbalans in de CAR met een student en kan hierop inspelen",
    "Laat iemand zelf nadenken",
    "Kan anticiperen op afhakers",
    "Geeft precies genoeg info om iemand zelf na te laten denken",
    "Weet de opdrachten te vinden die op alle niveaus van kennis relevant zijn"
  ],
  "wat_doe_en_probeer_ik_nu_meer_dan_voorheen": [
    "Voorbereid de les ingaan helpt altijd",
    "Niet elke les hoeft uitgekauwd te zijn, maar een leidraad helpt",
    "De mitsen en maren van zendend uitleggen",
    "Beter vermogen om te bepalen wat bij de klas op dit moment past",
    "Ben zoekende maar weet beter de balans te vinden in CAR",
    "Het bekendmaken van doelen is een belangrijk onderdeel",
    "Doelen maak ik nu iets specifieker (ruimte voor verbetering)",
    "Probeer de interactie te zoeken tijdens een verhaal",
    "Laat studenten veel vaker elkaar beoordelen",
    "Herhaling van stof is goed, vooral als je het combineert met een vorig onderdeel",
    "Het is goed en normaal om nog niet alles te kunnen en te weten",
    "Meer luisteren en oordeel proberen uit te stellen",
    "Hoe belangrijk het activeren van voorkennis is",
    "Meer oog voor groepsdynamiek",
    "Toetsing op kleinere schaal, meer formatief dan summatief",
    "Feedback geven, maar dan niet in antwoorden",
    "Geaccepteerd dat de norm en structuur niet altijd duidelijk is, en pas zodoende theorie toe",
    "Goed in de gaten houden of iemand voor zichzelf goed bezig is",
    "Vooral uitleg hoe die persoon zelf iets kan oplossen",
    "Differentiatie op cognitie en metacognitie",
    "Gat benoemen tussen uiteindelijk doel en huidige situatie, beter in definiëren van stapjes/subdoelen"
  ],
  "wat_vind_ik_nog_moeilijk": [
    "Ik geef zoveel en zolang 'les' aan mijn groep",
    "Om elk uur een 'les' te maken waar iedereen aan mee moet doen blijft lastig",
    "Leerlingen werken vooral aan hun eigen opdrachten",
    "Differentiëren is te doen, maar lastig te combineren met een verhaal vanuit mij",
    "Eigen onzekerheid",
    "Het uitstellen van mijn oordeel, soms nog te veel concluderend voor de student",
    "Cynisme loslaten",
    "Onderwijssysteem an sich",
    "Het goed uitspecificeren van een doel voor één 'lesuur'",
    "Te vaak teruggrijpend naar een module",
    "Weten wanneer een vraag beantwoord moet worden, neiging om op alles antwoord te geven (zelfs privé)"
  ],
  "wat_vind_ik_belangrijk": [
    "GROW = Groei, Realistisch, Opties en de Wil om te leren",
    "Doelen duidelijk maken",
    "Interactie met de studenten"
  ]
}

var i = 0

function MoveRight(){
    i = i+1;
    if(i == 1){
    scrollTo(100,200)
    }else
    {
    scrollTo(3000,200)
    }
}

function Draw(i){

var iets = JSON.parse(JSON.stringify(json))

for(var title in iets.wat_vind_ik_belangrijk)
    document.getElementById("draw").append(iets.wat_vind_ik_belangrijk[title])

}