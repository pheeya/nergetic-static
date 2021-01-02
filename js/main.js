const trustbox = document.getElementById('trustbox');
var prices = [18, 24, 28, 35, 42, 55, 65, 78, 100, 142, 165, 180];
var rates;
if (window.Trustpilot) {
    window.Trustpilot.loadFromElement(trustbox);
}

var steamHTML = `
                <div class="steam">
                        <label for="steam">Steam Username</label>
                        <input class="steamInputs" name="steam" placeholder="pantyDropper123" type="text" required></input>

                        <div class="inlineInput pass">
                            <label for="steamPass">Password</label>
                            <input class="steamInputs" name="steamPass" placeholder="*****" type="password" required></input>
                        </div>

                        <div class="inlineInput">
                            <label for="steamPassRe">Re-Enter Password</label>
                            <input class="steamInputs" name="steamPassRe" placeholder="*****" type="password" required></input>
                        </div>
                    </div>
                `;
var socialHTML = `
<div class="social">
    <label for="socialMail">Social Club Email</label>
    <input class="socialInputs" name="socialMail" placeholder="email@email.com" type="email" required></input>
    <div class="inlineInput pass">
        <label for="SocialPass">Password</label>
        <input class="socialInputs" name="password" placeholder="*****" type="password" required></input>
    </div>
    <div class="inlineInput">
        <label for="socialPassRe">Re-Enter Password</label>
        <input class="socialInputs" name="socialPassRe" placeholder="*****" type="password" required></input>
    </div>
</div>
`;
var epicHTML = `
<div class="epic">
    <label for="epicMail">Epic Games Email</label>
    <input class="epicInputs" name="epicMail" placeholder="email@email.com" type="email" required></input>
    <div class="inlineInput pass">
        <label for="epicPass">Password</label>
        <input class="epicInputs" name="password" placeholder="*****" type="password" required></input>
    </div>
    <div class="inlineInput">
        <label for="epicPassRe">Re-Enter Password</label>
        <input class="epicInputs" name="epicPassRe" placeholder="*****" type="password" required></input>
    </div>
</div>
`;
var verifyEpic = "I confirm that my account meets the following requirements: 2-Step Verification Off";
var verifySocial = "I confirm that my account meets the following requirements: 2-Step Verification Off";
var verifySteam = "I confirm that my account meets the following requirements: Steam Authenticator OFF, Steam Guard OFF";

getFreshRates();

function getFreshRates() {
    fetch("https://api.exchangeratesapi.io/latest?symbols=USD,GBP,AUD,CAD")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            rates = {
                gbp: data.rates['GBP'],
                usd: data.rates['USD'],
                cad: data.rates['CAD'],
                aud: data.rates['AUD']
            }
            console.log(rates)
        })
}

var roll = document.getElementsByClassName('popout');
var overlay = document.getElementsByClassName('fullOverlay');
var learnButton = document.getElementsByClassName("learnMoreContent");
var learn = document.getElementsByClassName('learnMore');
var buyButton = document.getElementsByClassName("buyButton");
var buttonDivider = document.getElementsByClassName("buttonDivider");
let i;
for (i = 0; i < roll.length; i++) {
    if (learnButton[i].textContent == "") {
        learnButton[i].style.visibility = "hidden"
        learnButton[i].style.height = "36px"
        buyButton[i].style.position = "relative"
        buttonDivider[i].style.display = "block"
    }
}

function openMenu() {
    var nav = document.getElementById('mNav');
    if (nav.style.height != "290px") {
        nav.style.height = "290px"
    }
    else {
        nav.style.height = "0";
    }
}

function eur() {
    Active(0);
    let values = {
        select2_1: "18.00€", select2_2: "22.00€", select2_3: "30.00€",
        select2_4: "33.00€", select2_5: "42.00€", select2_6: "55.00€",
        select2_7: "80.00€", select2_8: "150.00€",

        select3_1: "20.00€", select3_2: "35.00€", select3_3: "55.00€",
        select3_4: "80.00€", select3_5: "95.00€",

        select4_1: "5.00€", select4_2: "7.00€", select4_3: "9.00€",
        select4_4: "11.00€", select4_5: "13.00€", select4_6: "16.00€",
        select4_7: "18.00€"
    };
    setCurrencySelect1("currency-select-1", 1, "€");
    setCurrencySelect2("currency-select-2", values);
    setCurrencySelect5("currency-select-5", values);
    setCurrencySelect6("currency-select-6", values);
    setItem7("25.00€");
}

function usd() {
    Active(1);
    let values = {
        select2_1: "$" + Math.round(18.00 * 1.12).toFixed(2), select2_2: "$" + Math.round(22.00 * 1.12).toFixed(2), select2_3: "$" + Math.round(30.00 * 1.12).toFixed(2),
        select2_4: "$" + Math.round(33.00 * 1.12).toFixed(2), select2_5: "$" + Math.round(42.00 * 1.12).toFixed(2), select2_6: "$" + Math.round(55.00 * 1.12).toFixed(2),
        select2_7: "$" + Math.round(80.00 * 1.12).toFixed(2), select2_8: "$" + Math.round(150.00 * 1.12).toFixed(2),

        select3_1: "$22.00", select3_2: "$28.00", select3_3: "$38.00",
        select3_4: "$55.00", select3_5: "$71.00",

        select4_1: "$5.60", select4_2: "$7.80", select4_3: "$10.00",
        select4_4: "$12.30", select4_5: "$14.60", select4_6: "$18.00",
        select4_7: "$20.00",
        select5_1: "$30.00", select5_2: "$32.00", select5_3: "$40.00",
        select5_4: "$50.00", select5_5: "$70.00", select5_6: "$75.00",
        select5_7: "$80.00",
        select6_1: "$18.00", select6_2: "$21.00", select6_3: "$26.00",
        select6_4: "$34.00",

        select7_1: "$67.00", select7_2: "$28.00", select7_3: "$67.00",
        select7_4: "N/A", select7_5: "$24.00", select7_6: "$33.00", select7_7: "$39.00", select7_8: "$61.00",
        select8_1: "$54.00", select8_2: "$76.00"
    }
    setCurrencySelect1("currency-select-1", rates.usd, "$");
    setCurrencySelect2("currency-select-2", values);
    setCurrencySelect5("currency-select-5", values);
    setCurrencySelect6("currency-select-6", values);
    setItem7("$27");
}

function gbp() {
    Active(2);
    let values = {
        select2_1: "£" + Math.round(18.00 * 0.91).toFixed(2), select2_2: "£" + Math.round(22.00 * 0.91).toFixed(2), select2_3: "£" + Math.round(30.00 * 0.91).toFixed(2),
        select2_4: "£" + Math.round(33.00 * 0.91).toFixed(2), select2_5: "£" + Math.round(42.00 * 0.91).toFixed(2), select2_6: "£" + Math.round(55.00 * 0.91).toFixed(2),
        select2_7: "£" + Math.round(80.00 * 0.91).toFixed(2), select2_8: "£" + Math.round(150.00 * 0.91).toFixed(2),

        select3_1: "£17.00", select3_2: "£30.00", select3_3: "£47.00",
        select3_4: "£55.00", select3_5: " £81.00",

        select4_1: "£4.30", select4_2: "£6.00 ", select4_3: "£7.70 ",
        select4_4: "£9.40 ", select4_5: "£11.00 ", select4_6: "£13.70 ",
        select4_7: "£15.40"
        ,
        select5_1: "£23.00", select5_2: "£24.00", select5_3: "£30.00",
        select5_4: "£37.00", select5_5: "£52.00", select5_6: "£56.00",
        select5_7: "£60.00"
        ,
        select6_1: "£14.00", select6_2: "£16.00", select6_3: "£20.00",
        select6_4: "£26.00",
        select7_1: "£51.00", select7_2: "£21.00", select7_3: "£51.00",
        select7_4: "N/A", select7_5: "£19.00", select7_6: "£26.00", select7_7: "£30.00", select7_8: "£47.00"
        ,
        select8_1: "£44.00", select8_2: "£61.00"
    }
    setCurrencySelect1("currency-select-1", rates.gbp, "GBP");
    setCurrencySelect2("currency-select-2", values);
    setCurrencySelect5("currency-select-5", values);
    setCurrencySelect6("currency-select-6", values);
    setItem7("£22");
}

function aud() {
    Active(3);
    let values = {
        select2_1: "AUD$" + Math.round(18.00 * 1.63).toFixed(2), select2_2: "AUD$" + Math.round(22.00 * 1.63).toFixed(2), select2_3: "AUD$" + Math.round(30.00 * 1.63).toFixed(2),
        select2_4: "AUD$" + Math.round(33.00 * 1.63).toFixed(2), select2_5: "AUD$" + Math.round(42.00 * 1.63).toFixed(2), select2_6: "AUD$" + Math.round(55.00 * 1.63).toFixed(2),
        select2_7: "AUD$" + Math.round(80.00 * 1.63).toFixed(2), select2_8: "AUD$" + Math.round(150.00 * 1.63).toFixed(2),

        select3_1: "$32.50 AUD", select3_2: "$56.80 AUD", select3_3: "$89.30 AUD",
        select3_4: "45.00€", select3_5: "$154.20 AUD ",


        select4_1: "$8.00 AUD", select4_2: "$11.40 AUD", select4_3: "$14.60 AUD",
        select4_4: "$17.90 AUD", select4_5: "$21.00 AUD", select4_6: "$26.00 AUD",
        select4_7: "$29.20 AUD "

        ,

        select5_1: "$44.00 AUD", select5_2: "$46.00 AUD", select5_3: "$58.00 AUD",
        select5_4: "$72.00 AUD", select5_5: "$101.00 AUD", select5_6: "$109.00 AUD",
        select5_7: "$116.00 AUD"

        ,

        select6_1: "$26.00 AUD", select6_2: "$31.00 AUD", select6_3: "$38.00 AUD",
        select6_4: "$50.00 AUD",

        select7_1: "$96.00 AUD", select7_2: "$40.00 AUD", select7_3: "$96.00 AUD",
        select7_4: "N/A", select7_5: "$35.00 AUD", select7_6: "$48.00 AUD", select7_7: "$56.00 AUD", select7_8: "$88.00 AUD"

        ,
        select8_1: "$85.00 AUD", select8_2: "$118.00 AUD"
    }
    setCurrencySelect1("currency-select-1", rates.aud, "AUD");
    setCurrencySelect2("currency-select-2", values);
    setCurrencySelect5("currency-select-5", values);
    setCurrencySelect6("currency-select-6", values);
    setItem7("$41 AUD");
}

function cad() {
    Active(4);
    let values = {
        select2_1: "CAD$" + Math.round(18.00 * 1.54).toFixed(2), select2_2: "CAD$" + Math.round(22.00 * 1.54).toFixed(2), select2_3: "CAD$" + Math.round(30.00 * 1.54).toFixed(2),
        select2_4: "CAD$" + Math.round(33.00 * 1.54).toFixed(2), select2_5: "CAD$" + Math.round(42.00 * 1.54).toFixed(2), select2_6: "CAD$" + Math.round(55.00 * 1.54).toFixed(2),
        select2_7: "CAD$" + Math.round(80.00 * 1.54).toFixed(2), select2_8: "CAD$" + Math.round(150.00 * 1.54).toFixed(2),

        select3_1: "$29.30 CAD", select3_2: "$51.20 CAD ", select3_3: "$80.50 CAD",
        select3_4: "45.00€", select3_5: "$139.00 CAD", select3_6: "70.00€",
        select3_7: "85.00€", select3_8: "95.00€",

        select4_1: "$7.30 CAD", select4_2: "$10.25 CAD ", select4_3: " $13.20 CAD",
        select4_4: "$16.00 CAD", select4_5: "$19.00 CAD", select4_6: "$23.40 CAD ",
        select4_7: "$26.30 CAD"

        ,

        select5_1: "$40.00 CAD", select5_2: "$42.00 CAD", select5_3: "$53.00 CAD",
        select5_4: "$66.00 CAD", select5_5: "$92.00 CAD", select5_6: "$99.00 CAD",
        select5_7: "$105.00 CAD"

        ,

        select6_1: "$24.00 CAD", select6_2: "$28.00 CAD", select6_3: "$35.00 CAD",
        select6_4: "$45.00 CAD",

        select7_1: "$88.00 CAD", select7_2: "$37.00 CAD", select7_3: "$88.00 CAD",
        select7_4: "N/A", select7_5: "$32.00 CAD", select7_6: "$44.00 CAD", select7_7: "$51.00 CAD", select7_8: "$80.00 CAD"

        ,
        select8_1: "$76.00 CAD", select8_2: "$106.00 CAD"
    }
    setCurrencySelect1("currency-select-1", rates.cad, "CAD");
    setCurrencySelect2("currency-select-2", values);
    setCurrencySelect5("currency-select-5", values);
    setCurrencySelect6("currency-select-6", values);
    setItem7("$37 CAD");
}

function setCurrencySelect1(id, rates, symbol) {
    let card1 = document.getElementById(id);
    card1.innerHTML = `
        <option value="1">15 Million Booster - ${Math.round(prices[0] * rates).toFixed(2)} ${symbol}</option>
        <option value="2">25 Million Booster - ${Math.round(prices[1] * rates).toFixed(2)} ${symbol}</option>
        <option value="3">30 Million Booster - ${Math.round(prices[2] * rates).toFixed(2)} ${symbol}</option>
        <option value="4">50 Million Booster - ${Math.round(prices[3] * rates).toFixed(2)} ${symbol}</option>
        <option value="5">75 Million Booster - ${Math.round(prices[4] * rates).toFixed(2)} ${symbol}</option>
        <option value="6">100 Million Booster - ${Math.round(prices[5] * rates).toFixed(2)} ${symbol}</option>
        <option value="7">150 Million Booster - ${Math.round(prices[6] * rates).toFixed(2)} ${symbol}</option>
        <option value="8">200 Million Booster - ${Math.round(prices[7] * rates).toFixed(2)} ${symbol}</option>
        <option value="9">300 Million Booster - ${Math.round(prices[8] * rates).toFixed(2)} ${symbol}</option>
        <option value="10">500 Million Booster - ${Math.round(prices[9] * rates).toFixed(2)} ${symbol}</option>
        <option value="447">750 Million Booster - ${Math.round(prices[10] * rates).toFixed(2)} ${symbol}</option>
        <option value="448">1 Billion Booster - ${Math.round(prices[11] * rates).toFixed(2)} ${symbol}</option>
    `;
}

function setCurrencySelect2(id, values) {
    let card = document.getElementById(id);

    card.innerHTML = `
        <option value="11">10 Million Booster - ${values.select2_1}</option>
        <option value="12">15 Million Booster - ${values.select2_2}</option>
        <option value="13">25 Million Booster - ${values.select2_3}</option>
        <option value="14">30 Million Booster - ${values.select2_4}</option>
        <option value="15">50 Million Booster - ${values.select2_5}</option>
        <option value="16">75 Million Booster - ${values.select2_6}</option>
        <option value="17">100 Million Booster - ${values.select2_7}</option>
        <option value="18">200 Million Booster - ${values.select2_8}</option>
    `;
}

function setCurrencySelect5(id, values) {
    let card = document.getElementById(id);

    card.innerHTML = `
        <option value="21">100 Million  Booster - ${values.select3_1}</option>
        <option value="22">300 Million Booster - ${values.select3_2}</option>
        <option value="23">500 Million Booster - ${values.select3_3}</option>
        <option value="24">800 Million Booster - ${values.select3_4}</option>
        <option value="25">1  Billion Booster - ${values.select3_5}</option>
    `;
}

function setCurrencySelect6(id, values) {
    let card = document.getElementById(id);

    card.innerHTML = `
        <option value="26">Apply 250 Rank - ${values.select4_1}</option>
        <option value="27">Apply 420 Rank - ${values.select4_2}</option>
        <option value="28">Apply 500 Rank - ${values.select4_3}</option>
        <option value="29">Apply 750 Rank - ${values.select4_4}</option>
        <option value="30">Apply 1000 Rank - ${values.select4_5}</option>
        <option value="31">Apply 6666 Rank - ${values.select4_6}</option>
        <option value="32">Apply 8000 Rank - ${values.select4_7}</option>
    `;
}

function scrollF() {
    var ul = document.getElementById("footerScroller");
    ul.scrollBy({
        left: 275,
        behavior: "smooth"
    });

    if (window.innerWidth < 471) {
        if (window.innerWidth <= 350) {
            ul.scrollBy({
                left: 309,
                behavior: "smooth"
            })
        }
        else {
            ul.scrollBy({
                left: 427.5,
                behavior: "smooth"
            })
        }
    }
}

function scrollB() {
    var ul = document.getElementById("footerScroller");
    ul.scrollBy({
        left: -277,
        behavior: "smooth"
    });
    if (window.innerWidth < 471) {
        if (window.innerWidth <= 350) {
            ul.scrollBy({
                left: -309,
                behavior: "smooth"
            })

        } else {
            ul.scrollBy({
                left: -427.5,
                behavior: "smooth"
            })
        }
    }
}

function filter() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('query');
    filter = input.value.toUpperCase();
    ul = document.getElementById("queryUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        //   a = li[i].getElementsByTagName("a")[0];
        txtValue = li[i].textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function showAll() {
    var tabs = document.getElementsByClassName("faqDef")
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("faqActive")
    }

    tabs[0].classList.add("faqActive");

    var questions = document.getElementsByClassName("questionComp");
    for (var i = 0; i < questions.length; i++) {
        questions[i].style.display = "none"
    }

    var preQuestions = document.getElementsByClassName("type_all");
    for (var i = 0; i < preQuestions.length; i++) {
        preQuestions[i].style.display = "inline-block"
    }
}

function showPreSale() {
    var tabs = document.getElementsByClassName("faqDef")
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("faqActive")
    }

    tabs[1].classList.add("faqActive");

    var questions = document.getElementsByClassName("questionComp");
    for (var i = 0; i < questions.length; i++) {
        questions[i].style.display = "none"
    }

    var preQuestions = document.getElementsByClassName("type-pre-sale");
    for (var i = 0; i < preQuestions.length; i++) {
        preQuestions[i].style.display = "inline-block"
    }
}

function showOrder() {

    var tabs = document.getElementsByClassName("faqDef")
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("faqActive")
    }

    tabs[2].classList.add("faqActive");

    var questions = document.getElementsByClassName("questionComp");
    for (var i = 0; i < questions.length; i++) {
        questions[i].style.display = "none"
    }

    var preQuestions = document.getElementsByClassName("type-order");
    for (var i = 0; i < preQuestions.length; i++) {
        preQuestions[i].style.display = "inline-block"
    }
}

function reset() {
    var questions = document.getElementsByClassName("questionComp");
    for (var i = 0; i < questions.length; i++) {
        questions[i].style.display = "inline-block"

    }
}
function activator() {
    reset();
    checkForEmpty();
    let i;
    var faq = document.getElementsByClassName('faqDef');
    for (i = 0; i < faq.length; i++) {
        faq[i].classList.remove("faqActive");
        faq[i].classList.add("faq");
    }
    faq[this.state.currentCat - 1].classList.add("faqActive");
    faq[this.state.currentCat - 1].classList.remove("faq");
    console.log(this.state.currentCat - 1)
}

function checkForEmpty() {
    var faq = document.getElementsByClassName('faq')[0];
    faq.classList.add("faqActive");
    var questions = document.getElementsByClassName("questionComp");

    // var li = questions[0].getElementsByTagName("li")[0];
    // var h3 = li.getElementsByTagName("h3")[0];
    // console.log(h3)
    for (var i = 0; i < questions.length; i++) {
        var heading = questions[i].getElementsByTagName("li")[0].getElementsByTagName("h3")[0];
        console.log(heading.innerText);
        if (heading.innerText == "empty") {
            questions[i].style.display = "none"
        }

    }

}

function toggleFaq(keys) {
    var content = document.getElementsByClassName("content")[keys];
    var arrow = document.getElementsByClassName("fa-sort-down")[keys];
    if (content.style.maxHeight != "200px") {
        content.style.maxHeight = "200px"
        arrow.style.transform = "rotate(180deg)"
    }
    else if (content.style.maxHeight != "0") {
        content.style.maxHeight = "0"
        arrow.style.transform = ""
    }
}

function popoutOff() {
    var overlay = document.getElementsByClassName('fullOverlay');
    var learn = document.getElementsByClassName('learnMore');
    var roll = document.getElementsByClassName('popout');
    let i;
    for (i = 0; i < roll.length; i++) {
        roll[i].classList.remove("popout-open");
        learn[i].classList.remove("learnMore-open");
        overlay[i].style.zIndex = "-2";
        overlay[i].style.opacity = '0'
    }
}

function learnMore(keys) {
    var learn = document.getElementsByClassName('learnMore');
    console.log(learn)
    learn[keys].classList.add("learnMore-open");

    var overlay = document.getElementsByClassName('fullOverlay');
    overlay[keys].style.zIndex = "1"
    overlay[keys].style.opacity = "1"
}


function popout(keys) {
    var roll = document.getElementsByClassName('popout');
    roll[keys].classList.add("popout-open");
    var overlay = document.getElementsByClassName('fullOverlay');
    overlay[keys].style.zIndex = "1"
    overlay[keys].style.opacity = "1"
}

function allPlatforms() {
    homePageReset();
    homeChecker("All");
    var plat = document.getElementsByClassName("plat_all")[0];
    plat.classList.add("platform-active");

    var eye = document.getElementById("eye");
    eye.classList.remove("fa-eye-slash")
    eye.classList.add("fa-eye")

}
function pc() {
    homePageReset();
    homeChecker("GTA 5 PC");
    var plat = document.getElementsByClassName("plat_windows")[0];
    plat.classList.add("platform-active")
}
function ps4() {
    homePageReset();
    homeChecker("GTA 5 PS4");
    var plat = document.getElementsByClassName("plat_ps4")[0];
    plat.classList.add("platform-active")
}

function homePageReset() {
    var platIcons = document.getElementsByClassName("platIcoHolder");
    var eye = document.getElementById("eye");
    eye.classList.add("fa-eye-slash")
    eye.classList.remove("fa-eye")
    for (let i = 0; i < platIcons.length; i++) {
        platIcons[i].classList.remove("platform-active")
    }

    var listCont = document.getElementsByClassName('cardListContainer');
    var card = document.getElementsByTagName('cardjs');

    let i;
    for (i = 0; i < listCont.length; i++) {
        card[i].style.display = "inline-block"
    }
}

function homeChecker(currentPlat) {
    var listCont = document.getElementsByClassName('cardListContainer');
    var card = document.getElementsByTagName('cardjs');
    let i;
    if (currentPlat != "All") {
        for (i = 0; i < listCont.length; i++) {
            var ul = listCont[i].getElementsByTagName('ul')[0];
            var platform = ul.getElementsByTagName('li')[0].innerText;
            if (platform != currentPlat) {
                card[i].style.display = "none";
            }
        }
    }
}

function Active(x) {
    console.log(x);
    var nav = document.getElementsByClassName("headControls")[0];
    var ul = nav.getElementsByTagName("ul")[0];
    var li = ul.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
        li[i].classList.remove("active");
        li[i].classList.add("li");
    }
    li[x].classList.add("active");
    li[x].classList.remove("li");
}

function selectSteam(index) {
    var aId = "a-container-" + index;
    var btnClass = "steam-btn-" + index;
    var verrifyId = "verify-" + index;
    resetActiveTab(0, btnClass);
    document.getElementById(aId).innerHTML = steamHTML;
    document.getElementById(verrifyId).innerHTML = verifySteam;
}

function selectSocial(index) {
    var aId = "a-container-" + index;
    var btnClass = "steam-btn-" + index;
    var verrifyId = "verify-" + index;
    resetActiveTab(1, btnClass);
    document.getElementById(aId).innerHTML = socialHTML;
    document.getElementById(verrifyId).innerHTML = verifySocial;
}

function selectEpic(index) {
    var aId = "a-container-" + index;
    var btnClass = "steam-btn-" + index;
    var verrifyId = "verify-" + index;
    resetActiveTab(2, btnClass);
    document.getElementById(aId).innerHTML = epicHTML;
    document.getElementById(verrifyId).innerHTML = verifyEpic;
}

function resetActiveTab(x, btnClass) {
    let btns = document.getElementsByClassName(btnClass);

    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
        btns[i].classList.remove("steamButton");
        btns[i].classList.add("steamButton");
    }

    btns[x].classList.remove("steamButton");
    btns[x].classList.add("active");
}

function setItem7(price) {
    document.getElementById("item-7-price").innerHTML = price;
}