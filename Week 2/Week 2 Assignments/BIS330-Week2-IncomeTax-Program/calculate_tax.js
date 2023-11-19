//Name: Morrese Morrison
//Date & Time Of Completion: 11/18/2023 7:52PM
//Professor: Michael Chu
//Universirty: PEIRCE College
//Assignment: Week 2 Assignment 7 Part B (Income Tax Calculator)
//Description: This Program Takes The Entry From A User, Their Taxable Income,
//Then Calculates The Income Tax Owed Based Off Of The Entry. There Are Severall Brackets
//Of Income That The Entered Value May Fall Under, Which Will Trigger The Associated Percentage
//And Additional Fee.
"use strict";
var $ = function (id) {
    return document.getElementById(id);
};




//(Code Block - 1) = This Code Block Ingests The User Input From The
//"Enter taxable income:" text box. The Value Is Entered Into The Box
//Via The "income" HTML ID Tag. From There It Is Attached To
//"Taxable_Income_Entered". After That The Variable Is Then Tested
//On Whether Or Not It Is A Number, If Not, An Error Message Will Appear.
//Also If The Number Is Less The Or Equal To Zero, Another Error Message Wil Appear.
//If All The Number Is Fully Validated, It Will Be Passed To The "calculateTax()"
//Function Where The Value Will Go Through Multiple If Statements To Calculate
//Total Tax. In Addition, Once The "calculateTax()" Function Is Completed
//The End Value Will Be Passed To The "Income Tax Owed" Text Box via the "tax"
//HTML ID Tag.
 var processEntry = function() {

    var Taxable_Income_Entered = parseFloat($("income").value);

    if (isNaN(Taxable_Income_Entered)) {
        alert("Entry Must Be Number!");
        } 

    if (Taxable_Income_Entered <= 0  ) {
        alert("Entry Must Be Greater Then Zero!");
    }

    else {
        $("tax").value = calculateTax(Taxable_Income_Entered);
   }


}



//(Code Block - 2) //Valid Entries From processEntry() Will Be Received
//Will Then Return The Tax Amount To This Variable **Taxable_Income_Calculated_Variable_Final** This 
//Will Then Be Fed Into The "Income Tax Owed" text box.
var calculateTax = function(Taxable_Income_Entered){

    
    //10% Mark Up
    if (Taxable_Income_Entered  > 0  && Taxable_Income_Entered <= 9275 ) {
        
                                                                     
        var Taxable_Income_Calculated_Variable = Taxable_Income_Entered - 0;


        var Taxable_Income_Calculated_Variable_Difference = Taxable_Income_Calculated_Variable  * .10;
        

        var Taxable_Income_Calculated_Variable_Final = 0 + Taxable_Income_Calculated_Variable_Difference

    }

    //15% Mark Up
    if (Taxable_Income_Entered  >= 9275  && Taxable_Income_Entered <= 37650 ) {
        
                                                                     
        var Taxable_Income_Calculated_Variable = Taxable_Income_Entered - 9275;


        var Taxable_Income_Calculated_Variable_Difference = Taxable_Income_Calculated_Variable  * 0.15;


        var Taxable_Income_Calculated_Variable_Final = 927.5 + Taxable_Income_Calculated_Variable_Difference

    }

    //25% Mark Up
    if (Taxable_Income_Entered  >= 37650  && Taxable_Income_Entered <= 91150 ) {
        
                                                                    
        var Taxable_Income_Calculated_Variable = Taxable_Income_Entered - 37650;

                                                                 
        var Taxable_Income_Calculated_Variable_Difference = Taxable_Income_Calculated_Variable  * 0.25;

                                                               
        var Taxable_Income_Calculated_Variable_Final = 5183.75 + Taxable_Income_Calculated_Variable_Difference

    }

    //28% Mark Up
    if (Taxable_Income_Entered  >= 91150  && Taxable_Income_Entered <= 190150 ) {
        
                                                                     
        var Taxable_Income_Calculated_Variable = Taxable_Income_Entered - 91150;

                                                                 
        var Taxable_Income_Calculated_Variable_Difference = Taxable_Income_Calculated_Variable  * 0.28;

                                                               
        var Taxable_Income_Calculated_Variable_Final = 18558.75 + Taxable_Income_Calculated_Variable_Difference

    }

    //33% Mark Up
    if (Taxable_Income_Entered  >= 190150  && Taxable_Income_Entered <= 413350 ) {
        
                                                                     
        var Taxable_Income_Calculated_Variable = Taxable_Income_Entered - 190150;

                                                                 
        var Taxable_Income_Calculated_Variable_Difference = Taxable_Income_Calculated_Variable  * 0.33;

                                                               
        var Taxable_Income_Calculated_Variable_Final = 46278.75 + Taxable_Income_Calculated_Variable_Difference

    }

    //35% Mark Up
    if (Taxable_Income_Entered  >= 413350  && Taxable_Income_Entered <= 415050 ) {
        
                                                                     
        var Taxable_Income_Calculated_Variable = Taxable_Income_Entered - 413350;

                                                                 
        var Taxable_Income_Calculated_Variable_Difference = Taxable_Income_Calculated_Variable  * 0.35;

                                                               
        var Taxable_Income_Calculated_Variable_Final = 119934.75 + Taxable_Income_Calculated_Variable_Difference

    }

    
    //39.6% Mark Up
    if (Taxable_Income_Entered  >= 415050) {
        
                                                                     
        var Taxable_Income_Calculated_Variable = Taxable_Income_Entered - 415050;

                                                                 
        var Taxable_Income_Calculated_Variable_Difference = Taxable_Income_Calculated_Variable  * 0.396;

                                                               
        var Taxable_Income_Calculated_Variable_Final = 120529.75 + Taxable_Income_Calculated_Variable_Difference

    }


    return Taxable_Income_Calculated_Variable_Final;
}




//(Code Block - 3) When The User Clicks The Calculate Button
//The Process Entry Button Will Fire The Function processEntry()
//Which Will Then Feed The Second Function calculateTax(), Then The End Value
//Will Be Set To The "tax" Text Box On The HTML Side.
window.onload = function () {


    $("calculate").onclick = processEntry;
    $("tax").focus();

};
