// ═══════════════════════════════════════════════════════════════
// استبدل دالة Problem() الموجودة في IQRSite.jsx بهذه
// ═══════════════════════════════════════════════════════════════

function Problem() {
  const cards = [
    {
      icon: "📦",
      title: "فوضى المخزن",
      desc: "طلبيات يدوية، مواد تنفد بدون تحذير، هدر يومي في المواد الغذائية — كل هذا يُكلّفك آلاف الدنانير شهرياً دون أن تشعر.",
      stat: "// يصل الهدر إلى 30% من التكاليف",
    },
    {
      icon: "⏱",
      title: "تأخر الطلبات وغياب آلية الاستقبال",
      desc: "بدون نظام توجيه واضح لاستقبال الطلبات من المنصات والتطبيقات، الطلبات تتأخر وتضيع وتكلفك عملاء حقيقيين كل يوم.",
      stat: "// 6-12 دقيقة ضائعة لكل طلب",
    },
    {
      icon: "📞",
      title: "اتصالات ضائعة بلا إحصاء",
      desc: "لا تعرف كم اتصال وصل ولم يُرد عليه، ولا كم تحوّل لطلب فعلي. غياب آلية استقبال الاتصالات يعني خسارة صامتة متراكمة.",
      stat: "// حتى 40% من الاتصالات تضيع",
    },
    {
      icon: "🤝",
      title: "تجربة عملاء بدون هوية (CRM)",
      desc: "لا تعرف زبائنك المميزين، لا تتابع شكاواهم، ولا تملك بيانات تساعدك على استعادتهم أو الاحتفاظ بهم — المنافس الأذكى يفعل ذلك.",
      stat: "// 5x تكلفة جذب زبون جديد",
    },
    {
      icon: "👥",
      title: "إدارة بدون بيانات",
      desc: "قرارات تُتخذ بالحدس لا بالأرقام — من يعمل في أي وردية، متى الذروة، أي صنف يخسرك ولا تعرف.",
      stat: "// 40% من القرارات خاطئة",
    },
    {
      icon: "📉",
      title: "أرباح أقل مما تستحق",
      desc: "مطعمك يعمل لكنه لا يُحقق إمكاناته الكاملة. بدون خطة عمليات واضحة، الأرباح تسرب في كل اتجاه.",
      stat: "// 20-35% ربح ضائع قابل للاسترداد",
    },
  ];
  const [ref, visible] = useVisible(0.1);

  return (
    <section
      id="problem"
      ref={ref}
      style={{
        padding: "160px 48px",
        maxWidth: 1400,
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
        direction: "rtl",
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: ".4em",
          color: "var(--blue-accent)",
          textTransform: "uppercase",
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontFamily: "Cairo",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateX(20px)",
          transition: "all .7s ease",
        }}
      >
        <span style={{ width: 30, height: 1, background: "var(--blue-accent)" }} />
        التحديات
      </div>
      <h2
        style={{
          fontFamily: "Cairo",
          fontSize: "clamp(36px,5vw,72px)",
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: "-.025em",
          marginBottom: 80,
          color: "var(--text-primary)",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(40px)",
          transition: "all 1s ease .2s",
        }}
      >
        المطاعم تخسر
        <br />
        <em style={{ fontStyle: "normal", color: "var(--blue-accent)" }}>يومياً</em> بدون
        <br />
        <span style={{ color: "rgba(240,244,255,.2)" }}>نظام حقيقي</span>
      </h2>

      {/* 3-column grid for 6 cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
        }}
      >
        {cards.map((c, i) => (
          <Card3D
            key={i}
            style={{
              background: "var(--bg-secondary)",
              padding: "52px 44px",
              position: "relative",
              overflow: "hidden",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(40px)",
              transition: `all .8s ease ${0.3 + (i % 3) * 0.12}s`,
            }}
          >
            <span style={{ fontSize: 36, marginBottom: 24, display: "block" }}>
              {c.icon}
            </span>
            <h3
              style={{
                fontFamily: "Cairo",
                fontSize: 20,
                fontWeight: 900,
                marginBottom: 12,
                color: "rgba(240,244,255,.85)",
              }}
            >
              {c.title}
            </h3>
            <p
              style={{
                fontFamily: "Cairo",
                fontSize: 14,
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: 36,
              }}
            >
              {c.desc}
            </p>
            <span
              style={{
                position: "absolute",
                bottom: 28,
                right: 44,
                fontFamily: "Space Mono",
                fontSize: 11,
                color: "var(--blue-accent)",
                letterSpacing: ".1em",
              }}
            >
              {c.stat}
            </span>
          </Card3D>
        ))}
      </div>
    </section>
  );
}


// ═══════════════════════════════════════════════════════════════
// استبدل دالة Services() الموجودة في IQRSite.jsx بهذه
// ═══════════════════════════════════════════════════════════════

function Services() {
  const [ref, visible] = useVisible(0.1);

  // ── الخدمات مُقسَّمة على 4 محاور رئيسية ──────────────────
  const pillars = [
    {
      pillar: "🧠 العمليات والإدارة",
      color: "#1a4fc4",
      services: [
        {
          n: "01",
          icon: "🔍",
          t: "الاستشارات التشغيلية",
          d: "نزور مطعمك، نحلل كل عملية من الاستقبال للتسليم، ونكشف أين تضيع الأموال والوقت — ثم نضع خارطة طريق واضحة.",
        },
        {
          n: "02",
          icon: "📦",
          t: "نظام المخزون الذكي",
          d: "مراقبة تلقائية لكل مادة خام، تنبيهات قبل النفاد، وطلبيات تلقائية للموردين بدون تدخل يدوي.",
        },
        {
          n: "03",
          icon: "⚙️",
          t: "هندسة العمليات وسير الدلفري",
          d: "نصمم SOP مخصصاً لكل دور في مطعمك — بما فيه آلية كاملة لسير عمل الدلفري من الاستلام حتى التسليم.",
        },
        {
          n: "04",
          icon: "👥",
          t: "نظام HR المتكامل",
          d: "جداول ورديات، نظام بصمات، تقييم أداء، إدارة الرواتب، وبناء فريق يعمل بانضباط بدون تدخل يومي منك.",
        },
        {
          n: "05",
          icon: "💰",
          t: "نظام المالية",
          d: "متابعة تدفق الإيرادات والتكاليف، تقارير أرباح حسب الأصناف، وإدارة البيانات المالية الخاصة بمطعمك.",
        },
        {
          n: "06",
          icon: "🎓",
          t: "منصة تدريب الموظفين",
          d: "محتوى تدريبي مخصص لكل دور، متابعة التقدم، واختبارات تضمن أن فريقك يشتغل على المستوى المطلوب.",
        },
        {
          n: "07",
          icon: "🏢",
          t: "نظام الفرانشايز",
          d: "بناء منظومة عمليات قابلة للتكرار والتوسع — من الوثائق القانونية حتى دليل التشغيل الكامل لكل فرع.",
        },
      ],
    },
    {
      pillar: "📞 الكول سنتر وتجربة العملاء",
      color: "#00c3ff",
      services: [
        {
          n: "08",
          icon: "📞",
          t: "بناء آلية الكول سنتر",
          d: "نصمم منظومة استقبال الاتصالات: توزيع المكالمات، جرد الإيصالات الموفقة والاتصالات الضائعة، وتحقيق أعلى تحويل ممكن لطلبات فعلية.",
        },
        {
          n: "09",
          icon: "🤝",
          t: "نظام CRM وتجربة العملاء",
          d: "بناء قاعدة بيانات زبائن حية، تتبع التفضيلات والشكاوى، وآليات استعادة الزبائن وتحويلهم لعملاء دائمين.",
        },
        {
          n: "10",
          icon: "🔔",
          t: "آلية حل الشكاوي",
          d: "نظام استقبال ومتابعة وإغلاق الشكاوى بشكل منظم — بما يضمن رضا الزبون وتحويل كل شكوى لفرصة ولاء.",
        },
        {
          n: "11",
          icon: "🚀",
          t: "آلية استقبال الطلبات من المنصات",
          d: "توحيد وتوزيع الطلبات من كل تطبيقات التوصيل على مطبخك بشكل منظم، مع إمكانية إنشاء تطبيق خاص بمطعمك.",
        },
      ],
    },
    {
      pillar: "🍽️ القائمة والهوية الرقمية",
      color: "#ffd60a",
      services: [
        {
          n: "12",
          icon: "📱",
          t: "إعداد المنيو الإلكتروني",
          d: "تصميم قائمة إلكترونية تفاعلية بصور احترافية وأسعار محدّثة، مربوطة بجميع قنوات مطعمك.",
        },
        {
          n: "13",
          icon: "📄",
          t: "تخطيط وتصميم المنيو الورقي",
          d: "تصميم قائمة ورقية بهوية بصرية متكاملة تعكس شخصية مطعمك وتُحفّز على الشراء.",
        },
        {
          n: "14",
          icon: "🌐",
          t: "صفحة شاملة لكل منصات المطعم",
          d: "رابط واحد يضم كل قنوات التواصل والتوصيل والتواصل — يمكن مشاركته بسهولة مع الزبائن.",
        },
        {
          n: "15",
          icon: "💻",
          t: "الصفحات الإلكترونية والهوية البصرية",
          d: "بناء موقع أو صفحة إلكترونية خاصة بمطعمك مع هوية بصرية متكاملة تميّزك على وسائل التواصل.",
        },
      ],
    },
    {
      pillar: "📣 التسويق والنمو",
      color: "#00ff88",
      services: [
        {
          n: "16",
          icon: "📊",
          t: "لوحة التحكم والتقارير",
          d: "داشبورد مباشر من هاتفك: تقارير يومية وأسبوعية وشهرية، وتقارير أرباح مفصّلة حسب الأصناف والفترات.",
        },
        {
          n: "17",
          icon: "📣",
          t: "الحملات الترويجية",
          d: "تخطيط وتنفيذ حملات موسمية وعروض ترويجية مخصصة تناسب جمهور مطعمك وتحقق عائداً حقيقياً.",
        },
        {
          n: "18",
          icon: "🤳",
          t: "ربط المطاعم بالمؤثرين",
          d: "نختار المؤثرين المناسبين لجمهورك ونُدير التعاون معهم من البداية حتى قياس النتائج.",
        },
        {
          n: "19",
          icon: "📝",
          t: "مدونة إدارة المطاعم",
          d: "محتوى أسبوعي يغطي كل التفاصيل الإدارية والتشغيلية والتسويقية — يبني سمعة مطعمك ويجذب زبائن جدد.",
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: "160px 48px",
        maxWidth: 1400,
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
        direction: "rtl",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "end",
          marginBottom: 80,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: ".4em",
              color: "var(--blue-accent)",
              textTransform: "uppercase",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "Cairo",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateX(20px)",
              transition: "all .7s ease",
            }}
          >
            <span style={{ width: 30, height: 1, background: "var(--blue-accent)" }} />
            الخدمات
          </div>
          <h2
            style={{
              fontFamily: "Cairo",
              fontSize: "clamp(36px,5vw,72px)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-.025em",
              color: "var(--text-primary)",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(40px)",
              transition: "all 1s ease .2s",
            }}
          >
            كل ما يحتاجه
            <br />
            <em style={{ fontStyle: "normal", color: "var(--blue-accent)" }}>مطعمك</em>
          </h2>
        </div>
        <p
          style={{
            fontFamily: "Cairo",
            fontSize: 16,
            color: "var(--text-secondary)",
            lineHeight: 1.9,
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(30px)",
            transition: "all 1s ease .3s",
          }}
        >
          من التشخيص الأولي حتى المتابعة الشهرية — 19 خدمة متكاملة تغطي كل جانب من جوانب مطعمك،
          مصممة خصيصاً للسوق العراقي.
        </p>
      </div>

      {/* Pillars */}
      {pillars.map((pillar, pi) => (
        <div key={pi} style={{ marginBottom: 72 }}>
          {/* Pillar label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 20,
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: `all .7s ease ${0.2 + pi * 0.1}s`,
            }}
          >
            <span
              style={{
                fontFamily: "Cairo",
                fontSize: 16,
                fontWeight: 900,
                color: pillar.color,
              }}
            >
              {pillar.pillar}
            </span>
            <span
              style={{
                flex: 1,
                height: 1,
                background: `linear-gradient(to left, transparent, ${pillar.color}40)`,
              }}
            />
          </div>

          {/* Services grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 3,
            }}
          >
            {pillar.services.map((s, i) => (
              <Card3D
                key={i}
                style={{
                  background: "var(--bg-secondary)",
                  padding: "40px 32px",
                  position: "relative",
                  overflow: "hidden",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(50px)",
                  transition: `all .9s ease ${0.3 + (i % 4) * 0.1}s`,
                  borderTop: `2px solid ${pillar.color}20`,
                }}
              >
                {/* Top accent on hover handled via JS */}
                <div
                  style={{
                    fontFamily: "Space Mono",
                    fontSize: 10,
                    color: `${pillar.color}50`,
                    letterSpacing: ".2em",
                    marginBottom: 20,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: `${pillar.color}15`,
                    border: `1px solid ${pillar.color}30`,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    marginBottom: 20,
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Cairo",
                    fontSize: 18,
                    fontWeight: 900,
                    marginBottom: 10,
                    lineHeight: 1.2,
                    color: "var(--text-primary)",
                  }}
                >
                  {s.t}
                </h3>
                <p
                  style={{
                    fontFamily: "Cairo",
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                  }}
                >
                  {s.d}
                </p>
              </Card3D>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
