
//var shuffleSequence = seq(anyType);

var shuffleSequence = seq(
    
    "consent",
    
    //"prolificID",
    
    "setcounter",
    
    
    //the sequence for the SPR task.
    "instruction_SPR",
    
    sepWith("sep", seq("SPR_practice1", "SPR_practice2", "SPR_practice3")),
    
    sepWith("sep", seq(rshuffle(startsWith("SPRFiller_"), startsWith("SPRTest_")))),
    
    "sr",
    
    "exit_SPR_A",
    
    //Note: in order to turn on randomization, replace 'shuffle' in the sequence above with 'rshuffle'

);


var defaults = [
        "Question", {as: ["Yes", "No"], randomOrder: false},
        "DashedSentence", {mode: "self-paced reading", hideUnderscores: true},
        "AcceptabilityJudgment", {as: ["1", "2", "3", "4", "5", "6", "7"], presentAsScale: true, instructions: "Rate the BOLD SENTENCE using number keys or click boxes.", leftComment: "(Not at all acceptable)", rightComment: "(Totally acceptable)"},
    
    ];

var practiceItemTypes = ["SPR_practice1", "SPR_practice2", "SPR_practice3"];
var centerItems = true;
var ds = "DashedSentence";
var manualSendResults = true;


var items = [
    
    ["sep", "Separator", {transfer: 1000, normalMessage: "+", ignoreFailure: true}],
    
    
    ["consent", "Message", {consentRequired: true,
                      html: {include: "consent2.html"}}],
    
    ["setcounter", "__SetCounter__", { }],
    
    
    //["prolificID", "Form", {consentRequired: true, html: {include: "prolificID.html"}}],
    
    
    //Begin SPR
    
    ["instruction_SPR", "Form", {consentRequired: true,
                      html: {include: "instruction_SPR.html"}}],
    
    ["SPR_practice1", ds, {s: "A reporter greeted a senator after a few minutes."},
             "Question", {q: "Did the reporter greet a senator?"}],
    ["SPR_practice2", ds, {s: "A man screamed who was standing at the very edge of the crowd."},
             "Question", {q: "Did the man scream?"}],
    ["SPR_practice3", ds, {s: "Roger told a very entertaining story about a trip to Asia."},
             "Question", {q: "Did Roger tell a story?"},
             "Message", {transfer: "keypress", html: {include: "end_practice.html"}}],

    
    
    [["SPRTest_1a", 1], ds, {s: "Bill wrote Jill arrived safely today."},
             "Question", {q: "Did Jill arrive safely?", hasCorrect: "Yes"}],
    [["SPRTest_1b", 1], ds, {s: "Bill wrote that Jill arrived safely today."},
             "Question", {q: "Did Jill arrive safely?", hasCorrect: "Yes"}],
    
    [["SPRTest_2a", 2], ds, {s: "Jim forgot Pam needed a ride home."},
             "Question", {q: "Did Pam need a ride?", hasCorrect: "Yes"}],
    [["SPRTest_2b", 2], ds, {s: "Jim forgot that Pam needed a ride home."},
             "Question", {q: "Did Pam need a ride?", hasCorrect: "Yes"}],
    
    [["SPRTest_3a", 3], ds, {s: "John claimed luggage carries more now."},
             "Question", {q: "Did John make a claim?", hasCorrect: "Yes"}],
    [["SPRTest_3b", 3], ds, {s: "John claimed that luggage carries more now."},
             "Question", {q: "Did John make a claim?", hasCorrect: "Yes"}],
    
    [["SPRTest_4a", 4], ds, {s: "Bill protested war scares little kids."},
             "Question", {q: "Did Bill scare little kids?", hasCorrect: "No"}],
    [["SPRTest_4b", 4], ds, {s: "Bill protested that war scares little kids."},
             "Question", {q: "Did Bill scare little kids?", hasCorrect: "No"}],
    
    [["SPRTest_5a", 5], ds, {s: "Sally forgot gifts excited baby boys."},
             "Question", {q: "Did Sally excite baby boys?", hasCorrect: "No"}],
    [["SPRTest_5b", 5], ds, {s: "Sally forgot that gifts excited baby boys."},
             "Question", {q: "Did Sally excite baby boys?", hasCorrect: "No"}],
    
    [["SPRTest_6a", 6], ds, {s: "John admitted girls skate fast too."},
             "Question", {q: "Did John admit that girls skate slow?", hasCorrect: "No"}],
    [["SPRTest_6b", 6], ds, {s: "John admitted that girls skate fast too."},
             "Question", {q: "Did John admit that girls skate slow?", hasCorrect: "No"}],
    
    [["SPRTest_7a", 7], ds, {s: "Rob suspected Jane lifts weights now."},
             "Question", {q: "Did Rob suspect something?", hasCorrect: "Yes"}],
    [["SPRTest_7b", 7], ds, {s: "Rob suspected that Jane lifts weights now."},
             "Question", {q: "Did Rob suspect something?", hasCorrect: "Yes"}],
    
    [["SPRTest_8a", 8], ds, {s: "Joe taught girls marry young nowadays."},
             "Question", {q: "Did Joe teach?", hasCorrect: "Yes"}],
    [["SPRTest_8b", 8], ds, {s: "Joe taught that girls marry young nowadays."},
             "Question", {q: "Did Joe teach?", hasCorrect: "Yes"}],
    
    [["SPRTest_9a", 9], ds, {s: "Jack observed news travels fast here."},
             "Question", {q: "Does news travel fast here?", hasCorrect: "Yes"}],
    [["SPRTest_9b", 9], ds, {s: "Jack observed that news travels fast here."},
             "Question", {q: "Does news travel fast here?", hasCorrect: "Yes"}],
        
    [["SPRTest_10a", 10], ds, {s: "Mel denied John would stop smoking."},
             "Question", {q: "Did Mel admit something?", hasCorrect: "No"}],
    [["SPRTest_10b", 10], ds, {s: "Mel denied that John would stop smoking."},
             "Question", {q: "Did Mel admit something?", hasCorrect: "No"}],
    
    [["SPRTest_11a", 11], ds, {s: "Joe advised students cause riots now."},
             "Question", {q: "Did Joe cause riots?", hasCorrect: "No"}],
    [["SPRTest_11b", 11], ds, {s: "Joe advised that students cause riots now."},
             "Question", {q: "Did Joe cause riots?", hasCorrect: "No"}],
    
    [["SPRTest_12a", 12], ds, {s: "Kim accepted pens write better now."},
             "Question", {q: "Do pens write worse now?", hasCorrect: "No"}],
    [["SPRTest_12b", 12], ds, {s: "Kim accepted that pens write better now."},
             "Question", {q: "Do pens write worse now?", hasCorrect: "No"}],
    
    
    
    [["SPRFiller_49", 49], ds, {s: "Bob conducted an inquiry about a file."},
             "Question", {q: "Did Bob inquire about a file?", hasCorrect: "Yes"}],
    [["SPRFiller_50", 50], ds, {s: "Kim wrote a report for the chairman."},
             "Question", {q: "Did Kim write a report?", hasCorrect: "Yes"}],
    //[["SPRFiller_51", 51], ds, {s: "The terrorist assassinated the newsman in cold blood."},
             //"Question", {q: "Did the newsman insult the terrorist?", hasCorrect: "Yes"}],
    [["SPRFiller_52", 52], ds, {s: "Tim lied to a consultant about his age."},
             "Question", {q: "Did Tim lie?", hasCorrect: "Yes"}],
    [["SPRFiller_53", 53], ds, {s: "Little Robbie hugged his teddybear tightly."},
             "Question", {q: "Did Little Robbie hug a teddybear?", hasCorrect: "Yes"}],
    [["SPRFiller_54", 54], ds, {s: "Rick monitored James for several months."},
             "Question", {q: "Did Rick monitor someone?", hasCorrect: "Yes"}],
    //[["SPRFiller_55", 55], ds, {s: "The witch was hanged by an executioner promptly at dawn."},
             //"Question", {q: "Did the witch enchant a child?", hasCorrect: "Yes"}],
    [["SPRFiller_56", 56], ds, {s: "Sally met with a beautician before her recital."},
             "Question", {q: "Did Sally meet with a beautician?", hasCorrect: "Yes"}],
    [["SPRFiller_57", 57], ds, {s: "Marge was greeted by John at the door."},
             "Question", {q: "Did John greet someone?", hasCorrect: "Yes"}],
    [["SPRFiller_58", 58], ds, {s: "Fred stole some money from Walter yesterday."},
             "Question", {q: "Did Fred steal money?", hasCorrect: "Yes"}],
    [["SPRFiller_59", 59], ds, {s: "Richard was knighted by the queen."},
             "Question", {q: "Was Richard knighted?", hasCorrect: "Yes"}],
    //[["SPRFiller_B60", 60], ds, {s: "For_this_item, I'll_give_you the_correct_answer. \n Please answer this question with 'Yes'."},
             //"Question", {q: "What is the answer to this question?", hasCorrect: "Yes"}],
    [["SPRFiller_61", 61], ds, {s: "Jane toasted a muffin for her friend."},
             "Question", {q: "Did Jane toast a muffin?", hasCorrect: "Yes"}],
    [["SPRFiller_62", 62], ds, {s: "Robert described a scenario for his class."},
             "Question", {q: "Did Robert described a scenario?", hasCorrect: "Yes"}],
    [["SPRFiller_63", 63], ds, {s: "Martha was rescued by a fireman."},
             "Question", {q: "Did the fireman rescue Martha?", hasCorrect: "Yes"}],
    [["SPRFiller_64", 64], ds, {s: "Collin misled the jury when he testified."},
             "Question", {q: "Was the jury misled?", hasCorrect: "Yes"}],
    [["SPRFiller_65", 65], ds, {s: "Anthony found a car for Will right away."},
             "Question", {q: "Was a car found for Will?", hasCorrect: "Yes"}],
    [["SPRFiller_66", 66], ds, {s: "Wallice respected his boss because she went to Juilliard."},
             "Question", {q: "Was the boss respected by Wallice?", hasCorrect: "Yes"}],
    [["SPRFiller_67", 67], ds, {s: "Frank commended Joy for her abilities."},
             "Question", {q: "Was Joy commended by Frank?", hasCorrect: "Yes"}],
    //[["SPRFiller_68", 68], ds, {s: "An evil robot killed a scientist before escaping from the laboratory."},
             //"Question", {q: "Did the robot escape?", hasCorrect: "Yes"}],
    [["SPRFiller_69", 69], ds, {s: "Phillip irritated Cathy during the sermon."},
             "Question", {q: "Was Cathy irritated by Phillip?", hasCorrect: "Yes"}],
    //[["SPRFiller_70", 70], ds, {s: "A_presenter gave_a_talk on_the_legal_ramifications of_sexual_harassment. \n The presenter was criticized by a legislator because of his speech impediment."},
             //"Question", {q: "Did the presenter have a speech impediment?", hasCorrect: "Yes"}],
    [["SPRFiller_71", 71], ds, {s: "Patrick angered Ruth because he interrupted her."},
             "Question", {q: "Was Ruth angered by Patrick?", hasCorrect: "Yes"}],
    [["SPRFiller_72", 72], ds, {s: "Becky opened a file for Matt."},
             "Question", {q: "Was the file opened by Becky?", hasCorrect: "Yes"}],
    [["SPRFiller_73", 73], ds, {s: "Mitch found a film starring Rebecca."},
             "Question", {q: "Was the film found by Mitch?", hasCorrect: "Yes"}],
    //["SPR_FillerAP_a", ds, {s: "A_reporter and_a_news_anchor were_talking at_a_political_fundraiser. \n The reporter greeted a senator after a few minutes."},
             //"Question", {q: "Did the reporter greet the senator?"}],
    [["SPRFiller_AP_b74", 74], ds, {s: "Jane asked Ron about his past."},
             "Question", {q: "Did Ron ask Jane something?", hasCorrect: "No"}],
    [["SPRFiller_AP_c75", 75], ds, {s: "Bart contacted Harold for help yesterday."},
             "Question", {q: "Did Harold contact Bart?", hasCorrect: "No"}],
    //["SPR_FillerAP_d", ds, {s: "A_technician decided_to_post a_profile on_an_online_dating_service. \n A widow was pursued by the technician a few days later, because she had a similar profile."},
             //"Question", {q: "Did the technician pursue the widow?"}],
    //[["SPRFiller_B76", 76], ds, {s: "For_this_item, I'll_give_you the_correct_answer. \n Please answer this question with 'No'."},
             //"Question", {q: "What is the answer to this question?", hasCorrect: "No"}],
    //["SPR_FillerAP_a", ds, {s: "A_scientist was_looking_for an_academic_job in_April. \n The scientist emailed a technician about a job at Columbia University."},
             //"Question", {q: "Did the scientist email the technician?"}],
    [["SPRFiller_AP_b77", 77], ds, {s: "Drew defeated Ronda in speed chess."},
             "Question", {q: "Did Ronda defeat Drew?", hasCorrect: "No"}],
    [["SPRFiller_AP_c78", 78], ds, {s: "Julee invited Matt to a party over the phone."},
             "Question", {q: "Did Matt invite Julee?", hasCorrect: "No"}],
    //["SPR_FillerAP_d", ds, {s: "A_politician attended_a_meeting of_the_town_renovations_committee at_the_town_hall. \n A journalist was criticized by the politician at the end of the meeting."},
             //"Question", {q: "Did the journalist criticize the politician?"}],
    //["SPR_FillerAP_a", ds, {s: "An_ambassador was_scheduled_for_a_meeting at_the_capitol_building at_noon. \n The ambassador approached a receptionist in the entrance hall, just before the meeting."},
             //"Question", {q: "Did the receptionist approach the ambassador?"}],
    [["SPRFiller_AP_b79", 79], ds, {s: "Justin consulted Samantha about a project."},
             "Question", {q: "Did Samantha consult Justin?", hasCorrect: "No"}],
    [["SPRFiller_AP_c80", 80], ds, {s: "Brent insulted a typist after a hearing."},
             "Question", {q: "Did the typist insult Brent?", hasCorrect: "No"}],
    //["SPR_FillerAP_d", ds, {s: "An_astronomer forgot_to_include_some_receipts in_an_expenses_claim for_a_conference_he_recently_attended. \n An administrator was called by the astronomer to resolve the problem."},
             //"Question", {q: "Did the administrator call the astronomer?"}],
    [["SPRFiller_81", 81], ds, {s: "Sara selected an understudy for a play."},
             "Question", {q: "Did the understudy select Sara?", hasCorrect: "No"}],
    [["SPRFiller_82", 82], ds, {s: "Rick paid Kelsey for her car."},
             "Question", {q: "Did Kelsey pay Rick?", hasCorrect: "No"}],
    [["SPRFiller_83", 83], ds, {s: "Ben filled a bottle with water."},
             "Question", {q: "Did Ben fill a bathtub with water?", hasCorrect: "No"}],
    //[["SPRFiller_84", 84], ds, {s: "A sculptor procured a shell from the ocean floor to use as the crowning touch."},
             //"Question", {q: "Did the sculptor procure a gem from the hillside?", hasCorrect: "No"}],
    [["SPRFiller_85", 85], ds, {s: "Mary shuffled the deck of cards."},
             "Question", {q: "Did Mary shuffle the chips?", hasCorrect: "No"}],
    [["SPRFiller_86", 86], ds, {s: "Elaine filled a bag with ice."},
             "Question", {q: "Did Elaine fill the bag with water?", hasCorrect: "No"}],
    [["SPRFiller_87", 87], ds, {s: "Juan followed a bridesmaid down the aisle."},
             "Question", {q: "Did Juan follow a guest?", hasCorrect: "No"}],
    [["SPRFiller_88", 88], ds, {s: "Joe stapled a sign to a bulletin board."},
             "Question", {q: "Did Joe staple the sign to a lamp post?", hasCorrect: "No"}],
    [["SPRFiller_89", 89], ds, {s: "Amy helped a patient into a building."},
             "Question", {q: "Did Amy help a doctor?", hasCorrect: "No"}],
    [["SPRFiller_90", 90], ds, {s: "Percy ordered a beer at the bar."},
             "Question", {q: "Did Percy order a coke?", hasCorrect: "No"}],
    [["SPRFiller_91", 91], ds, {s: "Patrick lifted Sara into the air."},
             "Question", {q: "Did Sara lift Patrick?", hasCorrect: "No"}],
    [["SPRFiller_92", 92], ds, {s: "Lisa found a document in the closet."},
             "Question", {q: "Did Lisa find a document in the kitchen?", hasCorrect: "No"}],
    
        
    ["sr", "__SendResults__", { }],
    
    //exit to AJT_B
    ["exit_SPR_A", "Form", {continueMessage: null, html: {include: "exit_SPR_A.html"}}],

];

