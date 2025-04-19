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
                <h1>Paleolithic Age</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details">
                Man during the Paleolithic era was a forager and had not yet
                settled down. The crafts of this era included a variety of
                distinctive stone tools, including bifacial tools, various types
                of scrapers, knives, and pointed tips found in many locations.
                Among the archaeological sites containing tools dating back to
                the Paleolithic or Lower Stone Age are: The Asila Archaeological
                Site: Located near Umm Bab, about 5 km west of Al-Kharsaah, the
                site was worked on by Danish and French expeditions. Prehistoric
                human remains were discovered there. A group of stone workshops
                were found there, dedicated to the manufacture of weapons and
                tools, often used for hunting. In addition, numerous flint tools
                and several thousand stone fragments were found. A broken
                residential floor and numerous stone fragments were also found
                in a high area south of Dukhan. Archaeological finds are
                concentrated on the surface, and in the center of the plateau,
                many unworked flint stones were also found.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="accodion-main" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1>Flint Stones</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details">
                Another site near Dukhan contained a large quantity of unworked
                flint stones. There was also a stone-cutting area scattered with
                small blades and fragments. Two sites were also found
                approximately ten kilometers north of Dukhan, near Ras Uwaynat
                Ali. The relatively high rock layers at this site protect the
                open coast from the south, providing an ideal location for a
                camp for fishermen and divers, as is the case in many parts of
                the world. With the exception of some wind-blown dunes, the
                ground at this site does not rise more than two meters above sea
                level at high tide. Between these dunes, we find thousands of
                rock flakes and fragments left over from flint toolmaking
                operations at two sites approximately two hundred meters apart.
                The flint material we found is similar to that found in Bahrain
                and dates back to the same period—the Paleolithic. The flint
                colors range from dark to light brown. A number of flakes and
                fragments were also found, but none were found of blades.
                Perhaps the most common tool found was a type of thick flakes
                with serrated edges, like a saw. We found only one specimen
                resembling an axe in size and construction, but with a single
                edge. We also found the Khor burial mounds, which the Danish
                expedition attributed to the Middle Paleolithic. Flint tools,
                awls, and shards with pointed tips were found there, in addition
                to some cylindrical and transparent blocks and chisels.
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
                <h1>العصر الحجري القديم</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details-arabic">
                كان الإنسان في العصر الحجري القديم جامعاً للغذاء ولم يعرف
                الاستقرار بعد، وتشمل صناعة هذا العصر على مجموعة من الأدوات
                الحجرية المتميزة، منها أدوات ثنائية الوجه، والمكاشط بأنواعها
                المختلفة، والسكاكين والأطراف المدببة التي وجدت في العديد من
                الواقع. ومن المواقع الأثرية التي احتوت على أدوات أثرية تعود إلى
                العصر الحجري القديم، أو الأدنى، نجد: موقع عسيلة الأثري: الذي يقع
                بالقرب من أم باب حوالي 5 كم إلى الغرب من الخرسعة، وعملت به
                البعثة الدنماركية والبعثة الفرنسية، وتم الكشف فيه على آثار إنسان
                ما قبل التاريخ، حيث عثر في الموقع على مجموعة من المشاغل الحجرية
                التي كانت مخصصة لصناعة أسلحة وأدوات كانت تستعمل -في غالب
                الأحيان- في الصيد. إضافة الى العثور على العديد من الأدوات
                الصوانية، وعدة آلاف من الشظايا الحجرية. كما عثر في منطقة مرتفعة
                جنوب دخان على أرضية سكنية مهشمة وعلى كثير من الشظايا الحجرية
                وتتركز اللقى الأثرية على السطح وفي وسط الهضبة كذلك عثر على
                الكثير من أحجار الصوان غير المتقنة الصنع.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="accodion-main" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1>أحجار الصوان</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details-arabic">
                كما عثر في منطقة أخرى بالقرب من دخان أيضا على موقع به كم كبير من
                أحجار الصوان الغير معمولة كما يوجد مكان كان مخصصا لقطع الأحجار
                تنتشر عليه شفرات صغيرة الحجم وبقايا شظايا. كما عثر على موقعين
                يقعان حوالي عشرة كيلو مترات شمال دخان بالقرب من راس عوينات علي،
                ويلاحظ أن طبقات الصخور المرتفعة نسبيا عند ذلك المكان تحمي الساحل
                المفتوح من الجنوب مانحة بذلك موقعا مثاليا لمعسكر صيادي الأسماك
                والغواصين كما هو الحال في أنحاء كثيرة من بلدان العالم. وباستثناء
                بعض الكثبان التي سفتها الرياح فإن سطح الأرض في ذلك الموقع لا
                يرتفع أكثر من مترين عن سطح البحر ساعة المد، وبين تلك الكثبان نجد
                الآلاف من رقائق وجذاذات الصخور المتبقية عن عمليات صناعة الأدوات
                الصوانية في موقعين تفصلهما مسافة مئتي متر تقريبا ومادة الصناعة
                من الصوان التي عثرنا عليها تشبه تلك التي عثر عليها في البحرين
                وترجع إلى نفس الفترة – العصر الحجري القديم - تتراوح ألوان الصوان
                بين البني الغامق والفاتح. كما عثر أيضا على عدد من الرقائق
                والشظايا، أما النصال فلم نجد منها شيئاً، ولعل أكثر ما وجدناه من
                الأدوات نوع من الرقائق السميكة ذات الحواف المسننة كالمنشار، ولم
                نعثر إلا على عينة واحدة تشبه الفأس في حجمها وصياغتها، ولكنها ذات
                حد واحد. كما نجد تلال الخور المدفنية، التي نسبته البعثة
                الدانماركية إلى أواسط العصر الحجري القديم، وتم العثور فيه على
                الأدوات الصوانية، والمخارز والشظايا ذات السن المدبب، بالإضافة
                إلى بعض الكتل الأسطوانية والشفافة والأزامل.
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
