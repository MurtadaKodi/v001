import React from "react";
import "./deails.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Deails = () => {
  return (
    <div className="details">
      <div className="l-section">
        <div>
          <Accordion className="accodion-main" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1>Bronze and Iron Ages</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details">
                Arose after the Late Stone Age, from approximately 3000 to 1200
                BC. During this period, humans learned how to smelt copper and
                mix it with other metals, and developed the manufacture of metal
                weapons. The Iron Age extends to the 12th century BC and is
                characterized by the development of iron-making technology.
                Among the sites representing this era are: Al-Wusail: Located on
                the eastern coast, approximately 25 kilometers north of Doha. In
                the southern corner of the site, on the coast, is the foundation
                of a settlement dating back to the Mesolithic and Neolithic
                periods, extending to the Bronze Age (3rd millennium BC).
                Archaeological finds from the site include a bronze arrowhead
                dating back to 2100 BC. Analysis conducted in Japan on three
                shellfish samples found at Al-Wusail using radiocarbon dating
                indicated that the site dates back to 2100 BC. These age
                estimates were based on calculating the difference from the
                typical beta radiation level. Some researchers believe that
                these results appear reasonable because they do not differ
                significantly from each other, and that the site dates back to
                the Early Bronze Age.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="accodion-main" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1>Bin Ghannam Island</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details">
                Bin Ghannam Island: This island is located at the northern
                entrance to Al Khor City, to the right of the road leading to
                the Al-Dhakira area. The island can be reached on foot during
                low tide. The French mission worked at the site in 1985. Field
                surveys and excavations revealed the presence of circular pits,
                each 150 cm in diameter. Both the floor and walls were covered
                with porphyry stones. Near these pits, other pits with square
                openings, each 20 cm long and approximately 40 cm deep, were
                found, shaped like hearths. Among the finds, the remains of
                jars, pottery vessels, and basins were found, some of which bore
                traces of tar coated to prevent liquids from seeping through.
                The piles of broken seashells found next to these buildings may
                have been related to the dye industry. Other buildings dating
                back to the same period were also discovered not far from these
                sites, possibly representing houses and dwellings dating back to
                the Early Bronze Age. A British excavation mission conducted
                work at the site in 2000 and confirmed the same findings as the
                French.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="m-section">
        <div>
          <Accordion className="accodion-main" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1>العصر البرونزي والحديدي</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details-arabic">
                نشأ بعد فترة العصر الحجري المتأخر بحوالي 3000 وإلى 1200 ق.م وفيه
                عرف الإنسان صهر النحاس وخلطه مع المعادن الأخرى وتطور صناعة
                الأسلحة المعدنية. ويمتد العصر الحديدي إلى القرن الثاني عشر قبل
                الميلاد، ويتميز بتطور تقنية صناعة الحديد. ومن هذه المواقع التي
                تمثل هذه الحقبة الزمنية: موقع الوسيل: ويقع على الساحل الشرقي إلى
                شمال مدينة الدوحة بحوالي 25 كيلو مترًا، وفي الركن الجنوبي للموقع
                على الساحل أساس لمستوطنة تعود إلى الفترة من العصر الحجري الوسيط
                والعصر الحجري الحديث وامتداد إلى العصر البرونزي الالف الثالث
                ق.م، والمكتشفات من الآثار للموقع رأس سهم من البرونز يعود إلى
                2100 ق.م ودلت التحاليل التي أجريت في اليابان على ثلاث عينات من
                المحار الذي عثر عليه في موقع الوسيل باستخدام تقنية الكربون المشع
                على أن تاريخ الموقع يعود الى العام 2100 ق.م كما أن هذه التقديرات
                التي أعطيت لعمر هذه العينات اعتمدت على حساب الاختلاف عن المعدل
                النموذجي لأشعة (بيتا)، ويعتقد بعض الباحثين أن هذه النتائج التي
                تم التوصل إليها تبدو معقولة لأنها لا تختلف كثيراً عن بعضها وأن
                الموقع يرجع إلى العصر البرونزي القديم.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="accodion-main" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1>جزيرة بن غنام</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details-arabic">
                موقع جزيرة بن غنام: تقع هذه الجزيرة عند المدخل الشمالي لمدينة
                الخور على يمين الطريق الموصل الى منطقة الذخيرة، ويمكن الوصول إلى
                الجزيرة سيراً على الأقدام في فترة الجزر. عملت البعثة الفرنسية
                بالمكان في عام 1985، وأسفرت أعمال المسح الميداني والتنقيب عن
                الكشف عن وجود حفر مستديرة يبلغ قطر الواحدة منها 150سم، وكل من
                الأرضية والجدران مغطاة بحجر الفروش، وعثر بالقرب من هذه الحفر على
                حفر أخرى ذات فوهات مربعة يبلغ طول ضلعها 20 سم وبعمق حوالي 40 سم
                وهي على شكل المواقد، أما عن اللقى فقد عثر على بقايا جرار وأواني
                وأحواض فخارية بعضها يحمل بقايا القار الذي طليت به لمنع رشح
                السوائل منها، وقد تكون أكوام الأصداف البحرية المحطمة التي وجدت
                بجانب هذه الأبنية لها علاقة بصناعة الأصباغ. كما تم الكشف عن اثار
                أبنية أخرى تعود لنفس العصر في مكان غير بعيد عن هذه الأماكن، ربما
                كانت تمثل بيوتا ومساكن تعود في مجملها إلى العصر البرونزي القديم.
                وقامت بعثة تنقيب بريطانية بالعمل في المكان عام 2000 وتوصلت الى
                نفس النتائج التي توصل اليها الفرنسيون من قبل وأكدت عليها.
              </AccordionContent>
            </AccordionItem>
          </Accordion>


        </div>
      </div>

      {/* <div className="r-section">
          <iframe className="iframe"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31838.212858211646!2d51.527680000000004!3d25.2510208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sqa!4v1744311938767!5m2!1sar!2sqa"
            width="100%"
            height="100%"
          ></iframe>
        </div> */}
    </div>
  );
};

export default Deails;
