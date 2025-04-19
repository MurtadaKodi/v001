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
                <h1>MESOLITHIC PERIOD</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details">
                Humans remained foragers, and Mesolithic industry was
                characterized by the abundance of stone flakes of the Mysterian
                style. The toolkit of this period includes numerous flakes
                showing the road surface, as well as scrapers, drills, thick
                pointed tips, serrations, and oval bifacial tools. Among the
                archaeological sites representing the Mesolithic era are:
                Al-Wusail: The Al-Wusail site is located on the eastern coast of
                Qatar, approximately 25 km north of the capital, Doha. A
                settlement dating back to the Mesolithic period was discovered
                there, on the southwestern side of an isolated rocky hillock.
                These ruins are topped by a modern fort. Numerous flakes and
                blades were discovered above the surface, along with a few
                worked tools. The soil is approximately 20 centimeters thick,
                containing numerous remains of worked flint. The tools
                discovered consisted of a single arrowhead consisting of a blade
                and a pointed tip, made by chamfering on one side of the fore
                end. It had a short handle with signs of hammering. Another
                piece of a small, thick blade was broken at both ends, with one
                side trimmed to resemble a scraper or razor. The remaining finds
                consisted of insignificant blades and flakes, along with a large
                quantity of flint fragments. Of course, the presence of these
                stone tools was merely evidence of human settlement at that
                time. Human settlement in this particular location was not a
                coincidence, but rather a result of the topography of the area.
                Being somewhat elevated, it facilitated a clear view of the area
                from a higher range for hunting animals. The slopes also
                provided shelter from winds and weather fluctuations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="accodion-main" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1>ARROWHEADS</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details">
                There are also flat depressions where water collects during
                rain. This creates an opportunity for trees to grow, making the
                area more suitable for hunting. The trees also served as a good
                source for making arrowheads. The Al-Wusail area includes more
                than one site. The Danish mission noted that in 1959, twelve
                sites were identified, extending over a kilometer in length and
                ranging between 150 and 200 meters in width. Ras Uwaynat Ali
                Site: The Ras Uwaynat Ali site is located in the middle of the
                western coast of the Qatar Peninsula, about ten kilometers north
                of the city of Dukhan. It is the only site in Qatar that was
                inhabited as late as the fifth millennium BC, according to the
                results of the missions that excavated the site. The Danish
                mission worked at the site between 1954 and 1964, and during
                that time, it found some stone tools resembling remains from the
                Middle Stone Age. These tools are similar to those found by the
                same mission in Bahrain. In addition, the Umm Taqa site, where
                the Danish mission discovered a large workshop for the
                manufacture of flint tools, was also found, along with many
                imperfectly crafted blades and flakes. Large, triangular
                machetes and hundreds of dagger blades were also found at this
                site.
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
                <h1>العصر الحجري الوسيط </h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details-arabic">
                ظل الإنسان فيه جامعاً للغذاء، وتميزت صناعة العصر الحجري الوسيط،
                بكثرة الرقائق الحجرية ذات النمط المستيري. وتشتمل مجموعة الأدوات
                في هذه المدة على العديد من الرقائق التي تظهر عليها منطقة الطرق،
                بالإضافة إلى توفير المكاشط والمثاقب والأطراف المدببة السميكة
                والمسننات والأدوات البيضاوية الثنائية الوجه. ومن المواقع الأثرية
                التي تمثل لقاها الأثرية، العصر الحجري الوسيط نجد: موقع الوسيل:
                يقع موقع الوسيل على الساحل الشرقي لقطر شمال العاصمة الدوحة
                بحوالي 25 كم، وتم الكشف فيه عن مستوطنة ترجع إلى زمن العصر الحجري
                الوسيط، هناك على الجانب الجنوبي الغربي لأحد المرتفعات الصخرية
                المنعزلة، وهي عبارة عن أطلال تعلوها قلعة حديثة العهد، وتم الكشف
                عن العديد من الرقائق والنصال فوق السطح مع عدد قليل من الأدوات
                المشغولة، حيث يبلغ سمك التربة حوالي عشرين سنتيمتراً توجد بها
                العديد من بقايا الصوان المشغول (حجر الصوان). والأدوات المكتشفة
                عبارة عن رأس سهم واحد يتكون من نصل وطرف مدبب وهو مصنوع بطريقة
                الشطف من جانب واحد من الطرف الأمامي وله مقبض قصير تظهر عليه آثار
                الطرق، إضافة إلى قطعة أخرى من نصل سميك صغير مكسور الطرفين وجانب
                منه مهذب ليصبح مثل طرف مكشط أو محكة والبقية الباقية من اللقى
                عبارة عن نصال ورقائق ليست ذات شأن علاوة على كمية كبيرة من
                الشظايا الناتجة عن تكسير حجر الصوان. وبالطبع لم يكن تواجد هذه
                الأدوات الحجرية إلا دليلاً على الاستيطان البشري في ذلك العصر،
                ولم يكن استيطان الإنسان في هذا المكان بالذات وليد الصدفة إنما
                بالنظر إلى طبوغرافية المكان وكونها مرتفعة عما حولها إلى حد ما
                يسهل رؤية واضحة لمدى أعلى لصيد الحيوانات، كما يمكن للإنسان
                التستر بسفوحها من الرياح وتقلبات الطقس.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="accodion-main" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1>رؤوس السهام </h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details-arabic">
                كما توجد منخفضات مسطحة يتجمع فيها الماء وقت نزول المطر وهنا توجد
                فرصة لنمو الأشجار ويصبح المكان أكثر ملاءمة للصيد، كما تكون
                الأشجار مصدراً جيداً لصناعة رؤوس السهام. وتضم منطقة الوسيل أكثر
                من موقع، حيث تذكر البعثة الدنماركية أنه في عام 1959 تم حصر اثني
                عشر موقعا بامتداد يزيد عن كيلو متر طولاً وبعرض يتراوح بين 150
                و200 متراً موقع رأس عوينات علي: يقع موقع "رأس عوينات علي" في
                منتصف الساحل الغربي من شبه جزيرة قطر إلى الشمال من مدينة دخان
                بنحو عشرة كيلو مترات. وهو المكان الوحيد في قطر الذي كان مسكونًا
                في فترة متأخرة من الألف الخامس قبل الميلاد، حسب ما توصلت إليه
                نتائج البعثات التي قامت بعملية التنقيب في الموقع. وقد عملت في
                الموقع البعثة الدنماركية في الفترة ما بين عامي 1954-1964، عثرت
                خلالها على بعض الادوات الحجرية تشبه مخلفات العصر الحجري الأوسط،
                وهذه الأدوات مشابهة لتلك الادوات التي عثرت عليها نفس البعثة في
                البحرين. إضافة إلى موقع أم طاقة، الذي عثرت فيه البعثة
                الدانماركية على مشغل كبير لصناعة الأدوات الصوانية، ووجد فيه
                الكثير من الأنصال والظران غير الكاملة التصنيع. كما عثر في هذا
                الموقع على سواطير كبيرة الحجم ومثلثة الشكل، ومئات من شفرات
                الظران.
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
