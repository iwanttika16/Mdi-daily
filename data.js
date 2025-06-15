const bulletins = [
  {
    date: "2025-06-16",
    quote: "Education is the most powerful weapon which you can use to change the world.",
    quote_hindi: "शिक्षा सबसे शक्तिशाली हथियार है जिससे आप दुनिया को बदल सकते हैं।",
    quote_sanskrit: "शिक्षा शक्तिमत्ता अस्त्रं येन जगत् परिवर्त्यते।",
    quote_sanskrit_meaning: "शिक्षा एक ऐसा प्रभावशाली हथियार है जिससे हम संसार को बदल सकते हैं।",
    shloka: "विद्यां चाविद्यां च यस्तद्वेदोभयं सह। अविद्यया मृत्युं तीर्त्वा विद्यया अमृतमश्नुते॥",
    shloka_meaning: "जो व्यक्ति विद्या और अविद्या दोनों को साथ जानता है, वह अविद्या से मृत्यु को पार करता है और विद्या से अमरता प्राप्त करता है।",
    kabir_doha: "जिन खोजा तिन पाइयाँ, गहरे पानी पैठ।",
    kabir_meaning: "जो सच्चे मन से खोज करता है, वही असली ज्ञान प्राप्त करता है।",
    gk: [
      "The Indian army was founded on 1st April 1895.",
      "Light travels faster than sound.",
      "The smallest prime number is 2.",
      "Saturn is the second-largest planet in the solar system.",
      "The computer's brain is the CPU."
    ]
  },
  {
    date: "2025-06-17",
    quote: "It always seems impossible until it’s done.",
    quote_hindi: "जब तक कार्य पूर्ण न हो, वह असंभव लगता है।",
    quote_sanskrit: "कार्यं यावत् न सिध्यति, तावत् तद् अशक्यं प्रतीतिः।",
    quote_sanskrit_meaning: "जब तक कार्य पूरा नहीं हो जाता, वह असंभव लगता है।",
    shloka: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते संगोऽस्त्वकर्मणि॥",
    shloka_meaning: "तेरा अधिकार केवल कर्म करने में है, फल में नहीं। इसलिए तू कर्म को फल की इच्छा से न कर और न ही अकर्म में आसक्त हो।",
    kabir_doha: "दुःख में सुमिरन सब करे, सुख में करे न कोय।",
    kabir_meaning: "मनुष्य केवल दुःख में भगवान को याद करता है, सुख में उसे भूल जाता है।",
    gk: [
      "There are 24 hours in a day.",
      "A polygon with four sides is called a quadrilateral.",
      "India is the seventh-largest country in the world by area.",
      "The blood group ‘O’ is called the universal donor.",
      "The Andaman and Nicobar Islands are in the Bay of Bengal."
    ]
  },
  {
    date: "2025-06-18",
    quote: "The roots of education are bitter, but the fruit is sweet.",
    quote_hindi: "शिक्षा की जड़ें कड़वी होती हैं, लेकिन फल मीठा होता है।",
    quote_sanskrit: "शिक्षायाः मूलं तिक्तं, फलं तु मधुरं भवति।",
    quote_sanskrit_meaning: "शिक्षा ग्रहण करना कठिन हो सकता है, परंतु इसका परिणाम सुखद होता है।",
    shloka: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    shloka_meaning: "मनुष्य को स्वयं ही अपने को ऊपर उठाना चाहिए और गिराना नहीं चाहिए, क्योंकि स्वयं ही उसका मित्र होता है और स्वयं ही शत्रु।",
    kabir_doha: "प्रेम न बाड़ी उपजे, प्रेम न हाट बिकाय।",
    kabir_meaning: "प्रेम किसी खेत में नहीं उगता और न ही बाजार में बिकता है, यह दिल से होता है।",
    gk: [
      "Plants absorb carbon dioxide during photosynthesis.",
      "The tallest animal on Earth is the giraffe.",
      "The first Indian woman to win an Olympic medal was Karnam Malleswari.",
      "A lunar eclipse occurs when Earth comes between the Sun and the Moon.",
      "A compass points to the magnetic north."
    ]
  },
  {
    date: "2025-06-19",
    quote: "A person who never made a mistake never tried anything new.",
    quote_hindi: "जिसने कभी गलती नहीं की, उसने कभी कुछ नया प्रयास नहीं किया।",
    quote_sanskrit: "यो दोषं न कृतवान्, सः न कदापि नवं प्रयत्नं कृतवान्।",
    quote_sanskrit_meaning: "जो व्यक्ति गलती नहीं करता, वह नया प्रयास भी नहीं करता।",
    shloka: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।",
    shloka_meaning: "इस संसार में ज्ञान के समान पवित्र कुछ भी नहीं है।",
    kabir_doha: "माटी कहे कुम्हार से, तू क्या रोंदे मोय।",
    kabir_meaning: "मिट्टी कहती है कुम्हार से, तू मुझे क्यों रौंद रहा है? एक दिन तुझी को मुझमें मिल जाना है।",
    gk: [
      "A prism splits white light into 7 colors.",
      "The Hindi alphabet has 52 letters.",
      "An octopus has three hearts.",
      "The Indian Flag was adopted on July 22, 1947.",
      "Red Fort is located in Delhi."
    ]
  },
  {
    date: "2025-06-20",
    quote: "A good education is a foundation for a better future.",
    quote_hindi: "अच्छी शिक्षा एक बेहतर भविष्य की नींव होती है।",
    quote_sanskrit: "शुभा शिक्षा उत्तम भविष्यस्य आधारम्।",
    quote_sanskrit_meaning: "अच्छी शिक्षा भविष्य को उज्ज्वल बनाती है।",
    shloka: "योगस्थः कुरु कर्माणि संगं त्यक्त्वा धनंजय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    shloka_meaning: "हे अर्जुन! योग में स्थित होकर कर्म कर, समत्व को ही योग कहा गया है। सफलता और असफलता में समान रहो।",
    kabir_doha: "साईं इतना दीजिए, जा में कुटुंब समाय।",
    kabir_meaning: "हे ईश्वर! मुझे इतना ही दो जिससे मेरा और मेरे परिवार का जीवन यापन हो जाए।",
    gk: [
      "The Earth is the third planet from the Sun.",
      "The digestive system starts at the mouth.",
      "The largest state in India by area is Rajasthan.",
      "Birds have hollow bones to help them fly.",
      "Rabindranath Tagore was the first Indian to win a Nobel Prize."
    ]
  }
];
bulletins.push(
  {
    date: "2025-06-21",
    quote: "Knowledge is power.",
    quote_hindi: "ज्ञान ही शक्ति है।",
    quote_sanskrit: "ज्ञानं शक्तिः।",
    quote_sanskrit_meaning: "ज्ञान ही सच्ची शक्ति है जो हमें आगे बढ़ने में सहायता करता है।",
    shloka: "तस्मादसक्तः सततं कार्यं कर्म समाचर। असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
    shloka_meaning: "इसलिए तू आसक्ति रहित होकर सदा कर्तव्य कर्म कर, क्योंकि ऐसा करने वाला पुरुष परम पद को प्राप्त करता है।",
    kabir_doha: "पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय।",
    kabir_meaning: "सिर्फ किताबें पढ़ने से कोई ज्ञानी नहीं बनता, ज्ञान तो अनुभव से आता है।",
    gk: [
      "Mahatma Gandhi was born on 2nd October 1869.",
      "Mount Everest is the highest mountain on Earth.",
      "The largest desert in the world is the Sahara.",
      "The primary colors are red, blue, and yellow.",
      "India’s national fruit is the mango."
    ]
  },
  {
    date: "2025-06-22",
    quote: "Discipline is the bridge between goals and accomplishment.",
    quote_hindi: "अनुशासन लक्ष्य और उपलब्धि के बीच का पुल है।",
    quote_sanskrit: "अनुशासनं लक्ष्यसिद्धेः सेतुर्भवति।",
    quote_sanskrit_meaning: "अनुशासन ही वह सेतु है जो हमें लक्ष्य से उपलब्धि की ओर ले जाता है।",
    shloka: "सर्वधर्मान् परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    shloka_meaning: "सभी धर्मों को त्याग कर मेरी शरण में आओ, मैं तुम्हें सभी पापों से मुक्त कर दूंगा, शोक मत करो।",
    kabir_doha: "निंदक नियरे राखिए, आंगन कुटी छवाय।",
    kabir_meaning: "निंदा करने वालों को पास रखो क्योंकि वे हमें हमारी कमियाँ दिखाकर सुधारने में मदद करते हैं।",
    gk: [
      "Taj Mahal is made of white marble.",
      "Penguins cannot fly but are excellent swimmers.",
      "Water boils at 100°C under normal conditions.",
      "The Indian Constitution came into force on 26th January 1950.",
      "Venus is the hottest planet in the solar system."
    ]
  },
  {
    date: "2025-06-23",
    quote: "Be the change that you wish to see in the world.",
    quote_hindi: "वह परिवर्तन बनो जो तुम दुनिया में देखना चाहते हो।",
    quote_sanskrit: "यं परिवर्तनं द्रष्टुं इच्छसि, तं आत्मनि कुरु।",
    quote_sanskrit_meaning: "जो परिवर्तन आप संसार में देखना चाहते हैं, पहले स्वयं में लाएं।",
    shloka: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु। युक्तस्वप्नावबोधस्य योगो भवति दुःखहा॥",
    shloka_meaning: "संतुलित आहार, व्यवहार, कर्म, निद्रा और जागरण से योग दुखों को समाप्त करता है।",
    kabir_doha: "कबीरा खड़ा बाज़ार में, मांगे सबकी खैर।",
    kabir_meaning: "कबीर समाज में खड़े होकर सबके लिए भलाई और मंगल की प्रार्थना करते हैं।",
    gk: [
      "Mars is called the Red Planet.",
      "The Pacific Ocean is the largest ocean.",
      "Bamboo is the fastest-growing plant.",
      "Hindi is the official language of India.",
      "The moon has no light of its own; it reflects sunlight."
    ]
  },
  {
    date: "2025-06-24",
    quote: "Hard work beats talent when talent doesn't work hard.",
    quote_hindi: "जब प्रतिभा मेहनत नहीं करती, तो मेहनत प्रतिभा को मात देती है।",
    quote_sanskrit: "परिश्रमः प्रतिभायाः जयती यदि सा न प्रयत्नं करोति।",
    quote_sanskrit_meaning: "यदि प्रतिभा प्रयास न करे, तो मेहनत उसे भी पीछे छोड़ देती है।",
    shloka: "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्। कार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः॥",
    shloka_meaning: "कोई भी व्यक्ति क्षण भर भी बिना कर्म किए नहीं रह सकता, प्रकृति से प्राप्त गुण ही उसे कर्म करने को बाध्य करते हैं।",
    kabir_doha: "बड़ा हुआ तो क्या हुआ, जैसे पेड़ खजूर।",
    kabir_meaning: "केवल ऊँचाई का कोई लाभ नहीं, जैसे खजूर का पेड़ ऊँचा होता है लेकिन फल पाना कठिन होता है।",
    gk: [
      "Rupee is the currency of India.",
      "Hockey is the national game of India.",
      "The capital of Australia is Canberra.",
      "Sound travels faster in water than in air.",
      "The Sun is a medium-sized star."
    ]
  },
  {
    date: "2025-06-25",
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    quote_hindi: "सफलता अंतिम नहीं होती, विफलता घातक नहीं होती, चलते रहने का साहस ही मायने रखता है।",
    quote_sanskrit: "सफलतं न अन्तं, विफलतं न मृत्युः; यत्ने स्थितिः एव महत्वं।",
    quote_sanskrit_meaning: "सफलता या विफलता नहीं, निरंतर प्रयास ही सबसे महत्वपूर्ण होता है।",
    shloka: "ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः। तेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम्॥",
    shloka_meaning: "जिनका अज्ञान ज्ञान द्वारा नष्ट हो गया है, उनका ज्ञान सूर्य की भांति सब कुछ प्रकाशित कर देता है।",
    kabir_doha: "काल करे सो आज कर, आज करे सो अब।",
    kabir_meaning: "जो काम कल करना है, उसे आज करो और जो आज करना है, उसे अभी करो – समय का सदुपयोग सबसे ज़रूरी है।",
    gk: [
      "Einstein developed the theory of relativity.",
      "Peacock is the national bird of India.",
      "Photosynthesis produces oxygen as a by-product.",
      "The brain has approximately 86 billion neurons.",
      "The Great Wall of China is visible from space with aid."
    ]
  }
);
bulletins.push(
  {
    date: "2025-06-26",
    quote: "Believe you can and you're halfway there.",
    quote_hindi: "विश्वास करो कि आप कर सकते हो, और आप आधा रास्ता पार कर चुके हो।",
    quote_sanskrit: "यदि त्वं आत्मनं विश्वससि, तदा अर्धमार्गं गतवानसि।",
    quote_sanskrit_meaning: "अगर आप खुद पर विश्वास रखते हैं, तो आप अपने लक्ष्य का आधा सफर तय कर चुके होते हैं।",
    shloka: "अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे। गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः॥",
    shloka_meaning: "तू जिनके लिए शोक नहीं करना चाहिए, उनके लिए शोक करता है और पंडितों जैसी बातें करता है, परंतु ज्ञानी पुरुष न मृतकों के लिए शोक करते हैं न जीवितों के लिए।",
    kabir_doha: "जब मैं था तब हरि नहीं, अब हरि हैं मैं नाहिं।",
    kabir_meaning: "जब अहंकार था तब ईश्वर नहीं थे, अब जब ईश्वर हैं, तब मैं नहीं हूँ – दोनों एक साथ नहीं रह सकते।",
    gk: [
      "The ozone layer protects Earth from UV rays.",
      "The deepest part of the ocean is the Mariana Trench.",
      "The human heart has four chambers.",
      "The Indian national calendar is called the Saka Calendar.",
      "Kohima is the capital of Nagaland."
    ]
  },
  {
    date: "2025-06-27",
    quote: "In learning you will teach, and in teaching you will learn.",
    quote_hindi: "सीखते हुए आप सिखाते हैं, और सिखाते हुए आप सीखते हैं।",
    quote_sanskrit: "शिक्षायाम् त्वं पाठयसि, पाठने त्वं शिक्षसे।",
    quote_sanskrit_meaning: "शिक्षा देते समय भी मनुष्य बहुत कुछ नया सीखता है।",
    shloka: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते। क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप॥",
    shloka_meaning: "हे अर्जुन! यह कायरता तुम पर शोभा नहीं देती, हृदय की दुर्बलता को त्यागो और युद्ध के लिए खड़े हो जाओ।",
    kabir_doha: "कबीरा खड़ा बाज़ार में, मांगे सबकी खैर।",
    kabir_meaning: "कबीर सभी के कल्याण की कामना करते हैं, चाहे वो अच्छे हों या बुरे।",
    gk: [
      "The retina is the light-sensitive part of the eye.",
      "Mahatma Gandhi was also known as Bapu.",
      "Amazon is the world’s largest rainforest.",
      "The longest river in India is the Ganga.",
      "Shivaji Maharaj was the founder of the Maratha Empire."
    ]
  },
  {
    date: "2025-06-28",
    quote: "Small deeds done are better than great deeds planned.",
    quote_hindi: "छोटे कार्य जो किए जाएँ, वे बड़ी योजनाओं से बेहतर हैं।",
    quote_sanskrit: "कृतं लघु कर्म श्रेष्ठं, योजनां विना कृतेः।",
    quote_sanskrit_meaning: "जो कार्य वास्तव में किया गया हो, वह किसी बड़ी योजना से बेहतर होता है जो कभी पूरी न हो।",
    shloka: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥",
    shloka_meaning: "यह आत्मा न कभी जन्म लेती है और न मरती है, यह नित्य, अजन्मा, शाश्वत और पुरातन है; शरीर नष्ट होने पर भी यह नष्ट नहीं होती।",
    kabir_doha: "धीरे-धीरे रे मना, धीरे सब कुछ होय।",
    kabir_meaning: "धैर्य के साथ कार्य करने से सब कुछ अपने समय पर होता है, जल्दबाज़ी करने से कुछ नहीं मिलता।",
    gk: [
      "The scientific name of humans is Homo sapiens.",
      "Elephants are the largest land animals.",
      "The Indian Parliament has two houses: Lok Sabha and Rajya Sabha.",
      "Uttarakhand is called ‘Devbhumi’.",
      "The process of water cycle involves evaporation, condensation, and precipitation."
    ]
  },
  {
    date: "2025-06-29",
    quote: "Mistakes are proof that you are trying.",
    quote_hindi: "गलतियाँ इस बात का प्रमाण हैं कि आप प्रयास कर रहे हैं।",
    quote_sanskrit: "दोषः प्रयत्नस्य प्रमाणं भवति।",
    quote_sanskrit_meaning: "गलती करना यह दिखाता है कि हम कुछ नया प्रयास कर रहे हैं।",
    shloka: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    shloka_meaning: "हे भारत! जब जब धर्म की हानि और अधर्म का विस्तार होता है, तब-तब मैं स्वयं को प्रकट करता हूँ।",
    kabir_doha: "मन के हारे हार है, मन के जीते जीत।",
    kabir_meaning: "अगर मन से हार मान ली, तो हार निश्चित है। अगर मन से जीत का निश्चय कर लिया, तो जीत संभव है।",
    gk: [
      "Lungs help us breathe by absorbing oxygen.",
      "The ‘Chipko Movement’ started in Uttarakhand.",
      "Sunlight takes 8 minutes to reach Earth.",
      "India’s first satellite is Aryabhata.",
      "The Great Indian Bustard is a critically endangered bird."
    ]
  },
  {
    date: "2025-06-30",
    quote: "The expert in anything was once a beginner.",
    quote_hindi: "जो किसी कार्य में माहिर है, वह भी कभी शुरुआत करने वाला था।",
    quote_sanskrit: "कश्चन निपुणः आरम्भे आरभ्यते।",
    quote_sanskrit_meaning: "हर विशेषज्ञ कभी शून्य से शुरू करता है।",
    shloka: "व्यासप्रसादाच्छ्रुतवानेतद्गुह्यमहं परम्। योगं योगेश्वरात्कृष्णात्साक्षात्कथयतः स्वयम्॥",
    shloka_meaning: "व्यास जी की कृपा से मैंने इस परम रहस्य को स्वयं योगेश्वर श्रीकृष्ण से सुना।",
    kabir_doha: "गुरु गोविंद दोऊ खड़े, काके लागूँ पाय।",
    kabir_meaning: "गुरु और भगवान दोनों सामने खड़े हैं, पहले गुरु के चरणों में प्रणाम करना चाहिए क्योंकि गुरु ने ही भगवान से मिलाया।",
    gk: [
      "Delhi is the capital of India.",
      "A triangle has 3 sides and 3 angles.",
      "Water is made up of hydrogen and oxygen (H₂O).",
      "Kargil Vijay Diwas is observed on 26th July.",
      "India is known as the land of festivals."
    ]
  }
);
bulletins.push(
  {
    date: "2025-07-01",
    quote: "Your limitation—it’s only your imagination.",
    quote_hindi: "आपकी सीमा केवल आपकी कल्पना है।",
    quote_sanskrit: "तव सीमा तव कल्पनया एव।",
    quote_sanskrit_meaning: "हमारी सीमाएँ हमारे मन की कल्पनाओं से उत्पन्न होती हैं।",
    shloka: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    shloka_meaning: "तेरा कर्म करने में ही अधिकार है, उसके फलों में कभी नहीं। इसलिए तू कर्म को फल की अपेक्षा से मत कर और न ही अकर्म में आसक्त हो।",
    kabir_doha: "साईं इतना दीजिए, जा मे कुटुम समाय।",
    kabir_meaning: "हे प्रभु! मुझे इतना दो कि मेरा परिवार सुखपूर्वक जीवन यापन कर सके।",
    gk: [
      "Mango is the national fruit of India.",
      "India is the 7th largest country by area.",
      "Mahatma Gandhi is called the Father of the Nation.",
      "Light travels faster than sound.",
      "Lal Bahadur Shastri coined the slogan ‘Jai Jawan Jai Kisan’."
    ]
  },
  {
    date: "2025-07-02",
    quote: "Push yourself, because no one else is going to do it for you.",
    quote_hindi: "खुद को आगे बढ़ाओ, क्योंकि कोई और नहीं करेगा।",
    quote_sanskrit: "स्वं प्रयत्नं कुरु, अन्यः न त्वां प्रेरयिष्यति।",
    quote_sanskrit_meaning: "प्रयास स्वयं से ही करना होता है, दूसरों पर निर्भर नहीं रहना चाहिए।",
    shloka: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    shloka_meaning: "मनुष्य को चाहिए कि वह स्वयं अपने को ऊपर उठाए, स्वयं को नीचा न गिराए, क्योंकि आत्मा ही उसका मित्र है और आत्मा ही उसका शत्रु।",
    kabir_doha: "दुख में सुमिरन सब करें, सुख में करे न कोय।",
    kabir_meaning: "सभी लोग दुख में भगवान को याद करते हैं, पर सुख में कोई नहीं करता।",
    gk: [
      "Chlorophyll gives plants their green color.",
      "Mitosis is the process of cell division.",
      "Sun rises in the east and sets in the west.",
      "The largest mammal is the Blue Whale.",
      "Ashoka’s symbol is used in the national emblem of India."
    ]
  },
  {
    date: "2025-07-03",
    quote: "Don’t watch the clock; do what it does. Keep going.",
    quote_hindi: "घड़ी को मत देखो; जैसा वह करती है, वैसे चलते रहो।",
    quote_sanskrit: "घटीं पश्य न; यथा सा गच्छति, तथा त्वम् अपि गच्छ।",
    quote_sanskrit_meaning: "समय देखने के बजाय उस पर काम करो, जैसे घड़ी निरंतर चलती है।",
    shloka: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ। ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि॥",
    shloka_meaning: "सुख-दुख, लाभ-हानि और जय-पराजय को समान समझकर युद्ध कर, इससे तू पाप को नहीं प्राप्त होगा।",
    kabir_doha: "माला फेरत जुग भया, फिरा न मन का फेर।",
    kabir_meaning: "अगर मन में बदलाव नहीं आया, तो माला फेरना व्यर्थ है।",
    gk: [
      "The Lotus is the national flower of India.",
      "Oxygen is essential for human respiration.",
      "The moon orbits the Earth in about 27.3 days.",
      "The currency of Japan is Yen.",
      "ISRO is India’s space research organization."
    ]
  },
  {
    date: "2025-07-04",
    quote: "Great things never come from comfort zones.",
    quote_hindi: "बड़ी चीजें कभी आराम के दायरे से नहीं आतीं।",
    quote_sanskrit: "महानं किमपि न जायते सुखक्षेत्रात्।",
    quote_sanskrit_meaning: "सफलता और महान कार्य आराम की सीमाओं से बाहर निकल कर ही होते हैं।",
    shloka: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्। स्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
    shloka_meaning: "अपने धर्म का पालन दोषपूर्ण भी श्रेष्ठ है, दूसरे धर्म का पालन भय पैदा करता है।",
    kabir_doha: "बुरा जो देखन मैं चला, बुरा न मिलिया कोय।",
    kabir_meaning: "दूसरों में बुराई खोजने गया था, लेकिन खुद के अंदर ही बुराई मिल गई।",
    gk: [
      "The brain is protected by the skull.",
      "The Indian flag has three colors: saffron, white, and green.",
      "Rajasthan is the largest state in India by area.",
      "Volcanoes are openings in Earth’s crust.",
      "The Milky Way is our galaxy."
    ]
  },
  {
    date: "2025-07-05",
    quote: "Dream it. Wish it. Do it.",
    quote_hindi: "स्वप्न देखो। कामना करो। पूरा करो।",
    quote_sanskrit: "सप्नं पश्य, इच्छां कुरु, तत् क्रियया साधय।",
    quote_sanskrit_meaning: "केवल स्वप्न देखना पर्याप्त नहीं, उसे साकार करने के लिए कार्य भी करना चाहिए।",
    shloka: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते। तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥",
    shloka_meaning: "इस संसार में ज्ञान के समान कोई पवित्र वस्तु नहीं है। जो योग में सिद्ध हो जाता है, वह ज्ञान को अपने आप प्राप्त करता है।",
    kabir_doha: "जिन खोजा तिन पाइयाँ, गहरे पानी पैठ।",
    kabir_meaning: "जो लोग सच में खोज करते हैं, वही गहराई में जाकर असली मोती पाते हैं।",
    gk: [
      "The President of India is the head of the state.",
      "Photosynthesis occurs in leaves.",
      "Red Fort is located in Delhi.",
      "The Andaman Islands are in the Bay of Bengal.",
      "Diamonds are made of carbon."
    ]
  }
);
