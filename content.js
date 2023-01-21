function find_cc_num_input(){
    var candidates = [
        "input[autocomplete='cc-number']",
        "input[name='cardNum']"
    ]
    for (i in candidates){
        if (document.querySelector(candidates[i])){
            return candidates[i]
        }
    }
    return false
}

function find_cc_name_input(){
    var candidates = [
        "input[name='nameOnCard']",
    ]
    for (i in candidates){
        if (document.querySelector(candidates[i])){
            return candidates[i]
        }
    }
    return false
}

function find_cc_exp_month_input(){
    // <input type="text" class="card-form-input card-form-input-small cardExpiry required expiryDate-input server-validation-input-border-bottom" name="expMonth" id="panel1104" minlength="5" maxlength="5" value="">
}

function find_cc_exp_year_input(){
    // 
}

function find_cc_cvv_input(){
    var candidates = [
        "input[name='cvv']",
        "input[data-input-key='cvvNumber']"
    ]
    for (i in candidates){
        if (document.querySelector(candidates[i])){
            return candidates[i]
        }
    }
    return false
}

function cc_num_input_is_empty(selector){
    if (document.querySelector(selector).value == ''){
        return true
    } else {
        return false
    }
}

function cc_autofill(cc_num_input_selector, cc_name_input_selector, cc_cvv_input_selector){
    // TODO: collect this info from the user and store in localstorage instead of hard-coding it
    var cc_num = '4242424242424242'
    var cc_name = 'Ian Miller'
    var exp_month = '9'
    var zero_padded_exp_month = '09' // TODO: need to generate this programmatically
    var exp_year = '2025'
    var exp_year_two_digit = '25'
    var cvv = 345
    var cc_exp_str = zero_padded_exp_month + '/' + exp_year_two_digit

    // fill the CC input field
    document.querySelector(cc_num_input_selector).value = cc_num
    
    // TODO: need other flavors of the month select values/labels to make sure it works across checkout pages/merchants
    if (document.querySelector("select[name='exp_month']")){
        // console.log(document.querySelector("select[name='exp_month']"))
        select_months = document.querySelector("select[name='exp_month']")
        for (i in select_months.options){
            if (select_months.options[i].value == exp_month){
                select_months.options[i].selected = true
            }
        }
    } else if (document.querySelector("input[autocomplete='cc-month']")){
        document.querySelector("input[autocomplete='cc-month']").value = zero_padded_exp_month
    } else {
        console.log('no exp_month input found')
    }

    // fill the cc exp year
    if (document.querySelector("select[name='exp_year']")){
        select_years = document.querySelector("select[name='exp_year']")
        for (i in select_years.options){
            if (select_years.options[i].value == exp_year){
                select_years.options[i].selected = true
            }
        }
    } else if (document.querySelector("input[autocomplete='cc-year']")){
        document.querySelector("input[autocomplete='cc-year']").value = exp_year
    } else {
        console.log('no exp_year input found')
    }
    
    // fill the variation that has month and year as a single string
    if (document.querySelector("input[name='expMonth']")){
        document.querySelector("input[name='expMonth']").value = cc_exp_str
    }

    // fill the billing name (if this field is present)
    if (document.querySelector(cc_name_input_selector)){
        document.querySelector(cc_name_input_selector).value = cc_name
    } else {
        console.log('no cc_name input found')
    }    

    // auto-filling the cvv may not be allowed, research needed
    if (document.querySelector(cc_cvv_input_selector)){
        document.querySelector(cc_cvv_input_selector).value = cvv
    } else {
        console.log('no cvv input found')
    }
}

function show_prompt(cc_num_input_selector, cc_name_input_selector, cc_cvv_input_selector){
    if (confirm('it looks like there\'s a CC input field on this page, want to autofill?')){
        cc_autofill(cc_num_input_selector, cc_name_input_selector, cc_cvv_input_selector)
    }
}

chrome.runtime.onMessage.addListener((msg) => {
    console.log('message received...evaluating...', msg.changeInfo)
    if (msg.cmd == 'eval_page'){
        // start monitoring for page DOM changes
/*
        console.log('message received to eval page, now see if we have a cc input to fill')
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        var observer = new MutationObserver(function(mutations, observer) {
            // fired when a mutation occurs
            console.log(mutations, observer);
            // ...
            var cc_num_input_selector = find_cc_num_input()
            
            if (cc_num_input_selector && cc_num_input_is_empty(cc_num_input_selector)){
                console.log('cc num input field found, and it is empty, so prompt the user to auto-fill')
                var cc_cvv_input_selector = find_cc_cvv_input()
                var cc_name_input_selector = find_cc_name_input()
                show_prompt(cc_num_input_selector, cc_name_input_selector, cc_cvv_input_selector)
            }    
        });

        // define what element should be observed by the observer
        // and what types of mutations trigger the callback
        observer.observe(document, {
        subtree: true,
        attributes: true
        //...
        });
        */
    }
});