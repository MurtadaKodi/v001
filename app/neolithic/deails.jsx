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
                <h1>Neolithic Age</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details">
                This period marked the beginning of human settlement, with the
                development of agriculture. The tools of this era were
                characterized by their fine craftsmanship, varied shapes, and
                were sometimes polished. The manufacturing method used during
                this period was grinding, which differed from that of the
                Paleolithic Age. Among the most prominent tools from this period
                are arrowheads with a flute at the base. Among the most
                important sites where archaeological remains dating back to this
                era have been found are: Jubijib Archaeological Site: Although
                it is considered a relatively small site, the Danish expedition
                was able to collect 1,019 samples from this site in 1964. The
                samples collected include axes, arrowheads, and large and small
                paper-shaped spears, in addition to oval tools made of
                compressed plates and disc-shaped plates resembling scrapers.
                They also included numerous scrapers and knives, some of which
                were large, as well as winged plates and arrowheads with tongues
                and prongs. These tools were also found in small, precise tools,
                awls, and large pockets for these small tools.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="accodion-main" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1>The Danish mission</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details">
                The Danish mission confirmed that the tools and samples found at
                this site surpassed any flint tools in the world in terms of
                craftsmanship. Al-Zarqa Site: Several foreign missions worked at
                this site, including the Danish mission in 1961, the British
                mission in 1973, and the French mission in 1984. Some rare
                pottery pieces were found during these missions. The Al-Zarqa
                site is located in the southeastern corner of the Qatar
                Peninsula, about ten kilometers west of the Mesaieed area, on
                rocky hills overlooking a sabkha, nestled between sand dunes. On
                the surface of one of these rocky elevations were found the
                remains of a two-room house built of soft stones, along with
                some flint fragments and tools. The design of the house, its
                surroundings, and the flint tools found indicate that it dates
                back to the period between the fifth and fourth millennia BC. It
                is most likely part of a village that was later covered by
                accumulated sand, so that its remains cannot currently be
                identified. This discovery is the first evidence of human
                settlement in Qatar during that era. Al Khor Hill Burials: The
                Al Khor Hill Burials are located in the northwest corner of Al
                Khor City, west of the sabkha, on the slope of a small hill. A
                single burial was found there in the form of a longitudinal pit,
                the floor of which was paved with stone chips.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="accodion-main" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1>burnt human bones</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details">
                In one corner of this burial site, an ash mound containing burnt
                human bones was found. The reason for burning the body before
                burial remains a mystery, as this custom was unknown at that
                time. Numerous archaeological missions have visited this site,
                including the Danish mission, which attributed this site to the
                Paleolithic period and stated that it is one of the oldest sites
                found in Qatar. This was based on a study of the surface finds
                found, such as double-faced flint tools, awls, and
                pointed-pointed fragments. A British mission also worked at the
                site in 1973 and replicated the results of the Danish mission. A
                French mission worked at the site in 1976 over two seasons.
                Their excavation results revealed that some of the creek burial
                sites were used to bury more than one person, and that the
                burial directions of the dead in the squatting position were not
                uniform or regular. A study of the organic remains collected by
                the mission from various locations at the site, after
                radiocarbon analysis, revealed that the remains date back to the
                Neolithic period.
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
                <h1>العصر الحجري الحديث</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details-arabic">
                وفيه عرف الإنسان الاستقرار بمعرفته الزراعة، و تميزت أدوات هذا
                العصر بكونها متقنة الصنع، ومتنوعة الأشكال كما تصقل أحيانا،
                وأسلوب الصناعة في هذه الفترة هو طريقة السن(grinding) حيث يختلف
                على طريقة العصر الحجري القديم، ومن أبرز أدوات هذه الفترة رؤوس
                السهام ذات السيلان عند القاعدة. ومن أهم المواقع التي عثر فيها
                على بقايا أثرية تعود إلى هذا العصر، نجد: موقع جبيجب الأثري: على
                الرغم من أنه يعتبر من المواقع الصغيرة نسبيا، إلا أن البعثة
                الدانماركية استطاعت أن تجمع من هذا الموقع 1019 عينة في عام
                1964م. وتشتمل العينات التي تم جمعها فؤوس ورؤوس سهام وحراب ورقية
                الشكل كبيرة وصغيرة الحجم، إضافة الى أدوات بيضاوية من صفائح
                مضغوطة وصفائح على شكل أقراص تشبه مكاشط، بالإضافة إلى مكاشط
                وسكاكين عديدة بعضها كبير وكذلك صفائح ذات أجنحة ورؤوس سهام لها
                ألسنة وسنان وذلك إضافة إلى رؤوس سهام وأدوات صغيرة دقيقة ومخارز
                وجيوب كبيرة لهذه الأدوات الصغيرة.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="accodion-main" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1> البعثة الدانماركية</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details-arabic">
                وأكدت البعثة الدانماركية على أن هذه الأدوات والعينات التي عُثر
                عليها في هذا الموقع تفوق أي أدوات صوانية في العالم من حيث إتقان
                الصنع. موقع الزرقا: عملت به عدد من البعثات الأجنبية مثل البعثة
                الدنماركية عام 1961 والبعثة البريطانية عام 1973 والفرنسية 1984،
                وعثر أثناء عمل هذه البعثات على بعض القطع الفخارية النادرة. ويقع
                موقع الزرقا في الركن الجنوبي الشرقي لشبه جزيرة قطر وذلك غربي
                منطقة مسيعيد بنحو عشرة كيلو مترات فوق التلال الصخرية المشرفة على
                سبخة بين كثبان رملية، وقد وجد على سطح أحد هذه المرتفعات الصخرية
                بقايا منزل مكون من حجرتين بُني بحجارة هشة وعثر على بعض الشظايا
                والأدوات الصوانية. ويدل تصميم المنزل وما حوله والأدوات الصوانية
                التي عثر عليها على أنه يعود الى الفترة الواقعة ما بين الألفين
                الخامس والرابع قبل الميلاد. ويغلب على الظن أنه جزء من قرية غطتها
                الرمال المتراكمة لاحقاً، بحيث لا يمكن حالياً التعرف على بقاياها
                وهذا الاكتشاف هو أول دليل على استقرار الانسان في قطر في ذلك
                العصر. مدافن الخور التلية: تقع مدافن الخور التلية في الجهة
                الشمالية الغربية من مدينة الخور غربي السبخة وعلى سفح تل صغير،
                وقد تم العثور فيها على مدفن منفرد على هيئة حفرة طولية رصفت
                أرضيتها برقائق حجرية.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="accodion-main" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1>عظام بشرية محترقة</h1>
              </AccordionTrigger>
              <AccordionContent className="accodion--details-arabic">
                وفي زاوية من زوايا هذا المدفن عثر على كومة رماد تحتوي على عظام
                بشرية محترقة ولا يزال سر احتراق الجثة قبل دفنها لغزاً اذْ إن هذه
                العادة كانت غير معروفة في هذا العصر. وعملت في هذا الموقع العديد
                من البعثات الأثرية التي زارت قطر منها البعثة الدانمركية ونسبت
                هذا الموقع الى العصر الحجري القديم وقالت إنه من أقدم المواقع
                التي وجدت في قطر، وذلك استنادا إلى دراسة اللقى السطحية التي تم
                العثور عليها كالأدوات الصوانية ذات الوجهين والمخارز والشظايا ذات
                السن المدبب. كما عملت بالموقع بعثة بريطانية عام 1973 وكررت نفس
                نتائج البعثة الدانماركية، أما البعثة الفرنسية فقد عملت بالموقع
                عام 1976 على مدى موسمين، وأظهرت نتائج تنقيباتها أن بعض مدافن
                الخور كانت تستخدم لدفن اكثر من شخص واحد، ولم تكن اتجاهات دفن
                الموتى في وضع القرفصاء موحدة او منتظمة. وثبت من دراسة البقايا
                العضوية التي جمعتها البعثة من أماكن مختلفة من الموقع وبعد
                تحليلها باستخدام الكربون المشع تبين انه يعود الى العصر الحجري
                الحديث.
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
